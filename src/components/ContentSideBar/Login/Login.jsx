import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [apiError, setApiError] = useState(""); // Sửa lỗi apiError
  const navigate = useNavigate();

  // Schema xác thực bằng Yup
  const loginValidationSchema = Yup.object({
    username: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setApiError(""); // Xóa lỗi trước khi gửi request

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        values,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Login Success:", response.data);

      // Hiển thị thông báo khi đăng nhập thành công
      alert("✅ Login successful! Redirecting...");

      // Lưu thông tin người dùng vào LocalStorage
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Chuyển hướng sang Home sau khi đăng nhập
      navigate("/home");
    } catch (error) {
      console.error("Login Failed:", error.response?.data);

      // Cập nhật state để hiển thị lỗi
      setApiError(error.response?.data?.message || "Incorrect email or password");

      // Hiển thị thông báo lỗi bằng alert
      alert("❌ Login failed: " + (error.response?.data?.message || "Incorrect email or password"));
    }
    setSubmitting(false);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm md:max-w-md bg-white px-6 md:px-8 py-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">InsureState</h2>
        <h3 className="text-lg md:text-xl font-semibold text-center mb-4">
          Login to your account!
        </h3>

        {/* Hiển thị lỗi API nếu có */}
        {apiError && <p className="text-red-500 text-center">{apiError}</p>}

        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <Field
                type="text"
                name="username"
                className="w-full p-3 border rounded text-sm md:text-base"
                placeholder="Email"
              />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />

              <Field
                type="password"
                name="password"
                className="w-full p-3 border rounded text-sm md:text-base"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />

              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Continue"}
              </button>
            </Form>
          )}
        </Formik>

        {/* Social Login */}
        <div className="text-center mt-4">
          <p className="text-sm">Or sign in with:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <FaFacebook className="text-blue-600 cursor-pointer" size={22} />
            <FaGoogle className="text-red-600 cursor-pointer" size={22} />
            <FaApple className="text-black cursor-pointer" size={22} />
          </div>
        </div>

        {/* Signup Link */}
        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
