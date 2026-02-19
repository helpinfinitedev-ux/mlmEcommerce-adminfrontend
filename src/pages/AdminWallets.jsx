// // // // import React, { useEffect, useState } from "react";
// // // // import adminWalletApi from "../api/adminWalletApi";

// // // // export default function AdminWallets() {
// // // //   const [wallets, setWallets] = useState([]);
// // // //   const [requests, setRequests] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState("");
// // // //   const [inputs, setInputs] = useState({}); // store amount & remark per user

// // // //   const fetchData = async () => {
// // // //     try {
// // // //       setLoading(true);
// // // //       setError("");
// // // //       const [walletData, requestData] = await Promise.all([
// // // //         adminWalletApi.getWallets(),
// // // //         adminWalletApi.getWithdrawalRequests("Pending"),
// // // //       ]);
// // // //       setWallets(walletData.wallets || []);
// // // //       setRequests(requestData.requests || []);
// // // //     } catch (err) {
// // // //       console.error("Fetch error:", err);
// // // //       setError(err.message || "Failed to load data");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchData();
// // // //   }, []);

// // // //   const handleInputChange = (userId, field, value) => {
// // // //     setInputs((prev) => ({
// // // //       ...prev,
// // // //       [userId]: { ...prev[userId], [field]: value },
// // // //     }));
// // // //   };

// // // //   const handleAddMoney = async (userId) => {
// // // //     const { amount, remark } = inputs[userId] || {};
// // // //     if (!amount) return alert("Enter amount");
// // // //     await adminWalletApi.addBonus(userId, Number(amount), remark || "Added by admin");
// // // //     setInputs((prev) => ({ ...prev, [userId]: { amount: "", remark: "" } }));
// // // //     fetchData();
// // // //   };

// // // //   const handleDeductMoney = async (userId) => {
// // // //     const { amount, remark } = inputs[userId] || {};
// // // //     if (!amount) return alert("Enter amount");
// // // //     await adminWalletApi.deduct(userId, Number(amount), remark || "Deducted by admin");
// // // //     setInputs((prev) => ({ ...prev, [userId]: { amount: "", remark: "" } }));
// // // //     fetchData();
// // // //   };

// // // //   const handleRequestAction = async (reqId, action) => {
// // // //     const r = prompt("Enter remark");
// // // //     if (!r) return;
// // // //     if (action === "approve") {
// // // //       await adminWalletApi.approveWithdrawal(reqId, r);
// // // //     } else {
// // // //       await adminWalletApi.rejectWithdrawal(reqId, r);
// // // //     }
// // // //     fetchData();
// // // //   };

// // // //   if (loading) return <div>🔄 Loading...</div>;
// // // //   if (error) return <div style={{ color: "red" }}>{error}</div>;

// // // //   return (
// // // //     <div style={{ maxWidth: "1400px", margin: "auto", padding: "20px" }}>
// // // //       <h2>👛 Admin Wallet Management</h2>

// // // //       {/* Wallets Table */}
// // // //       <h3>All User Wallets</h3>
// // // //       <table border="1" cellPadding="8" style={{ width: "100%", marginBottom: "20px" }}>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>User ID</th>
// // // //             <th>Balance</th>
// // // //             <th>Action</th>
// // // //             <th>Recent Transactions</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {wallets.map((w) => {
// // // //             const userInput = inputs[w.userId] || {};
// // // //             return (
// // // //               <tr key={w.userId}>
// // // //                 <td>{w.userId}</td>
// // // //                 <td>{w.balance}</td>
// // // //                 <td>
// // // //                   <input
// // // //                     type="number"
// // // //                     value={userInput.amount || ""}
// // // //                     onChange={(e) => handleInputChange(w.userId, "amount", e.target.value)}
// // // //                     placeholder="Amount"
// // // //                     style={{ width: "100px", marginRight: "10px" }}
// // // //                   />
// // // //                   <input
// // // //                     type="text"
// // // //                     value={userInput.remark || ""}
// // // //                     onChange={(e) => handleInputChange(w.userId, "remark", e.target.value)}
// // // //                     placeholder="Remark"
// // // //                     style={{ width: "150px", marginRight: "10px" }}
// // // //                   />
// // // //                   <button onClick={() => handleAddMoney(w.userId)}>➕ Add</button>
// // // //                   <button onClick={() => handleDeductMoney(w.userId)}>➖ Deduct</button>
// // // //                 </td>
// // // //                 <td>
// // // //                   <table border="1" cellPadding="4" style={{ width: "100%" }}>
// // // //                     <thead>
// // // //                       <tr>
// // // //                         <th>Type</th>
// // // //                         <th>Amount</th>
// // // //                         <th>Status</th>
// // // //                         <th>Date</th>
// // // //                         <th>Description</th>
// // // //                       </tr>
// // // //                     </thead>
// // // //                     <tbody>
// // // //                       {(w.transactions || [])
// // // //                         .sort((a, b) => new Date(b.date) - new Date(a.date))
// // // //                         .slice(0, 5) // show last 5 transactions
// // // //                         .map((t) => (
// // // //                           <tr key={t._id}>
// // // //                             <td>{t.type}</td>
// // // //                             <td>{t.amount}</td>
// // // //                             <td>{t.status}</td>
// // // //                             <td>{new Date(t.date).toLocaleString()}</td>
// // // //                             <td>{t.description}</td>
// // // //                           </tr>
// // // //                         ))}
// // // //                     </tbody>
// // // //                   </table>
// // // //                 </td>
// // // //               </tr>
// // // //             );
// // // //           })}
// // // //         </tbody>
// // // //       </table>

// // // //       {/* Withdrawal Requests */}
// // // //       <h3>Withdrawal Requests</h3>
// // // //       <table border="1" cellPadding="8" style={{ width: "100%" }}>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Request ID</th>
// // // //             <th>User ID</th>
// // // //             <th>Amount</th>
// // // //             <th>Status</th>
// // // //             <th>Requested At</th>
// // // //             <th>Action</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {requests.map((r) => (
// // // //             <tr key={r.requestId}>
// // // //               <td>{r.requestId}</td>
// // // //               <td>{r.userId}</td>
// // // //               <td>{r.amount}</td>
// // // //               <td>{r.status}</td>
// // // //               <td>{r.createdAt ? new Date(r.createdAt).toLocaleString() : "-"}</td>
// // // //               <td>
// // // //                 {r.status === "Pending" && (
// // // //                   <>
// // // //                     <button onClick={() => handleRequestAction(r.requestId, "approve")}>
// // // //                       ✅ Approve
// // // //                     </button>
// // // //                     <button onClick={() => handleRequestAction(r.requestId, "reject")}>
// // // //                       ❌ Reject
// // // //                     </button>
// // // //                   </>
// // // //                 )}
// // // //               </td>
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //       {requests.length === 0 && <div style={{ textAlign: "center", padding: "20px" }}>No pending requests</div>}
// // // //     </div>
// // // //   );
// // // // }


// // // import React, { useEffect, useState } from "react";
// // // import adminWalletApi from "../api/adminWalletApi";

// // // export default function AdminWallets() {
// // //   const [wallets, setWallets] = useState([]);
// // //   const [requests, setRequests] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState("");
// // //   const [inputs, setInputs] = useState({}); // store amount & remark per user

// // //   const fetchData = async () => {
// // //     try {
// // //       setLoading(true);
// // //       setError("");
// // //       const [walletData, requestData] = await Promise.all([
// // //         adminWalletApi.getWallets(),
// // //         adminWalletApi.getWithdrawalRequests("Pending"),
// // //       ]);
// // //       setWallets(walletData.wallets || []);
// // //       setRequests(requestData.requests || []);
// // //     } catch (err) {
// // //       console.error("Fetch error:", err);
// // //       setError(err.message || "Failed to load data");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchData();
// // //   }, []);

// // //   const handleInputChange = (userId, field, value) => {
// // //     setInputs((prev) => ({
// // //       ...prev,
// // //       [userId]: { ...prev[userId], [field]: value },
// // //     }));
// // //   };

// // //   const handleAddMoney = async (userId) => {
// // //     const { amount, remark } = inputs[userId] || {};
// // //     if (!amount) return alert("Enter amount");
// // //     await adminWalletApi.addBonus(userId, Number(amount), remark || "Added by admin");
// // //     setInputs((prev) => ({ ...prev, [userId]: { amount: "", remark: "" } }));
// // //     fetchData();
// // //   };

// // //   const handleDeductMoney = async (userId) => {
// // //     const { amount, remark } = inputs[userId] || {};
// // //     if (!amount) return alert("Enter amount");
// // //     await adminWalletApi.deduct(userId, Number(amount), remark || "Deducted by admin");
// // //     setInputs((prev) => ({ ...prev, [userId]: { amount: "", remark: "" } }));
// // //     fetchData();
// // //   };

// // //   // ✅ Fix for withdrawal requests: pass full object, extract ID inside API
// // //   const handleRequestAction = async (request, action) => {
// // //     const remark = prompt("Enter remark");
// // //     if (!remark) return;
// // //     request.remark = remark; // add remark to object
// // //     try {
// // //       if (action === "approve") {
// // //         await adminWalletApi.approveWithdrawal(request);
// // //       } else {
// // //         await adminWalletApi.rejectWithdrawal(request);
// // //       }
// // //       fetchData();
// // //     } catch (err) {
// // //       console.error("Request action error:", err);
// // //       alert("Failed to process request: " + err.message);
// // //     }
// // //   };

// // //   if (loading) return <div>🔄 Loading...</div>;
// // //   if (error) return <div style={{ color: "red" }}>{error}</div>;

// // //   return (
// // //     <div style={{ maxWidth: "1400px", margin: "auto", padding: "20px" }}>
// // //       <h2>👛 Admin Wallet Management</h2>

// // //       {/* Wallets Table */}
// // //       <h3>All User Wallets</h3>
// // //       <table border="1" cellPadding="8" style={{ width: "100%", marginBottom: "20px" }}>
// // //         <thead>
// // //           <tr>
// // //             <th>User ID</th>
// // //             <th>Balance</th>
// // //             <th>Action</th>
// // //             <th>Recent Transactions</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {wallets.map((w) => {
// // //             const userInput = inputs[w.userId] || {};
// // //             return (
// // //               <tr key={w.userId}>
// // //                 <td>{w.userId}</td>
// // //                 <td>{w.balance}</td>
// // //                 <td>
// // //                   <input
// // //                     type="number"
// // //                     value={userInput.amount || ""}
// // //                     onChange={(e) => handleInputChange(w.userId, "amount", e.target.value)}
// // //                     placeholder="Amount"
// // //                     style={{ width: "100px", marginRight: "10px" }}
// // //                   />
// // //                   <input
// // //                     type="text"
// // //                     value={userInput.remark || ""}
// // //                     onChange={(e) => handleInputChange(w.userId, "remark", e.target.value)}
// // //                     placeholder="Remark"
// // //                     style={{ width: "150px", marginRight: "10px" }}
// // //                   />
// // //                   <button onClick={() => handleAddMoney(w.userId)}>➕ Add</button>
// // //                   <button onClick={() => handleDeductMoney(w.userId)}>➖ Deduct</button>
// // //                 </td>
// // //                 <td>
// // //                   <table border="1" cellPadding="4" style={{ width: "100%" }}>
// // //                     <thead>
// // //                       <tr>
// // //                         <th>Type</th>
// // //                         <th>Amount</th>
// // //                         <th>Status</th>
// // //                         <th>Date</th>
// // //                         <th>Description</th>
// // //                       </tr>
// // //                     </thead>
// // //                     <tbody>
// // //                       {(w.transactions || [])
// // //                         .sort((a, b) => new Date(b.date) - new Date(a.date))
// // //                         .slice(0, 5)
// // //                         .map((t) => (
// // //                           <tr key={t._id}>
// // //                             <td>{t.type}</td>
// // //                             <td>{t.amount}</td>
// // //                             <td>{t.status}</td>
// // //                             <td>{new Date(t.date).toLocaleString()}</td>
// // //                             <td>{t.description}</td>
// // //                           </tr>
// // //                         ))}
// // //                     </tbody>
// // //                   </table>
// // //                 </td>
// // //               </tr>
// // //             );
// // //           })}
// // //         </tbody>
// // //       </table>

// // //       {/* Withdrawal Requests */}
// // //       <h3>Withdrawal Requests</h3>
// // //       <table border="1" cellPadding="8" style={{ width: "100%" }}>
// // //         <thead>
// // //           <tr>
// // //             <th>Request ID</th>
// // //             <th>User ID</th>
// // //             <th>Amount</th>
// // //             <th>Status</th>
// // //             <th>Requested At</th>
// // //             <th>Action</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {requests.map((r) => (
// // //             <tr key={r.requestId || r._id}>
// // //               <td>{r.requestId || r._id}</td>
// // //               <td>{r.userId}</td>
// // //               <td>{r.amount}</td>
// // //               <td>{r.status}</td>
// // //               <td>{r.createdAt ? new Date(r.createdAt).toLocaleString() : "-"}</td>
// // //               <td>
// // //                 {r.status === "Pending" && (
// // //                   <>
// // //                     <button onClick={() => handleRequestAction(r, "approve")}>✅ Approve</button>
// // //                     <button onClick={() => handleRequestAction(r, "reject")}>❌ Reject</button>
// // //                   </>
// // //                 )}
// // //               </td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </table>
// // //       {requests.length === 0 && (
// // //         <div style={{ textAlign: "center", padding: "20px" }}>No pending requests</div>
// // //       )}
// // //     </div>
// // //   );
// // // }



// // import React, { useEffect, useState } from "react";
// // import adminWalletApi from "../api/adminWalletApi";

// // export default function AdminWallets() {
// //   const [wallets, setWallets] = useState([]);
// //   const [requests, setRequests] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");
// //   const [inputs, setInputs] = useState({}); // store amount & remark per user

// //   const fetchData = async () => {
// //     try {
// //       setLoading(true);
// //       setError("");
// //       const [walletData, requestData] = await Promise.all([
// //         adminWalletApi.getWallets(),
// //         adminWalletApi.getWithdrawalRequests("Pending"),
// //       ]);
// //       setWallets(walletData.wallets || []);
// //       setRequests(requestData.withdrawalRequests || []); // ✅ fixed key
// //     } catch (err) {
// //       console.error("Fetch error:", err);
// //       setError(err.message || "Failed to load data");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const handleInputChange = (userId, field, value) => {
// //     setInputs((prev) => ({
// //       ...prev,
// //       [userId]: { ...prev[userId], [field]: value },
// //     }));
// //   };

// //   const handleAddMoney = async (userId) => {
// //     const { amount, remark } = inputs[userId] || {};
// //     if (!amount) return alert("Enter amount");
// //     await adminWalletApi.addBonus(userId, Number(amount), remark || "Added by admin");
// //     setInputs((prev) => ({ ...prev, [userId]: { amount: "", remark: "" } }));
// //     fetchData();
// //   };

// //   const handleDeductMoney = async (userId) => {
// //     const { amount, remark } = inputs[userId] || {};
// //     if (!amount) return alert("Enter amount");
// //     await adminWalletApi.deduct(userId, Number(amount), remark || "Deducted by admin");
// //     setInputs((prev) => ({ ...prev, [userId]: { amount: "", remark: "" } }));
// //     fetchData();
// //   };

// //   // ✅ Fix for withdrawal requests: pass full object, extract ID inside API
// //   const handleRequestAction = async (request, action) => {
// //     const remark = prompt("Enter remark");
// //     if (!remark) return;
// //     request.remark = remark; // add remark to object
// //     try {
// //       if (action === "approve") {
// //         await adminWalletApi.approveWithdrawal(request);
// //       } else {
// //         await adminWalletApi.rejectWithdrawal(request);
// //       }
// //       fetchData();
// //     } catch (err) {
// //       console.error("Request action error:", err);
// //       alert("Failed to process request: " + err.message);
// //     }
// //   };

// //   if (loading) return <div>🔄 Loading...</div>;
// //   if (error) return <div style={{ color: "red" }}>{error}</div>;

// //   return (
// //     <div style={{ maxWidth: "1400px", margin: "auto", padding: "20px" }}>
// //       <h2>👛 Admin Wallet Management</h2>

// //       {/* Wallets Table */}
// //       <h3>All User Wallets</h3>
// //       <table border="1" cellPadding="8" style={{ width: "100%", marginBottom: "20px" }}>
// //         <thead>
// //           <tr>
// //             <th>User ID</th>
// //             <th>Balance</th>
// //             <th>Action</th>
// //             <th>Recent Transactions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {wallets.map((w) => {
// //             const userInput = inputs[w.userId] || {};
// //             return (
// //               <tr key={w.userId}>
// //                 <td>{w.userId}</td>
// //                 <td>{w.balance}</td>
// //                 <td>
// //                   <input
// //                     type="number"
// //                     value={userInput.amount || ""}
// //                     onChange={(e) => handleInputChange(w.userId, "amount", e.target.value)}
// //                     placeholder="Amount"
// //                     style={{ width: "100px", marginRight: "10px" }}
// //                   />
// //                   <input
// //                     type="text"
// //                     value={userInput.remark || ""}
// //                     onChange={(e) => handleInputChange(w.userId, "remark", e.target.value)}
// //                     placeholder="Remark"
// //                     style={{ width: "150px", marginRight: "10px" }}
// //                   />
// //                   <button onClick={() => handleAddMoney(w.userId)}>➕ Add</button>
// //                   <button onClick={() => handleDeductMoney(w.userId)}>➖ Deduct</button>
// //                 </td>
// //                 <td>
// //                   <table border="1" cellPadding="4" style={{ width: "100%" }}>
// //                     <thead>
// //                       <tr>
// //                         <th>Type</th>
// //                         <th>Amount</th>
// //                         <th>Status</th>
// //                         <th>Date</th>
// //                         <th>Description</th>
// //                       </tr>
// //                     </thead>
// //                     <tbody>
// //                       {(w.transactions || [])
// //                         .sort((a, b) => new Date(b.date) - new Date(a.date))
// //                         .slice(0, 5)
// //                         .map((t) => (
// //                           <tr key={t._id}>
// //                             <td>{t.type}</td>
// //                             <td>{t.amount}</td>
// //                             <td>{t.status}</td>
// //                             <td>{new Date(t.date).toLocaleString()}</td>
// //                             <td>{t.description}</td>
// //                           </tr>
// //                         ))}
// //                     </tbody>
// //                   </table>
// //                 </td>
// //               </tr>
// //             );
// //           })}
// //         </tbody>
// //       </table>

// //       {/* Withdrawal Requests */}
// //       <h3>Withdrawal Requests</h3>
// //       <table border="1" cellPadding="8" style={{ width: "100%" }}>
// //         <thead>
// //           <tr>
// //             <th>Request ID</th>
// //             <th>User ID</th>
// //             <th>Amount</th>
// //             <th>Status</th>
// //             <th>Requested At</th>
// //             <th>Action</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {requests.map((r) => (
// //             <tr key={r.requestId || r._id}>
// //               <td>{r.requestId || r._id}</td>
// //               <td>{r.userId}</td>
// //               <td>{r.amount}</td>
// //               <td>{r.status}</td>
// //               <td>{r.createdAt ? new Date(r.createdAt).toLocaleString() : "-"}</td>
// //               <td>
// //                 {r.status === "Pending" && (
// //                   <>
// //                     <button onClick={() => handleRequestAction(r, "approve")}>✅ Approve</button>
// //                     <button onClick={() => handleRequestAction(r, "reject")}>❌ Reject</button>
// //                   </>
// //                 )}
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //       {requests.length === 0 && (
// //         <div style={{ textAlign: "center", padding: "20px" }}>No pending requests</div>
// //       )}
// //     </div>
// //   );
// // }




// import React, { useEffect, useState } from "react";
// import adminWalletApi from "../api/adminWalletApi";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Input } from "@/components/ui/input";

// export default function AdminWallets() {
//   const [wallets, setWallets] = useState([]);
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [inputs, setInputs] = useState({});

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       setError("");
//       const [walletData, requestData] = await Promise.all([
//         adminWalletApi.getWallets(),
//         adminWalletApi.getWithdrawalRequests("Pending"),
//       ]);
//       setWallets(walletData.wallets || []);
//       setRequests(requestData.withdrawalRequests || []);
//     } catch (err) {
//       console.error("Fetch error:", err);
//       setError(err.message || "Failed to load data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleInputChange = (userId, field, value) => {
//     setInputs((prev) => ({
//       ...prev,
//       [userId]: { ...prev[userId], [field]: value },
//     }));
//   };

//   const handleAddMoney = async (userId) => {
//     const { amount, remark } = inputs[userId] || {};
//     if (!amount) return alert("Enter amount");
//     await adminWalletApi.addBonus(userId, Number(amount), remark || "Added by admin");
//     setInputs((prev) => ({ ...prev, [userId]: { amount: "", remark: "" } }));
//     fetchData();
//   };

//   const handleDeductMoney = async (userId) => {
//     const { amount, remark } = inputs[userId] || {};
//     if (!amount) return alert("Enter amount");
//     await adminWalletApi.deduct(userId, Number(amount), remark || "Deducted by admin");
//     setInputs((prev) => ({ ...prev, [userId]: { amount: "", remark: "" } }));
//     fetchData();
//   };

//   const handleRequestAction = async (request, action) => {
//     const remark = prompt("Enter remark");
//     if (!remark) return;
//     request.remark = remark;
//     try {
//       if (action === "approve") {
//         await adminWalletApi.approveWithdrawal(request);
//       } else {
//         await adminWalletApi.rejectWithdrawal(request);
//       }
//       fetchData();
//     } catch (err) {
//       console.error("Request action error:", err);
//       alert("Failed to process request: " + err.message);
//     }
//   };

//   if (loading) return <div className="text-center py-10">🔄 Loading...</div>;
//   if (error) return <div className="text-red-500 text-center py-10">{error}</div>;

//   return (
//     <div className="max-w-7xl mx-auto p-6 space-y-10">
//       <h2 className="text-2xl font-bold">👛 Admin Wallet Management</h2>

//       {/* Wallets */}
//       <Card>
//         <CardHeader>
//           <CardTitle>All User Wallets</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>User ID</TableHead>
//                 <TableHead>Balance</TableHead>
//                 <TableHead>Action</TableHead>
//                 <TableHead>Recent Transactions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {wallets.map((w) => {
//                 const userInput = inputs[w.userId] || {};
//                 return (
//                   <TableRow key={w.userId}>
//                     <TableCell className="font-medium">{w.userId}</TableCell>
//                     <TableCell>₹{w.balance}</TableCell>
//                     <TableCell className="space-y-2">
//                       <div className="flex gap-2">
//                         <Input
//                           type="number"
//                           value={userInput.amount || ""}
//                           onChange={(e) =>
//                             handleInputChange(w.userId, "amount", e.target.value)
//                           }
//                           placeholder="Amount"
//                           className="w-28"
//                         />
//                         <Input
//                           type="text"
//                           value={userInput.remark || ""}
//                           onChange={(e) =>
//                             handleInputChange(w.userId, "remark", e.target.value)
//                           }
//                           placeholder="Remark"
//                           className="w-40"
//                         />
//                       </div>
//                       <div className="flex gap-2">
//                         <Button size="sm" onClick={() => handleAddMoney(w.userId)}>
//                           ➕ Add
//                         </Button>
//                         <Button
//                           size="sm"
//                           variant="destructive"
//                           onClick={() => handleDeductMoney(w.userId)}
//                         >
//                           ➖ Deduct
//                         </Button>
//                       </div>
//                     </TableCell>
//                     <TableCell>
//                       <Table>
//                         <TableHeader>
//                           <TableRow>
//                             <TableHead>Type</TableHead>
//                             <TableHead>Amount</TableHead>
//                             <TableHead>Status</TableHead>
//                             <TableHead>Date</TableHead>
//                             <TableHead>Description</TableHead>
//                           </TableRow>
//                         </TableHeader>
//                         <TableBody>
//                           {(w.transactions || [])
//                             .sort((a, b) => new Date(b.date) - new Date(a.date))
//                             .slice(0, 5)
//                             .map((t) => (
//                               <TableRow key={t._id}>
//                                 <TableCell>{t.type}</TableCell>
//                                 <TableCell>₹{t.amount}</TableCell>
//                                 <TableCell>{t.status}</TableCell>
//                                 <TableCell>
//                                   {new Date(t.date).toLocaleString()}
//                                 </TableCell>
//                                 <TableCell>{t.description}</TableCell>
//                               </TableRow>
//                             ))}
//                         </TableBody>
//                       </Table>
//                     </TableCell>
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>

//       {/* Withdrawal Requests */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Withdrawal Requests</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Request ID</TableHead>
//                 <TableHead>User ID</TableHead>
//                 <TableHead>Amount</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead>Requested At</TableHead>
//                 <TableHead>Action</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {requests.map((r) => (
//                 <TableRow key={r.requestId || r._id}>
//                   <TableCell>{r.requestId || r._id}</TableCell>
//                   <TableCell>{r.userId}</TableCell>
//                   <TableCell>₹{r.amount}</TableCell>
//                   <TableCell>{r.status}</TableCell>
//                   <TableCell>
//                     {r.createdAt
//                       ? new Date(r.createdAt).toLocaleString()
//                       : "-"}
//                   </TableCell>
//                   <TableCell className="flex gap-2">
//                     {r.status === "Pending" && (
//                       <>
//                         <Button
//                           size="sm"
//                           onClick={() => handleRequestAction(r, "approve")}
//                         >
//                           ✅ Approve
//                         </Button>
//                         <Button
//                           size="sm"
//                           variant="destructive"
//                           onClick={() => handleRequestAction(r, "reject")}
//                         >
//                           ❌ Reject
//                         </Button>
//                       </>
//                     )}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//           {requests.length === 0 && (
//             <div className="text-center py-6 text-muted-foreground">
//               No pending requests
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import adminWalletApi from "../api/adminWalletApi";

export default function AdminWallets() {
  const [wallets, setWallets] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [inputs, setInputs] = useState({});

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");
      const [walletData, requestData] = await Promise.all([
        adminWalletApi.getWallets(),
        adminWalletApi.getWithdrawalRequests("Pending"),
      ]);
      setWallets(walletData.wallets || []);
      setRequests(requestData.withdrawalRequests || []);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message || "Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (userId, field, value) => {
    setInputs((prev) => ({
      ...prev,
      [userId]: { ...prev[userId], [field]: value },
    }));
  };

  const handleAddMoney = async (userId) => {
    const { amount, remark } = inputs[userId] || {};
    if (!amount) return alert("Enter amount");
    await adminWalletApi.addBonus(
      userId,
      Number(amount),
      remark || "Added by admin"
    );
    setInputs((prev) => ({ ...prev, [userId]: { amount: "", remark: "" } }));
    fetchData();
  };

  const handleDeductMoney = async (userId) => {
    const { amount, remark } = inputs[userId] || {};
    if (!amount) return alert("Enter amount");
    await adminWalletApi.deduct(
      userId,
      Number(amount),
      remark || "Deducted by admin"
    );
    setInputs((prev) => ({ ...prev, [userId]: { amount: "", remark: "" } }));
    fetchData();
  };

  const handleRequestAction = async (request, action) => {
    const remark = prompt("Enter remark");
    if (!remark) return;
    request.remark = remark;
    try {
      if (action === "approve") {
        await adminWalletApi.approveWithdrawal(request);
      } else {
        await adminWalletApi.rejectWithdrawal(request);
      }
      fetchData();
    } catch (err) {
      console.error("Request action error:", err);
      alert("Failed to process request: " + err.message);
    }
  };

  if (loading) return <div className="text-center py-10">🔄 Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-10">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10">
      <h2 className="text-2xl font-bold">👛 Admin Wallet Management</h2>

      {/* Wallets */}
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b">
          <h3 className="text-lg font-semibold">All User Wallets</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3">User ID</th>
                <th className="p-3">Balance</th>
                <th className="p-3">Action</th>
                <th className="p-3">Recent Transactions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {wallets.map((w) => {
                const userInput = inputs[w.userId] || {};
                return (
                  <tr key={w.userId} className="hover:bg-gray-50">
                    <td className="p-3 font-medium">{w.userId}</td>
                    <td className="p-3">₹{w.balance}</td>
                    <td className="p-3">
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                          <input
                            type="number"
                            value={userInput.amount || ""}
                            onChange={(e) =>
                              handleInputChange(w.userId, "amount", e.target.value)
                            }
                            placeholder="Amount"
                            className="border rounded-lg px-2 py-1 w-28"
                          />
                          <input
                            type="text"
                            value={userInput.remark || ""}
                            onChange={(e) =>
                              handleInputChange(w.userId, "remark", e.target.value)
                            }
                            placeholder="Remark"
                            className="border rounded-lg px-2 py-1 w-40"
                          />
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleAddMoney(w.userId)}
                            className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                          >
                            ➕ Add
                          </button>
                          <button
                            onClick={() => handleDeductMoney(w.userId)}
                            className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
                          >
                            ➖ Deduct
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <table className="w-full text-xs border">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="p-2">Type</th>
                            <th className="p-2">Amount</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">Date</th>
                            <th className="p-2">Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {(w.transactions || [])
                            .sort((a, b) => new Date(b.date) - new Date(a.date))
                            .slice(0, 5)
                            .map((t) => (
                              <tr key={t._id}>
                                <td className="p-2">{t.type}</td>
                                <td className="p-2">₹{t.amount}</td>
                                <td className="p-2">{t.status}</td>
                                <td className="p-2">
                                  {new Date(t.date).toLocaleString()}
                                </td>
                                <td className="p-2">{t.description}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Withdrawal Requests */}
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b">
          <h3 className="text-lg font-semibold">Withdrawal Requests</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3">Request ID</th>
                <th className="p-3">User ID</th>
                <th className="p-3">Amount</th>
                  <th>Account Number</th>   
                  <th>Bank Name</th>        
                  <th>IFSC Code</th> 
                <th className="p-3">Status</th>
                <th className="p-3">Requested At</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {requests.map((r) => (
                <tr key={r.requestId || r._id} className="hover:bg-gray-50">
                  <td className="p-3">{r.requestId || r._id}</td>
                  <td className="p-3">{r.userId}</td>
                  <td className="p-3">₹{r.amount}</td>
                   <td>{r.accountNumber}</td>   
                   <td>{r.bankName}</td>        
                   <td>{r.ifscCode}</td>        
                  <td className="p-3">{r.status}</td>
                  <td className="p-3">
                    {r.createdAt ? new Date(r.createdAt).toLocaleString() : "-"}
                  </td>
                  <td className="p-3 flex gap-2">
                    {r.status === "Pending" && (
                      <>
                        <button
                          onClick={() => handleRequestAction(r, "approve")}
                          className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700"
                        >
                          ✅ Approve
                        </button>
                        <button
                          onClick={() => handleRequestAction(r, "reject")}
                          className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        >
                          ❌ Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {requests.length === 0 && (
            <div className="text-center py-6 text-gray-500">
              No pending requests
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


