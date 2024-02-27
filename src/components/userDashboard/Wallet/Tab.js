import React from 'react'
import { Link } from "react-router-dom";

const Tab = () => {
    return (
        <div className=' inline-block border-b-2 mb-5 border-gray-200'>
            <div className=" flex flex-row justify-between ">
                <div className=" flex flex-row gap-10">
                    <Link to={"/wallet"} className={` ${window.location.href.includes('wallet') ? "border-b-2 border-[#29A744] text-[#29A744]" : " " } font-bold cursor-pointer text-xl transition-all`}>
                        Balance
                    </Link>
                    <Link to={"/exchange"} className={` ${window.location.href.includes('exchange') ? "border-b-2 border-[#29A744] text-[#29A744]" : " "} font-bold cursor-pointer text-xl transition-all`}>
                        Exchange
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Tab
