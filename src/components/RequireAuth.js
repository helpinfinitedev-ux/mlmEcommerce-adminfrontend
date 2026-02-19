// // src/components/RequireAuth.js
// import { Navigate, Outlet } from "react-router-dom";

// const RequireAuth = ({ role }) => {
//   const token = localStorage.getItem("adminToken");
//   const userRole = localStorage.getItem("role"); // login ke baad save karo

//   if (!token) {
//     return <Navigate to="/admin/login" replace />;
//   }

//   if (role && role !== userRole) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   return <Outlet />;
// };

// export default RequireAuth;


// src/components/RequireAuth.js
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const token = localStorage.getItem("adminToken");
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  if (!token || !isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
};

export default RequireAuth;


