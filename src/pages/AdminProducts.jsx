



// // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // import axios from 'axios';
// // // // // // // // import adminAPI from "../api/adminApi";


// // // // // // // // export default function AdminProducts() {
// // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // //   const [form, setForm] = useState({ name: '', price: '', about: '' });
// // // // // // // //   const [photos, setPhotos] = useState([]);
// // // // // // // //   const [editingId, setEditingId] = useState(null);

// // // // // // // //   const fetchProducts = async () => {
// // // // // // // //     const res = await axios.get('http://localhost:5001/api/products', {
// // // // // // // //       headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` }
// // // // // // // //     });
// // // // // // // //     setProducts(res.data.products);
// // // // // // // //   };

// // // // // // // //   useEffect(() => { fetchProducts(); }, []);

// // // // // // // //   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

// // // // // // // //   const handlePhotoChange = e => setPhotos([...e.target.files]);

// // // // // // // //   const handleSubmit = async e => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     const data = new FormData();
// // // // // // // //     data.append('name', form.name);
// // // // // // // //     data.append('price', form.price);
// // // // // // // //     data.append('about', form.about);
// // // // // // // //     photos.forEach(photo => data.append('photos', photo));
// // // // // // // //     let url = 'http://localhost:5001/api/admin/products';

// // // // // // // //     let method = 'post';
// // // // // // // //     if (editingId) {
// // // // // // // //       url += `/${editingId}`;
// // // // // // // //       method = 'put';
// // // // // // // //     }
// // // // // // // //     await axios({
// // // // // // // //       method,
// // // // // // // //       url,
// // // // // // // //       data,
// // // // // // // //       headers: {
// // // // // // // //         Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
// // // // // // // //         'Content-Type': 'multipart/form-data'
// // // // // // // //       }
// // // // // // // //     });
// // // // // // // //     setForm({ name: '', price: '', about: '' });
// // // // // // // //     setPhotos([]);
// // // // // // // //     setEditingId(null);
// // // // // // // //     fetchProducts();
// // // // // // // //   };

// // // // // // // //   const handleEdit = p => {
// // // // // // // //     setForm({ name: p.name, price: p.price, about: p.about });
// // // // // // // //     setEditingId(p._id);
// // // // // // // //   };

// // // // // // // //   const handleDelete = async id => {
// // // // // // // //      await axios.delete(`http://localhost:5001/api/admin/products/${id}`,
// // // // // // // //        {
// // // // // // // //       headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` }
// // // // // // // //     });
// // // // // // // //     fetchProducts();
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //       <h2>Product Management</h2>
// // // // // // // //       <form onSubmit={handleSubmit} encType="multipart/form-data">
// // // // // // // //         <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
// // // // // // // //         <input name="price" value={form.price} onChange={handleChange} placeholder="Price" required type="number" />
// // // // // // // //         <textarea name="about" value={form.about} onChange={handleChange} placeholder="About product" />
// // // // // // // //         <input type="file" name="photos" accept="image/*" multiple onChange={handlePhotoChange} />
// // // // // // // //         <button type="submit">{editingId ? 'Update' : 'Add'} Product</button>
// // // // // // // //         {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({ name: '', price: '', about: '' }); setPhotos([]); }}>Cancel</button>}
// // // // // // // //       </form>
// // // // // // // //       <table border="1" cellPadding="8" style={{ width: '100%', marginTop: 24 }}>
// // // // // // // //         <thead>
// // // // // // // //           <tr>
// // // // // // // //             <th>Name</th><th>Price</th><th>About</th><th>Photos</th><th>Actions</th>
// // // // // // // //           </tr>
// // // // // // // //         </thead>
// // // // // // // //         <tbody>
// // // // // // // //           {products.map(p => (
// // // // // // // //             <tr key={p._id}>
// // // // // // // //               <td>{p.name}</td>
// // // // // // // //               <td>{p.price}</td>
// // // // // // // //               <td>{p.about}</td>
// // // // // // // //               <td>
// // // // // // // //                 {p.photos && p.photos.map((url, i) => (
// // // // // // // //                   <img key={i} src={`http://localhost:5001${url}`} alt="" style={{ width: 50, marginRight: 5 }} />
// // // // // // // //                 ))}
// // // // // // // //               </td>
// // // // // // // //               <td>
// // // // // // // //                 <button onClick={() => handleEdit(p)}>Edit</button>
// // // // // // // //                 <button onClick={() => handleDelete(p._id)}>Delete</button>
// // // // // // // //               </td>
// // // // // // // //             </tr>
// // // // // // // //           ))}
// // // // // // // //         </tbody>
// // // // // // // //       </table>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }   

// // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // import axios from 'axios';

// // // // // // // export default function AdminProducts() {
// // // // // // //   const [products, setProducts] = useState([]);
// // // // // // //   const [form, setForm] = useState({ name: '', price: '', about: '' });
// // // // // // //   const [photos, setPhotos] = useState([]);
// // // // // // //   const [editingId, setEditingId] = useState(null);

// // // // // // //   // ✅ Corrected fetchProducts API endpoint
// // // // // // //   const fetchProducts = async () => {
// // // // // // //     try {
// // // // // // //       const res = await axios.get('http://localhost:5001/api/admin/products', {
// // // // // // //         headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` }
// // // // // // //       });
// // // // // // //       setProducts(res.data.products || []);
// // // // // // //     } catch (err) {
// // // // // // //       console.error("❌ Fetch products failed:", err.response?.data || err.message);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   useEffect(() => { fetchProducts(); }, []);

// // // // // // //   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

// // // // // // //   const handlePhotoChange = e => setPhotos([...e.target.files]);

// // // // // // //   const handleSubmit = async e => {
// // // // // // //     e.preventDefault();
// // // // // // //     try {
// // // // // // //       const data = new FormData();
// // // // // // //       data.append('name', form.name);
// // // // // // //       data.append('price', form.price);
// // // // // // //       data.append('about', form.about);
// // // // // // //       photos.forEach(photo => data.append('photos', photo));

// // // // // // //       let url = 'http://localhost:5001/api/admin/products';
// // // // // // //       let method = 'post';

// // // // // // //       if (editingId) {
// // // // // // //         url += `/${editingId}`;
// // // // // // //         method = 'put';
// // // // // // //       }

// // // // // // //       await axios({
// // // // // // //         method,
// // // // // // //         url,
// // // // // // //         data,
// // // // // // //         headers: {
// // // // // // //           Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
// // // // // // //           'Content-Type': 'multipart/form-data'
// // // // // // //         }
// // // // // // //       });

// // // // // // //       // reset form after success
// // // // // // //       setForm({ name: '', price: '', about: '' });
// // // // // // //       setPhotos([]);
// // // // // // //       setEditingId(null);
// // // // // // //       fetchProducts();
// // // // // // //     } catch (err) {
// // // // // // //       console.error("❌ Submit product failed:", err.response?.data || err.message);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleEdit = p => {
// // // // // // //     setForm({ name: p.name, price: p.price, about: p.about });
// // // // // // //     setEditingId(p._id);
// // // // // // //   };

// // // // // // //   const handleDelete = async id => {
// // // // // // //     try {
// // // // // // //       await axios.delete(`http://localhost:5001/api/admin/products/${id}`, {
// // // // // // //         headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` }
// // // // // // //       });
// // // // // // //       fetchProducts();
// // // // // // //     } catch (err) {
// // // // // // //       console.error("❌ Delete product failed:", err.response?.data || err.message);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <h2>Product Management</h2>

// // // // // // //       {/* Product Form */}
// // // // // // //       <form onSubmit={handleSubmit} encType="multipart/form-data">
// // // // // // //         <input
// // // // // // //           name="name"
// // // // // // //           value={form.name}
// // // // // // //           onChange={handleChange}
// // // // // // //           placeholder="Name"
// // // // // // //           required
// // // // // // //         />
// // // // // // //         <input
// // // // // // //           name="price"
// // // // // // //           value={form.price}
// // // // // // //           onChange={handleChange}
// // // // // // //           placeholder="Price"
// // // // // // //           required
// // // // // // //           type="number"
// // // // // // //         />
// // // // // // //         <textarea
// // // // // // //           name="about"
// // // // // // //           value={form.about}
// // // // // // //           onChange={handleChange}
// // // // // // //           placeholder="About product"
// // // // // // //         />
// // // // // // //         <input
// // // // // // //           type="file"
// // // // // // //           name="photos"
// // // // // // //           accept="image/*"
// // // // // // //           multiple
// // // // // // //           onChange={handlePhotoChange}
// // // // // // //         />

// // // // // // //         <button type="submit">{editingId ? 'Update' : 'Add'} Product</button>
// // // // // // //         {editingId && (
// // // // // // //           <button
// // // // // // //             type="button"
// // // // // // //             onClick={() => {
// // // // // // //               setEditingId(null);
// // // // // // //               setForm({ name: '', price: '', about: '' });
// // // // // // //               setPhotos([]);
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             Cancel
// // // // // // //           </button>
// // // // // // //         )}
// // // // // // //       </form>

// // // // // // //       {/* Products Table */}
// // // // // // //       <table border="1" cellPadding="8" style={{ width: '100%', marginTop: 24 }}>
// // // // // // //         <thead>
// // // // // // //           <tr>
// // // // // // //             <th>Name</th>
// // // // // // //             <th>Price</th>
// // // // // // //             <th>About</th>
// // // // // // //             <th>Photos</th>
// // // // // // //             <th>Actions</th>
// // // // // // //           </tr>
// // // // // // //         </thead>
// // // // // // //         <tbody>
// // // // // // //           {products.length > 0 ? (
// // // // // // //             products.map(p => (
// // // // // // //               <tr key={p._id}>
// // // // // // //                 <td>{p.name}</td>
// // // // // // //                 <td>{p.price}</td>
// // // // // // //                 <td>{p.about}</td>
// // // // // // //                 <td>
// // // // // // //                   {p.photos && p.photos.map((url, i) => (
// // // // // // //                     <img
// // // // // // //                       key={i}
// // // // // // //                       src={`http://localhost:5001${url}`}
// // // // // // //                       alt=""
// // // // // // //                       style={{ width: 50, marginRight: 5 }}
// // // // // // //                     />
// // // // // // //                   ))}
// // // // // // //                 </td>
// // // // // // //                 <td>
// // // // // // //                   <button onClick={() => handleEdit(p)}>Edit</button>
// // // // // // //                   <button onClick={() => handleDelete(p._id)}>Delete</button>
// // // // // // //                 </td>
// // // // // // //               </tr>
// // // // // // //             ))
// // // // // // //           ) : (
// // // // // // //             <tr><td colSpan="5" style={{ textAlign: 'center' }}>No products found</td></tr>
// // // // // // //           )}
// // // // // // //         </tbody>
// // // // // // //       </table>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import axios from "axios";

// // // // // // export default function AdminProducts() {
// // // // // //   const [products, setProducts] = useState([]);
// // // // // //   const [form, setForm] = useState({ name: "", price: "", about: "" });
// // // // // //   const [photos, setPhotos] = useState([]);
// // // // // //   const [editingId, setEditingId] = useState(null);

// // // // // //   const fetchProducts = async () => {
// // // // // //     try {
// // // // // //       const res = await axios.get("http://localhost:5001/api/admin/products", {
// // // // // //         headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
// // // // // //       });
// // // // // //       setProducts(res.data.products || []);
// // // // // //     } catch (err) {
// // // // // //       console.error("❌ Fetch products failed:", err.response?.data || err.message);
// // // // // //     }
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     fetchProducts();
// // // // // //   }, []);

// // // // // //   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

// // // // // //   const handlePhotoChange = (e) => setPhotos([...e.target.files]);

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     try {
// // // // // //       const data = new FormData();
// // // // // //       data.append("name", form.name);
// // // // // //       data.append("price", form.price);
// // // // // //       data.append("about", form.about);
// // // // // //       photos.forEach((photo) => data.append("photos", photo));

// // // // // //       let url = "http://localhost:5001/api/admin/products";
// // // // // //       let method = "post";

// // // // // //       if (editingId) {
// // // // // //         url += `/${editingId}`;
// // // // // //         method = "put";
// // // // // //       }

// // // // // //       await axios({
// // // // // //         method,
// // // // // //         url,
// // // // // //         data,
// // // // // //         headers: {
// // // // // //           Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
// // // // // //           "Content-Type": "multipart/form-data",
// // // // // //         },
// // // // // //       });

// // // // // //       setForm({ name: "", price: "", about: "" });
// // // // // //       setPhotos([]);
// // // // // //       setEditingId(null);
// // // // // //       fetchProducts();
// // // // // //     } catch (err) {
// // // // // //       console.error("❌ Submit product failed:", err.response?.data || err.message);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleEdit = (p) => {
// // // // // //     setForm({ name: p.name, price: p.price, about: p.about });
// // // // // //     setEditingId(p._id);
// // // // // //   };

// // // // // //   const handleDelete = async (id) => {
// // // // // //     try {
// // // // // //       await axios.delete(`http://localhost:5001/api/admin/products/${id}`, {
// // // // // //         headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
// // // // // //       });
// // // // // //       fetchProducts();
// // // // // //     } catch (err) {
// // // // // //       console.error("❌ Delete product failed:", err.response?.data || err.message);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="p-6 bg-gray-100 min-h-screen">
// // // // // //       <h2 className="text-2xl font-bold mb-6 text-gray-800">🛒 Product Management</h2>

// // // // // //       {/* Product Form */}
// // // // // //       <form
// // // // // //         onSubmit={handleSubmit}
// // // // // //         encType="multipart/form-data"
// // // // // //         className="bg-white shadow-md rounded-lg p-6 mb-8"
// // // // // //       >
// // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // //           <input
// // // // // //             name="name"
// // // // // //             value={form.name}
// // // // // //             onChange={handleChange}
// // // // // //             placeholder="Product Name"
// // // // // //             required
// // // // // //             className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
// // // // // //           />
// // // // // //           <input
// // // // // //             name="price"
// // // // // //             value={form.price}
// // // // // //             onChange={handleChange}
// // // // // //             placeholder="Price"
// // // // // //             required
// // // // // //             type="number"
// // // // // //             className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
// // // // // //           />
// // // // // //         </div>
// // // // // //         <textarea
// // // // // //           name="about"
// // // // // //           value={form.about}
// // // // // //           onChange={handleChange}
// // // // // //           placeholder="About product"
// // // // // //           className="border p-2 rounded-md mt-4 w-full focus:ring-2 focus:ring-blue-500"
// // // // // //         />
// // // // // //         <input
// // // // // //           type="file"
// // // // // //           name="photos"
// // // // // //           accept="image/*"
// // // // // //           multiple
// // // // // //           onChange={handlePhotoChange}
// // // // // //           className="mt-4"
// // // // // //         />

// // // // // //         <div className="mt-4 flex gap-4">
// // // // // //           <button
// // // // // //             type="submit"
// // // // // //             className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
// // // // // //           >
// // // // // //             {editingId ? "Update Product" : "Add Product"}
// // // // // //           </button>
// // // // // //           {editingId && (
// // // // // //             <button
// // // // // //               type="button"
// // // // // //               onClick={() => {
// // // // // //                 setEditingId(null);
// // // // // //                 setForm({ name: "", price: "", about: "" });
// // // // // //                 setPhotos([]);
// // // // // //               }}
// // // // // //               className="px-4 py-2 bg-gray-400 text-white rounded-md shadow hover:bg-gray-500 transition"
// // // // // //             >
// // // // // //               Cancel
// // // // // //             </button>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </form>

// // // // // //       {/* Products Table */}
// // // // // //       <div className="bg-white shadow-md rounded-lg overflow-hidden">
// // // // // //         <table className="min-w-full border-collapse">
// // // // // //           <thead className="bg-gray-200">
// // // // // //             <tr>
// // // // // //               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Name</th>
// // // // // //               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Price</th>
// // // // // //               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">About</th>
// // // // // //               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Photos</th>
// // // // // //               <th className="py-3 px-4 text-sm font-semibold text-gray-700 text-center">Actions</th>
// // // // // //             </tr>
// // // // // //           </thead>
// // // // // //           <tbody>
// // // // // //             {products.length > 0 ? (
// // // // // //               products.map((p) => (
// // // // // //                 <tr key={p._id} className="border-t hover:bg-gray-50">
// // // // // //                   <td className="py-2 px-4">{p.name}</td>
// // // // // //                   <td className="py-2 px-4">₹{p.price}</td>
// // // // // //                   <td className="py-2 px-4">{p.about}</td>
// // // // // //                   <td className="py-2 px-4 flex gap-2">
// // // // // //                     {p.photos &&
// // // // // //                       p.photos.map((url, i) => (
// // // // // //                         <img
// // // // // //                           key={i}
// // // // // //                           src={`http://localhost:5001${url}`}
// // // // // //                           alt=""
// // // // // //                           className="w-12 h-12 rounded object-cover border"
// // // // // //                         />
// // // // // //                       ))}
// // // // // //                   </td>
// // // // // //                   <td className="py-2 px-4 text-center flex gap-2 justify-center">
// // // // // //                     <button
// // // // // //                       onClick={() => handleEdit(p)}
// // // // // //                       className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
// // // // // //                     >
// // // // // //                       Edit
// // // // // //                     </button>
// // // // // //                     <button
// // // // // //                       onClick={() => handleDelete(p._id)}
// // // // // //                       className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
// // // // // //                     >
// // // // // //                       Delete
// // // // // //                     </button>
// // // // // //                   </td>
// // // // // //                 </tr>
// // // // // //               ))
// // // // // //             ) : (
// // // // // //               <tr>
// // // // // //                 <td
// // // // // //                   colSpan="5"
// // // // // //                   className="py-4 text-center text-gray-500 italic"
// // // // // //                 >
// // // // // //                   No products found
// // // // // //                 </td>
// // // // // //               </tr>
// // // // // //             )}
// // // // // //           </tbody>
// // // // // //         </table>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }



// // // // // // src/pages/AdminProducts.jsx
// // // // // import React, { useEffect, useState } from "react";
// // // // // import axios from "axios";

// // // // // // Simple spinner component
// // // // // const Spinner = ({ size = "5" }) => (
// // // // //   <div
// // // // //     className={`w-${size} h-${size} border-2 border-t-transparent border-white rounded-full animate-spin`}
// // // // //   ></div>
// // // // // );

// // // // // export default function AdminProducts() {
// // // // //   const [products, setProducts] = useState([]);
// // // // //   const [form, setForm] = useState({ name: "", price: "", about: "" });
// // // // //   const [photos, setPhotos] = useState([]);
// // // // //   const [editingId, setEditingId] = useState(null);
// // // // //   const [loading, setLoading] = useState(false); // global loading state
// // // // //   const [deleteId, setDeleteId] = useState(null); // for delete button loading

// // // // //   // Fetch products from backend
// // // // //   const fetchProducts = async () => {
// // // // //     try {
// // // // //       const res = await axios.get("http://localhost:5001/api/admin/products", {
// // // // //         headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
// // // // //       });
// // // // //       setProducts(res.data.products || []);
// // // // //     } catch (err) {
// // // // //       console.error("❌ Fetch products failed:", err.response?.data || err.message);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchProducts();
// // // // //   }, []);

// // // // //   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
// // // // //   const handlePhotoChange = (e) => setPhotos([...e.target.files]);

// // // // //   // Add / Update product
// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setLoading(true);
// // // // //     try {
// // // // //       const data = new FormData();
// // // // //       data.append("name", form.name);
// // // // //       data.append("price", form.price);
// // // // //       data.append("about", form.about);
// // // // //       photos.forEach((photo) => data.append("photos", photo));

// // // // //       let url = "http://localhost:5001/api/admin/products";
// // // // //       let method = "post";

// // // // //       if (editingId) {
// // // // //         url += `/${editingId}`;
// // // // //         method = "put";
// // // // //       }

// // // // //       await axios({
// // // // //         method,
// // // // //         url,
// // // // //         data,
// // // // //         headers: {
// // // // //           Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
// // // // //           "Content-Type": "multipart/form-data",
// // // // //         },
// // // // //       });

// // // // //       setForm({ name: "", price: "", about: "" });
// // // // //       setPhotos([]);
// // // // //       setEditingId(null);
// // // // //       fetchProducts();
// // // // //     } catch (err) {
// // // // //       console.error("❌ Submit product failed:", err.response?.data || err.message);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   // Edit product
// // // // //   const handleEdit = (p) => {
// // // // //     setForm({ name: p.name, price: p.price, about: p.about });
// // // // //     setEditingId(p._id);
// // // // //   };

// // // // //   // Delete product
// // // // //   const handleDelete = async (id) => {
// // // // //     setDeleteId(id);
// // // // //     try {
// // // // //       await axios.delete(`http://localhost:5001/api/admin/products/${id}`, {
// // // // //         headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
// // // // //       });
// // // // //       fetchProducts();
// // // // //     } catch (err) {
// // // // //       console.error("❌ Delete product failed:", err.response?.data || err.message);
// // // // //     } finally {
// // // // //       setDeleteId(null);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="p-6 bg-gray-100 min-h-screen">
// // // // //       <h2 className="text-2xl font-bold mb-6 text-gray-800">🛒 Product Management</h2>

// // // // //       {/* Product Form */}
// // // // //       <form
// // // // //         onSubmit={handleSubmit}
// // // // //         encType="multipart/form-data"
// // // // //         className="bg-white shadow-md rounded-lg p-6 mb-8"
// // // // //       >
// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // //           <input
// // // // //             name="name"
// // // // //             value={form.name}
// // // // //             onChange={handleChange}
// // // // //             placeholder="Product Name"
// // // // //             required
// // // // //             className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
// // // // //           />
// // // // //           <input
// // // // //             name="price"
// // // // //             value={form.price}
// // // // //             onChange={handleChange}
// // // // //             placeholder="Price"
// // // // //             required
// // // // //             type="number"
// // // // //             className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
// // // // //           />
// // // // //         </div>
// // // // //         <textarea
// // // // //           name="about"
// // // // //           value={form.about}
// // // // //           onChange={handleChange}
// // // // //           placeholder="About product"
// // // // //           className="border p-2 rounded-md mt-4 w-full focus:ring-2 focus:ring-blue-500"
// // // // //         />
// // // // //         <input
// // // // //           type="file"
// // // // //           name="photos"
// // // // //           accept="image/*"
// // // // //           multiple
// // // // //           onChange={handlePhotoChange}
// // // // //           className="mt-4"
// // // // //         />

// // // // //         <div className="mt-4 flex gap-4">
// // // // //           <button
// // // // //             type="submit"
// // // // //             disabled={loading}
// // // // //             className={`px-4 py-2 rounded-md shadow transition flex items-center justify-center gap-2 ${
// // // // //               loading ? "bg-gray-400 cursor-not-allowed text-gray-200" : "bg-blue-600 text-white hover:bg-blue-700"
// // // // //             }`}
// // // // //           >
// // // // //             {loading && <Spinner size="4" />}
// // // // //             {loading ? "Processing..." : editingId ? "Update Product" : "Add Product"}
// // // // //           </button>
// // // // //           {editingId && (
// // // // //             <button
// // // // //               type="button"
// // // // //               disabled={loading}
// // // // //               onClick={() => {
// // // // //                 setEditingId(null);
// // // // //                 setForm({ name: "", price: "", about: "" });
// // // // //                 setPhotos([]);
// // // // //               }}
// // // // //               className={`px-4 py-2 rounded-md shadow transition ${
// // // // //                 loading ? "bg-gray-400 cursor-not-allowed" : "bg-gray-400 text-white hover:bg-gray-500"
// // // // //               }`}
// // // // //             >
// // // // //               Cancel
// // // // //             </button>
// // // // //           )}
// // // // //         </div>
// // // // //       </form>

// // // // //       {/* Products Table */}
// // // // //       <div className="bg-white shadow-md rounded-lg overflow-hidden">
// // // // //         <table className="min-w-full border-collapse">
// // // // //           <thead className="bg-gray-200">
// // // // //             <tr>
// // // // //               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Name</th>
// // // // //               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Price</th>
// // // // //               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">About</th>
// // // // //               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Photos</th>
// // // // //               <th className="py-3 px-4 text-sm font-semibold text-gray-700 text-center">Actions</th>
// // // // //             </tr>
// // // // //           </thead>
// // // // //           <tbody>
// // // // //             {products.length > 0 ? (
// // // // //               products.map((p) => (
// // // // //                 <tr key={p._id} className="border-t hover:bg-gray-50">
// // // // //                   <td className="py-2 px-4">{p.name}</td>
// // // // //                   <td className="py-2 px-4">₹{p.price}</td>
// // // // //                   <td className="py-2 px-4">{p.about}</td>
// // // // //                   <td className="py-2 px-4 flex gap-2">
// // // // //                     {p.photos?.map((url, i) => (
// // // // //                       <img
// // // // //                         key={i}
// // // // //                         src={url}
// // // // //                         alt=""
// // // // //                         className="w-12 h-12 rounded object-cover border"
// // // // //                       />
// // // // //                     ))}
// // // // //                   </td>
// // // // //                   <td className="py-2 px-4 text-center flex gap-2 justify-center">
// // // // //                     <button
// // // // //                       onClick={() => handleEdit(p)}
// // // // //                       disabled={loading}
// // // // //                       className={`px-3 py-1 rounded-md text-white flex items-center justify-center gap-1 ${
// // // // //                         loading ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"
// // // // //                       }`}
// // // // //                     >
// // // // //                       {loading && <Spinner size="3" />}
// // // // //                       Edit
// // // // //                     </button>
// // // // //                     <button
// // // // //                       onClick={() => handleDelete(p._id)}
// // // // //                       disabled={deleteId === p._id}
// // // // //                       className={`px-3 py-1 rounded-md text-white flex items-center justify-center gap-1 ${
// // // // //                         deleteId === p._id ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
// // // // //                       }`}
// // // // //                     >
// // // // //                       {deleteId === p._id && <Spinner size="3" />}
// // // // //                       Delete
// // // // //                     </button>
// // // // //                   </td>
// // // // //                 </tr>
// // // // //               ))
// // // // //             ) : (
// // // // //               <tr>
// // // // //                 <td colSpan="5" className="py-4 text-center text-gray-500 italic">
// // // // //                   No products found
// // // // //                 </td>
// // // // //               </tr>
// // // // //             )}
// // // // //           </tbody>
// // // // //         </table>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }




// // // // // src/pages/AdminProducts.jsx
// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "axios";
// // // // import toast from "react-hot-toast";

// // // // // Simple spinner component
// // // // const Spinner = ({ size = "5" }) => (
// // // //   <div
// // // //     className={`w-${size} h-${size} border-2 border-t-transparent border-white rounded-full animate-spin`}
// // // //   ></div>
// // // // );

// // // // export default function AdminProducts() {
// // // //   const [products, setProducts] = useState([]);
// // // //   const [form, setForm] = useState({ name: "", price: "", about: "" });
// // // //   const [photos, setPhotos] = useState([]);
// // // //   const [editingId, setEditingId] = useState(null);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [deleteId, setDeleteId] = useState(null);

// // // //   // ✅ FIX: Function to get correct image URL
// // // //   const getImageUrl = (filename) => {
// // // //     if (!filename) return '';

// // // //     // If it's already a full URL (from old data), use it
// // // //     if (filename.startsWith('http')) return filename;

// // // //     // For new data (just filenames), construct the URL
// // // //     return `http://localhost:5001/uploads/${filename}`;
// // // //   };

// // // //   // Fetch products from backend
// // // //   const fetchProducts = async () => {
// // // //     try {
// // // //       const res = await axios.get("http://localhost:5001/api/admin/products", {
// // // //         headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
// // // //       });
// // // //       setProducts(res.data.products || []);
// // // //       toast.success("Products loaded successfully");
// // // //     } catch (err) {
// // // //       console.error("❌ Fetch products failed:", err.response?.data || err.message);
// // // //       toast.error("Failed to fetch products");
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchProducts();
// // // //   }, []);

// // // //   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
// // // //   const handlePhotoChange = (e) => setPhotos([...e.target.files]);

// // // //   // Add / Update product
// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setLoading(true);
// // // //     try {
// // // //       const data = new FormData();
// // // //       data.append("name", form.name);
// // // //       data.append("price", form.price);
// // // //       data.append("about", form.about);
// // // //       photos.forEach((photo) => data.append("photos", photo));

// // // //       let url = "http://localhost:5001/api/admin/products";
// // // //       let method = "post";

// // // //       if (editingId) {
// // // //         url += `/${editingId}`;
// // // //         method = "put";
// // // //       }

// // // //       await axios({
// // // //         method,
// // // //         url,
// // // //         data,
// // // //         headers: {
// // // //           Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
// // // //           "Content-Type": "multipart/form-data",
// // // //         },
// // // //       });

// // // //       setForm({ name: "", price: "", about: "" });
// // // //       setPhotos([]);
// // // //       setEditingId(null);
// // // //       fetchProducts();
// // // //       toast.success(editingId ? "Product updated!" : "Product added!");
// // // //     } catch (err) {
// // // //       console.error("❌ Submit product failed:", err.response?.data || err.message);
// // // //       toast.error("Failed to save product");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   // Edit product
// // // //   const handleEdit = (p) => {
// // // //     setForm({ name: p.name, price: p.price, about: p.about });
// // // //     setEditingId(p._id);
// // // //     toast.success("Editing product: " + p.name);
// // // //   };

// // // //   // Delete product
// // // //   const handleDelete = async (id) => {
// // // //     if (!window.confirm("Are you sure you want to delete this product?")) return;

// // // //     setDeleteId(id);
// // // //     try {
// // // //       await axios.delete(`http://localhost:5001/api/admin/products/${id}`, {
// // // //         headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
// // // //       });
// // // //       fetchProducts();
// // // //       toast.success("Product deleted successfully");
// // // //     } catch (err) {
// // // //       console.error("❌ Delete product failed:", err.response?.data || err.message);
// // // //       toast.error("Failed to delete product");
// // // //     } finally {
// // // //       setDeleteId(null);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="p-6 bg-gray-100 min-h-screen">
// // // //       <h2 className="text-2xl font-bold mb-6 text-gray-800">🛒 Product Management</h2>

// // // //       {/* Product Form */}
// // // //       <form
// // // //         onSubmit={handleSubmit}
// // // //         encType="multipart/form-data"
// // // //         className="bg-white shadow-md rounded-lg p-6 mb-8"
// // // //       >
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //           <input
// // // //             name="name"
// // // //             value={form.name}
// // // //             onChange={handleChange}
// // // //             placeholder="Product Name"
// // // //             required
// // // //             className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
// // // //           />
// // // //           <input
// // // //             name="price"
// // // //             value={form.price}
// // // //             onChange={handleChange}
// // // //             placeholder="Price"
// // // //             required
// // // //             type="number"
// // // //             className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
// // // //           />
// // // //         </div>
// // // //         <textarea
// // // //           name="about"
// // // //           value={form.about}
// // // //           onChange={handleChange}
// // // //           placeholder="About product"
// // // //           className="border p-2 rounded-md mt-4 w-full focus:ring-2 focus:ring-blue-500"
// // // //         />
// // // //         <input
// // // //           type="file"
// // // //           name="photos"
// // // //           accept="image/*"
// // // //           multiple
// // // //           onChange={handlePhotoChange}
// // // //           className="mt-4"
// // // //         />

// // // //         <div className="mt-4 flex gap-4">
// // // //           <button
// // // //             type="submit"
// // // //             disabled={loading}
// // // //             className={`px-4 py-2 rounded-md shadow transition flex items-center justify-center gap-2 ${
// // // //               loading ? "bg-gray-400 cursor-not-allowed text-gray-200" : "bg-blue-600 text-white hover:bg-blue-700"
// // // //             }`}
// // // //           >
// // // //             {loading && <Spinner size="4" />}
// // // //             {loading ? "Processing..." : editingId ? "Update Product" : "Add Product"}
// // // //           </button>
// // // //           {editingId && (
// // // //             <button
// // // //               type="button"
// // // //               disabled={loading}
// // // //               onClick={() => {
// // // //                 setEditingId(null);
// // // //                 setForm({ name: "", price: "", about: "" });
// // // //                 setPhotos([]);
// // // //                 toast.success("Edit cancelled");
// // // //               }}
// // // //               className={`px-4 py-2 rounded-md shadow transition ${
// // // //                 loading ? "bg-gray-400 cursor-not-allowed" : "bg-gray-400 text-white hover:bg-gray-500"
// // // //               }`}
// // // //             >
// // // //               Cancel
// // // //             </button>
// // // //           )}
// // // //         </div>
// // // //       </form>

// // // //       {/* Products Table */}
// // // //       <div className="bg-white shadow-md rounded-lg overflow-hidden">
// // // //         <table className="min-w-full border-collapse">
// // // //           <thead className="bg-gray-200">
// // // //             <tr>
// // // //               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Name</th>
// // // //               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Price</th>
// // // //               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">About</th>
// // // //               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Photos</th>
// // // //               <th className="py-3 px-4 text-sm font-semibold text-gray-700 text-center">Actions</th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {products.length > 0 ? (
// // // //               products.map((p) => (
// // // //                 <tr key={p._id} className="border-t hover:bg-gray-50">
// // // //                   <td className="py-2 px-4">{p.name}</td>
// // // //                   <td className="py-2 px-4">₹{p.price}</td>
// // // //                   <td className="py-2 px-4">{p.about}</td>
// // // //                   <td className="py-2 px-4 flex gap-2">
// // // //                     {p.photos?.map((filename, i) => (
// // // //                       <img
// // // //                         key={i}
// // // //                         src={getImageUrl(filename)}
// // // //                         alt={`${p.name} ${i + 1}`}
// // // //                         className="w-12 h-12 rounded object-cover border"
// // // //                         onError={(e) => {
// // // //                           console.error("❌ Failed to load image:", filename);
// // // //                           e.target.style.display = 'none';
// // // //                         }}
// // // //                         onLoad={() => console.log("✅ Image loaded:", filename)}
// // // //                       />
// // // //                     ))}
// // // //                   </td>
// // // //                   <td className="py-2 px-4 text-center flex gap-2 justify-center">
// // // //                     <button
// // // //                       onClick={() => handleEdit(p)}
// // // //                       disabled={loading}
// // // //                       className={`px-3 py-1 rounded-md text-white flex items-center justify-center gap-1 ${
// // // //                         loading ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"
// // // //                       }`}
// // // //                     >
// // // //                       {loading && <Spinner size="3" />}
// // // //                       Edit
// // // //                     </button>
// // // //                     <button
// // // //                       onClick={() => handleDelete(p._id)}
// // // //                       disabled={deleteId === p._id}
// // // //                       className={`px-3 py-1 rounded-md text-white flex items-center justify-center gap-1 ${
// // // //                         deleteId === p._id ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
// // // //                       }`}
// // // //                     >
// // // //                       {deleteId === p._id && <Spinner size="3" />}
// // // //                       Delete
// // // //                     </button>
// // // //                   </td>
// // // //                 </tr>
// // // //               ))
// // // //             ) : (
// // // //               <tr>
// // // //                 <td colSpan="5" className="py-4 text-center text-gray-500 italic">
// // // //                   No products found
// // // //                 </td>
// // // //               </tr>
// // // //             )}
// // // //           </tbody>
// // // //         </table>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }   



// // // // src/pages/AdminProducts.jsx
// // // import React, { useEffect, useState } from "react";
// // // import adminAPI from "../api/adminApi"; // ✅ Use your API wrapper
// // // import toast from "react-hot-toast";

// // // // Simple spinner component
// // // const Spinner = ({ size = "5" }) => (
// // //   <div
// // //     className={`w-${size} h-${size} border-2 border-t-transparent border-white rounded-full animate-spin`}
// // //   ></div>
// // // );

// // // export default function AdminProducts() {
// // //   const [products, setProducts] = useState([]);
// // //   const [form, setForm] = useState({ name: "", price: "", about: "" });
// // //   const [photos, setPhotos] = useState([]);
// // //   const [editingId, setEditingId] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [deleteId, setDeleteId] = useState(null);

// // //   // ✅ FIX: Function to get correct image URL
// // //   // const getImageUrl = (filename) => {
// // //   //   if (!filename) return '';

// // //   //   // If it's already a full URL (from old data), use it
// // //   //   if (filename.startsWith('http')) return filename;

// // //   //   // For new data (just filenames), construct the URL
// // //   //   return `http://localhost:5001/uploads/${filename}`;
// // //   // };


// // //    // ✅ FIX: Update the getImageUrl function in AdminProducts.jsx
// // // const getImageUrl = (filename) => {
// // //   if (!filename) return '';

// // //   console.log("🖼️ Processing filename:", filename);

// // //   // If it's already a full URL with double uploads, fix it
// // //   if (filename.includes('/uploads//uploads/')) {
// // //     const fixedFilename = filename.replace('/uploads//uploads/', '/uploads/');
// // //     const url = `http://localhost:5001${fixedFilename}`;
// // //     console.log("🔧 Fixed double uploads URL:", url);
// // //     return url;
// // //   }

// // //   // If it's already a full URL, use it
// // //   if (filename.startsWith('http')) {
// // //     console.log("🔗 Using full URL:", filename);
// // //     return filename;
// // //   }

// // //   // If it starts with /uploads, use as is
// // //   if (filename.startsWith('/uploads/')) {
// // //     const url = `http://localhost:5001${filename}`;
// // //     console.log("📁 Using uploads path:", url);
// // //     return url;
// // //   }

// // //   // If it's just a filename, construct URL
// // //   const url = `http://localhost:5001/uploads/${filename}`;
// // //   console.log("📄 Constructed URL:", url);
// // //   return url;
// // // };

// // //   // ✅ FIX: Use adminAPI instead of direct axios
// // //   const fetchProducts = async () => {
// // //     try {
// // //       const res = await adminAPI.getProducts();
// // //       if (res.success) {
// // //         console.log("📦 Products data:", res.data);
// // //         console.log("🖼️ First product photos:", res.data.products?.[0]?.photos);
// // //         setProducts(res.data.products || []);
// // //         toast.success("Products loaded successfully");
// // //       } else {
// // //         toast.error(res.message || "Failed to fetch products");
// // //       }
// // //     } catch (err) {
// // //       console.error("❌ Fetch products failed:", err);
// // //       toast.error("Failed to fetch products");
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchProducts();
// // //   }, []);

// // //   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
// // //   const handlePhotoChange = (e) => setPhotos([...e.target.files]);

// // //   // ✅ FIX: Use adminAPI for add/update
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     try {
// // //       const data = new FormData();
// // //       data.append("name", form.name);
// // //       data.append("price", form.price);
// // //       data.append("about", form.about);
// // //       photos.forEach((photo) => data.append("photos", photo));

// // //       let res;
// // //       if (editingId) {
// // //         res = await adminAPI.updateProduct(editingId, data);
// // //       } else {
// // //         res = await adminAPI.addProduct(data);
// // //       }

// // //       if (res.success) {
// // //         setForm({ name: "", price: "", about: "" });
// // //         setPhotos([]);
// // //         setEditingId(null);
// // //         fetchProducts();
// // //         toast.success(editingId ? "Product updated!" : "Product added!");
// // //       } else {
// // //         toast.error(res.message || "Failed to save product");
// // //       }
// // //     } catch (err) {
// // //       console.error("❌ Submit product failed:", err);
// // //       toast.error("Failed to save product");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // Edit product
// // //   const handleEdit = (p) => {
// // //     setForm({ name: p.name, price: p.price, about: p.about });
// // //     setEditingId(p._id);
// // //     toast.success("Editing product: " + p.name);
// // //   };

// // //   // ✅ FIX: Use adminAPI for delete
// // //   const handleDelete = async (id) => {
// // //     if (!window.confirm("Are you sure you want to delete this product?")) return;

// // //     setDeleteId(id);
// // //     try {
// // //       const res = await adminAPI.deleteProduct(id);
// // //       if (res.success) {
// // //         fetchProducts();
// // //         toast.success("Product deleted successfully");
// // //       } else {
// // //         toast.error(res.message || "Failed to delete product");
// // //       }
// // //     } catch (err) {
// // //       console.error("❌ Delete product failed:", err);
// // //       toast.error("Failed to delete product");
// // //     } finally {
// // //       setDeleteId(null);
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-6 bg-gray-100 min-h-screen">
// // //       <h2 className="text-2xl font-bold mb-6 text-gray-800">🛒 Product Management</h2>

// // //       {/* Product Form */}
// // //       <form
// // //         onSubmit={handleSubmit}
// // //         encType="multipart/form-data"
// // //         className="bg-white shadow-md rounded-lg p-6 mb-8"
// // //       >
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //           <input
// // //             name="name"
// // //             value={form.name}
// // //             onChange={handleChange}
// // //             placeholder="Product Name"
// // //             required
// // //             className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
// // //             disabled={loading}
// // //           />
// // //           <input
// // //             name="price"
// // //             value={form.price}
// // //             onChange={handleChange}
// // //             placeholder="Price"
// // //             required
// // //             type="number"
// // //             className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
// // //             disabled={loading}
// // //           />
// // //         </div>
// // //         <textarea
// // //           name="about"
// // //           value={form.about}
// // //           onChange={handleChange}
// // //           placeholder="About product"
// // //           className="border p-2 rounded-md mt-4 w-full focus:ring-2 focus:ring-blue-500"
// // //           disabled={loading}
// // //         />
// // //         <input
// // //           type="file"
// // //           name="photos"
// // //           accept="image/*"
// // //           multiple
// // //           onChange={handlePhotoChange}
// // //           className="mt-4"
// // //           disabled={loading}
// // //         />

// // //         {/* Show selected files */}
// // //         {photos.length > 0 && (
// // //           <div className="mt-2 text-sm text-gray-600">
// // //             Selected: {photos.map(p => p.name).join(', ')}
// // //           </div>
// // //         )}

// // //         <div className="mt-4 flex gap-4">
// // //           <button
// // //             type="submit"
// // //             disabled={loading}
// // //             className={`px-4 py-2 rounded-md shadow transition flex items-center justify-center gap-2 ${
// // //               loading ? "bg-gray-400 cursor-not-allowed text-gray-200" : "bg-blue-600 text-white hover:bg-blue-700"
// // //             }`}
// // //           >
// // //             {loading && <Spinner size="4" />}
// // //             {loading ? "Processing..." : editingId ? "Update Product" : "Add Product"}
// // //           </button>
// // //           {editingId && (
// // //             <button
// // //               type="button"
// // //               disabled={loading}
// // //               onClick={() => {
// // //                 setEditingId(null);
// // //                 setForm({ name: "", price: "", about: "" });
// // //                 setPhotos([]);
// // //                 toast.success("Edit cancelled");
// // //               }}
// // //               className={`px-4 py-2 rounded-md shadow transition ${
// // //                 loading ? "bg-gray-400 cursor-not-allowed" : "bg-gray-400 text-white hover:bg-gray-500"
// // //               }`}
// // //             >
// // //               Cancel
// // //             </button>
// // //           )}
// // //         </div>
// // //       </form>

// // //       {/* Products Table */}
// // //       <div className="bg-white shadow-md rounded-lg overflow-hidden">
// // //         <table className="min-w-full border-collapse">
// // //           <thead className="bg-gray-200">
// // //             <tr>
// // //               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Name</th>
// // //               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Price</th>
// // //               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">About</th>
// // //               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Photos</th>
// // //               <th className="py-3 px-4 text-sm font-semibold text-gray-700 text-center">Actions</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {products.length > 0 ? (
// // //               products.map((p) => (
// // //                 <tr key={p._id} className="border-t hover:bg-gray-50">
// // //                   <td className="py-2 px-4">{p.name}</td>
// // //                   <td className="py-2 px-4">₹{p.price}</td>
// // //                   <td className="py-2 px-4">{p.about}</td>
// // //                   <td className="py-2 px-4">
// // //                     <div className="flex gap-2 flex-wrap">
// // //                       {p.photos && p.photos.length > 0 ? (
// // //                         p.photos.map((filename, i) => {
// // //                           const imageUrl = getImageUrl(filename);
// // //                           return (
// // //                             <div key={i} className="relative">
// // //                               <img
// // //                                 src={imageUrl}
// // //                                 alt={`${p.name} ${i + 1}`}
// // //                                 className="w-12 h-12 rounded object-cover border"
// // //                                 onError={(e) => {
// // //                                   console.error("❌ Failed to load image:", imageUrl);
// // //                                   e.target.style.display = 'none';
// // //                                   // Show error indicator
// // //                                   e.target.parentElement.innerHTML = `
// // //                                     <div class="w-12 h-12 bg-red-100 border border-red-300 rounded flex items-center justify-center">
// // //                                       <span class="text-red-500 text-xs">❌</span>
// // //                                     </div>
// // //                                   `;
// // //                                 }}
// // //                                 onLoad={() => console.log("✅ Image loaded:", imageUrl)}
// // //                               />
// // //                             </div>
// // //                           );
// // //                         })
// // //                       ) : (
// // //                         <span className="text-gray-400 text-sm">No images</span>
// // //                       )}
// // //                     </div>
// // //                   </td>
// // //                   <td className="py-2 px-4 text-center">
// // //                     <div className="flex gap-2 justify-center">
// // //                       <button
// // //                         onClick={() => handleEdit(p)}
// // //                         disabled={loading}
// // //                         className={`px-3 py-1 rounded-md text-white flex items-center justify-center gap-1 ${
// // //                           loading ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"
// // //                         }`}
// // //                       >
// // //                         {loading && <Spinner size="3" />}
// // //                         Edit
// // //                       </button>
// // //                       <button
// // //                         onClick={() => handleDelete(p._id)}
// // //                         disabled={deleteId === p._id}
// // //                         className={`px-3 py-1 rounded-md text-white flex items-center justify-center gap-1 ${
// // //                           deleteId === p._id ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
// // //                         }`}
// // //                       >
// // //                         {deleteId === p._id && <Spinner size="3" />}
// // //                         Delete
// // //                       </button>
// // //                     </div>
// // //                   </td>
// // //                 </tr>
// // //               ))
// // //             ) : (
// // //               <tr>
// // //                 <td colSpan="5" className="py-4 text-center text-gray-500 italic">
// // //                   {loading ? "Loading products..." : "No products found"}
// // //                 </td>
// // //               </tr>
// // //             )}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // // src/pages/AdminProducts.jsx
// // import React, { useEffect, useState } from "react";
// // import adminAPI from "../api/adminApi";
// // import toast from "react-hot-toast";

// // // Simple spinner component
// // const Spinner = ({ size = "5" }) => (
// //   <div
// //     className={`w-${size} h-${size} border-2 border-t-transparent border-white rounded-full animate-spin`}
// //   ></div>
// // );

// // export default function AdminProducts() {
// //   const [products, setProducts] = useState([]);
// //   const [form, setForm] = useState({ name: "", price: "", about: "" });
// //   const [photos, setPhotos] = useState([]);
// //   const [editingId, setEditingId] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [deleteId, setDeleteId] = useState(null);

// //   // ✅ FIXED: Better image URL function
// //   const getImageUrl = (filename) => {
// //     if (!filename) return '';

// //     console.log("🖼️ Processing filename:", filename);

// //     // Fix double uploads issue
// //     if (filename.includes('/uploads//uploads/')) {
// //       const fixedFilename = filename.replace('/uploads//uploads/', '/uploads/');
// //       const url = `http://localhost:5001${fixedFilename}`;
// //       console.log("🔧 Fixed double uploads URL:", url);
// //       return url;
// //     }

// //     // If it's already a full URL, use it
// //     if (filename.startsWith('http')) {
// //       console.log("🔗 Using full URL:", filename);
// //       return filename;
// //     }

// //     // If it starts with /uploads, use as is
// //     if (filename.startsWith('/uploads/')) {
// //       const url = `http://localhost:5001${filename}`;
// //       console.log("📁 Using uploads path:", url);
// //       return url;
// //     }

// //     // If it's just a filename, construct URL
// //     const url = `http://localhost:5001/uploads/${filename}`;
// //     console.log("📄 Constructed URL:", url);
// //     return url;
// //   };

// //   // Fetch products
// //   const fetchProducts = async () => {
// //     try {
// //       const res = await adminAPI.getProducts();
// //       if (res.success) {
// //         console.log("📦 Products data:", res.data);
// //         console.log("🖼️ First product photos:", res.data.products?.[0]?.photos);
// //         setProducts(res.data.products || []);
// //         toast.success("Products loaded successfully");
// //       } else {
// //         toast.error(res.message || "Failed to fetch products");
// //       }
// //     } catch (err) {
// //       console.error("❌ Fetch products failed:", err);
// //       toast.error("Failed to fetch products");
// //     }
// //   };

// //   useEffect(() => {
// //     fetchProducts();
// //   }, []);

// //   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
// //   const handlePhotoChange = (e) => setPhotos([...e.target.files]);

// //   // Add / Update product
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     try {
// //       const data = new FormData();
// //       data.append("name", form.name);
// //       data.append("price", form.price);
// //       data.append("about", form.about);
// //       photos.forEach((photo) => data.append("photos", photo));

// //       let res;
// //       if (editingId) {
// //         res = await adminAPI.updateProduct(editingId, data);
// //       } else {
// //         res = await adminAPI.addProduct(data);
// //       }

// //       if (res.success) {
// //         setForm({ name: "", price: "", about: "" });
// //         setPhotos([]);
// //         setEditingId(null);
// //         fetchProducts();
// //         toast.success(editingId ? "Product updated!" : "Product added!");
// //       } else {
// //         toast.error(res.message || "Failed to save product");
// //       }
// //     } catch (err) {
// //       console.error("❌ Submit product failed:", err);
// //       toast.error("Failed to save product");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Edit product
// //   const handleEdit = (p) => {
// //     setForm({ name: p.name, price: p.price, about: p.about });
// //     setEditingId(p._id);
// //     toast.success("Editing product: " + p.name);
// //   };

// //   // Delete product
// //   const handleDelete = async (id) => {
// //     if (!window.confirm("Are you sure you want to delete this product?")) return;

// //     setDeleteId(id);
// //     try {
// //       const res = await adminAPI.deleteProduct(id);
// //       if (res.success) {
// //         fetchProducts();
// //         toast.success("Product deleted successfully");
// //       } else {
// //         toast.error(res.message || "Failed to delete product");
// //       }
// //     } catch (err) {
// //       console.error("❌ Delete product failed:", err);
// //       toast.error("Failed to delete product");
// //     } finally {
// //       setDeleteId(null);
// //     }
// //   };

// //   return (
// //     <div className="p-6 bg-gray-100 min-h-screen">
// //       <h2 className="text-2xl font-bold mb-6 text-gray-800">🛒 Product Management</h2>

// //       {/* Product Form */}
// //       <form
// //         onSubmit={handleSubmit}
// //         encType="multipart/form-data"
// //         className="bg-white shadow-md rounded-lg p-6 mb-8"
// //       >
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           <input
// //             name="name"
// //             value={form.name}
// //             onChange={handleChange}
// //             placeholder="Product Name"
// //             required
// //             className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
// //             disabled={loading}
// //           />
// //           <input
// //             name="price"
// //             value={form.price}
// //             onChange={handleChange}
// //             placeholder="Price"
// //             required
// //             type="number"
// //             className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
// //             disabled={loading}
// //           />
// //         </div>
// //         <textarea
// //           name="about"
// //           value={form.about}
// //           onChange={handleChange}
// //           placeholder="About product"
// //           className="border p-2 rounded-md mt-4 w-full focus:ring-2 focus:ring-blue-500"
// //           disabled={loading}
// //         />
// //         <input
// //           type="file"
// //           name="photos"
// //           accept="image/*"
// //           multiple
// //           onChange={handlePhotoChange}
// //           className="mt-4"
// //           disabled={loading}
// //         />

// //         {/* Show selected files */}
// //         {photos.length > 0 && (
// //           <div className="mt-2 text-sm text-gray-600">
// //             Selected: {photos.map(p => p.name).join(', ')}
// //           </div>
// //         )}

// //         <div className="mt-4 flex gap-4">
// //           <button
// //             type="submit"
// //             disabled={loading}
// //             className={`px-4 py-2 rounded-md shadow transition flex items-center justify-center gap-2 ${
// //               loading ? "bg-gray-400 cursor-not-allowed text-gray-200" : "bg-blue-600 text-white hover:bg-blue-700"
// //             }`}
// //           >
// //             {loading && <Spinner size="4" />}
// //             {loading ? "Processing..." : editingId ? "Update Product" : "Add Product"}
// //           </button>
// //           {editingId && (
// //             <button
// //               type="button"
// //               disabled={loading}
// //               onClick={() => {
// //                 setEditingId(null);
// //                 setForm({ name: "", price: "", about: "" });
// //                 setPhotos([]);
// //                 toast.success("Edit cancelled");
// //               }}
// //               className={`px-4 py-2 rounded-md shadow transition ${
// //                 loading ? "bg-gray-400 cursor-not-allowed" : "bg-gray-400 text-white hover:bg-gray-500"
// //               }`}
// //             >
// //               Cancel
// //             </button>
// //           )}
// //         </div>
// //       </form>

// //       {/* Products Table */}
// //       <div className="bg-white shadow-md rounded-lg overflow-hidden">
// //         <table className="min-w-full border-collapse">
// //           <thead className="bg-gray-200">
// //             <tr>
// //               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Name</th>
// //               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Price</th>
// //               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">About</th>
// //               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Photos</th>
// //               <th className="py-3 px-4 text-sm font-semibold text-gray-700 text-center">Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {products.length > 0 ? (
// //               products.map((p) => (
// //                 <tr key={p._id} className="border-t hover:bg-gray-50">
// //                   <td className="py-2 px-4">{p.name}</td>
// //                   <td className="py-2 px-4">₹{p.price}</td>
// //                   <td className="py-2 px-4">{p.about}</td>
// //                   <td className="py-2 px-4">
// //                     <div className="flex gap-2 flex-wrap">
// //                       {p.photos && p.photos.length > 0 ? (
// //                         p.photos.map((filename, i) => {
// //                           const imageUrl = getImageUrl(filename);
// //                           return (
// //                             <div key={i} className="relative">
// //                               {/* ✅ FIXED: Simple image with safe error handling */}
// //                               <img
// //                                 src={imageUrl}
// //                                 alt={`${p.name} ${i + 1}`}
// //                                 className="w-12 h-12 rounded object-cover border"
// //                                 onError={(e) => {
// //                                   console.error("❌ Failed to load image:", imageUrl);
// //                                   // ✅ SAFE: Just hide the image, no innerHTML manipulation
// //                                   e.target.style.display = 'none';
// //                                 }}
// //                                 onLoad={() => console.log("✅ Image loaded:", imageUrl)}
// //                               />
// //                             </div>
// //                           );
// //                         })
// //                       ) : (
// //                         <span className="text-gray-400 text-sm">No images</span>
// //                       )}
// //                     </div>
// //                   </td>
// //                   <td className="py-2 px-4 text-center">
// //                     <div className="flex gap-2 justify-center">
// //                       <button
// //                         onClick={() => handleEdit(p)}
// //                         disabled={loading}
// //                         className={`px-3 py-1 rounded-md text-white flex items-center justify-center gap-1 ${
// //                           loading ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"
// //                         }`}
// //                       >
// //                         {loading && <Spinner size="3" />}
// //                         Edit
// //                       </button>
// //                       <button
// //                         onClick={() => handleDelete(p._id)}
// //                         disabled={deleteId === p._id}
// //                         className={`px-3 py-1 rounded-md text-white flex items-center justify-center gap-1 ${
// //                           deleteId === p._id ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
// //                         }`}
// //                       >
// //                         {deleteId === p._id && <Spinner size="3" />}
// //                         Delete
// //                       </button>
// //                     </div>
// //                   </td>
// //                 </tr>
// //               ))
// //             ) : (
// //               <tr>
// //                 <td colSpan="5" className="py-4 text-center text-gray-500 italic">
// //                   {loading ? "Loading products..." : "No products found"}
// //                 </td>
// //               </tr>
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }  


// // src/pages/AdminProducts.jsx
// import React, { useEffect, useState } from "react";
// import adminAPI from "../api/adminApi";
// import toast from "react-hot-toast";

// // Simple spinner component
// const Spinner = ({ size = "5" }) => (
//   <div
//     className={`w-${size} h-${size} border-2 border-t-transparent border-white rounded-full animate-spin`}
//   ></div>
// );

// export default function AdminProducts() {
//   const [products, setProducts] = useState([]);
//   const [form, setForm] = useState({ name: "", price: "", about: "" });
//   const [photos, setPhotos] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [deleteId, setDeleteId] = useState(null);

//   // ✅ UPDATED: Use API image proxy route to avoid CORS issues
//   const getImageUrl = (filename) => {
//     if (!filename) return '';

//     console.log("🖼️ Processing filename:", filename);

//     // Extract just the filename from any path
//     let cleanFilename = filename;

//     // If it's a full URL or path, extract just the filename
//     if (filename.includes('/')) {
//       cleanFilename = filename.split('/').pop();
//     }

//     // Use the API image proxy route (added to backend)
//     const url = `http://localhost:5001/api/images/${cleanFilename}`;
//     console.log("🔗 Using API image URL:", url);
//     return url;
//   };

//   // Fetch products
//   const fetchProducts = async () => {
//     try {
//       const res = await adminAPI.getProducts();
//       if (res.success) {
//         console.log("📦 Products data:", res.data);

//         // Debug: Check all products' photos
//         res.data.products?.forEach((product, index) => {
//           console.log(`🖼️ Product ${index}: ${product.name}`, {
//             photos: product.photos,
//             count: product.photos?.length || 0
//           });
//         });

//         setProducts(res.data.products || []);
//         toast.success("Products loaded successfully");
//       } else {
//         toast.error(res.message || "Failed to fetch products");
//       }
//     } catch (err) {
//       console.error("❌ Fetch products failed:", err);
//       toast.error("Failed to fetch products");
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
//   const handlePhotoChange = (e) => setPhotos([...e.target.files]);

//   // Add / Update product
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const data = new FormData();
//       data.append("name", form.name);
//       data.append("price", form.price);
//       data.append("about", form.about);
//       photos.forEach((photo) => data.append("photos", photo));

//       let res;
//       if (editingId) {
//         res = await adminAPI.updateProduct(editingId, data);
//       } else {
//         res = await adminAPI.addProduct(data);
//       }

//       if (res.success) {
//         setForm({ name: "", price: "", about: "" });
//         setPhotos([]);
//         setEditingId(null);
//         fetchProducts();
//         toast.success(editingId ? "Product updated!" : "Product added!");
//       } else {
//         toast.error(res.message || "Failed to save product");
//       }
//     } catch (err) {
//       console.error("❌ Submit product failed:", err);
//       toast.error("Failed to save product");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Edit product
//   const handleEdit = (p) => {
//     setForm({ name: p.name, price: p.price, about: p.about });
//     setEditingId(p._id);
//     toast.success("Editing product: " + p.name);
//   };

//   // Delete product
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this product?")) return;

//     setDeleteId(id);
//     try {
//       const res = await adminAPI.deleteProduct(id);
//       if (res.success) {
//         fetchProducts();
//         toast.success("Product deleted successfully");
//       } else {
//         toast.error(res.message || "Failed to delete product");
//       }
//     } catch (err) {
//       console.error("❌ Delete product failed:", err);
//       toast.error("Failed to delete product");
//     } finally {
//       setDeleteId(null);
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">🛒 Product Management</h2>

//       {/* Product Form */}
//       <form
//         onSubmit={handleSubmit}
//         encType="multipart/form-data"
//         className="bg-white shadow-md rounded-lg p-6 mb-8"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Product Name"
//             required
//             className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
//             disabled={loading}
//           />
//           <input
//             name="price"
//             value={form.price}
//             onChange={handleChange}
//             placeholder="Price"
//             required
//             type="number"
//             className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500"
//             disabled={loading}
//           />
//         </div>
//         <textarea
//           name="about"
//           value={form.about}
//           onChange={handleChange}
//           placeholder="About product"
//           className="border p-2 rounded-md mt-4 w-full focus:ring-2 focus:ring-blue-500"
//           disabled={loading}
//         />
//         <input
//           type="file"
//           name="photos"
//           accept="image/*"
//           multiple
//           onChange={handlePhotoChange}
//           className="mt-4"
//           disabled={loading}
//         />

//         {/* Show selected files */}
//         {photos.length > 0 && (
//           <div className="mt-2 text-sm text-gray-600">
//             Selected: {photos.map(p => p.name).join(', ')}
//           </div>
//         )}

//         <div className="mt-4 flex gap-4">
//           <button
//             type="submit"
//             disabled={loading}
//             className={`px-4 py-2 rounded-md shadow transition flex items-center justify-center gap-2 ${
//               loading ? "bg-gray-400 cursor-not-allowed text-gray-200" : "bg-blue-600 text-white hover:bg-blue-700"
//             }`}
//           >
//             {loading && <Spinner size="4" />}
//             {loading ? "Processing..." : editingId ? "Update Product" : "Add Product"}
//           </button>
//           {editingId && (
//             <button
//               type="button"
//               disabled={loading}
//               onClick={() => {
//                 setEditingId(null);
//                 setForm({ name: "", price: "", about: "" });
//                 setPhotos([]);
//                 toast.success("Edit cancelled");
//               }}
//               className={`px-4 py-2 rounded-md shadow transition ${
//                 loading ? "bg-gray-400 cursor-not-allowed" : "bg-gray-400 text-white hover:bg-gray-500"
//               }`}
//             >
//               Cancel
//             </button>
//           )}
//         </div>
//       </form>

//       {/* Products Table */}
//       <div className="bg-white shadow-md rounded-lg overflow-hidden">
//         <table className="min-w-full border-collapse">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Name</th>
//               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Price</th>
//               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">About</th>
//               <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Photos</th>
//               <th className="py-3 px-4 text-sm font-semibold text-gray-700 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.length > 0 ? (
//               products.map((p) => (
//                 <tr key={p._id} className="border-t hover:bg-gray-50">
//                   <td className="py-2 px-4">{p.name}</td>
//                   <td className="py-2 px-4">₹{p.price}</td>
//                   <td className="py-2 px-4">{p.about}</td>
//                   <td className="py-2 px-4">
//                     <div className="flex gap-2 flex-wrap">
//                       {p.photos && p.photos.length > 0 ? (
//                         p.photos.map((filename, i) => {
//                           const imageUrl = getImageUrl(filename);
//                           return (
//                             <div key={i} className="relative group">
//                               {/* ✅ UPDATED: Image with better error handling */}
//                               <img
//                                 src={imageUrl}
//                                 alt={`${p.name} ${i + 1}`}
//                                 className="w-12 h-12 rounded object-cover border hover:scale-105 transition-transform"
//                                 onError={(e) => {
//                                   console.error("❌ Failed to load image:", imageUrl);
//                                   e.target.style.display = 'none';
//                                   // Show filename on hover for debugging
//                                   e.target.title = `Failed: ${filename}`;
//                                 }}
//                                 onLoad={() => console.log("✅ Image loaded successfully:", imageUrl)}
//                               />
//                               {/* Tooltip with filename */}
//                               <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs text-center py-1 hidden group-hover:block">
//                                 {filename.split('/').pop()}
//                               </div>
//                             </div>
//                           );
//                         })
//                       ) : (
//                         <span className="text-gray-400 text-sm">No images</span>
//                       )}
//                     </div>
//                   </td>
//                   <td className="py-2 px-4 text-center">
//                     <div className="flex gap-2 justify-center">
//                       <button
//                         onClick={() => handleEdit(p)}
//                         disabled={loading}
//                         className={`px-3 py-1 rounded-md text-white flex items-center justify-center gap-1 ${
//                           loading ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"
//                         }`}
//                       >
//                         {loading && <Spinner size="3" />}
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(p._id)}
//                         disabled={deleteId === p._id}
//                         className={`px-3 py-1 rounded-md text-white flex items-center justify-center gap-1 ${
//                           deleteId === p._id ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
//                         }`}
//                       >
//                         {deleteId === p._id && <Spinner size="3" />}
//                         Delete
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="py-4 text-center text-gray-500 italic">
//                   {loading ? "Loading products..." : "No products found"}
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


// src/pages/AdminProducts.jsx
import React, { useEffect, useState } from "react";
import adminAPI from "../api/adminApi";
import toast from "react-hot-toast";

// Professional spinner component
const Spinner = ({ size = "6" }) => (
  <div className={`flex justify-center items-center`}>
    <div className={`animate-spin rounded-full h-${size} w-${size} border-b-2 border-blue-600`}></div>
  </div>
);

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", about: "" });
  const [photos, setPhotos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Image URL function
  const getImageUrl = (filename) => {
    if (!filename) return '';

    let cleanFilename = filename;
    if (filename.includes('/')) {
      cleanFilename = filename.split('/').pop();
    }

    return `http://localhost:5001/api/images/${cleanFilename}`;
  };

  // Filter products based on search
  const filteredProducts = products.filter(product =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.about?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fetch products
  const fetchProducts = async () => {
    try {
      const res = await adminAPI.getProducts();
      if (res.success) {
        setProducts(res.data || []);
        toast.success("Products loaded successfully");
      } else {
        toast.error(res.message || "Failed to fetch products");
      }
    } catch (err) {
      console.error("❌ Fetch products failed:", err);
      toast.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handlePhotoChange = (e) => setPhotos([...e.target.files]);

  // Add / Update product
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("price", form.price);
      data.append("about", form.about);
      photos.forEach((photo) => data.append("photos", photo));

      let res;
      if (editingId) {
        res = await adminAPI.updateProduct(editingId, data);
      } else {
        res = await adminAPI.addProduct(data);
      }

      if (res.success) {
        setForm({ name: "", price: "", about: "" });
        setPhotos([]);
        setEditingId(null);
        fetchProducts();
        toast.success(editingId ? "Product updated successfully!" : "Product added successfully!");
      } else {
        toast.error(res.message || "Failed to save product");
      }
    } catch (err) {
      console.error("❌ Submit product failed:", err);
      toast.error("Failed to save product");
    } finally {
      setLoading(false);
    }
  };

  // Edit product
  const handleEdit = (p) => {
    setForm({ name: p.name, price: p.price, about: p.about });
    setEditingId(p._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Delete product
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product? This action cannot be undone.")) return;

    setDeleteId(id);
    try {
      const res = await adminAPI.deleteProduct(id);
      if (res.success) {
        fetchProducts();
        toast.success("Product deleted successfully");
      } else {
        toast.error(res.message || "Failed to delete product");
      }
    } catch (err) {
      console.error("❌ Delete product failed:", err);
      toast.error("Failed to delete product");
    } finally {
      setDeleteId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>
              <p className="mt-2 text-sm text-gray-600">
                Manage your product catalog, inventory, and pricing
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Total Products</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{products.length}</dd>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">With Images</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {products.filter(p => p.photos && p.photos.length > 0).length}
              </dd>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">Active</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{products.length}</dd>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Form */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-xl rounded-2xl border border-gray-200">
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  {editingId ? "Update Product" : "Add New Product"}
                </h3>
              </div>
              <form onSubmit={handleSubmit} encType="multipart/form-data" className="p-6 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter product name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                    Price (₹) *
                  </label>
                  <input
                    id="price"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="0.00"
                    required
                    type="number"
                    min="0"
                    step="0.01"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    id="about"
                    name="about"
                    value={form.about}
                    onChange={handleChange}
                    placeholder="Describe the product features and benefits..."
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-none"
                  />
                </div>

                <div>
                  <label htmlFor="photos" className="block text-sm font-medium text-gray-700 mb-2">
                    Product Images
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 transition duration-200">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="photos" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                          <span>Upload images</span>
                          <input
                            id="photos"
                            name="photos"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handlePhotoChange}
                            className="sr-only"
                            disabled={loading}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB each</p>
                    </div>
                  </div>
                </div>

                {/* Selected files preview */}
                {photos.length > 0 && (
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-blue-800 mb-2">Selected files:</p>
                    <div className="text-sm text-blue-700">
                      {photos.map((photo, index) => (
                        <div key={index} className="flex items-center space-x-2 mb-1">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                          </svg>
                          <span>{photo.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex space-x-3 pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 font-medium flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <Spinner size="4" />
                        <span className="ml-2">Processing...</span>
                      </>
                    ) : editingId ? (
                      "Update Product"
                    ) : (
                      "Add Product"
                    )}
                  </button>

                  {editingId && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingId(null);
                        setForm({ name: "", price: "", about: "" });
                        setPhotos([]);
                        toast.success("Edit cancelled");
                      }}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-200 font-medium"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Products Table */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-xl rounded-2xl border border-gray-200">
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Product Catalog</h3>
                <p className="mt-1 text-sm text-gray-600">
                  {filteredProducts.length} of {products.length} products
                </p>
              </div>

              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Images</th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((product) => (
                        <tr key={product._id} className="hover:bg-gray-50 transition duration-150">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{product.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-semibold text-green-600">₹{product.price}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-600 max-w-xs truncate" title={product.about}>
                              {product.about || "No description"}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex -space-x-2">
                              {product.photos && product.photos.length > 0 ? (
                                product.photos.slice(0, 3).map((filename, i) => (
                                  <div key={i} className="relative">
                                    <img
                                      src={getImageUrl(filename)}
                                      alt={`${product.name} ${i + 1}`}
                                      className="w-10 h-10 rounded-lg border-2 border-white object-cover shadow-sm"
                                      onError={(e) => {
                                        e.target.style.display = 'none';
                                      }}
                                    />
                                  </div>
                                ))
                              ) : (
                                <span className="text-xs text-gray-400 italic">No images</span>
                              )}
                              {product.photos && product.photos.length > 3 && (
                                <div className="w-10 h-10 rounded-lg bg-gray-100 border-2 border-white flex items-center justify-center shadow-sm">
                                  <span className="text-xs font-medium text-gray-600">+{product.photos.length - 3}</span>
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end space-x-2">
                              <button
                                onClick={() => handleEdit(product)}
                                disabled={loading}
                                className="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-md text-sm font-medium transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(product._id)}
                                disabled={deleteId === product._id}
                                className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-md text-sm font-medium transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                {deleteId === product._id ? <Spinner size="4" /> : "Delete"}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="px-6 py-12 text-center">
                          <div className="text-gray-400">
                            <svg className="mx-auto h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                            <p className="text-lg font-medium text-gray-900 mb-1">No products found</p>
                            <p className="text-sm">
                              {searchTerm ? "Try adjusting your search terms" : "Get started by adding your first product"}
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}