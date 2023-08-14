import React from 'react'
import { DetailPage } from './detail'
import { MainMenu } from '../layout/home'
import { IProduct } from '../Dashboard/Product/models';

interface IProps {
    productId: IProduct;
}

export const ProductDetail: React.FC<IProps> = ({ productId }) => {
    return (
        <MainMenu>
            <DetailPage productId={productId} />
        </MainMenu>
    )
}
