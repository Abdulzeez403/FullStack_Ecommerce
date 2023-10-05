import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Notification from "@/components/toast/notify";
import { ProductProvder } from "@/modules/Dashboard/Product/context";
import { UserContextProvder } from "@/modules/auth/UserContext";
import { CartProvider } from "@/modules/cart/context";


export default function App({ Component, pageProps }: AppProps) {
  return (

    <UserContextProvder>
      {/* <ProductContextProvder> */}
      <ProductProvder>
        <CartProvider>
          <Component {...pageProps} />
          <Notification />
        </CartProvider>

      </ProductProvder>
      {/* </ProductContextProvder> */}

    </UserContextProvder>
  );
}
