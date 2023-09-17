import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('Clothes', 'sub1', <MailOutlined />, [
        getItem('T-shirt', '5'),
        getItem('Hoodie', '5'),
        // getItem('Hoodie', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),

    getItem('Accessories', 'sub2', <AppstoreOutlined />, [
        getItem('Phones', '5'),
        getItem('LapTop', '6'),
        getItem('Destop', '6'),
        getItem('Electronic', '6'),

    ]),

    { type: 'divider' },

    getItem('BookStore', 'sub4', <SettingOutlined />, [
        getItem('Rich Dad Poor Dad', '9'),
        getItem('Unlimited Power', '10'),
        getItem('Things fall apart', '11'),
        getItem('The Arrow of gods', '12'),
    ]),

    getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
];

const ApSideMenu: React.FC = () => {
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    return (
        <Menu
            onClick={onClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        />
    );
};

export default ApSideMenu;