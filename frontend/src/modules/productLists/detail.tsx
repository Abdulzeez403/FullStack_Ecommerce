import React, { useEffect } from 'react'
import ProductCard from '@/components/card'
import Link from 'next/link'
import { AiOutlineHeart } from 'react-icons/ai'
import { useProductContext } from '../Dashboard/Product/context'
import ApSideMenu from './components/sideMenu'
import { useCartContext } from '../cart/context'
import Cookies from 'universal-cookie'


type items = {
  key: string,
  label: string,
  children: React.ReactNode;
}



export const DetailPage: React.FC = () => {


  const { addCart } = useCartContext();
  const { products, GetProducts } = useProductContext();
  const cookies = new Cookies();
  const userId = cookies.get("userId");

  useEffect(() => {
    GetProducts();
  }, [])


  return (
    <div className=''>
      <div className='flex justify-center space-x-2  align-items-center '>

        <div className=' bg-white rounded-md border-2 pl-2 w-[13rem] '>
          <h4 className='border-b-2 text-md  py-1 font-semibold'>Categories</h4>
          <div>
            <ApSideMenu />
          </div>
        </div>


        <div className=' flex space-x-2 bg-white items-center '>
          <div className="grid grid-cols-4 gap-x-6 p-1 ">
            {products?.map((item, index) => (
              <Link href={`${item?._id}`}>
                <div className="rounded-md " >
                  <div key={item?._id} className="relative ">
                    <ProductCard
                      img={item?.images[0]?.uri}
                      price={item?.price}
                      oldPrice="200"
                      name={item?.Product_name}
                      category={item?.categories?.map((m) => m?.value)}
                      addToCart={() => addCart({
                        product: {
                          _id: item?._id,
                          quantity: item?.quantity,
                        },
                        userId,
                      })}
                    />
                    <div className="absolute left-1 top-0  ">
                      <div className=" m-2 ">
                        <AiOutlineHeart size={22} color='gray' />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
