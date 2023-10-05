import { IProduct } from "../Home/models";

export interface ICart {
  _id: string;
  userId?: string;
  product: ICartProduct;
}

export interface ICartProduct {
  product: IProduct;
  quantity: string;
}
