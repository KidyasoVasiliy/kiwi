import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQueryClient } from '@tanstack/react-query';
import { Select, Spin } from 'antd';
import type { DefaultOptionType, SelectProps } from 'antd/es/select';
import { useCallback, useRef, useState } from 'react';
import { graphQLClient } from 'src/shared/app';

export interface DebounceSelectProps<T> extends SelectProps {
  selectName: string;
  queryDocument: TypedDocumentNode;
  getOptions: (result: T) => DefaultOptionType[];
}

export function DebounceSelect<T extends object>({
  selectName,
  onChange,
  queryDocument,
  getOptions,
  ...props
}: DebounceSelectProps<T>) {
  const queryClient = useQueryClient();

  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<DefaultOptionType[]>([]);
  const fetchRef = useRef(0);

  const fetchOptions = useCallback(async () => {
    const result: T = await queryClient.ensureQueryData({
      queryKey: [selectName],
      queryFn: async () => graphQLClient.request(queryDocument, {}),
      cacheTime: 300000 * 3, // 15 min
    });

    return getOptions(result);
  }, [getOptions, queryClient, queryDocument, selectName]);

  const loadOptions = useCallback(() => {
    fetchRef.current += 1;
    const fetchId = fetchRef.current;
    setOptions([]);
    setFetching(true);

    fetchOptions().then((newOptions) => {
      if (fetchId !== fetchRef.current) {
        return;
      }

      setOptions(newOptions);
      setFetching(false);
    });
  }, [fetchOptions]);

  return (
    <Select
      {...props}
      allowClear
      labelInValue
      notFoundContent={
        <div style={{ textAlign: 'center' }}>
          {fetching ? (
            <Spin size="small" />
          ) : (
            <p style={{ paddingTop: '10px' }}>Пусто</p>
          )}
        </div>
      }
      onChange={(newValue, newOption) => {
        if (!onChange) return; // typeguard
        if (Array.isArray(newValue)) {
          onChange(
            newValue as DefaultOptionType[],
            newOption as DefaultOptionType[],
          );
        } else {
          onChange(
            newValue as DefaultOptionType,
            newOption as DefaultOptionType,
          );
        }
      }}
      options={options}
      onFocus={() => loadOptions()}
      filterOption={(input, option) => {
        if (typeof option?.label === 'string') {
          return !!option?.label.match(new RegExp(input, 'i'));
        }
        return false;
      }}
    />
  );
}
