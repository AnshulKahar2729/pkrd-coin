import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, setShowModal, className }) => {
  return createPortal(
    <>
      <div
        className=" bg-black z-50 h-full w-full top-0 bottom-0 left-0 right-0 fixed opacity-60"
        onClick={() => setShowModal(false)}
      ></div>
      <div className={` absolute ${className} z-[100]`}>{children}</div>
    </>,
    document.getElementById("portalDiv")
  );
};

export default Modal;
