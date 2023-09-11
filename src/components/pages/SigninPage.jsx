import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  refreshUserData,
  selectUser,
  selectUserError,
  selectUserErrorMessage,
  selectUserStatus,
  signin,
} from "../../slices/user/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { SignupAndSiginInput, SignupAndSigninInputErr } from "../common/input";
import { useEffect } from "react";
import InstagramLogo from "../features/header/InstagramLogo";

const SigninPage = () => {
  const user = useSelector(selectUser);
  const userStatus = useSelector(selectUserStatus);
  const userError = useSelector(selectUserError);
  const userErrorMessage = useSelector(selectUserErrorMessage);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "admin@gmail.com",
      password: "password123",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (signinCredentials) => {
      dispatch(signin(signinCredentials));
    },
  });

  // refresh user data for each signin or signup request
  useEffect(() => {
    dispatch(refreshUserData());
  }, [dispatch]);

  useEffect(() => {
    if (userStatus === "idle") {
      formik.setSubmitting(false);
    }
    if (user.logged) {
      navigate("/");
    }
  }, [userStatus, user, navigate]);

  return (
    <div className="flex h-screen items-center  justify-center ">
      <main className="flex w-full flex-col items-center justify-center gap-4 xs:max-w-sm">
        <section className="flex w-full flex-col items-center px-8 py-4 xs:border xs:border-solid xs:border-gray-400">
          <InstagramLogo className={"mt-8 w-56"} />
          <form onSubmit={formik.handleSubmit} className="mt-8 w-full">
            <div className="flex flex-col">
              <SignupAndSiginInput
                type="text"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Email"
              />
              {formik.touched.email && formik.errors.email && (
                <SignupAndSigninInputErr message={formik.errors.email} />
              )}
            </div>

            <div className="mt-2 flex flex-col">
              <SignupAndSiginInput
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="Password"
              />
              {formik.touched.password && formik.errors.password && (
                <SignupAndSigninInputErr message={formik.errors.password} />
              )}
            </div>

            <button
              className={`mt-4 w-full rounded-xl ${
                formik.isSubmitting ? "bg-blue-200" : "bg-blue-500"
              } py-2 text-center text-white`}
              type="submit"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Submitting..." : "Sign In"}
            </button>
          </form>

          {userError && (
            <p className="mt-2 text-center text-red-500">{userErrorMessage}</p>
          )}
        </section>
        <section className="w-full p-4 xs:border xs:border-solid xs:border-gray-400">
          <p className="text-md text-center">
            {"Don't have an account?"}{" "}
            <Link className="text-blue-500" to={"/signup"}>
              Sign Up
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
};
export default SigninPage;
