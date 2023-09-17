import React, { useEffect, useState } from 'react'
import { CreatePost } from './components/create'
import { DashboardNav } from '../Layout/dashboard'
import ApModal from '@/components/modal/modal'
import ProductTable from './components/Table'
import { useProductContext } from './context'
import { useUserContext } from '@/modules/auth/UserContext'


export const DetailPage = () => {
  const [modal, setModal] = useState<{
    show: boolean;
    data?: any;
    type?: "Create Product" | "Update Product" | "Cart";
  }>({
    show: false,
    type: "Create Product"
  });

  const { products, GetProduct } = useProductContext();
  const { user, CurrentUser } = useUserContext();



  useEffect(() => {
    GetProduct(user?._id);
    console.log(user?._id, "UserId..");

  }, [])



  return (
    <DashboardNav>
      <div>
        <button onClick={() => setModal({
          show: true,
          type: "Create Product"
        })} className='bg-black text-white rounded-md py-2 px-2 '>Create Product</button>
      </div>
      <div>
        <ProductTable product={products} />

        {/* <div>
          {products?.map((product: any) => (
            <div key={product.id}>
              <p>{product?.name}</p>
              <p>{product?.price}</p>
            </div>
          ))}

        </div> */}
      </div>



      <ApModal
        // drawer
        title={modal?.type}
        show={modal.show}
        width={500}
        onDimiss={() => setModal({ show: false })}
      >
        <CreatePost />

      </ApModal>
    </DashboardNav >
  )
}
