import UseAuthorization from '@/components/hooks/session';
import DetailPage from '@/modules/Dashboard/Home/detail';
import React from 'react'

const HomePage = () => {
  const [token] = UseAuthorization()

  return (<div>{token ?
    <div>
      <DetailPage />

    </div>
    : null}</div>);
}


export default HomePage