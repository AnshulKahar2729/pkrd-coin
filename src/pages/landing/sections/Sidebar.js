import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className=' xl:hidden bg-white p-4'>
      <ul className=' flex flex-col gap-10 pt-5'>
        <Link to={"/why-pkrd"} className=' text-3xl text-[#29A744]'>Why PKRD</Link>
        <Link to={"/how-it-works"} className=' text-3xl text-[#29A744]'>How it works</Link>
        <Link to={"/news"} className=' text-3xl text-[#29A744]'>News</Link>
        <Link to={"/about-us"} className=' text-3xl text-[#29A744]'>About us</Link>
        <Link to={"/contact-us"} className=' text-3xl text-[#29A744]'>Contact us</Link>
        <Link to={"/login"} className=' text-3xl text-[#29A744]'>Login</Link>
      </ul>
    </div>
  )
}

export default Sidebar
