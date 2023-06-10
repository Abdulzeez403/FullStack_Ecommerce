import React, { useState } from 'react'
import { CreatePost } from './components/create'
import { DashboardNav } from '../Layout/dashboard'
import ApModal from '@/components/modal/modal'
import ProductTable from './components/Table'

export const DetailPage = () => {
  const [modal, setModal] = useState<{
    show: boolean;
    data?: any;
    type?: "Create Product" | "Update Product" | "Cart";
  }>({
    show: false,
    type: "Create Product"
  });

  return (
    <DashboardNav>
      <div>
        <button onClick={() => setModal({
          show: true,
          type: "Create Product"
        })} className='bg-black text-white rounded-md py-2 px-2 '>Create Product</button>
      </div>
      <div>
        <ProductTable />
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
