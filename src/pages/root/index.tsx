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
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: '32px',
            margin: '16px',
            background: 'rgba(255,255,255,.2)',
            borderRadius: '6px',
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={initiNav(location.pathname)}
          mode="inline"
          items={items}
          onClick={({ key }) => {
            console.log(key);
            navigate(key);
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ padding: '24px' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default RootPage;
