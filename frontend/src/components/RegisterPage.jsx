// import React from "react";
// import kidImage from "../assets/cover1.jpeg";
// import { useNavigate, Link} from "react-router-dom";
// // import userServices from "../services/userServices";


// const RegisterPage = () => {
//  const navigate = useNavigate();



//  const handleRegister = (e) => {
//    e.preventDefault();

//    // get the details from the form
// const name = e.target [0].value
// const email = e.target [1]. value
// const password = e. target [2]. value

//  // send details 
// userServices.signup (name, email, password) 
// •then (response => {
// console. log (response)
// })
// .catch(error => {
// console. log (error)
// })
//  }
 
 


 
//   return (
//     <div
//       className="vw-100 d-flex bg-primary align-items-center justify-content-center vh-100"
//       style={{
//         backgroundImage: `url(${kidImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div style={{ fontSize: "24px" }} className=" p-5 fw-bold mb-5  ">
//         <h1>STORY BOX</h1>
//         <h2>let words fly-Write and Share Your Story</h2>
//       </div>
//       <div
//         className="bg-white p-5 m-4  ms-auto mt-5 mb-5"
//         style={{
//           width: "500px",
//           height: "600px",
//         }}
//       >
//         <div className="fw-bold mb-5 fs-1 ">Register</div>
//         <form onSubmit = {handleRegister} >
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">
//               Name
//             </label>
//             <input
//               type="name"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">
//               Email address
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//             />
//             <div id="emailHelp" className="form-text">
//               We'll never share your email with anyone else.
//             </div>
//           </div>

//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>

//           <div className="mb-3 form-check">
//             <input
//               type="checkbox"
//               className="form-check-input"
//               id="exampleCheck1"
//             />
//             <label className="form-check-label" htmlFor="exampleCheck1">
//               Check me out
//             </label>
//           </div>

//           <button
//             style={{
//               backgroundColor: "#008080",
//               color: "white",
//             }}
//             className="btn  w-100 mb-4 fw-bold"
//             onClick={() => navigate("/landingpage")}
//           >
//             REGISTER
//           </button>
//         </form>

//         <p className="text-sm d-flex align-center mt-4 text-center font-weight-medium justify-center">
//           Already have an account? <Link to="/landingpage">Login</Link>
//         </p>

//         {/* <a
//             style={{ color: "#008080", cursor: "pointer" }}
//             className="v-btn mr-5 v-btn--density-default v-btn--size-default v-btn--variant-plain pl-0  text-sm opacity-1 pl-2 font-weight-medium"
//             onClick={() => navigate("/landingpage")}
//           >
//             Login
//           </a> */}
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;



import React from "react";
import kidImage from "../assets/cover1.jpeg";
import { useNavigate, Link } from "react-router-dom";
// Make sure to import your service
import userServices from "../services/userServices";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Get the details from the form
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

   
    userServices.signup(name, email, password)
      .then((response) => {
        console.log(response);
         toast.success("Login successful!");

       setTimeout(() => {
      navigate("/landingpage");
    }, 2000);  // 2 seconds delay
  })
    
   
      .catch((error) => {
        console.log(error);
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
        <div className="fw-bold mb-5 fs-1">Register</div>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="nameHelp"
            />
          </div>

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
            type="submit"
            style={{
              backgroundColor: "#008080",
              color: "white",
            }}
            className="btn w-100 mb-4 fw-bold"
          >
            REGISTER
          </button>
        </form>

        <p className="text-sm d-flex align-center mt-4 text-center font-weight-medium justify-center">
          Already have an account? <Link to="/landingpage">Login</Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterPage;
