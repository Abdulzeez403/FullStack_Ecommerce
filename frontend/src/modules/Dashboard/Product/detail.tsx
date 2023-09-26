import React, { useEffect, useState } from 'react'
import { CreatePost } from './components/create'
import { DashboardNav } from '../Layout/dashboard'
import ApModal from '@/components/modal/modal'
import ProductTable from './components/Table'
import { useProductContext } from './context'
import { useUserContext } from '@/modules/auth/UserContext'
import Cookies from 'universal-cookie'


export const DetailPage = () => {
  const [modal, setModal] = useState<{
    show: boolean;
    data?: any;
    type?: "Create Product" | "Update Product" | "Cart";
  }>({
    show: false,
    type: "Create Product"
  });

  const { products, GetProduct, deleteProduct } = useProductContext();
  // const { user, CurrentUser } = useUserContext();
  const cookies = new Cookies()

  useEffect(() => {
    const getCookies = cookies.get("userId")
    // CurrentUser(getCookies);
    GetProduct(getCookies)
  }, [])

  const handleModal = () => setModal({
    show: true,
    type: "Create Product"
  });
  const handleDeleteProduct = () => {
    const getCookies = cookies.get("userId")
    deleteProduct(getCookies)

  }



  return (
    <DashboardNav>
      <div>
        <button onClick={handleModal} className='bg-black text-white rounded-md py-2 px-2 '>Create Product</button>
      </div>
      <div>
        <ProductTable product={products} handleModal={handleModal as any} handleDeleteProduct={handleDeleteProduct as any} />

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
