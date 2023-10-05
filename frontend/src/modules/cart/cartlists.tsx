
import React from 'react';
import { Space } from 'antd';
import ApImage from '@/components/images/image';
import { ICart } from './model';

interface IProps {
    cart: ICart;
}


export const Cartlist: React.FC<IProps> = ({ cart }) => {

    const cartLabel = cart?.product?.product;


    return (
        <div>
            <Space className="flex justify-between items-center border-b py-4">
                <Space className="flex gap-4 items-center">
                    <Space className="w-20 h-20">
                        {cart && cartLabel?.images && cartLabel?.images[0] && (
                            <ApImage imgUrl={cartLabel?.images[0].uri}
                                className="w-ful h-full object-contain"
                                alt="cartimage" />
                        )}
                    </Space>
                    <div>
                        <p className="capitalize font-semibold">
                            {cartLabel?.Product_name}
                        </p>
                        <p className="p-gray-600">
                            {cartLabel?.quantity}
                        </p>
                    </div>
                </Space>
                <Space>
                    <p className="p-gray-400">
                        {cartLabel?.price}
                    </p>
                </Space>
            </Space>
        </div>

    );
};

