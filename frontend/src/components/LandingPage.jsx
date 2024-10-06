


import React from "react";
import kidImage from "../assets/cover1.jpeg";
import { Link } from "react-router-dom";
import userServices from "../services/userServices";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LandingPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();

    // Get the details from the form
    const email = e.target[0].value;
    const password = e.target[1].value;

    userServices
      .signin(email, password)
      .then((response) => {
        // If the request is successful, log the response
        console.log(response);
        toast.success("Login successful!");

        // send the user to the dashboard
        // navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Login failed! Please check your credentials.");
      });
  };

  return (
    <div
      className="vw-100 d-flex bg-primary align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: `url(${kidImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{ fontSize: "24px" }} className="p-5 fw-bold mb-5">
        <h1>STORY BOX</h1>
        <h2>Let words fly - Write and Share Your Story</h2>
      </div>
      <div
        className="bg-white p-5 m-4 ms-auto mt-5 mb-5"
        style={{
          width: "500px",
          height: "600px",
        }}
      >
        <div className="fw-bold mb-5 fs-1">Login</div>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>

          <button
            style={{
              backgroundColor: "#008080",
              color: "white",
            }}
            className="btn w-100 mb-4 fw-bold"
          >
            LOGIN
          </button>
        </form>

        <a
          style={{ color: "#008080" }}
          className="v-btn v-theme--BLUE_THEME v-btn--density-default v-btn--size-default v-btn--variant-plain pl-0 text-m opacity-1 pl-2 font-weight-medium w-100 d-block"
        >
          Forgot password
        </a>

        <p className="text-sm d-flex align-center mt-4 text-center font-weight-medium justify-center">
          New to STORY BOX?
          <Link to="/register">Register here</Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LandingPage;

