"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdWhatsapp } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleusernameChange = (event) => {
    setusername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://api-user-dev.mokletscience.com/api/v1/user/login",
        {
          method: "POST",
          body: JSON.stringify({ username, password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const token = data.data.token;
        localStorage.setItem("token", token);
        window.location.href = "/";
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", true);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  //   localStorage.setItem("isLoggedIn", true);
  //   localStorage.setItem("userData", JSON.stringify(data));
  // };

  return (
    <div className=" w-full flex items-center px-8 sm:px-0 h-screen bg-gray-100">
      <div className="w-full  ">
        <div className="bg-white  items-center  h-fit max-w-md p-8 mx-auto shadow-md rounded-md">
          <div className="flex item-center gap-6 h-14 md:h-28 justify-center mb-4">
            <Image
              width={100}
              height={100}
              src="/Logo-Web.png"
              alt="Logo"
              className="w-fit h-12 mr-2"
            />
            <h2 className="text-xl mt-2 font-normal">Moklet Sport Science</h2>
          </div>
          <div className="w-full">
            <h1 className="w-fit mx-auto border-b-2 border-black text-xl mb-6 -mt-4 ">
              LOGIN
            </h1>
          </div>
          <form className="capitalize" onSubmit={handleFormSubmit}>
            <div className="mb-4 mt-6">
              <label
                htmlFor="username"
                className={`block -mb-5 font-medium ${
                  username ? "transform -translate-y-7 text-sm" : ""
                } transition-all duration-300`}
              >
                username
              </label>
              <input
                type="text"
                placeholder="Username"
                id="username"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                value={username}
                onChange={handleusernameChange}
              />
            </div>
            <div className="mb-4 mt-4">
              <label
                htmlFor="password"
                className={`block -mb-5 ml-1  font-medium ${
                  password ? "transform -translate-y-7 pt-6 text-sm" : ""
                } transition-all duration-300`}
              >
                Password
              </label>
              <div className="w-full flex pr-2 border-2 rounded  ">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border-r-none border rounded focus:border-blue-500 focus:outline-none"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button onClick={toggleShowPassword}>
                  {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </button>
              </div>
            </div>
            {errorMessage && (
              <>
                <p className="text-red-500 text-xs animate-pulse text-end -mt-3 mb-4">
                  username dan password salah{" "}
                </p>
                {/* <div className="right-0 text-end ml-auto w-fit text-xs">
                  <h1>belum punya akun?</h1>
                  <Link target="_blank" href="https://wa.me/+6281296939020">
                    <button className="flex hover:text-green-400 justify-between  gap-x-1 items-center">
                      <p className="text-xl">
                        <MdWhatsapp />
                      </p>
                      <p className="text-medium font-semibold">Hubungi Admin</p>
                    </button>
                  </Link>
                </div> */}
              </>
            )}
            <button
              type="submit"
              className="w-full py-2 px-4 mt-8 text-primary-red border-2 border-primary-red focus:bg-primary-red font-semibold rounded  active:outline-none focus:text-white"
            >
              Log in
            </button>
          </form>
        </div>
        <div className="bg-white border-2  border-blue-500 shadow-md rounded-md flex justify-center mt-4 mx-auto max-w-md ">
          <p className="py-4 flex">
            Belum punya akun?
            <span>
              <Link target="_blank" href="https://wa.me/+6281296939020">
                <button className="flex animate-bounce hover:animate-none hover:border-green-500 border-b-2 hover:text-green-400 justify-between pl-2 gap-x-1 items-center">
                  <p className="text-xl">
                    <MdWhatsapp />
                  </p>
                  <p className="text-medium font-semibold ">Hubungi Admin</p>
                </button>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import Image from "next/image";

// const Login = () => {
//   const [username, setusername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleusernameChange = (event) => {
//     setusername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     // Lakukan validasi atau tindakan lainnya di sini
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 w-full max-w-md shadow-md rounded-md">
//         <div className="flex items-center justify-center mb-4">
//           <Image
//             src="/Logo-Web.png"
//             width={100}
//             height={100}
//             alt="Logo"
//             className="w-10 h-10 mr-2"
//           />
//           <h2 className="text-sm font-medium">Lab Moklet sport science</h2>
//         </div>
//         <h1>LOGIN</h1>
//         <form onSubmit={handleFormSubmit}>
//           <div className="mb-4 mt-10">
//             <label
//               htmlFor="username"
//               className={`block -mb-6 font-medium ${
//                 username ? "transform -translate-y-7 text-sm" : ""
//               } transition-all z-40  duration-300`}
//             >
//               username
//             </label>
//             <input
//               type="username"
//               id="username"
//               placeholder="username"
//               className="w-full px-3 z-0 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               value={username}
//               onChange={handleusernameChange}
//             />
//           </div>
//           <div className="mb-4  mt-10">
//             <label
//               htmlFor="password"
//               className={`block -mb-6 font-medium ${
//                 password ? "transform -translate-y-7 text-sm" : ""
//               } transition-all z-40  duration-300`}
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="password"
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//           >
//             Log in
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
