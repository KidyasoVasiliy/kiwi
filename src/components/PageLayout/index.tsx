import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Space, Typography, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useTitle } from 'src/shared/lib/browser/dom';

type Props = {
  documentTitle: string;
  pageTitle: string;
  primaryBtnConfig?: {
    text: string;
    onClick: VoidFunction;
  };
  prevBtnConfig?: {
    onClick: VoidFunction;
  };
};

export const PageLayout: React.FC<React.PropsWithChildren<Props>> = ({
  documentTitle,
  pageTitle,
  primaryBtnConfig,
  prevBtnConfig,
  children,
}) => {
  useTitle(documentTitle);

  const {
    token: { colorBgContainer, borderRadius },
  } = theme.useToken();

  return (
    <>
      <Space size="middle" direction="vertical" style={{ width: '100%' }}>
        <Content
          style={{
            borderRadius,
            padding: '22px 24px 22px',
            background: colorBgContainer,
          }}
        >
          {prevBtnConfig && (
            <Button
              type="link"
              onClick={prevBtnConfig?.onClick}
              icon={<ArrowLeftOutlined />}
              style={{ padding: 0 }}
              size="small"
            >
              Назад
            </Button>
          )}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: prevBtnConfig ? 10 : 0,
            }}
          >
            <Typography.Title
              level={4}
              style={{ margin: 0, lineHeight: '32px' }}
            >
              {pageTitle}
            </Typography.Title>
            {primaryBtnConfig && (
              <Button type="primary" onClick={primaryBtnConfig.onClick}>
                {primaryBtnConfig.text}
              </Button>
            )}
          </div>
        </Content>
        <Content
          style={{
            borderRadius,
            padding: 24,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Space>
    </>
  );
};
