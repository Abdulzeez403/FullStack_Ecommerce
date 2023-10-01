import React from 'react'
import ProductTable from './components/Table'
import { IProduct } from './models';


interface IProps {

  product: IProduct;
  handleModal: () => void;

}

export const DetailPage: React.FC<IProps> = ({ product, handleModal, }) => {
  return (<ProductTable product={product} handleModal={handleModal} />
  )
}
