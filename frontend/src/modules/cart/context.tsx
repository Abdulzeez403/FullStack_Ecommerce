import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { ICart } from "./model";

interface IProp {

    loading: boolean,
    cart: any,
    carts: any[],
    addCart: (payload: any) => void,
    getCart: (userId: any) => void

}

const CartContext = createContext<IProp>({
    loading: false,
    cart: {} as any,
    carts: [] || null,
    addCart(payload) {
        return null as any;
    },
    getCart(userId) {
        return null as any;
    }

});

export const useCartContext = () => {
    let context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("app dispatch must be used within app global provider");
    }
    return context;
};

interface IProps {
    children: React.ReactNode;
}

export const CartProvider: React.FC<IProps> = ({ children }) => {
    const [cart, setCart] = useState({} as any);
    const [carts, setCarts] = useState<ICart[]>([]);
    const [loading, setLoading] = useState(false)

    const addCart = async (payload: any) => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/cart`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),

            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setCart(data);
            setLoading(false);
            toast.success("Added to Cart!")
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const getCart = async (UserId: any) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/cart/${UserId}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setCarts(data?.data);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <CartContext.Provider value={{
            loading, cart, carts, addCart, getCart
        }} >
            {children}
        </CartContext.Provider>
    );
};
