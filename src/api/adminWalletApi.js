// import axios from "axios";

// // const API_URL = "http://localhost:5001/api/admin/wallet"; // <-- FIXED
// // const API_URL = "http://localhost:5001/api/admin";


// //  const API_URL = "http://localhost:5001/api/wallet/admin";

// const API_URL = process.env.REACT_APP_API_URL + "/wallet/admin";

// const TOKEN_KEY = "adminToken";

// const adminWalletAPI = axios.create({ baseURL: API_URL });

// adminWalletAPI.interceptors.request.use((config) => {
//   const token = localStorage.getItem(TOKEN_KEY);
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// const api = {
//   getWallets: async () => {
//     const res = await adminWalletAPI.get(`/wallets`);
//     return res.data;
//   },
//   addBonus: async (userId, amount, remark) => {
//     const res = await adminWalletAPI.post(`/wallets/${userId}/add`, {
//       amount,
//       remark,
//     });
//     return res.data;
//   },
//   deduct: async (userId, amount, remark) => {
//     const res = await adminWalletAPI.post(`/wallets/${userId}/subtract`, {
//       amount,
//       remark,
//     });
//     return res.data;
//   },
//   getWithdrawalRequests: async (status = "Pending") => {
//     const res = await adminWalletAPI.get(
//       `/withdrawal-requests?status=${status}`
//     );
//     return res.data;
//   },
//   approveWithdrawal: async (requestId, remark) => {
//     const res = await adminWalletAPI.post(
//       `/withdrawal-requests/${requestId}/approve`,
//       { adminRemark: remark }
//     );
//     return res.data;
//   },
//   rejectWithdrawal: async (requestId, remark) => {
//     const res = await adminWalletAPI.post(
//       `/withdrawal-requests/${requestId}/reject`,
//       { adminRemark: remark }
//     );
//     return res.data;
//   },
// };

// export default api;

import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL + "/wallet/admin"; // works locally & deployed
const TOKEN_KEY = "adminToken";

const adminWalletAPI = axios.create({ baseURL: API_URL });

// Add token to all requests
adminWalletAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) config.headers.Authorization = `Bearer ${token}`;
  else console.warn("No admin token found in localStorage");
  return config;
});

const api = {
  getWallets: async () => {
    const res = await adminWalletAPI.get(`/wallets`);
    return res.data;
  },

  addBonus: async (userId, amount, remark) => {
    if (!userId) throw new Error("Invalid userId");
    const res = await adminWalletAPI.post(`/wallets/${userId}/add`, { amount, remark });
    return res.data;
  },

  deduct: async (userId, amount, remark) => {
    if (!userId) throw new Error("Invalid userId");
    const res = await adminWalletAPI.post(`/wallets/${userId}/subtract`, { amount, remark });
    return res.data;
  },

  getWithdrawalRequests: async (status = "Pending") => {
    const res = await adminWalletAPI.get(`/withdrawal-requests?status=${status}`);
    return res.data;
  },

  approveWithdrawal: async (request) => {
    const requestId = typeof request === "object" ? request.requestId || request._id : request;
    if (!requestId) throw new Error("Invalid request ID");
    const res = await adminWalletAPI.post(`/withdrawal-requests/${requestId}/approve`, {
      adminRemark: request.remark || "Approved by admin",
    });
    return res.data;
  },

  rejectWithdrawal: async (request) => {
    const requestId = typeof request === "object" ? request.requestId || request._id : request;
    if (!requestId) throw new Error("Invalid request ID");
    const res = await adminWalletAPI.post(`/withdrawal-requests/${requestId}/reject`, {
      adminRemark: request.remark || "Rejected by admin",
    });
    return res.data;
  },
};

export default api;

