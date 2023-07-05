import React from 'react'
import MainCointainer from './MainCointainer';
import Sidebar from './Sidebar';
const Body = () => {
  return (
    <div className="flex">
        <Sidebar/>
        <MainCointainer/>
    </div>
  )
}

export default Body;