import React from 'react';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import ApImage from '@/components/images/image';
import { IProduct } from '../models';

interface IProps {
    product: IProduct[]; // Assuming IProduct is an interface representing your product data
}

const ProductTable: React.FC<IProps> = ({ product }) => {

    const columns: ColumnsType<any> = [
        {
            title: 'ProductImage',
            dataIndex: 'images',
            render: (_: any, record: IProduct) => (
                <div>
                    {record?.images?.length && (
                        <div>
                            <ApImage imgUrl={record?.images[0]?.uri} alt={"image"}
                                width={50} height={50} />
                        </div>
                    )}
                </div>


            ),
        },
        {
            title: 'Product_name',
            dataIndex: 'Product_name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Categories',
            dataIndex: 'categories',
            render: (_: any, record: IProduct) => (
                <h4>{record?.categories?.map((c) => c.value)}</h4>
            ),
        },
        {
            title: 'Description',
            dataIndex: 'description',
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

    return <Table columns={columns} dataSource={product} />;
};

export default ProductTable;
