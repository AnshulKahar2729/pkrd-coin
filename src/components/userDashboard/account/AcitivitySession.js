import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIPInfo } from 'store/actions';

function AcitivitySession() {
  const dispatch = useDispatch();
  const { ip_info } = useSelector(state => state.IPInfoReducer);

  useEffect(() => {
    dispatch(fetchIPInfo(response => {
      if (response.code === 200) {
        console.log(response);
      }
    }))
  }, [])

  return (
    <div>
      <div className=" rounded-md my-5 mx-2 border border-gray-400 bg-white p-4 px-8 overflow-x-scroll">
        <div className=" mb-8">
          <h2 className=" text-[#29A744] text-2xl">
            Activity Sessions
          </h2>
        </div>

        <div>
          {/* HEADER */}
          <div className=" grid grid-cols-5 gap-2 border-b-2 mb-5">
            <div className=" col-span-1">
              <p className=" text-gray-600 sm:text-sm ">SIGNED IN</p>
            </div>
            <div className=" col-span-1">
              <p className=" text-gray-600 sm:text-sm ">BROWSER</p>
            </div>
            <div className=" col-span-3 grid grid-cols-3 gap-[2%]">
              <div className=" col-span-2">
                <p className=" text-gray-600 sm:text-sm ">
                  IP ADDRESS
                </p>
              </div>
              <div className=" col-span-1">
                <p className=" text-gray-600 sm:text-sm ">LOCATION</p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-4">
            {/* content */}
            <div className=" grid grid-cols-5 gap-2">
              <div className=" col-span-1">
                <p className=" text-gray-600 sm:text-sm ">
                  1 day ago
                </p>
              </div>
              <div className=" col-span-1">
                <p className=" text-gray-600 sm:text-sm ">
                  {ip_info?.browser}
                </p>
              </div>
              <div className=" col-span-3 grid grid-cols-3 gap-[2%]">
                <div className=" col-span-2">
                  <p className=" text-gray-600 sm:text-sm  break-words ">
                    {ip_info?.ip_address}</p>
                </div>
                <div className=" col-span-1">
                  <p className=" text-gray-600 sm:text-sm ">
                    {ip_info?.location}
                  </p>
                </div>
              </div>
            </div>
            {/* content */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AcitivitySession