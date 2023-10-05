
import React from 'react';
import { Space } from 'antd';
import ApImage from '@/components/images/image';
import { IProduct } from '../Home/models';

interface IProps {
    cart: IProduct;
}


export const Cartlist: React.FC<IProps> = ({ cart }) => {
    console.log(cart, "cart.........")


    return (
        <div>
            <h4>{cart?._id}</h4>
            {/* <Space className="flex justify-between items-center border-b py-4">
                <Space className="flex gap-4 items-center">
                    <Space className="w-20 h-20">
                        <ApImage
                        src={cart?.product?.product?.images[0]?.uri}
                        alt={cart?.product?.product?.images[0]?.name}
                        className="w-full h-full object-contain"
                    />
                    </Space>
                    <div>
                        <p className="capitalize font-semibold">
                            {cart?._id}
                        </p>
                        <p className="p-gray-600">
                            {cart?.product?.quantity}
                        </p>
                    </div>
                </Space>
                <Space>
                <p className="p-gray-400">
                    {helper.toCurrency(parseFloat(cart?.product?.product?.price))}
                </p>
            </Space>
            </Space> */}
        </div>

    );
};

