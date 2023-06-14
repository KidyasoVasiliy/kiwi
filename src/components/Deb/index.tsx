import { SmileOutlined } from '@ant-design/icons';
import { Select, Spin } from 'antd';
import type { SelectProps } from 'antd/es/select';
import debounce from 'lodash.debounce';
import React, { useCallback, useMemo, useRef, useState } from 'react';

export interface DebounceSelectProps<ValueType>
  extends Omit<SelectProps<ValueType | ValueType[]>, 'options' | 'children'> {
  fetchOptions: (search?: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}

export function DebounceSelect<
  ValueType extends {
    key?: string;
    label: React.ReactNode;
    value: string | number;
  },
>({
  fetchOptions,
  debounceTimeout = 800,
  ...props
}: DebounceSelectProps<ValueType>) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<ValueType[]>([]);
  const fetchRef = useRef(0);

  const loadOptions = useCallback(
    (value?: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    },
    [fetchOptions],
  );

  const debounceFetcher = useMemo(() => {
    return debounce(loadOptions, debounceTimeout);
  }, [loadOptions, debounceTimeout]);

  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={
        <div style={{ textAlign: 'center' }}>
          {fetching ? (
            <Spin size="small" />
          ) : (
            <p style={{ paddingTop: '10px' }}>Пусто</p>
          )}
        </div>
      }
      {...props}
      options={options}
      onFocus={() => loadOptions()}
    />
  );
}
