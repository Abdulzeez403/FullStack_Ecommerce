import React, { useState } from 'react'
import { Footer } from '../Home/components/footer';
import { Header } from '../Home/components/header';
import { Category } from '../Home/components/category';
import ApModal from '@/components/modal/modal';
import { CartPage } from '../cart/page';


interface IProps {
    children: React.ReactNode;
}

export const MainMenu: React.FC<IProps> = ({ children }) => {
    const [modal, setModal] = useState<{
        show: boolean;
        data?: any;
        type?: "Create Product" | "Update Product" | "Cart";
    }>({
        show: false,
        type: "Cart"
    });

    const cartModal = () => {
        setModal({ show: true, data: null, type: "Cart" })
    }
    return (
        <div>
            <Header cartModal={cartModal} />
            <Category />
            <div className='w-[80%] mx-auto'>
                {children}
            </div>
            <ApModal
                title={modal?.type}
                show={modal.show}
                width={500}
                onDimiss={() => setModal({ show: false })}
            >
                <CartPage />
            </ApModal>
            <Footer />

        </div>

    )
}
