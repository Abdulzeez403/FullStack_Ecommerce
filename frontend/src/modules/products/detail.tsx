import React, { useEffect } from 'react'
import { Product } from '../Home/components/product'
import ProductCard from '@/components/card'
import Link from 'next/link'
import { AiOutlineEye, AiOutlineHeart, AiOutlineLock } from 'react-icons/ai'
import { ProductData } from '../../../data'
import { Collapse, } from 'antd'
import type { CollapseProps } from 'antd';
import { useProductContext } from '../Dashboard/Product/context'



// type items {
//   key: string,
//   label: string,
//   children: React.ReactNode;
// }

// const items: CollapseProps["items"] = [
//   {
//     key: '1',
//     label: 'This is panel header 1',
//     children: <p>HTI</p>,
//   },
//   {
//     key: '2',
//     label: 'This is panel header 2',
//     children: <p>thid</p>,
//   },
//   {
//     key: '3',
//     label: 'This is panel header 3',
//     children: <p>this</p>,
//   },
// ];


export const DetailPage: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };


  const { products, GetProducts } = useProductContext();

  useEffect(() => {
    GetProducts();
  }, [])

  return (
    <div className='w-[80%] mx-auto'>
      <div className='flex justify-center space-x-4 align-items-center '>
        <div className='w-[20%]  bg-white rounded-md border-2 pl-2 '>
          <h4 className='border-b-2 text-md  py-1'>Categories</h4>
          <div>
            {/* <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} /> */}
          </div>
        </div>
        <div className=' flex space-x-4 bg-white   align-items-center'>
          <div className="grid grid-cols-3 gap-12 p-1 ">
            {products?.map((item, index) => (
              <div >
                <div key={index} className="group relative ">
                  <ProductCard
                    img={item?.images[0]?.uri}
                    price={item?.price}
                    oldPrice="2000"
                    name={item?.Product_name}
                    category={item?.categories?.map((c) => c?.value)}
                  />
                  <div className="absolute right-1 top-0 invisible group-hover:visible ">
                    <Link href={`${item?._id}`}>
                      <div className=" p-1 m-2 rounded-md border-[1px] border-gray-200">
                        <AiOutlineEye size={22} color='gray' />
                      </div>
                    </Link>

                    <div className=" p-1 m-2 rounded-md border-[1px] border-gray-200">
                      <AiOutlineHeart size={22} color='gray' />
                    </div>
                    <div className=" p-1 m-2 rounded-md border-[1px] border-gray-200">
                      <AiOutlineLock size={22} color='gray' />

                    </div>

                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
