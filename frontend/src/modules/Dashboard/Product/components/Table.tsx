import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: string;
    ProductImage: string;
    name: string;
    price: string;
    description: string;
    tags: string[];
}

const columns: ColumnsType<DataType> = [
    {
        title: 'ProductImage',
        dataIndex: 'ProductImage',
        key: 'ProductImage',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Edit</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        ProductImage: "/../public/images/phones.png",
        name: 'John Brown',
        price: "3000",
        description: "This is the descripton of the product",
        tags: ['nice', 'developer'],
    },

];

const ProductTable: React.FC = () => <Table columns={columns} dataSource={data} />;

export default ProductTable;