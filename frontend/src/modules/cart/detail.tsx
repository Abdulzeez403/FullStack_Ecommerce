import React, { useEffect } from 'react'
import Cartlist from './cartlists'
import { useCartContext } from './context';
import Cookies from 'universal-cookie';
import { IProduct } from '../Home/models';

export const CartDetailPage = () => {

    const { carts, getCart } = useCartContext();
    const cookies = new Cookies();

    useEffect(() => {
        const userId = cookies.get("userId");
        getCart(userId)
    }, [])
    return (
        <div>
            {Array.isArray(carts) && carts.map((m: IProduct, i: any) => (
                <Cartlist cart={m} key={i} />
            ))}
        </div>
    )
}
