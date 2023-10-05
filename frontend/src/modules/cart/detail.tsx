import React, { useEffect } from 'react'
import { useCartContext } from './context';
import Cookies from 'universal-cookie';
import { IProduct } from '../Home/models';
import { Cartlist } from './cartlists';
import { ICart } from './model';

export const CartDetailPage = () => {

    const { carts, getCart } = useCartContext();
    const cookies = new Cookies();

    useEffect(() => {
        const userId = cookies.get("userId");
        getCart(userId)
    }, [])
    console.log(carts, "carts....")
    return (

        <div>
            <div>
                {carts?.map((m: ICart, i: any) => (
                    <Cartlist cart={m} key={i} />
                ))}
            </div>
        </div>

    )
}
