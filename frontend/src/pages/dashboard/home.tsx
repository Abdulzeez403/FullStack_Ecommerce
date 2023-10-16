import UseAuthorization from '@/components/hooks/session';
import DetailPage from '@/modules/Dashboard/Home/detail';
import { DashboardNav } from '@/modules/Dashboard/Layout/dashboard';
import React from 'react'


const HomePage = () => {
  const [token] = UseAuthorization()

  return (
    <DashboardNav >

      <div>{token ?
        <div>
          <DetailPage />

        </div>
        : null}</div>
    </DashboardNav>

  );
}


export default HomePage