import { SettingOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const initiNav = (pathname: string) => {
  if (pathname.startsWith('/deal')) return ['/deal'];
  if (pathname.startsWith('/clients')) return ['/clients'];
  if (pathname.startsWith('/objects')) return ['/objects'];
  if (pathname.startsWith('/staff')) return ['/staff'];
  if (pathname.startsWith('/employees')) return ['/employees'];
  if (pathname.startsWith('/settings')) return ['/settings'];
  if (pathname.startsWith('/dictionaries')) return ['/dictionaries'];

  return undefined;
};

const items: MenuItem[] = [
  getItem('Сделки', '/deal', <TeamOutlined />),
  getItem('Клиенты', 'sub1', <UserOutlined />, [
    getItem('Список клиентов', '/clients'),
    getItem('Список объектов', '/objects'),
  ]),
  getItem('Пользователи', '/staff', <TeamOutlined />),
  getItem('Сотрудники', '/employees', <TeamOutlined />),
  getItem('Настройки', 'sub2', <SettingOutlined />, [
    getItem('Основные', '/settings'),
    getItem('Справочники', '/dictionaries'),
  ]),
];

const RootPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgLayout },
  } = theme.useToken();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#001529', height: 48 }} />
      <Layout hasSider>
        <Sider
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu
            theme="light"
            defaultSelectedKeys={initiNav(location.pathname)}
            mode="inline"
            items={items}
            onClick={({ key }) => {
              navigate(key);
            }}
          />
        </Sider>

        <Content
          style={{
            padding: '0 24px 24px',
            background: colorBgLayout,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default RootPage;
