import React, { useState } from "react";
import { BsWallet } from "react-icons/bs";
import { LuSend } from "react-icons/lu";
import { BeatLoader } from "react-spinners";
import CreateWalletImg from "../../../assets/images/wallet_create_8.gif";
import { useDispatch } from "react-redux";
import { createWallet } from "store/actions";

const CreateWalletModal = ({ setCreateWalletShowModal }) => {
  const dispatch = useDispatch();
  const [walletCreated, setWalletCreated] = useState(false);

  const createwalletFn = () => {
    dispatch(
      createWallet(
        {
          wallet_address:
            "0x" + JSON.parse(localStorage.getItem("authUser"))?.body?._id,
        },
        (response) => {
          if (response.code === 200) {
            console.log(response);
            setWalletCreated(true);
          }
        }
      )
    );
  }

  return (
    <div className="grid grid-cols-1 max-h-[500px] max-w-[450px] min-h-[350px] min-w-[300px] cmlg:min-h-[420px] cmlg:min-w-[350px] md:min-h-[600px] md:min-w-[450px]">
      <div className="w-full bg-[#F7F6F6] text-[#29A744] rounded-t-md py-8 px-4 cmlg:px-8 flex items-center justify-center gap-4">
        <BsWallet />
        <h2 className=" text-2xl flex flex-row items-end gap-2">
          <span>Creating your wallet</span>
          <span className="flex items-end pb-1">
            <BeatLoader color="#29A744" size={6} />
          </span>
        </h2>
      </div>

      <div className="w-full rounded-b-md bg-[#F7F6F6]">
        <img
          src={CreateWalletImg}
          alt="Create Wallet"
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        {walletCreated === false ? <button onClick={createwalletFn}>Create your wallet</button> : <button onClick={() => {
          setCreateWalletShowModal(false)
        }}>Continue</button>}

      </div>
    </div>
  );
};

export default CreateWalletModal;
