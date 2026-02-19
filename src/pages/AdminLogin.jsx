// // import React, { useState } from "react";
// // import api from "../api/adminApi";
// // import { useNavigate } from "react-router-dom";
// // import { Eye, EyeOff, Lock, User } from "lucide-react";

// // export default function AdminLogin() {
// //   const navigate = useNavigate();
// //   const [userId, setUserId] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);

// //   // const handleLogin = async (e) => {
// //   //   e.preventDefault();
// //   //   setError("");

// //   //   try {
// //   //     const res = await api.login(userId, password);

// //   //     if (res?.token) {
// //   //       // ✅ Save all required data in localStorage
// //   //       localStorage.setItem("adminToken", res.token);
// //   //       localStorage.setItem("role", res.user.role || "admin");
// //   //       localStorage.setItem("isAdmin", res.user.isAdmin ? "true" : "false");
// //   //       localStorage.setItem("authData", JSON.stringify(res.user));

// //   //       // ✅ Redirect to admin dashboard
// //   //       navigate("/admin/dashboard", { replace: true });
// //   //     } else {
// //   //       setError("Invalid response from server");
// //   //     }
// //   //   } catch (err) {
// //   //     setError(err.response?.data?.message || "Login failed");
// //   //   }
// //   // };  

// //   const handleLogin = async (e) => {
// //   e.preventDefault();
// //   setError("");

// //   try {
// //     const res = await api.login(userId, password);

// //     // Check if there's an error in response
// //     if (res.error) {
// //       setError(res.error);
// //       return;
// //     }

// //     if (res?.token) {
// //       // ✅ Save data correctly
// //       localStorage.setItem("adminToken", res.token);
// //       localStorage.setItem("role", "admin");
// //       localStorage.setItem("isAdmin", "true");
// //       localStorage.setItem("authData", JSON.stringify(res.data)); // ← FIXED

// //       // ✅ Redirect to admin dashboard
// //       navigate("/admin/dashboard", { replace: true });
// //     } else {
// //       setError("Invalid response from server");
// //     }
// //   } catch (err) {
// //     setError(err.message || "Login failed");
// //   }
// // };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-600 font-[Poppins]">
// //       <div className="w-full max-w-md bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-white/20 animate-fadeIn">
// //         {/* Title */}
// //         <h2 className="text-4xl font-extrabold text-center text-white drop-shadow-lg mb-6">
// //           🚀 Admin Portal
// //         </h2>
// //         <p className="text-center text-gray-200 mb-8">
// //           Welcome back, please login to continue
// //         </p>

// //         {/* Form */}
// //         <form onSubmit={handleLogin} className="space-y-6">
// //           {/* User ID */}
// //           <div className="relative">
// //             <User className="absolute left-3 top-3 text-gray-400" size={20} />
// //             <input
// //               value={userId}
// //               onChange={(e) => setUserId(e.target.value)}
// //               placeholder="Admin User ID"
// //               className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
// //               required
// //             />
// //           </div>

// //           {/* Password */}
// //           <div className="relative">
// //             <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
// //             <input
// //               type={showPassword ? "text" : "password"}
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               placeholder="Password"
// //               className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
// //               required
// //             />
// //             <button
// //               type="button"
// //               onClick={() => setShowPassword(!showPassword)}
// //               className="absolute right-3 top-3 text-gray-300 hover:text-white"
// //             >
// //               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
// //             </button>
// //           </div>

// //           {/* Error */}
// //           {error && (
// //             <div className="text-red-300 text-sm text-center">{error}</div>
// //           )}

// //           {/* Login Button */}
// //           <button
// //             type="submit"
// //             className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-600 text-white font-bold shadow-lg transform hover:scale-105 transition duration-300"
// //           >
// //             Login
// //           </button>
// //         </form>

// //         {/* Footer */}
// //         <p className="text-center text-gray-300 mt-8 text-sm">
// //           © {new Date().getFullYear()} Your Company • All Rights Reserved
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }



// // import React, { useState } from "react";
// // import api from "../api/adminApi";
// // import { useNavigate } from "react-router-dom";
// // import { User, Eye, EyeOff } from "lucide-react";

// // export default function AdminLogin() {
// //   const navigate = useNavigate();
// //   const [userId, setUserId] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setError("");

// //     try {
// //       const res = await api.login(userId, password);

// //       if (res.error) {
// //         setError(res.error);
// //         return;
// //       }

// //       if (res?.token) {
// //         localStorage.setItem("adminToken", res.token);
// //         localStorage.setItem("role", "admin");
// //         localStorage.setItem("isAdmin", "true");
// //         localStorage.setItem("authData", JSON.stringify(res.data));

// //         navigate("/admin/dashboard", { replace: true });
// //       } else {
// //         setError("Invalid response from server");
// //       }
// //     } catch (err) {
// //       setError(err.message || "Login failed");
// //     }
// //   };

// // //   return (
// // //     <div
// // //       className="relative flex min-h-screen flex-col bg-[#151122] justify-between overflow-x-hidden"
// // //       style={{ fontFamily: "Inter, 'Noto Sans', sans-serif" }}
// // //     >
// // //       <div>
// // //         {/* Banner / Hero */}
// // //         <div className="w-full bg-[#151122] min-h-80 flex justify-center items-center">
// // //           {/* Optional background image */}
// // //         </div>

// // //         {/* Title */}
// // //         <h1 className="text-white text-[22px] font-bold text-center pb-3 pt-5">
// // //           Admin Login
// // //         </h1>

// // //         {/* Form */}
// // //         <form onSubmit={handleLogin}>
// // //           {/* User ID */}
// // //           <div className="flex max-w-[480px] mx-auto items-end gap-4 px-4 py-3">
// // //             <div className="flex w-full items-stretch rounded-lg">
// // //               <input
// // //                 type="text"
// // //                 placeholder="User ID"
// // //                 value={userId}
// // //                 onChange={(e) => setUserId(e.target.value)}
// // //                 className="form-input flex w-full min-w-0 flex-1 rounded-l-lg 
// // //                   text-white border-none bg-[#2c2348] h-14 p-4 pr-2 text-base 
// // //                   placeholder:text-[#a092c9] focus:outline-0 focus:ring-0"
// // //               />
// // //               <div className="text-[#a092c9] flex bg-[#2c2348] items-center justify-center pr-4 rounded-r-lg">
// // //                 <User size={22} />
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Password */}
// // //           <div className="flex max-w-[480px] mx-auto items-end gap-4 px-4 py-3">
// // //             <div className="flex w-full items-stretch rounded-lg">
// // //               <input
// // //                 type={showPassword ? "text" : "password"}
// // //                 placeholder="Password"
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //                 className="form-input flex w-full min-w-0 flex-1 rounded-l-lg 
// // //                   text-white border-none bg-[#2c2348] h-14 p-4 pr-2 text-base 
// // //                   placeholder:text-[#a092c9] focus:outline-0 focus:ring-0"
// // //               />
// // //               <button
// // //                 type="button"
// // //                 onClick={() => setShowPassword(!showPassword)}
// // //                 className="text-[#a092c9] flex bg-[#2c2348] items-center justify-center pr-4 rounded-r-lg"
// // //               >
// // //                 {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
// // //               </button>
// // //             </div>
// // //           </div>

// // //           {/* Error */}
// // //           {error && (
// // //             <p className="text-red-400 text-sm text-center pb-3 pt-1 px-4">
// // //               {error}
// // //             </p>
// // //           )}

// // //           {/* Submit Button */}
// // //           <div className="flex px-4 py-3">
// // //             <button
// // //               type="submit"
// // //               className="flex min-w-[84px] max-w-[480px] mx-auto cursor-pointer 
// // //                 items-center justify-center rounded-lg h-12 px-5 flex-1 
// // //                 bg-[#4913ec] text-white text-base font-bold tracking-[0.015em]"
// // //             >
// // //               Login
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </div>

// // //       {/* Footer */}
// // //       <div>
// // //         <p className="text-[#a092c9] text-sm text-center pb-3 pt-1 px-4">
// // //           © {new Date().getFullYear()} App Name
// // //         </p>
// // //         <div className="h-5 bg-[#151122]"></div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // return (
// // //   <div
// // //     className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#151122] via-[#1c1533] to-[#2c2348] px-4"
// // //     style={{ fontFamily: "Inter, 'Noto Sans', sans-serif" }}
// // //   >
// // //     {/* Card */}
// // //     <div className="w-full max-w-md bg-[#1e1935]/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/10">
// // //       {/* Title */}
// // //       <h1 className="text-white text-2xl font-extrabold text-center mb-6 tracking-tight">
// // //         Admin Login
// // //       </h1>

// // //       {/* Form */}
// // //       <form onSubmit={handleLogin} className="space-y-5">
// // //         {/* User ID */}
// // //         <div className="flex w-full items-stretch rounded-lg overflow-hidden shadow-md">
// // //           <input
// // //             type="text"
// // //             placeholder="User ID"
// // //             value={userId}
// // //             onChange={(e) => setUserId(e.target.value)}
// // //             className="flex-1 bg-[#2c2348] text-white px-4 py-3 text-sm focus:outline-none placeholder:text-[#a092c9]"
// // //           />
// // //           <div className="flex items-center justify-center px-4 bg-[#2c2348] text-[#a092c9]">
// // //             <User size={20} />
// // //           </div>
// // //         </div>

// // //         {/* Password */}
// // //         <div className="flex w-full items-stretch rounded-lg overflow-hidden shadow-md">
// // //           <input
// // //             type={showPassword ? "text" : "password"}
// // //             placeholder="Password"
// // //             value={password}
// // //             onChange={(e) => setPassword(e.target.value)}
// // //             className="flex-1 bg-[#2c2348] text-white px-4 py-3 text-sm focus:outline-none placeholder:text-[#a092c9]"
// // //           />
// // //           <button
// // //             type="button"
// // //             onClick={() => setShowPassword(!showPassword)}
// // //             className="flex items-center justify-center px-4 bg-[#2c2348] text-[#a092c9]"
// // //           >
// // //             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
// // //           </button>
// // //         </div>

// // //         {/* Error */}
// // //         {error && (
// // //           <p className="text-red-400 text-sm text-center">{error}</p>
// // //         )}

// // //         {/* Submit Button */}
// // //         <button
// // //           type="submit"
// // //           className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold tracking-wide shadow-lg hover:opacity-90 transition"
// // //         >
// // //           Login
// // //         </button>
// // //       </form>

// // //       {/* Footer */}
// // //       <p className="text-[#a092c9] text-xs text-center mt-6">
// // //         © {new Date().getFullYear()} App Name
// // //       </p>
// // //     </div>
// // //   </div>
// // // );
// // // }


// // return (
// //   <div
// //     className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-4"
// //     style={{ fontFamily: "Inter, 'Noto Sans', sans-serif" }}
// //   >
// //     {/* Card */}
// //     <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
// //       {/* Title */}
// //       <h1 className="text-white text-3xl font-bold text-center mb-8">
// //         Admin Login
// //       </h1>

// //       {/* Form */}
// //       <form onSubmit={handleLogin} className="space-y-6">
// //         {/* User ID */}
// //         <div className="flex w-full items-stretch rounded-lg overflow-hidden">
// //           <input
// //             type="text"
// //             placeholder="User ID"
// //             value={userId}
// //             onChange={(e) => setUserId(e.target.value)}
// //             className="flex-1 bg-[#1e293b] text-white px-4 py-3 text-sm 
// //                        placeholder:text-gray-400 focus:outline-none"
// //           />
// //           <div className="flex items-center justify-center px-4 bg-[#1e293b] text-gray-400">
// //             <User size={20} />
// //           </div>
// //         </div>

// //         {/* Password */}
// //         <div className="flex w-full items-stretch rounded-lg overflow-hidden">
// //           <input
// //             type={showPassword ? "text" : "password"}
// //             placeholder="Password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             className="flex-1 bg-[#1e293b] text-white px-4 py-3 text-sm 
// //                        placeholder:text-gray-400 focus:outline-none"
// //           />
// //           <button
// //             type="button"
// //             onClick={() => setShowPassword(!showPassword)}
// //             className="flex items-center justify-center px-4 bg-[#1e293b] text-gray-400"
// //           >
// //             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
// //           </button>
// //         </div>

// //         {/* Error */}
// //         {error && (
// //           <p className="text-red-400 text-sm text-center">{error}</p>
// //         )}

// //         {/* Submit Button */}
// //         <button
// //           type="submit"
// //           className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 
// //                      text-white font-semibold tracking-wide shadow-lg 
// //                      hover:from-blue-600 hover:to-cyan-500 transform hover:scale-[1.02] 
// //                      transition-all duration-300"
// //         >
// //           Login
// //         </button>
// //       </form>

// //       {/* Footer */}
// //       <p className="text-gray-400 text-xs text-center mt-6">
// //         © {new Date().getFullYear()} App Name
// //       </p>
// //     </div>
// //   </div>
// // );
// // }



// import React, { useState } from "react";
// import api from "../api/adminApi";
// import { useNavigate } from "react-router-dom";
// import { User, Eye, EyeOff } from "lucide-react";

// export default function AdminLogin() {
//   const navigate = useNavigate();
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await api.login(mobileNumber, password); // ✅ Updated

//       if (res.error) {
//         setError(res.error);
//         return;
//       }

//       if (res?.token) {
//         localStorage.setItem("adminToken", res.token);
//         localStorage.setItem("role", "admin");
//         localStorage.setItem("isAdmin", "true");
//         localStorage.setItem("authData", JSON.stringify(res.data));

//         navigate("/admin/dashboard", { replace: true });
//       } else {
//         setError("Invalid response from server");
//       }
//     } catch (err) {
//       setError(err.message || "Login failed");
//     }
//   };

//   return (
//     <div
//       className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-4"
//       style={{ fontFamily: "Inter, 'Noto Sans', sans-serif" }}
//     >
//       {/* Card */}
//       <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
//         {/* Title */}
//         <h1 className="text-white text-3xl font-bold text-center mb-8">
//           Admin Login
//         </h1>

//         {/* Form */}
//         <form onSubmit={handleLogin} className="space-y-6">
//           {/* Mobile Number */}
//           <div className="flex w-full items-stretch rounded-lg overflow-hidden">
//             <input
//               type="tel"
//               placeholder="Mobile Number"
//               value={mobileNumber}
//               onChange={(e) => setMobileNumber(e.target.value)}
//               className="flex-1 bg-[#1e293b] text-white px-4 py-3 text-sm 
//                          placeholder:text-gray-400 focus:outline-none"
//             />
//             <div className="flex items-center justify-center px-4 bg-[#1e293b] text-gray-400">
//               <User size={20} />
//             </div>
//           </div>

//           {/* Password */}
//           <div className="flex w-full items-stretch rounded-lg overflow-hidden">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="flex-1 bg-[#1e293b] text-white px-4 py-3 text-sm 
//                          placeholder:text-gray-400 focus:outline-none"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="flex items-center justify-center px-4 bg-[#1e293b] text-gray-400"
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>

//           {/* Error */}
//           {error && (
//             <p className="text-red-400 text-sm text-center">{error}</p>
//           )}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 
//                        text-white font-semibold tracking-wide shadow-lg 
//                        hover:from-blue-600 hover:to-cyan-500 transform hover:scale-[1.02] 
//                        transition-all duration-300"
//           >
//             Login
//           </button>
//         </form>

//         {/* Footer */}
//         <p className="text-gray-400 text-xs text-center mt-6">
//           © {new Date().getFullYear()} App Name
//         </p>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import api from "../api/adminApi";
import { useNavigate } from "react-router-dom";
import { User, Eye, EyeOff } from "lucide-react";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.login(mobileNumber, password);

      if (res.error) {
        setError(res.error);
        return;
      }

      if (res?.token) {
        localStorage.setItem("adminToken", res.token);
        localStorage.setItem("role", "admin");
        localStorage.setItem("isAdmin", "true");
        localStorage.setItem("authData", JSON.stringify(res.data));

        navigate("/admin/dashboard", { replace: true });
      } else {
        setError("Invalid response from server");
      }
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center 
                 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-4"
      style={{ fontFamily: "Inter, 'Noto Sans', sans-serif" }}
    >
      {/* Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
        {/* Title */}
        <h1 className="text-white text-3xl font-bold text-center mb-8">
          Admin Login
        </h1>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Mobile Number */}
          <div className="flex w-full items-stretch rounded-lg overflow-hidden">
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="flex-1 bg-[#1e293b] text-white px-4 py-3 text-sm 
                         placeholder:text-gray-400 focus:outline-none"
              required
            />
            <div className="flex items-center justify-center px-4 bg-[#1e293b] text-gray-400">
              <User size={20} />
            </div>
          </div>

          {/* Password */}
          <div className="flex w-full items-stretch rounded-lg overflow-hidden">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 bg-[#1e293b] text-white px-4 py-3 text-sm 
                         placeholder:text-gray-400 focus:outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="flex items-center justify-center px-4 bg-[#1e293b] text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 
                       text-white font-semibold tracking-wide shadow-lg 
                       hover:from-blue-600 hover:to-cyan-500 transform hover:scale-[1.02] 
                       transition-all duration-300 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-gray-400 text-xs text-center mt-6">
          © {new Date().getFullYear()} App Name
        </p>
      </div>
    </div>
  );
}
