import React, { useState } from 'react'
import { CartDetailPage } from './detail'
import { useCartContext } from './context';

export const CartPage = () => {

    const { carts } = useCartContext();
    const subTotal = carts
        ?.map((c) => parseFloat(c?.product?.product?.price))
        ?.reduce((a, b) => a + b, 0);

    return (
        <div>
            <CartDetailPage />
            <div className='flex justify-end '>
                <div>
                    <h4 className='font-semibold text-lg text-center my-3'>N{subTotal}.00</h4>
                    <button className="bg-black text-white py-2 px-3">Place Order </button>
                </div>


            </div>

        </div>

    )
}
