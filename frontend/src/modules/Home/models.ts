export interface IProduct {
  _id: string;
  id: string;
  Product_name?: string;
  images?: IImage[];
  description?: string;
  categories?: ICategory[];
  price?: string;
  color?: string;
  soldout?: boolean;
  quantity: string;
}

interface ICategory {
  value: string;
  label: string;
}
interface IImage {
  uri: any;
  type: string;
  name: string;
}
