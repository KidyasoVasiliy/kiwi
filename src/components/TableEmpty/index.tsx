import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Space, Typography, Button, theme } from 'antd';
import { NavigateOptions, To, useNavigate } from 'react-router-dom';

const { useToken } = theme;

type Props = {
  primaryBtnNavigate: { to: To; options?: NavigateOptions };
  primaryBtnText: string;
};

export const TableEmpty: React.FC<Props> = ({
  primaryBtnText,
  primaryBtnNavigate,
}) => {
  const navigate = useNavigate();
  const { token } = useToken();

  return (
    <Space direction="vertical">
      <ExclamationCircleOutlined
        style={{ fontSize: 32, color: token.colorPrimary }}
      />

      <Typography.Text>Не найдено</Typography.Text>

      <Button
        onClick={() =>
          navigate(primaryBtnNavigate.to, primaryBtnNavigate.options)
        }
        type="primary"
      >
        {primaryBtnText}
      </Button>
    </Space>
  );
};
