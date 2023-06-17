import React from 'react'
import { Product } from '../Home/components/product'
import ProductCard from '@/components/card'
import Link from 'next/link'
import { AiOutlineEye, AiOutlineHeart, AiOutlineLock } from 'react-icons/ai'
import { ProductData } from '../../../data'
import { Collapse, } from 'antd'
import type { CollapseProps } from 'antd';



const text = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps["items"] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];


export const DetailPage: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <div className='w-[80%] mx-auto'>
      <div className='flex justify-center space-x-4 align-items-center '>
        <div className='w-[20%]  bg-white rounded-md border-2 pl-2 '>
          <h4 className='border-b-2 text-md  py-1'>Categories</h4>
          <div>
            <Collapse items={items }  defaultActiveKey={['1']} onChange={onChange} />
          </div>
        </div>
        <div className=' flex space-x-4 bg-white   align-items-center'>
          <div className="grid grid-cols-3 gap-12 p-1 ">
            {ProductData?.map((item, index) => (
              <div >
                <div key={index} className="group relative ">
                  <ProductCard
                    img={item?.img}
                    price={item?.price}
                    oldPrice={item?.oldPrice}
                    name={item?.name}
                    category={item?.category}
                  />
                  <div className="absolute right-1 top-0 invisible group-hover:visible ">
                    <Link href="/productDetail">
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
