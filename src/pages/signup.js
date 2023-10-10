import axios from "axios";
import { useFormik } from "formik";
import Head from "next/head";
import Link from "next/link";
import * as Yup from "yup";
import InputComponent from "@/common/InputComponent";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "@/redux/user/userActions";
import { useEffect } from "react";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confrimPassword: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is Required")
    .min(6, "Name length is Not Valid, Must Contain at Least 6 Charachter"),
  email: Yup.string().required("Email is Required").email("Email is Not Valid"),
  phoneNumber: Yup.string()
    .required("Phone Number is Required")
    .matches(/^[0-9]{11}$/, "Phone Number is Not Valid")
    .nullable(),
  password: Yup.string()
    .required("Password is Required")
    .min(8, "Password Must Contain at Least 8 Charachter"),
  confrimPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Enter Your Password Again")
    .required("Passwords must match"),
});

const onSubmit = () => {
  console.log("submit");
};

const RegisterForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userSignin);
  const { user, loading } = userInfo;

  const onSubmit = (values) => {
    const { name, email, phoneNumber, password } = values;
    dispatch(userSignup({ name, email, phoneNumber, password }));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    if (user) router.push("/");
  }, [user]);

  return (
    <>
      <Head>
        <title>MORENT | Signup</title>
      </Head>
      <div className="md:max-w-md px-4 md:px-4 container mx-auto p-4">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col space-y-4"
        >
          <h1 className="font-bold text-2xl text-primary-500 mb-4">
            Register Form
          </h1>
          <InputComponent label="Name" name="name" formik={formik} />
          <InputComponent label="Email" name="email" formik={formik} />
          <InputComponent
            label="Phone Number"
            name="phoneNumber"
            formik={formik}
          />
          <InputComponent
            label="Password"
            name="password"
            type="password"
            formik={formik}
          />
          <InputComponent
            label="Password"
            name="confrimPassword"
            type="password"
            formik={formik}
          />
          <button
            type="submit"
            disabled={!formik.isValid}
            className="w-full py-2 rounded-lg bg-primary-500 text-white disabled:bg-gray-400"
          >
            Submit
          </button>
          <Link
            href="/signin"
            className="mt-4 py-4 cursor-pointer text-sm text-primary-500"
          >
            Already Got an Account?
          </Link>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
