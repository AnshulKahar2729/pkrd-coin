import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className=' md:pt-24 w-full h-screen'>
      <div className='  flex flex-col gap-10'>
        <Link to={"/user-dashboard"} className=' text-2xl  border-gray-400 px-8 py-0 cursor-pointer'>User Dashboard</Link>
        <Link to={"/list-pkrd-buy-sell-ad"} className=' text-2xl  border-gray-400 px-8 py-0 cursor-pointer'>Create an Offer</Link>
        <Link to={"/wallet"} className=' text-2xl  border-gray-400 px-8 py-0 cursor-pointer'>Wallet</Link>
        <Link to={"/exchange"} className=' text-2xl  border-gray-400 px-8 py-0 cursor-pointer'>Exchange</Link>
        <Link to={"/buyer"} className=' text-2xl  border-gray-400 px-8 py-0 cursor-pointer'>Buy PKRD</Link>
        <Link to={"/seller"} className=' text-2xl  border-gray-400 px-8 py-0 cursor-pointer'>Sell PKRD</Link>
      </div>
    </div>
  )
}

export default SideBar
