// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// // ✅ Admin Pages
// import AdminLogin from "./pages/AdminLogin";
// import AdminDashboard from "./pages/AdminDashboard";
// import AdminUsers from "./pages/AdminUsers";
// import AdminOrders from "./pages/AdminOrders";
// import AdminProducts from "./pages/AdminProducts";
// import AdminWallets from "./pages/AdminWallets";
// import AdminDownline from "./pages/AdminDownline";
// import Unauthorized from "./pages/Unauthorized"; // ek simple page "Access Denied"

// // ✅ Auth wrapper
// import RequireAuth from "./components/RequireAuth";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route path="/unauthorized" element={<Unauthorized />} />

//         {/* Protected Admin Routes */}
//         <Route element={<RequireAuth role="admin" />}>
//           <Route path="/admin/dashboard" element={<AdminDashboard />} />
//           <Route path="/admin/users" element={<AdminUsers />} />
//           <Route path="/admin/orders" element={<AdminOrders />} />
//           <Route path="/admin/products" element={<AdminProducts />} />
//           <Route path="/admin/wallets" element={<AdminWallets />} />
//           <Route path="/admin/downline" element={<AdminDownline />} />
//         </Route>

//         {/* Catch all → redirect */}
//         <Route path="*" element={<Navigate to="/admin/login" replace />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// ✅ Admin Pages
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminOrders from "./pages/AdminOrders";
import AdminProducts from "./pages/AdminProducts";
import AdminWallets from "./pages/AdminWallets";
import AdminDownline from "./pages/AdminDownline";
import Unauthorized from "./pages/Unauthorized"; // ek simple page "Access Denied"

// ✅ Auth wrapper
import RequireAuth from "./components/RequireAuth";
import AdminLayout from "./components/AdminLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Protected Admin Routes */}
          <Route element={<RequireAuth role="admin" />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/admin/orders" element={<AdminOrders />} />
              <Route path="/admin/products" element={<AdminProducts />} />
              <Route path="/admin/wallets" element={<AdminWallets />} />
              <Route path="/admin/downline" element={<AdminDownline />} />
            </Route>
          </Route>

          {/* Catch all → redirect */}
          <Route path="*" element={<Navigate to="/admin/login" replace />} />
        </Routes>
      </Router>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;