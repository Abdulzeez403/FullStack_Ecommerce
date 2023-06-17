import React from 'react'
import { Footer } from '../Home/components/footer';
import { Header } from '../Home/components/header';
import { Category } from '../Home/components/category';


interface IProps {
    children: React.ReactNode;

}

export const MainMenu: React.FC<IProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <Category />

            {children}

            <Footer />

        </div>
    )
}
