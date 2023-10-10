import axios from "axios";
import { useFormik } from "formik";
import Head from "next/head";
import Link from "next/link";
import * as Yup from "yup";
import InputComponent from "@/common/InputComponent";
import { useDispatch, useSelector } from "react-redux";
import { userSignin } from "@/redux/user/userActions";
import { useEffect } from "react";
import { useRouter } from "next/router";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("Email is Required").email("Email is Not Valid"),
  password: Yup.string()
    .required("Password is Required")
    .min(8, "Password Must Contain at Least 8 Charachter"),
});

const SigninForm = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userSignin);
  const { user } = userInfo;
  const router = useRouter();

  const onSubmit = (values) => {
    dispatch(userSignin(values));
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
        <title>MORENT | Sign-in</title>
      </Head>
      <div className="md:max-w-md px-4 md:px-4 container mx-auto p-4">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col space-y-4"
        >
          <h1 className="font-bold text-2xl text-primary-500 mb-4">
            Register Form
          </h1>
          <InputComponent label="Email" name="email" formik={formik} />
          <InputComponent
            label="Password"
            name="password"
            type="password"
            formik={formik}
          />
          <button
            type="submit"
            disabled={!formik.isValid}
            className="w-full py-2 rounded-lg bg-primary-500 text-white disabled:bg-gray-400"
          >
            Sign-in
          </button>
          <Link
            href="/signup"
            className="mt-4 py-4 cursor-pointer text-sm text-primary-500"
          >
            Not registred yet?
          </Link>
        </form>
      </div>
    </>
  );
};

export default SigninForm;
