// // // // // import React, { useEffect, useState } from 'react';
// // // // // import  adminAPI from '../api/adminApi';

// // // // // export default function AdminUsers() {
// // // // //   const [users, setUsers] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState('');

// // // // //   useEffect(() => {
// // // // //     const fetchUsers = async () => {
// // // // //       setLoading(true);
// // // // //       setError('');
// // // // //       try {
// // // // //         // Use the adminAPI instead of direct axios call
// // // // //         const res = await adminAPI.getUsers();
// // // // //         console.log('API Response:', res); // Debug log

// // // // //         // Handle different response structures
// // // // //         const usersList = res.users || res.data?.users || res;
// // // // //         setUsers(Array.isArray(usersList) ? usersList : []);
// // // // //       } catch (err) {
// // // // //         console.error('Fetch users error:', err); // Debug log
// // // // //         setError(err.message || 'Failed to fetch users');


// // // // //       }
// // // // //       setLoading(false);
// // // // //     };

// // // // //     fetchUsers();
// // // // //   }, []);

// // // // //   if (loading) return <div>Loading users...</div>;
// // // // //   if (error) return <div style={{ color: 'red' }}>{error}</div>;

// // // // //   return (
// // // // //     <div>
// // // // //       <h2>User Management</h2>
// // // // //       <p>Total Users: {users.length}</p>

// // // // //       <table border="1" cellPadding="8" style={{ width: '100%', marginTop: 24 }}>
// // // // //         <thead>
// // // // //           <tr>
// // // // //             <th>User ID</th>
// // // // //             <th>Name</th>
// // // // //             <th>Mobile</th>
// // // // //             <th>Email</th>
// // // // //             <th>Is Admin</th>
// // // // //             <th>Actions</th>
// // // // //           </tr>
// // // // //         </thead>
// // // // //         <tbody>
// // // // //           {users.length === 0 ? (
// // // // //             <tr>
// // // // //               <td colSpan="6" style={{ textAlign: 'center', padding: '20px' }}>
// // // // //                 No users found
// // // // //               </td>
// // // // //             </tr>
// // // // //           ) : (
// // // // //             users.map(u => (
// // // // //               <tr key={u._id || u.userId}>
// // // // //                 <td>{u.userId || 'N/A'}</td>
// // // // //                 <td>{u.name || 'N/A'}</td>
// // // // //                 <td>{u.mobileNumber || u.mobile || 'N/A'}</td>
// // // // //                 <td>{u.email || 'N/A'}</td>
// // // // //                 <td>{u.isAdmin ? 'Yes' : 'No'}</td>
// // // // //                 <td>
// // // // //                   <button onClick={() => console.log('Edit user:', u.userId)}>
// // // // //                     Edit
// // // // //                   </button>
// // // // //                   <button onClick={() => console.log('Assign downline:', u.userId)}>
// // // // //                     Assign Downline
// // // // //                   </button>
// // // // //                   <button onClick={() => console.log('View downline:', u.userId)}>
// // // // //                     View Downline
// // // // //                   </button>
// // // // //                 </td>
// // // // //               </tr>
// // // // //             ))
// // // // //           )}
// // // // //         </tbody>
// // // // //       </table>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import React, { useEffect, useState } from "react";
// // // // import adminAPI from "../api/adminApi";

// // // // const AdminUsers = () => {
// // // //   const [users, setUsers] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     const fetchUsers = async () => {
// // // //       try {
// // // //         const res = await adminAPI.getUsers();
// // // //         console.log("API Response:", res); // ✅ Debug
// // // //         setUsers(res.users || []); // Backend से users array आएगा
// // // //       } catch (err) {
// // // //         console.error("Error fetching users:", err);
// // // //         setError(err.message);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };
// // // //     fetchUsers();
// // // //   }, []);

// // // //   if (loading) return <p>Loading users...</p>;
// // // //   if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

// // // //   return (
// // // //     <div>
// // // //       <h2>All Users</h2>
// // // //       <table border="1" cellPadding="8" style={{ width: "100%", marginTop: "10px" }}>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>User ID</th>
// // // //             <th>Name</th>
// // // //             <th>Email</th>
// // // //             <th>Mobile</th>
// // // //             <th>Payment Status</th>
// // // //             <th>Join Date</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {users.length > 0 ? (
// // // //             users.map((u) => (
// // // //               <tr key={u._id}>
// // // //                 <td>{u.userId}</td>
// // // //                 <td>{u.name}</td>
// // // //                 <td>{u.email}</td>
// // // //                 <td>{u.mobileNumber}</td>
// // // //                 <td>{u.paymentStatus}</td>
// // // //                 <td>{new Date(u.createdAt).toLocaleDateString()}</td>
// // // //               </tr>
// // // //             ))
// // // //           ) : (
// // // //             <tr>
// // // //               <td colSpan="6" style={{ textAlign: "center" }}>
// // // //                 No users found
// // // //               </td>
// // // //             </tr>
// // // //           )}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AdminUsers;


// // // import React, { useEffect, useState } from "react";
// // // import adminAPI from "../api/adminApi";

// // // const AdminUsers = () => {
// // //   const [users, setUsers] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchUsers = async () => {
// // //       try {
// // //         const res = await adminAPI.getUsers();
// // //         console.log("API Response:", res); // ✅ Debug
// // //         setUsers(res.data || []); // ✅ Correct field
// // //       } catch (err) {
// // //         console.error("Error fetching users:", err);
// // //         setError(err.message);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     fetchUsers();
// // //   }, []);

// // //   if (loading) return <p>Loading users...</p>;
// // //   if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

// // //   return (
// // //     <div>
// // //       <h2>All Users</h2>
// // //       <table border="1" cellPadding="8" style={{ width: "100%", marginTop: "10px" }}>
// // //         <thead>
// // //           <tr>
// // //             <th>User ID</th>
// // //             <th>Name</th>
// // //             <th>Email</th>
// // //             <th>Mobile</th>
// // //             <th>Payment Status</th>
// // //             <th>Join Date</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {users.length > 0 ? (
// // //             users.map((u) => (
// // //               <tr key={u._id}>
// // //                 <td>{u.userId}</td>
// // //                 <td>{u.name}</td>
// // //                 <td>{u.email}</td>
// // //                 <td>{u.mobileNumber}</td>
// // //                 <td>{u.paymentStatus}</td>
// // //                 <td>{new Date(u.createdAt).toLocaleDateString()}</td>
// // //               </tr>
// // //             ))
// // //           ) : (
// // //             <tr>
// // //               <td colSpan="6" style={{ textAlign: "center" }}>
// // //                 No users found
// // //               </td>
// // //             </tr>
// // //           )}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // };

// // // export default AdminUsers;



// // import React, { useEffect, useState } from "react";
// // import adminAPI from "../api/adminApi";

// // const AdminUsers = () => {
// //   const [users, setUsers] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         const res = await adminAPI.getUsers();
// //         console.log("API Response:", res); // ✅ Debugging ke liye
// //         // ✅ Fix: users array backend ke data.data ke andar hai
// //         setUsers(res.data?.data || []);
// //       } catch (err) {
// //         console.error("Error fetching users:", err);
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchUsers();
// //   }, []);

// //   if (loading) return <p>Loading users...</p>;
// //   if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

// //   return (
// //     <div>
// //       <h2>All Users</h2>
// //       <table
// //         border="1"
// //         cellPadding="8"
// //         style={{ width: "100%", marginTop: "10px" }}
// //       >
// //         <thead>
// //           <tr>
// //             <th>User ID</th>
// //             <th>Name</th>
// //             <th>Email</th>
// //             <th>Mobile</th>
// //             <th>Payment Status</th>
// //             <th>Join Date</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {users.length > 0 ? (
// //             users.map((u) => (
// //               <tr key={u._id}>
// //                 <td>{u.userId}</td>
// //                 <td>{u.name}</td>
// //                 <td>{u.email}</td>
// //                 <td>{u.mobileNumber}</td>
// //                 <td>{u.paymentStatus}</td>
// //                 <td>{new Date(u.createdAt).toLocaleDateString()}</td>
// //               </tr>
// //             ))
// //           ) : (
// //             <tr>
// //               <td colSpan="6" style={{ textAlign: "center" }}>
// //                 No users found
// //               </td>
// //             </tr>
// //           )}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default AdminUsers;


// // import React, { useEffect, useState } from "react";
// // import adminAPI from "../api/adminApi";

// // const AdminUsers = () => {
// //   const [users, setUsers] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         const res = await adminAPI.getUsers();
// //         console.log("API Response:", res);
// //         setUsers(res.data || []);
// //       } catch (err) {
// //         console.error("Error fetching users:", err);
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchUsers();
// //   }, []);

// //   if (loading) return <p>Loading users...</p>;
// //   if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#2c3e50" }}>
// //         All Users
// //       </h2>
// //       <table
// //         style={{
// //           width: "100%",
// //           borderCollapse: "collapse",
// //           boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
// //           borderRadius: "10px",
// //           overflow: "hidden",
// //         }}
// //       >
// //         <thead style={{ backgroundColor: "#34495e", color: "white" }}>
// //           <tr>
// //             <th style={thStyle}>User ID</th>
// //             <th style={thStyle}>Name</th>
// //             <th style={thStyle}>Email</th>
// //             <th style={thStyle}>Mobile</th>
// //             <th style={thStyle}>Join Date</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {users.length > 0 ? (
// //             users.map((u, index) => (
// //               <tr
// //                 key={u._id}
// //                 style={{
// //                   backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff",
// //                   transition: "0.3s",
// //                 }}
// //                 onMouseEnter={(e) =>
// //                   (e.currentTarget.style.backgroundColor = "#ecf0f1")
// //                 }
// //                 onMouseLeave={(e) =>
// //                   (e.currentTarget.style.backgroundColor =
// //                     index % 2 === 0 ? "#f9f9f9" : "#ffffff")
// //                 }
// //               >
// //                 <td style={tdStyle}>{u.userId}</td>
// //                 <td style={tdStyle}>{u.name}</td>
// //                 <td style={tdStyle}>{u.email}</td>
// //                 <td style={tdStyle}>{u.mobileNumber}</td>
// //                 <td style={tdStyle}>
// //                   {new Date(u.createdAt).toLocaleDateString()}
// //                 </td>
// //               </tr>
// //             ))
// //           ) : (
// //             <tr>
// //               <td colSpan="5" style={{ textAlign: "center", padding: "15px" }}>
// //                 No users found
// //               </td>
// //             </tr>
// //           )}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // // Common table header style
// // const thStyle = {
// //   padding: "12px",
// //   textAlign: "left",
// //   fontWeight: "600",
// //   fontSize: "14px",
// // };

// // // Common table data style
// // const tdStyle = {
// //   padding: "12px",
// //   fontSize: "14px",
// //   borderBottom: "1px solid #ddd",
// // };

// // export default AdminUsers;

// import React, { useEffect, useState } from "react";
// import adminAPI from "../api/adminApi";

// const AdminUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await adminAPI.getUsers();
//         console.log("API Response:", res);
//         // ✅ Fix: users array backend ke data.data ke andar hai
//         setUsers(res.data?.data || []);
//       } catch (err) {
//         console.error("Error fetching users:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, []);

//   if (loading)
//     return <p style={{ textAlign: "center", color: "#2980b9" }}>Loading users...</p>;
//   if (error)
//     return <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>;

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2
//         style={{
//           textAlign: "center",
//           marginBottom: "20px",
//           color: "#2c3e50",
//           fontSize: "24px",
//         }}
//       >
//         All Users
//       </h2>

//       <div style={{ overflowX: "auto" }}>
//         <table
//           style={{
//             width: "100%",
//             borderCollapse: "collapse",
//             boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
//             borderRadius: "10px",
//             overflow: "hidden",
//             fontFamily: "Arial, sans-serif",
//           }}
//         >
//           <thead style={{ backgroundColor: "#34495e", color: "white" }}>
//             <tr>
//               <th style={thStyle}>User ID</th>
//               <th style={thStyle}>Name</th>
//               <th style={thStyle}>Email</th>
//               <th style={thStyle}>Mobile</th>
//               <th style={thStyle}>Join Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.length > 0 ? (
//               users.map((u, index) => (
//                 <tr
//                   key={u._id}
//                   style={{
//                     backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff",
//                     transition: "0.3s",
//                   }}
//                   onMouseEnter={(e) =>
//                     (e.currentTarget.style.backgroundColor = "#ecf0f1")
//                   }
//                   onMouseLeave={(e) =>
//                     (e.currentTarget.style.backgroundColor =
//                       index % 2 === 0 ? "#f9f9f9" : "#ffffff")
//                   }
//                 >
//                   <td style={tdStyle}>{u.userId}</td>
//                   <td style={tdStyle}>{u.name}</td>
//                   <td style={tdStyle}>{u.email}</td>
//                   <td style={tdStyle}>{u.mobileNumber}</td>
//                   <td style={tdStyle}>
//                     {new Date(u.createdAt).toLocaleDateString()}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan="5"
//                   style={{
//                     textAlign: "center",
//                     padding: "15px",
//                     color: "#7f8c8d",
//                   }}
//                 >
//                   No users found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// // ✅ Common header style
// const thStyle = {
//   padding: "14px",
//   textAlign: "left",
//   fontWeight: "600",
//   fontSize: "15px",
//   borderBottom: "2px solid #2c3e50",
// };

// // ✅ Common cell style
// const tdStyle = {
//   padding: "12px",
//   fontSize: "14px",
//   borderBottom: "1px solid #ddd",
// };

// export default AdminUsers;


import React, { useEffect, useState } from "react";
import adminAPI from "../api/adminApi";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await adminAPI.getUsers();
        setUsers(res.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading)
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <CircularProgress />
        <Typography>Loading users...</Typography>
      </div>
    );

  if (error)
    return (
      <Typography color="error" align="center">
        Error: {error}
      </Typography>
    );

  return (
    <TableContainer component={Paper} style={{ marginTop: "20px" }}>
      <Typography
        variant="h5"
        align="center"
        style={{ margin: "20px 0", fontWeight: "600" }}
      >
        All Users
      </Typography>
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: "#1976d2" }}>
            <TableCell style={{ color: "white", fontWeight: "600" }}>
              User ID
            </TableCell>
            <TableCell style={{ color: "white", fontWeight: "600" }}>
              Name
            </TableCell>
            <TableCell style={{ color: "white", fontWeight: "600" }}>
              Email
            </TableCell>
            <TableCell style={{ color: "white", fontWeight: "600" }}>
              Mobile
            </TableCell>
            <TableCell style={{ color: "white", fontWeight: "600" }}>
              Join Date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length > 0 ? (
            users.map((u) => (
              <TableRow key={u._id} hover>
                <TableCell>{u.userId}</TableCell>
                <TableCell>{u.name}</TableCell>
                <TableCell>{u.email}</TableCell>
                <TableCell>{u.mobileNumber}</TableCell>
                <TableCell>
                  {new Date(u.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center">
                No users found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminUsers;
