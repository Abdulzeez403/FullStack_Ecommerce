import { IProduct } from '@/modules/Dashboard/Product/models';
import { ProductDetail } from '@/modules/ProductDetail.tsx/page'
import axios from 'axios';
import React from 'react'

interface IProps {
  data: IProduct;
}

const productDetailPage: React.FC<IProps> = ({ data }) => {
  return (
    <ProductDetail productId={data} />
  )
}

export default productDetailPage;

export const getServerSideProps = async ({
  query,
  req,
}: {
  query: any;
  req: any;
}) => {
  const { _id } = query;

  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_ROUTE}/products/${_id}`);
  const data = res.data;
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
};