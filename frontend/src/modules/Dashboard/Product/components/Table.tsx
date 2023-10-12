import React, { useState } from 'react';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import ApImage from '@/components/images/image';
import { IProduct } from '../models';
import AppConfirm from '@/components/modal/comfirm';
import { useProductContext } from '../context';

interface IProps {
    product: IProduct; // Assuming IProduct is an interface representing your 
    handleModal: () => void;

}

const ProductTable: React.FC<IProps> = ({ product, handleModal, }) => {

    // const columns: ColumnsType<any> = [
    //     {
    //         title: 'ProductImage',
    //         dataIndex: 'images',
    //         render: (_: any, record: IProduct) => (
    //             <div>
    //                 {record?.images?.length && (
    //                     <div>
    //                         <ApImage imgUrl={record?.images[0]?.uri} alt={"image"}
    //                             width={50} height={50} />
    //                     </div>
    //                 )}
    //             </div>


    //         ), 
    //     },
    //     {
    //         title: 'Product_name',
    //         dataIndex: 'Product_name',
    //     },
    //     {
    //         title: 'Price',
    //         dataIndex: 'price',
    //     },
    //     {
    //         title: 'Categories',
    //         dataIndex: 'categories',
    //         render: (_: any, record: IProduct) => (
    //             <h4>{record?.categories?.map((c) => c.value)}</h4>
    //         ),
    //     },
    //     {
    //         title: 'Description',
    //         dataIndex: 'description',
    //     },
    //     {
    //         title: 'Action',
    //         key: 'action',
    //         render: (_, record) => (
    //             <Space size="middle">
    //                 <a onClick={() => handleModal()}>Edit</a>
    //                 <a onClick={() => handleDeleteProduct()}>Delete</a>
    //             </Space>
    //         ),
    //     },
    // ];

    const { deleteProduct } = useProductContext();
    const handleDeleteProduct = () => {
        deleteProduct(product?._id)
        console.log(product?._id)

    }
    return (

        <tr className="border-b ">
            <td>
                {product && product?.images && product?.images[0] && (
                    <ApImage imgUrl={product?.images[0].uri} alt="image" width={50} height={50} />
                )}
            </td>

            <td className="whitespace-nowrap px-6 py-4">{product?.Product_name}</td>
            <td className="whitespace-nowrap px-6 py-4">{product?.price}</td>
            <td className="whitespace-nowrap px-6 py-4">{product?.categories?.map((c) => c?.value)}</td>


            <td className="whitespace-nowrap px-6 py-4 gap-4 flex">
                <button className="py-1 px-3 bg-blue-300 rounded-md text-white" onClick={handleModal}> Edit
                </button>

                <AppConfirm onConfirm={handleDeleteProduct}>
                    <button className="py-1 px-4 bg-red-500 rounded-md text-white"
                    >Delete</button>

                </AppConfirm>
            </td>
        </tr>
    );
};

export default ProductTable;

{/* <Table columns={columns} dataSource={product as any} />; */ }

