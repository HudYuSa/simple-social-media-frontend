import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  refreshUserData,
  selectUser,
  selectUserError,
  selectUserErrorMessage,
  selectUserStatus,
  signup,
} from "../../slices/user/userSlice";
import { SignupAndSiginInput, SignupAndSigninInputErr } from "../common/input";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import InstagramLogo from "../features/header/InstagramLogo";

const SignupPage = () => {
  const user = useSelector(selectUser);
  const userStatus = useSelector(selectUserStatus);
  const userError = useSelector(selectUserError);
  const userErrorMessage = useSelector(selectUserErrorMessage);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "hud yusuf",
      email: "admin@gmail.com",
      password: "password123",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name minimum length is 3")
        .required("Name is required"),
      email: Yup.string().email().required("Email is required"),
      password: Yup.string()
        .min(6, "Password minimum length is 6")
        .required("Password is required"),
    }),
    onSubmit: (signupCredentials) => {
      dispatch(signup(signupCredentials));
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
  }, [userStatus, user]);

  return (
    <div className="flex h-screen items-center  justify-center ">
      <main className="flex w-full flex-col items-center justify-center gap-4 xs:max-w-sm">
        <section className="flex w-full flex-col items-center px-8 py-4 xs:border xs:border-solid xs:border-gray-400">
          <InstagramLogo className={"mt-8 w-56"} />
          <form
            onSubmit={formik.handleSubmit}
            className="mt-8 flex w-full flex-col gap-2"
          >
            <div className="flex flex-col">
              <SignupAndSiginInput
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                placeholder="Name"
              />
              {formik.touched.name && formik.errors.name && (
                <SignupAndSigninInputErr message={formik.errors.name} />
              )}
            </div>

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

            <div className="flex flex-col">
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
              } ${
                formik.isValid ? "cursor-pointer" : "cursor-not-allowed"
              } py-2 text-center text-white`}
              type="submit"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? "Submitting..." : "Sign Up"}
            </button>
          </form>

          {userError && (
            <p className="mt-2 text-center text-red-500">{userErrorMessage}</p>
          )}
        </section>
        <section className="w-full p-4 xs:border xs:border-solid xs:border-gray-400">
          <p className="text-md text-center">
            {"Already have an account?"}{" "}
            <Link className="text-blue-500" to={"/signin"}>
              Sign In
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
};
export default SignupPage;
