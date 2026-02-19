

// // src/api/adminApi.js
// import axios from "axios";

// const TOKEN_KEY = "adminToken";

// // ✅ Base URL (remove trailing slash)
// const API_URL =
//   (process.env.REACT_APP_API_URL &&
//     process.env.REACT_APP_API_URL.replace(/\/$/, "")) ||
//   "http://localhost:5001/api";

// // ✅ Axios Instance
// const api = axios.create({
//   baseURL: API_URL,
// });

// // ✅ Interceptor for attaching token
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem(TOKEN_KEY);
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // ✅ Centralized Error Handler
// const handleError = (error) => {
//   if (error.response) {
//     const { status, data } = error.response;
//     if (status === 401) {
//       localStorage.removeItem(TOKEN_KEY);
//       localStorage.removeItem("isAdmin");
//     }
//     return {
//       success: false,
//       message: data?.message || data?.error || `Request failed (${status})`,
//     };
//   }
//   return {
//     success: false,
//     message: error.message || "Unexpected error occurred",
//   };
// };

// const adminAPI = {
//   // ================= AUTH =================
//   login: async (mobileNumber, password) => {
//     try {
//       const res = await api.post(`/auth/admin/login`, { mobileNumber, password });
//       if (res.data?.token) {
//         localStorage.setItem(TOKEN_KEY, res.data.token);
//         localStorage.setItem("isAdmin", "true");
//       }
//       return { success: true, ...res.data };
//     } catch (err) {
//       return handleError(err);
//     }
//   },

//   logout: () => {
//     localStorage.removeItem(TOKEN_KEY);
//     localStorage.removeItem("isAdmin");
//   },

//   // ================= USERS =================
//   getUsers: async () => {
//     try {
//       const res = await api.get("/admin/users");
//       return { success: true, data: res.data };
//     } catch (err) {
//       return handleError(err);
//     }
//   },

//   getUserById: async (userId) => {
//     try {
//       const res = await api.get(`/admin/users/${userId}`);
//       return { success: true, data: res.data };
//     } catch (err) {
//       return handleError(err);
//     }
//   },



//    // ================= ORDERS =================
// getOrders: async () => {
//   try {
//     const res = await api.get("/orders/all"); // ✅ backend me /api/orders/all
//     return { success: true, data: res.data.data }; // ✅ sirf data array return karo
//   } catch (err) {
//     return handleError(err);
//   }
// },

// updateShippingStatus: async (orderId, shippingStatus) => {
//   try {
//     const res = await api.patch(`/orders/${orderId}/shipping-status`, { shippingStatus });
//     return { success: true, data: res.data.data }; // ✅ updated order return karega
//   } catch (err) {
//     return handleError(err);
//   }
// },

// updatePaymentStatus: async (orderId, paymentStatus) => {
//   try {
//     const res = await api.patch(`/orders/${orderId}/payment-status`, { paymentStatus });
//     return { success: true, data: res.data.data }; // ✅ updated order return karega
//   } catch (err) {
//     return handleError(err);
//   }
// },





//   // ================= DOWNLINE =================

//   getUserDownline: async (userId, depth = 3) => {
//     try {
//       const res = await api.get(`/users/${userId}/downline`, { params: { depth } });
//       return { success: true, data: res.data };
//     } catch (err) {
//       return handleError(err);
//     }
//   },

//   // Always normalize `tree` to an array
//   // getDownlineStructure: async ({ rootUserId, depth = 3 } = {}) => {
//   //   try {
//   //     const res = await api.get(`/admin/downline-structure`, { params: { rootUserId, depth } });

//   //     const raw = res?.data?.tree ?? [];
//   //     const tree = Array.isArray(raw) ? raw : (raw ? [raw] : []);

//   //     // preserve original fields, but overwrite tree with normalized array
//   //     return { success: true, data: { ...res.data, tree } };
//   //   } catch (err) {
//   //     return handleError(err);
//   //   }
//   // },

// //   getDownlineStructure: async ({ depth = 3 } = {}) => {
// //   try {
// //     const res = await api.get(`/placement/downline-structure`, { params: { depth } });
// //     const raw = res?.data?.tree ?? [];
// //     const tree = Array.isArray(raw) ? raw : (raw ? [raw] : []);
// //     return { success: true, data: { ...res.data, tree } };
// //   } catch (err) {
// //     return handleError(err);
// //   }
// // },/

// getDownlineStructure: async ({ depth = 3 } = {}) => {
//   try {
//     const res = await api.get(`/admin/downline-structure`, {
//       params: { depth },
//     });

//     const raw = res?.data?.tree ?? [];
//     const tree = Array.isArray(raw) ? raw : raw ? [raw] : [];

//     // return { success: true, data: { ...res.data, tree } };
//   return { success: true, tree };

//   } catch (err) {
//     return handleError(err);
//   }
// },







//   // ================= ADMIN PLACEMENT =================
//   placeUserInNetwork: async (userId) => {
//     try {
//       const res = await api.post(`/admin/network/placement`, { userId });
//       return { success: true, data: res.data };
//     } catch (err) {
//       return handleError(err);
//     }
//   },


// // ================= PRODUCTS =================//
// getProducts: async () => {
//   try {
//     const res = await api.get("/admin/products");
//     return { success: true, data: res.data };
//   } catch (err) {
//     return handleError(err);
//   }
// },

// addProduct: async (formData) => {
//   try {
//     const res = await api.post("/admin/products", formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     return { success: true, data: res.data };
//   } catch (err) {
//     return handleError(err);
//   }
// },

// updateProduct: async (id, formData) => {
//   try {
//     const res = await api.put(`/admin/products/${id}`, formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     return { success: true, data: res.data };
//   } catch (err) {
//     return handleError(err);
//   }
// },

// deleteProduct: async (id) => {
//   try {
//     const res = await api.delete(`/admin/products/${id}`);
//     return { success: true, data: res.data };
//   } catch (err) {
//     return handleError(err);
//   }
// },
// }

// export default adminAPI;




// src/api/adminApi.js
import axios from "axios";

const TOKEN_KEY = "adminToken";

// ✅ Base URL (remove trailing slash)
const API_URL =
  (process.env.REACT_APP_API_URL &&
    process.env.REACT_APP_API_URL.replace(/\/$/, "")) ||
  "http://localhost:5001/api";

// ✅ Axios instance
const api = axios.create({
  baseURL: API_URL,
});

// ✅ Interceptor for attaching token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ Centralized Error Handler
const handleError = (error) => {
  if (error.response) {
    const { status, data } = error.response;
    if (status === 401) {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem("isAdmin");
    }
    return {
      success: false,
      message: data?.message || data?.error || `Request failed (${status})`,
    };
  }
  return {
    success: false,
    message: error.message || "Unexpected error occurred",
  };
};

const adminAPI = {
  // ================= AUTH =================
  login: async (mobileNumber, password) => {
    try {
      const res = await api.post(`/auth/admin/login`, {
        mobileNumber,
        password,
      });
      if (res.data?.token) {
        localStorage.setItem(TOKEN_KEY, res.data.token);
        localStorage.setItem("isAdmin", "true");
      }
      return { success: true, ...res.data };
    } catch (err) {
      return handleError(err);
    }
  },

  logout: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem("isAdmin");
  },

  // ================= USERS =================
  getUsers: async () => {
    try {
      const res = await api.get("/admin/users");
      // Backend returns: { success: true, count, data: [users] }
      return { success: true, data: res.data.data || [] };
    } catch (err) {
      return handleError(err);
    }
  },

  getUserById: async (userId) => {
    try {
      const res = await api.get(`/admin/users/${userId}`);
      return { success: true, data: res.data.data };
    } catch (err) {
      return handleError(err);
    }
  },

  // ================= ORDERS =================
  getOrders: async () => {
    try {
      const res = await api.get("/orders/all");
      // Backend returns: { success: true, data: [orders] }
      return { success: true, data: res.data.data || [] };
    } catch (err) {
      return handleError(err);
    }
  },

  updateShippingStatus: async (orderId, shippingStatus) => {
    try {
      const res = await api.patch(`/orders/${orderId}/shipping-status`, {
        shippingStatus,
      });
      return { success: true, data: res.data.data };
    } catch (err) {
      return handleError(err);
    }
  },

  updatePaymentStatus: async (orderId, paymentStatus) => {
    try {
      const res = await api.patch(`/orders/${orderId}/payment-status`, {
        paymentStatus,
      });
      return { success: true, data: res.data.data };
    } catch (err) {
      return handleError(err);
    }
  },

  // ================= DOWNLINE =================
  getUserDownline: async (userId, depth = 3) => {
    try {
      const res = await api.get(`/users/${userId}/downline`, {
        params: { depth },
      });
      return { success: true, data: res.data.downline || [] };
    } catch (err) {
      return handleError(err);
    }
  },

  getDownlineStructure: async ({ rootUserId, depth = 10 } = {}) => {
    try {
      const res = await api.get(`/admin/downline-structure`, {
        params: { rootUserId, depth },
      });
      return { success: true, tree: res.data.tree || [] };
    } catch (err) {
      return handleError(err);
    }
  },

  // ================= ADMIN PLACEMENT =================
  placeUserInNetwork: async (userId) => {
    try {
      const res = await api.post(`/admin/network/placement`, { userId });
      return { success: true, data: res.data };
    } catch (err) {
      return handleError(err);
    }
  },

  // ================= PRODUCTS =================
  getProducts: async () => {
    try {
      const res = await api.get("/admin/products");
      // Backend returns: { success: true, products: [products] }
      return { success: true, data: res.data.products || [] };
    } catch (err) {
      return handleError(err);
    }
  },

  addProduct: async (formData) => {
    try {
      const res = await api.post("/admin/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return { success: true, data: res.data.product };
    } catch (err) {
      return handleError(err);
    }
  },

  updateProduct: async (id, formData) => {
    try {
      const res = await api.put(`/admin/products/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return { success: true, data: res.data.product };
    } catch (err) {
      return handleError(err);
    }
  },

  deleteProduct: async (id) => {
    try {
      const res = await api.delete(`/admin/products/${id}`);
      return { success: true, data: res.data };
    } catch (err) {
      return handleError(err);
    }
  },

  getDashboardStats: async () => {
    try {
      const res = await api.get("/admin/dashboard-stats");
      return { success: true, data: res.data.data };
    } catch (err) {
      return handleError(err);
    }
  },
};

export default adminAPI;
