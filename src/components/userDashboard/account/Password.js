import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { changePassword } from "store/auth/password/actions";
import * as Yup from "yup";

const Password = () => {
  const dispatch = useDispatch();

  const validation = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string().required("Required"),
      newPassword: Yup.string().required("Required"),
      confirmPassword: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);

      if (values.newPassword !== values.confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      if (values.newPassword === values.currentPassword) {
        toast.error("New password cannot be the same as the old password");
        return;
      }

      if (
        values.newPassword === values.confirmPassword &&
        values.newPassword !== values.currentPassword
      ) {
        dispatch(
          changePassword(
            {
              old_password: values.currentPassword,
              new_password: values.newPassword,
            },
            (response) => {
              if (response.code === 200) {
                validation.resetForm();
              }
            }
          )
        );
      }
    },
  });

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    validation.handleSubmit();
    return false;
  };

  return (
    <div className='my-5'>
                <div className=" rounded-md border border-gray-400 bg-white pt-4 px-8 pb-8">
                  <div className=" mb-8">
                    <h2 className=" text-[#29A744] text-2xl">
                      Change Password
                    </h2>
                  </div>

        <form className=" flex flex-col gap-8" onSubmit={handlePasswordSubmit}>
          <div className=" flex flex-col gap-4 ">
            <label htmlFor="currentPassword">Current Password</label>
            <input
              value={validation.values.currentPassword || ""}
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              invalid={
                validation.touched.currentPassword &&
                validation.errors.currentPassword
                  ? true
                  : false
              }
              type="text"
              name=""
              id="currentPassword"
              className=" outline-none md:w-[50%] rounded-md py-2 px-2 border border-gray-400"
            />
          </div>
          <div className=" flex flex-col gap-4">
            <label htmlFor="newPassword">New Password</label>
            <input
              value={validation.values.newPassword || ""}
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              invalid={
                validation.touched.newPassword && validation.errors.newPassword
                  ? true
                  : false
              }
              type="text"
              name=""
              id="newPassword"
              className=" outline-none md:w-[50%] rounded-md py-2 px-2 border border-gray-400"
            />
          </div>
          <div className=" flex flex-col gap-4">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              value={validation.values.confirmPassword || ""}
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              invalid={
                validation.touched.confirmPassword &&
                validation.errors.confirmPassword
                  ? true
                  : false
              }
              type="text"
              name=""
              id="confirmPassword"
              className=" outline-none md:w-[50%] rounded-md py-2 px-2 border border-gray-400"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-1/5 bg-[#29A744] hover:bg-[#2f8d44] transition-all duration-200 text-white px-4 py-2 rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Password;
