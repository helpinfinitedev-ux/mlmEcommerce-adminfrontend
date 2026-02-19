// // // // // import React, { useEffect, useState } from 'react';
// // // // // import  adminAPI from '../api/adminApi';
// // // // // import { 
// // // // //   TruckIcon, 
// // // // //   CheckCircleIcon, 
// // // // //   XCircleIcon, 
// // // // //   ClockIcon,
// // // // //   ExclamationTriangleIcon,
// // // // //   CurrencyDollarIcon
// // // // // } from '@heroicons/react/24/outline';

// // // // // export default function AdminOrders() {
// // // // //   const [orders, setOrders] = useState([]);
// // // // //   const [statusEdits, setStatusEdits] = useState({});
// // // // //   const [expandedOrder, setExpandedOrder] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState(null);

// // // // //   useEffect(() => {
// // // // //     fetchOrders();
// // // // //   }, []);

// // // // //   // const fetchOrders = async () => {
// // // // //   //   try {
// // // // //   //     setLoading(true);
// // // // //   //     setError(null);
// // // // //   //     const res = await adminAPI.getOrders();
// // // // //   //     setOrders(res.orders || []);
// // // // //   //   } catch (error) {
// // // // //   //     console.error('Error fetching orders:', error);
// // // // //   //     setError('Failed to load orders');
// // // // //   //   } finally {
// // // // //   //     setLoading(false);
// // // // //   //   }
// // // // //   // };

// // // // //   const fetchOrders = async () => {
// // // // //   try {
// // // // //     setLoading(true);
// // // // //     setError(null);

// // // // //     const res = await adminAPI.getOrders();
// // // // //     console.log("📦 Orders API Response:", res);

// // // // //     // ✅ अब safe check
// // // // //     if (Array.isArray(res)) {
// // // // //       setOrders(res);
// // // // //     } else if (res.orders && Array.isArray(res.orders)) {
// // // // //       setOrders(res.orders);
// // // // //     } else {
// // // // //       setOrders([]);
// // // // //     }
// // // // //   } catch (error) {
// // // // //     console.error("Error fetching orders:", error);
// // // // //     setError("Failed to load orders");
// // // // //     setOrders([]);
// // // // //   } finally {
// // // // //     setLoading(false);
// // // // //   }
// // // // // };


// // // // //   const handleEditChange = (orderId, field, value) => {
// // // // //     setStatusEdits(prev => ({
// // // // //       ...prev,
// // // // //       [orderId]: {
// // // // //         ...prev[orderId],
// // // // //         [field]: value
// // // // //       }
// // // // //     }));
// // // // //   };

// // // // //   // const handleSave = async (orderId) => {
// // // // //   //   try {
// // // // //   //     const edit = statusEdits[orderId];
// // // // //   //     if (!edit) return;
      
// // // // //   //     await adminAPI.updateOrderStatuses(orderId, edit);
// // // // //   //     setStatusEdits(prev => ({ ...prev, [orderId]: {} }));
// // // // //   //     fetchOrders();
// // // // //   //   } catch (error) {
// // // // //   //     console.error('Error updating order:', error);
// // // // //   //     alert('Failed to update order status');
// // // // //   //   }

// // // // //   const handleSave = async (orderId) => {
// // // // //   try {
// // // // //     const edit = statusEdits[orderId];
// // // // //     if (!edit) return;

// // // // //     // if shipping status badaln k ly call kkro 
// // // // //     if (edit.shippingStatus) {
// // // // //       await adminAPI.updateOrderStatus(orderId, edit.shippingStatus);
// // // // //     }

// // // // //     // if payment status  badalne k ly call kro
// // // // //     if (edit.paymentStatus) {
// // // // //       await adminAPI.updatePaymentStatus(orderId, edit.paymentStatus);
// // // // //     }

// // // // //     setStatusEdits(prev => ({ ...prev, [orderId]: {} }));
// // // // //     fetchOrders();
// // // // //   } catch (error) {
// // // // //     console.error('Error updating order:', error);
// // // // //     alert('Failed to update order status');
// // // // //   }
// // // // // };


// // // // //   const toggleOrderDetails = (orderId) => {
// // // // //     setExpandedOrder(expandedOrder === orderId ? null : orderId);
// // // // //   };

// // // // //   const getStatusIcon = (status) => {
// // // // //     switch (status) {
// // // // //       case 'Delivered':
// // // // //         return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
// // // // //       case 'Shipped':
// // // // //         return <TruckIcon className="h-5 w-5 text-blue-500" />;
// // // // //       case 'Processing':
// // // // //         return <ClockIcon className="h-5 w-5 text-yellow-500" />;
// // // // //       case 'Cancelled':
// // // // //         return <XCircleIcon className="h-5 w-5 text-red-500" />;
// // // // //       default:
// // // // //         return <ClockIcon className="h-5 w-5 text-gray-500" />;
// // // // //     }
// // // // //   };

// // // // //   const getPaymentStatusIcon = (status) => {
// // // // //     switch (status) {
// // // // //       case 'Completed':
// // // // //         return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
// // // // //       case 'Pending':
// // // // //         return <ClockIcon className="h-5 w-5 text-yellow-500" />;
// // // // //       case 'Processing':
// // // // //         return <ClockIcon className="h-5 w-5 text-blue-500" />;
// // // // //       case 'Failed':
// // // // //         return <XCircleIcon className="h-5 w-5 text-red-500" />;
// // // // //       case 'Refunded':
// // // // //         return <ExclamationTriangleIcon className="h-5 w-5 text-orange-500" />;
// // // // //       default:
// // // // //         return <ClockIcon className="h-5 w-5 text-gray-500" />;
// // // // //     }
// // // // //   };

// // // // //   const getStatusColor = (status) => {
// // // // //     switch (status) {
// // // // //       case 'Delivered':
// // // // //         return 'bg-green-100 text-green-800';
// // // // //       case 'Shipped':
// // // // //         return 'bg-blue-100 text-blue-800';
// // // // //       case 'Processing':
// // // // //         return 'bg-yellow-100 text-yellow-800';
// // // // //       case 'Cancelled':
// // // // //         return 'bg-red-100 text-red-800';
// // // // //       default:
// // // // //         return 'bg-gray-100 text-gray-800';
// // // // //     }
// // // // //   };

// // // // //   const getPaymentStatusColor = (status) => {
// // // // //     switch (status) {
// // // // //       case 'Completed':
// // // // //         return 'bg-green-100 text-green-800';
// // // // //       case 'Pending':
// // // // //         return 'bg-yellow-100 text-yellow-800';
// // // // //       case 'Processing':
// // // // //         return 'bg-blue-100 text-blue-800';
// // // // //       case 'Failed':
// // // // //         return 'bg-red-100 text-red-800';
// // // // //       case 'Refunded':
// // // // //         return 'bg-orange-100 text-orange-800';
// // // // //       default:
// // // // //         return 'bg-gray-100 text-gray-800';
// // // // //     }
// // // // //   };

// // // // //   if (loading) {
// // // // //     return (
// // // // //       <div className="p-6">
// // // // //         <div className="flex items-center justify-center h-64">
// // // // //           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
// // // // //           <span className="ml-2">Loading orders...</span>
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   if (error) {
// // // // //     return (
// // // // //       <div className="p-6">
// // // // //         <div className="bg-red-50 border border-red-200 rounded-md p-4">
// // // // //           <div className="flex">
// // // // //             <XCircleIcon className="h-5 w-5 text-red-400" />
// // // // //             <div className="ml-3">
// // // // //               <h3 className="text-sm font-medium text-red-800">Error</h3>
// // // // //               <p className="text-sm text-red-700 mt-1">{error}</p>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="p-6">
// // // // //       <div className="flex justify-between items-center mb-6">
// // // // //         <h2 className="text-2xl font-bold">Order Management</h2>
// // // // //         <button 
// // // // //           onClick={fetchOrders}
// // // // //           className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
// // // // //         >
// // // // //           Refresh
// // // // //         </button>
// // // // //       </div>
      
// // // // //       {orders.length === 0 ? (
// // // // //         <div className="text-center py-12">
// // // // //           <ClockIcon className="mx-auto h-12 w-12 text-gray-400" />
// // // // //           <h3 className="mt-2 text-sm font-medium text-gray-900">No orders</h3>
// // // // //           <p className="mt-1 text-sm text-gray-500">No orders have been placed yet.</p>
// // // // //         </div>
// // // // //       ) : (
// // // // //       <div className="overflow-x-auto">
// // // // //         <table className="min-w-full divide-y divide-gray-200">
// // // // //           <thead className="bg-gray-50">
// // // // //             <tr>
// // // // //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
// // // // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
// // // // //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
// // // // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shipping Status</th>
// // // // //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Status</th>
// // // // //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
// // // // //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
// // // // //             </tr>
// // // // //           </thead>
// // // // //           <tbody className="bg-white divide-y divide-gray-200">
// // // // //             {orders.map(order => (
// // // // //               <React.Fragment key={order._id}>
// // // // //                   <tr className="hover:bg-gray-50">
// // // // //                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
// // // // //                     #{order._id.slice(-8).toUpperCase()}
// // // // //                   </td>
// // // // //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // // // //                     <div>
// // // // //                         <p className="font-medium">
// // // // //                           {order.shipping?.firstName} {order.shipping?.lastName}
// // // // //                         </p>
// // // // //                         <p className="text-xs text-gray-400">
// // // // //                           {order.userMobile || order.userId}
// // // // //                         </p>
// // // // //                     </div>
// // // // //                   </td>
// // // // //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // // // //                     {new Date(order.createdAt).toLocaleDateString()}
// // // // //                   </td>
// // // // //                   <td className="px-6 py-4 whitespace-nowrap">
// // // // //                     <div className="flex items-center">
// // // // //                       {getStatusIcon(order.shippingStatus)}
// // // // //                         <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.shippingStatus)}`}>
// // // // //                         {order.shippingStatus || 'Processing'}
// // // // //                       </span>
// // // // //                     </div>
// // // // //                   </td>
// // // // //                     <td className="px-6 py-4 whitespace-nowrap">
// // // // //                       <div className="flex items-center">
// // // // //                         {getPaymentStatusIcon(order.paymentStatus)}
// // // // //                         <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPaymentStatusColor(order.paymentStatus)}`}>
// // // // //                           {order.paymentStatus || 'Pending'}
// // // // //                         </span>
// // // // //                       </div>
// // // // //                     </td>
// // // // //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// // // // //                       <div className="flex items-center">
// // // // //                         <CurrencyDollarIcon className="h-4 w-4 text-gray-400 mr-1" />
// // // // //                         {order.totals?.total?.toFixed(2) || '0.00'}
// // // // //                       </div>
// // // // //                   </td>
// // // // //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // // // //                       <div className="flex space-x-2">
// // // // //                     <button 
// // // // //                           onClick={() => toggleOrderDetails(order._id)}
// // // // //                       className="text-blue-600 hover:text-blue-900"
// // // // //                         >
// // // // //                           {expandedOrder === order._id ? 'Hide' : 'View'}
// // // // //                         </button>
// // // // //                         <button 
// // // // //                           onClick={() => handleSave(order._id)}
// // // // //                           disabled={!statusEdits[order._id]}
// // // // //                           className={`px-3 py-1 rounded text-sm ${
// // // // //                             statusEdits[order._id] 
// // // // //                               ? 'bg-green-600 text-white hover:bg-green-700' 
// // // // //                               : 'bg-gray-300 text-gray-500 cursor-not-allowed'
// // // // //                           }`}
// // // // //                     >
// // // // //                       Save
// // // // //                     </button>
// // // // //                       </div>
// // // // //                   </td>
// // // // //                 </tr>
                
// // // // //                 {expandedOrder === order._id && (
// // // // //                   <tr className="bg-gray-50">
// // // // //                       <td colSpan="7" className="px-6 py-4">
// // // // //                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // // // //                         {/* Order Items */}
// // // // //                         <div>
// // // // //                             <h3 className="text-lg font-medium mb-4">Order Items</h3>
// // // // //                             <div className="bg-white border rounded-lg overflow-hidden">
// // // // //                             {order.items?.map((item, index) => (
// // // // //                               <div key={index} className="p-4 border-b last:border-b-0">
// // // // //                                   <div className="flex items-center justify-between">
// // // // //                                     <div className="flex items-center space-x-3">
// // // // //                                       <img 
// // // // //                                         src={item.image || 'https://via.placeholder.com/40'} 
// // // // //                                         alt={item.name}
// // // // //                                         className="w-10 h-10 rounded object-cover"
// // // // //                                       />
// // // // //                                   <div>
// // // // //                                     <p className="font-medium">{item.name}</p>
// // // // //                                     <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
// // // // //                                         {item.mlmPoints > 0 && (
// // // // //                                           <p className="text-xs text-blue-600">{item.mlmPoints} MLM points</p>
// // // // //                                         )}
// // // // //                                       </div>
// // // // //                                   </div>
// // // // //                                     <p className="text-gray-900 font-medium">
// // // // //                                     ${(item.price * item.quantity).toFixed(2)}
// // // // //                                   </p>
// // // // //                                 </div>
// // // // //                               </div>
// // // // //                             ))}
// // // // //                             <div className="p-4 bg-gray-50 flex justify-between font-bold">
// // // // //                               <p>Total</p>
// // // // //                                 <p>${order.totals?.total?.toFixed(2) || '0.00'}</p>
// // // // //                               </div>
// // // // //                             </div>
// // // // //                           </div>
                          
// // // // //                           {/* Status Management */}
// // // // //                           <div className="space-y-6">
// // // // //                             {/* Shipping Information */}
// // // // //                             <div>
// // // // //                               <h3 className="text-lg font-medium mb-4">Shipping Information</h3>
// // // // //                               <div className="bg-white p-4 rounded-lg border">
// // // // //                                 <div className="space-y-2 mb-4">
// // // // //                                   <p><strong>Name:</strong> {order.shipping?.firstName} {order.shipping?.lastName}</p>
// // // // //                                   <p><strong>Email:</strong> {order.shipping?.email}</p>
// // // // //                                   <p><strong>Address:</strong> {order.shipping?.address}</p>
// // // // //                                   <p><strong>City:</strong> {order.shipping?.city}, {order.shipping?.state} {order.shipping?.zipCode}</p>
// // // // //                                   <p><strong>Phone:</strong> {order.shipping?.phone}</p>
// // // // //                         </div>
                        
// // // // //                         <div>
// // // // //                                   <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Status</label>
// // // // //                                   <select
// // // // //                                     value={statusEdits[order._id]?.shippingStatus || order.shippingStatus || 'Processing'}
// // // // //                                     onChange={e => handleEditChange(order._id, 'shippingStatus', e.target.value)}
// // // // //                                     className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // //                                   >
// // // // //                                     <option value="Processing">Processing</option>
// // // // //                                     <option value="Shipped">Shipped</option>
// // // // //                                     <option value="Delivered">Delivered</option>
// // // // //                                     <option value="Cancelled">Cancelled</option>
// // // // //                                   </select>
// // // // //                                 </div>
// // // // //                               </div>
// // // // //                             </div>
                            
// // // // //                             {/* Payment Information */}
// // // // //                             <div>
// // // // //                               <h3 className="text-lg font-medium mb-4">Payment Information</h3>
// // // // //                               <div className="bg-white p-4 rounded-lg border">
// // // // //                                 <div className="space-y-2 mb-4">
// // // // //                                   <p><strong>Method:</strong> {order.payment?.method}</p>
// // // // //                                   {order.payment?.method === 'upi' && order.payment?.upiId && (
// // // // //                                     <p><strong>UPI ID:</strong> {order.payment.upiId}</p>
// // // // //                                   )}
// // // // //                                   {order.payment?.method === 'qr' && (
// // // // //                                     <p><strong>Payment:</strong> QR Code</p>
// // // // //                                   )}
// // // // //                           </div>
                          
// // // // //                           <div>
// // // // //                                   <label className="block text-sm font-medium text-gray-700 mb-2">Payment Status</label>
// // // // //                                 <select
// // // // //                                     value={statusEdits[order._id]?.paymentStatus || order.paymentStatus || 'Pending'}
// // // // //                                     onChange={e => handleEditChange(order._id, 'paymentStatus', e.target.value)}
// // // // //                                     className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // //                                   >
// // // // //                                     <option value="Pending">Pending</option>
// // // // //                                     <option value="Processing">Processing</option>
// // // // //                                     <option value="Completed">Completed</option>
// // // // //                                     <option value="Failed">Failed</option>
// // // // //                                     <option value="Refunded">Refunded</option>
// // // // //                                   </select>
// // // // //                               </div>
// // // // //                             </div>
// // // // //                           </div>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     </td>
// // // // //                   </tr>
// // // // //                 )}
// // // // //               </React.Fragment>
// // // // //             ))}
// // // // //           </tbody>
// // // // //         </table>
// // // // //       </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }



// // // // import React, { useEffect, useState } from 'react';
// // // // import adminAPI from '../api/adminApi';
// // // // import { 
// // // //   TruckIcon, 
// // // //   CheckCircleIcon, 
// // // //   XCircleIcon, 
// // // //   ClockIcon,
// // // //   ExclamationTriangleIcon,
// // // //   CurrencyDollarIcon
// // // // } from '@heroicons/react/24/outline';

// // // // export default function AdminOrders() {
// // // //   const [orders, setOrders] = useState([]);
// // // //   const [statusEdits, setStatusEdits] = useState({});
// // // //   const [expandedOrder, setExpandedOrder] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     fetchOrders();
// // // //   }, []);

// // // //   // ✅ Fix API Response Mapping
// // // //   // const fetchOrders = async () => {
// // // //   //   try {
// // // //   //     setLoading(true);
// // // //   //     setError(null);

// // // //   //     const res = await adminAPI.getOrders();
// // // //   //     console.log("📦 Orders API Response:", res);

// // // //   //     if (Array.isArray(res.data)) {
// // // //   //       setOrders(res.data);
// // // //   //     } else if (Array.isArray(res.orders)) {
// // // //   //       setOrders(res.orders);
// // // //   //     } else if (res.success && Array.isArray(res.data)) {
// // // //   //       setOrders(res.data);
// // // //   //     } else {
// // // //   //       setOrders([]);
// // // //   //     }
// // // //   //   } catch (error) {
// // // //   //     console.error("Error fetching orders:", error);
// // // //   //     setError("Failed to load orders");
// // // //   //     setOrders([]);
// // // //   //   } finally {
// // // //   //     setLoading(false);
// // // //   //   }
// // // //   // };
   
// // // //   const fetchOrders = async () => {
// // // //   try {
// // // //     setLoading(true);
// // // //     setError(null);

// // // //     const res = await adminAPI.getOrders();
// // // //     console.log("📦 Orders API Response:", res);

// // // //     if (res.success && Array.isArray(res.data.data)) {
// // // //       setOrders(res.data.data);
// // // //     } else {
// // // //       setOrders([]);
// // // //     }
// // // //   } catch (error) {
// // // //     console.error("Error fetching orders:", error);
// // // //     setError("Failed to load orders");
// // // //     setOrders([]);
// // // //   } finally {
// // // //     setLoading(false);
// // // //   }
// // // // };



// // // //   const handleEditChange = (orderId, field, value) => {
// // // //     setStatusEdits(prev => ({
// // // //       ...prev,
// // // //       [orderId]: {
// // // //         ...prev[orderId],
// // // //         [field]: value
// // // //       }
// // // //     }));
// // // //   };

// // // //   // ✅ Update both statuses correctly
// // // //   const handleSave = async (orderId) => {
// // // //     try {
// // // //       const edit = statusEdits[orderId];
// // // //       if (!edit) return;

// // // //       if (edit.shippingStatus) {
// // // //         await adminAPI.updateOrderStatus(orderId, edit.shippingStatus);
// // // //       }

// // // //       if (edit.paymentStatus) {
// // // //         await adminAPI.updatePaymentStatus(orderId, edit.paymentStatus);
// // // //       }

// // // //       setStatusEdits(prev => ({ ...prev, [orderId]: {} }));
// // // //       fetchOrders();
// // // //     } catch (error) {
// // // //       console.error('Error updating order:', error);
// // // //       alert('Failed to update order status');
// // // //     }
// // // //   };

// // // //   const toggleOrderDetails = (orderId) => {
// // // //     setExpandedOrder(expandedOrder === orderId ? null : orderId);
// // // //   };

// // // //   // ✅ Shipping status icons
// // // //   const getStatusIcon = (status) => {
// // // //     switch (status) {
// // // //       case 'Delivered': return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
// // // //       case 'Shipped': return <TruckIcon className="h-5 w-5 text-blue-500" />;
// // // //       case 'Processing': return <ClockIcon className="h-5 w-5 text-yellow-500" />;
// // // //       case 'Cancelled': return <XCircleIcon className="h-5 w-5 text-red-500" />;
// // // //       default: return <ClockIcon className="h-5 w-5 text-gray-500" />;
// // // //     }
// // // //   };

// // // //   // ✅ Payment status icons
// // // //   const getPaymentStatusIcon = (status) => {
// // // //     switch (status) {
// // // //       case 'Completed': return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
// // // //       case 'Pending': return <ClockIcon className="h-5 w-5 text-yellow-500" />;
// // // //       case 'Processing': return <ClockIcon className="h-5 w-5 text-blue-500" />;
// // // //       case 'Failed': return <XCircleIcon className="h-5 w-5 text-red-500" />;
// // // //       case 'Refunded': return <ExclamationTriangleIcon className="h-5 w-5 text-orange-500" />;
// // // //       default: return <ClockIcon className="h-5 w-5 text-gray-500" />;
// // // //     }
// // // //   };

// // // //   const getStatusColor = (status) => {
// // // //     switch (status) {
// // // //       case 'Delivered': return 'bg-green-100 text-green-800';
// // // //       case 'Shipped': return 'bg-blue-100 text-blue-800';
// // // //       case 'Processing': return 'bg-yellow-100 text-yellow-800';
// // // //       case 'Cancelled': return 'bg-red-100 text-red-800';
// // // //       default: return 'bg-gray-100 text-gray-800';
// // // //     }
// // // //   };

// // // //   const getPaymentStatusColor = (status) => {
// // // //     switch (status) {
// // // //       case 'Completed': return 'bg-green-100 text-green-800';
// // // //       case 'Pending': return 'bg-yellow-100 text-yellow-800';
// // // //       case 'Processing': return 'bg-blue-100 text-blue-800';
// // // //       case 'Failed': return 'bg-red-100 text-red-800';
// // // //       case 'Refunded': return 'bg-orange-100 text-orange-800';
// // // //       default: return 'bg-gray-100 text-gray-800';
// // // //     }
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <div className="p-6">
// // // //         <div className="flex items-center justify-center h-64">
// // // //           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
// // // //           <span className="ml-2">Loading orders...</span>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (error) {
// // // //     return (
// // // //       <div className="p-6">
// // // //         <div className="bg-red-50 border border-red-200 rounded-md p-4">
// // // //           <div className="flex">
// // // //             <XCircleIcon className="h-5 w-5 text-red-400" />
// // // //             <div className="ml-3">
// // // //               <h3 className="text-sm font-medium text-red-800">Error</h3>
// // // //               <p className="text-sm text-red-700 mt-1">{error}</p>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="p-6">
// // // //       <div className="flex justify-between items-center mb-6">
// // // //         <h2 className="text-2xl font-bold">Order Management</h2>
// // // //         <button 
// // // //           onClick={fetchOrders}
// // // //           className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
// // // //         >
// // // //           Refresh
// // // //         </button>
// // // //       </div>
      
// // // //       {orders.length === 0 ? (
// // // //         <div className="text-center py-12">
// // // //           <ClockIcon className="mx-auto h-12 w-12 text-gray-400" />
// // // //           <h3 className="mt-2 text-sm font-medium text-gray-900">No orders</h3>
// // // //           <p className="mt-1 text-sm text-gray-500">No orders have been placed yet.</p>
// // // //         </div>
// // // //       ) : (
// // // //         <div className="overflow-x-auto">
// // // //           {/* ✅ Orders Table */}
// // // //           {/* ... keep rest of your table code same (unchanged) ... */}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }


// // import React, { useEffect, useState } from 'react';
// // import adminAPI from '../api/adminApi';
// // import { 
// //   TruckIcon, 
// //   CheckCircleIcon, 
// //   XCircleIcon, 
// //   ClockIcon,
// //   ExclamationTriangleIcon,
// // } from '@heroicons/react/24/outline';

// // export default function AdminOrders() {
// //   const [orders, setOrders] = useState([]);
// //   const [statusEdits, setStatusEdits] = useState({});
// //   const [expandedOrder, setExpandedOrder] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     fetchOrders();
// //   }, []);

// //   // ✅ Fetch Orders
// //   const fetchOrders = async () => {
// //     try {
// //       setLoading(true);
// //       setError(null);

// //       const res = await adminAPI.getOrders();
// //       console.log("📦 Orders API Response:", res);

// //       if (res.success && res.data && Array.isArray(res.data.data)) {
// //         setOrders(res.data.data);
// //       } else {
// //         setOrders([]);
// //       }
// //     } catch (error) {
// //       console.error("Error fetching orders:", error);
// //       setError("Failed to load orders");
// //       setOrders([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleEditChange = (orderId, field, value) => {
// //     setStatusEdits(prev => ({
// //       ...prev,
// //       [orderId]: {
// //         ...prev[orderId],
// //         [field]: value
// //       }
// //     }));
// //   };

// //   // const handleSave = async (orderId) => {
// //   //   try {
// //   //     const edit = statusEdits[orderId];
// //   //     if (!edit) return;

// //   //     if (edit.shippingStatus) {
// //   //       await adminAPI.updateOrderStatus(orderId, edit.shippingStatus);
// //   //     }

// //   //     if (edit.paymentStatus) {
// //   //       await adminAPI.updatePaymentStatus(orderId, edit.paymentStatus);
// //   //     }

// //   //     setStatusEdits(prev => ({ ...prev, [orderId]: {} }));
// //   //     fetchOrders();
// //   //   } catch (error) {
// //   //     console.error('Error updating order:', error);
// //   //     alert('Failed to update order status');
// //   //   }
// //   // };

// //   const handleSave = async (orderId) => {
// //   try {
// //     const edit = statusEdits[orderId];
// //     if (!edit) return;

// //     if (edit.shippingStatus) {
// //       await adminAPI.updateShippingStatus(orderId, edit.shippingStatus);
// //     }

// //     if (edit.paymentStatus) {
// //       await adminAPI.updatePaymentStatus(orderId, edit.paymentStatus);
// //     }

// //     setStatusEdits(prev => ({ ...prev, [orderId]: {} }));
// //     fetchOrders();
// //   } catch (error) {
// //     console.error('Error updating order:', error);
// //     alert('Failed to update order status');
// //   }
// // };


// //   const toggleOrderDetails = (orderId) => {
// //     setExpandedOrder(expandedOrder === orderId ? null : orderId);
// //   };

// //   // Icons
// //   const getStatusIcon = (status) => {
// //     switch (status) {
// //       case 'Delivered': return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
// //       case 'Shipped': return <TruckIcon className="h-5 w-5 text-blue-500" />;
// //       case 'Processing': return <ClockIcon className="h-5 w-5 text-yellow-500" />;
// //       case 'Cancelled': return <XCircleIcon className="h-5 w-5 text-red-500" />;
// //       default: return <ClockIcon className="h-5 w-5 text-gray-500" />;
// //     }
// //   };

// //   const getPaymentStatusIcon = (status) => {
// //     switch (status) {
// //       case 'Completed': return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
// //       case 'Pending': return <ClockIcon className="h-5 w-5 text-yellow-500" />;
// //       case 'Processing': return <ClockIcon className="h-5 w-5 text-blue-500" />;
// //       case 'Failed': return <XCircleIcon className="h-5 w-5 text-red-500" />;
// //       case 'Refunded': return <ExclamationTriangleIcon className="h-5 w-5 text-orange-500" />;
// //       default: return <ClockIcon className="h-5 w-5 text-gray-500" />;
// //     }
// //   };

// //   // Loading state
// //   if (loading) {
// //     return (
// //       <div className="p-6">
// //         <div className="flex items-center justify-center h-64">
// //           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
// //           <span className="ml-2">Loading orders...</span>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // Error state
// //   if (error) {
// //     return (
// //       <div className="p-6">
// //         <div className="bg-red-50 border border-red-200 rounded-md p-4">
// //           <div className="flex">
// //             <XCircleIcon className="h-5 w-5 text-red-400" />
// //             <div className="ml-3">
// //               <h3 className="text-sm font-medium text-red-800">Error</h3>
// //               <p className="text-sm text-red-700 mt-1">{error}</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // ✅ Main UI
// //   return (
// //     <div className="p-6">
// //       <div className="flex justify-between items-center mb-6">
// //         <h2 className="text-2xl font-bold">Order Management</h2>
// //         <button 
// //           onClick={fetchOrders}
// //           className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
// //         >
// //           Refresh
// //         </button>
// //       </div>
      
// //       {orders.length === 0 ? (
// //         <div className="text-center py-12">
// //           <ClockIcon className="mx-auto h-12 w-12 text-gray-400" />
// //           <h3 className="mt-2 text-sm font-medium text-gray-900">No orders</h3>
// //           <p className="mt-1 text-sm text-gray-500">No orders have been placed yet.</p>
// //         </div>
// //       ) : (
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full divide-y divide-gray-200 border">
// //             <thead className="bg-gray-50">
// //               <tr>
// //                 <th className="px-4 py-2 text-left text-sm font-semibold">Order ID</th>
// //                 <th className="px-4 py-2 text-left text-sm font-semibold">User</th>
// //                 <th className="px-4 py-2 text-left text-sm font-semibold">Items</th>
// //                 <th className="px-4 py-2 text-left text-sm font-semibold">Created</th>
// //                 <th className="px-4 py-2 text-left text-sm font-semibold">Shipping</th>
// //                 <th className="px-4 py-2 text-left text-sm font-semibold">Payment</th>
// //                 <th className="px-4 py-2 text-left text-sm font-semibold">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody className="divide-y divide-gray-200">
// //               {orders.map((order) => (
// //                 <tr key={order.orderId}>
// //                   <td className="px-4 py-2">{order.orderId}</td>
// //                   <td className="px-4 py-2">{order.userId}</td>
// //                   <td className="px-4 py-2">
// //                     {order.items?.map((item, idx) => (
// //                       <div key={idx}>{item.name} x {item.quantity} (${item.price})</div>
// //                     ))}
// //                   </td>
// //                   <td className="px-4 py-2">{new Date(order.createdAt).toLocaleString()}</td>
// //                   <td className="px-4 py-2 flex items-center gap-1">
// //                     {getStatusIcon(order.shippingStatus)} {order.shippingStatus}
// //                   </td>
// //                   <td className="px-4 py-2 flex items-center gap-1">
// //                     {getPaymentStatusIcon(order.paymentStatus)} {order.paymentStatus}
// //                   </td>
// //                   <td className="px-4 py-2">
// //                     <select
// //                       className="border rounded px-2 py-1 mr-2"
// //                       value={statusEdits[order.orderId]?.shippingStatus || order.shippingStatus}
// //                       onChange={(e) => handleEditChange(order.orderId, "shippingStatus", e.target.value)}
// //                     >
// //                       <option>Processing</option>
// //                       <option>Shipped</option>
// //                       <option>Delivered</option>
// //                       <option>Cancelled</option>
// //                     </select>
// //                     <select
// //                       className="border rounded px-2 py-1 mr-2"
// //                       value={statusEdits[order.orderId]?.paymentStatus || order.paymentStatus}
// //                       onChange={(e) => handleEditChange(order.orderId, "paymentStatus", e.target.value)}
// //                     >
// //                       <option>Pending</option>
// //                       <option>Processing</option>
// //                       <option>Completed</option>
// //                       <option>Failed</option>
// //                       <option>Refunded</option>
// //                     </select>
// //                     <button 
// //                       onClick={() => handleSave(order.orderId)}
// //                       className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
// //                     >
// //                       Save
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }




// import React, { useEffect, useState } from 'react';
// import adminAPI from '../api/adminApi';
// import { 
//   TruckIcon, 
//   CheckCircleIcon, 
//   XCircleIcon, 
//   ClockIcon,
//   ExclamationTriangleIcon,
// } from '@heroicons/react/24/outline';

// export default function AdminOrders() {
//   const [orders, setOrders] = useState([]);
//   const [statusEdits, setStatusEdits] = useState({});
//   const [expandedOrder, setExpandedOrder] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   // ✅ Fetch Orders
//   const fetchOrders = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       const res = await adminAPI.getOrders();
//       console.log("📦 Orders API Response:", res);

//       if (res.success && res.data && Array.isArray(res.data.data)) {
//         setOrders(res.data.data);
//       } else {
//         setOrders([]);
//       }
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//       setError("Failed to load orders");
//       setOrders([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEditChange = (orderId, field, value) => {
//     setStatusEdits(prev => ({
//       ...prev,
//       [orderId]: {
//         ...prev[orderId],
//         [field]: value
//       }
//     }));
//   };

//   // const handleSave = async (orderId) => {
//   //   try {
//   //     const edit = statusEdits[orderId];
//   //     if (!edit) return;

//   //     if (edit.shippingStatus) {
//   //       await adminAPI.updateShippingStatus(orderId, edit.shippingStatus);
//   //     }

//   //     if (edit.paymentStatus) {
//   //       await adminAPI.updatePaymentStatus(orderId, edit.paymentStatus);
//   //     }

//   //     setStatusEdits(prev => ({ ...prev, [orderId]: {} }));
//   //     fetchOrders();
//   //   } catch (error) {
//   //     console.error('Error updating order:', error);
//   //     alert('Failed to update order status');
//   //   }
//   // };


//   const handleSave = async (orderId) => {
//   try {
//     const edit = statusEdits[orderId];
//     if (!edit) return;

//     let updatedOrder = null;

//     if (edit.shippingStatus) {
//       const res = await adminAPI.updateShippingStatus(orderId, edit.shippingStatus);
//       if (res.success && res.data) {
//         updatedOrder = res.data; // ✅ backend se updated order aana chahiye
//       }
//     }

//     if (edit.paymentStatus) {
//       const res = await adminAPI.updatePaymentStatus(orderId, edit.paymentStatus);
//       if (res.success && res.data) {
//         updatedOrder = res.data; // ✅ ye overwrite karega latest response ko
//       }
//     }

//     if (updatedOrder) {
//       setOrders((prevOrders) =>
//         prevOrders.map((o) => (o.orderId === orderId ? updatedOrder : o))
//       );
//     }

//     setStatusEdits((prev) => ({ ...prev, [orderId]: {} }));
//   } catch (error) {
//     console.error("Error updating order:", error);
//     alert("Failed to update order status");
//   }
// };


//   const toggleOrderDetails = (orderId) => {
//     setExpandedOrder(expandedOrder === orderId ? null : orderId);
//   };

//   // Icons
//   const getStatusIcon = (status) => {
//     switch (status) {
//       case 'Delivered': return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
//       case 'Shipped': return <TruckIcon className="h-5 w-5 text-blue-500" />;
//       case 'Processing': return <ClockIcon className="h-5 w-5 text-yellow-500" />;
//       case 'Cancelled': return <XCircleIcon className="h-5 w-5 text-red-500" />;
//       default: return <ClockIcon className="h-5 w-5 text-gray-500" />;
//     }
//   };

//   const getPaymentStatusIcon = (status) => {
//     switch (status) {
//       case 'Completed': return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
//       case 'Pending': return <ClockIcon className="h-5 w-5 text-yellow-500" />;
//       case 'Processing': return <ClockIcon className="h-5 w-5 text-blue-500" />;
//       case 'Failed': return <XCircleIcon className="h-5 w-5 text-red-500" />;
//       case 'Refunded': return <ExclamationTriangleIcon className="h-5 w-5 text-orange-500" />;
//       default: return <ClockIcon className="h-5 w-5 text-gray-500" />;
//     }
//   };

//   // Loading state
//   if (loading) {
//     return (
//       <div className="p-6">
//         <div className="flex items-center justify-center h-64">
//           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
//           <span className="ml-2">Loading orders...</span>
//         </div>
//       </div>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <div className="p-6">
//         <div className="bg-red-50 border border-red-200 rounded-md p-4">
//           <div className="flex">
//             <XCircleIcon className="h-5 w-5 text-red-400" />
//             <div className="ml-3">
//               <h3 className="text-sm font-medium text-red-800">Error</h3>
//               <p className="text-sm text-red-700 mt-1">{error}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // ✅ Main UI
//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold">Order Management</h2>
//         <button 
//           onClick={fetchOrders}
//           className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//         >
//           Refresh
//         </button>
//       </div>
      
//       {orders.length === 0 ? (
//         <div className="text-center py-12">
//           <ClockIcon className="mx-auto h-12 w-12 text-gray-400" />
//           <h3 className="mt-2 text-sm font-medium text-gray-900">No orders</h3>
//           <p className="mt-1 text-sm text-gray-500">No orders have been placed yet.</p>
//         </div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200 border">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-4 py-2 text-left text-sm font-semibold">Order ID</th>
//                 <th className="px-4 py-2 text-left text-sm font-semibold">User</th>
//                 <th className="px-4 py-2 text-left text-sm font-semibold">Items</th>
//                 <th className="px-4 py-2 text-left text-sm font-semibold">Created</th>
//                 <th className="px-4 py-2 text-left text-sm font-semibold">Shipping</th>
//                 <th className="px-4 py-2 text-left text-sm font-semibold">Payment</th>
//                 <th className="px-4 py-2 text-left text-sm font-semibold">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {orders.map((order) => (
//                 <tr key={order._id}>
//                   <td className="px-4 py-2">{order._id}</td>
//                   <td className="px-4 py-2">{order.userId}</td>
//                   <td className="px-4 py-2">
//                     {order.items?.map((item, idx) => (
//                       <div key={idx}>{item.name} x {item.quantity} (${item.price})</div>
//                     ))}
//                   </td>
//                   <td className="px-4 py-2">{new Date(order.createdAt).toLocaleString()}</td>
//                   <td className="px-4 py-2 flex items-center gap-1">
//                     {getStatusIcon(order.shippingStatus)} {order.shippingStatus}
//                   </td>
//                   <td className="px-4 py-2 flex items-center gap-1">
//                     {getPaymentStatusIcon(order.paymentStatus)} {order.paymentStatus}
//                   </td>
//                   <td className="px-4 py-2">
//                     <select
//                       className="border rounded px-2 py-1 mr-2"
//                       value={statusEdits[order._id]?.shippingStatus || order.shippingStatus}
//                       onChange={(e) => handleEditChange(order._id, "shippingStatus", e.target.value)}
//                     >
//                       <option>Processing</option>
//                       <option>Shipped</option>
//                       <option>Delivered</option>
//                       <option>Cancelled</option>
//                     </select>
//                     <select
//                       className="border rounded px-2 py-1 mr-2"
//                       value={statusEdits[order._id]?.paymentStatus || order.paymentStatus}
//                       onChange={(e) => handleEditChange(order._id, "paymentStatus", e.target.value)}
//                     >
//                       <option>Pending</option>
//                       <option>Processing</option>
//                       <option>Completed</option>
//                       <option>Failed</option>
//                       <option>Refunded</option>
//                     </select>
//                     <button 
//                       onClick={() => handleSave(order._id)}
//                       className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
//                     >
//                       Save
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useEffect, useState } from 'react';
import adminAPI from '../api/adminApi';
import { 
  TruckIcon, 
  CheckCircleIcon, 
  XCircleIcon, 
  ClockIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [statusEdits, setStatusEdits] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  // ✅ Fetch Orders
  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await adminAPI.getOrders();
      if (res.success && Array.isArray(res.data)) {
        setOrders(res.data);
      } else {
        setOrders([]);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("Failed to load orders");
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Track edits
  const handleEditChange = (orderId, field, value) => {
    setStatusEdits(prev => ({
      ...prev,
      [orderId]: {
        ...prev[orderId],
        [field]: value
      }
    }));
  };

  // ✅ Save edits for one order only
  const handleSave = async (orderId) => {
    try {
      const edit = statusEdits[orderId];
      if (!edit) return;

      let updatedOrder = null;

      if (edit.shippingStatus) {
        const res = await adminAPI.updateShippingStatus(orderId, edit.shippingStatus);
        if (res.success && res.data) updatedOrder = res.data;
      }

      if (edit.paymentStatus) {
        const res = await adminAPI.updatePaymentStatus(orderId, edit.paymentStatus);
        if (res.success && res.data) updatedOrder = res.data;
      }

      if (updatedOrder) {
        setOrders((prevOrders) =>
          prevOrders.map((o) => (o._id === orderId ? updatedOrder : o))
        );
      }

      setStatusEdits((prev) => ({ ...prev, [orderId]: {} }));
    } catch (error) {
      console.error("Error updating order:", error);
      alert("Failed to update order status");
    }
  };

  // Icons
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered': return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'Shipped': return <TruckIcon className="h-5 w-5 text-blue-500" />;
      case 'Processing': return <ClockIcon className="h-5 w-5 text-yellow-500" />;
      case 'Cancelled': return <XCircleIcon className="h-5 w-5 text-red-500" />;
      default: return <ClockIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  const getPaymentStatusIcon = (status) => {
    switch (status) {
      case 'Completed': return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'Pending': return <ClockIcon className="h-5 w-5 text-yellow-500" />;
      case 'Processing': return <ClockIcon className="h-5 w-5 text-blue-500" />;
      case 'Failed': return <XCircleIcon className="h-5 w-5 text-red-500" />;
      case 'Refunded': return <ExclamationTriangleIcon className="h-5 w-5 text-orange-500" />;
      default: return <ClockIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2">Loading orders...</span>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-md">
        <div className="flex">
          <XCircleIcon className="h-5 w-5 text-red-400" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Error</h3>
            <p className="text-sm text-red-700 mt-1">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  // ✅ Main UI
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Order Management</h2>
        <button 
          onClick={fetchOrders}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Refresh
        </button>
      </div>
      
      {orders.length === 0 ? (
        <div className="text-center py-12">
          <ClockIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No orders</h3>
          <p className="mt-1 text-sm text-gray-500">No orders have been placed yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold">Order ID</th>
                <th className="px-4 py-2 text-left text-sm font-semibold">User</th>
                <th className="px-4 py-2 text-left text-sm font-semibold">Items</th>
                <th className="px-4 py-2 text-left text-sm font-semibold">Created</th>
                <th className="px-4 py-2 text-left text-sm font-semibold">Shipping</th>
                <th className="px-4 py-2 text-left text-sm font-semibold">Payment</th>
                <th className="px-4 py-2 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="px-4 py-2">{order._id}</td>
                  <td className="px-4 py-2">{order.userId}</td>
                  <td className="px-4 py-2">
                    {order.items?.map((item, idx) => (
                      <div key={idx}>{item.name} x {item.quantity} (${item.price})</div>
                    ))}
                  </td>
                  <td className="px-4 py-2">{new Date(order.createdAt).toLocaleString()}</td>
                  <td className="px-4 py-2 flex items-center gap-1">
                    {getStatusIcon(order.shippingStatus)} {order.shippingStatus}
                  </td>
                  <td className="px-4 py-2 flex items-center gap-1">
                    {getPaymentStatusIcon(order.paymentStatus)} {order.paymentStatus}
                  </td>
                  <td className="px-4 py-2">
                    <select
                      className="border rounded px-2 py-1 mr-2"
                      value={statusEdits[order._id]?.shippingStatus || order.shippingStatus}
                      onChange={(e) => handleEditChange(order._id, "shippingStatus", e.target.value)}
                    >
                      <option>Processing</option>
                      <option>Shipped</option>
                      <option>Delivered</option>
                      <option>Cancelled</option>
                    </select>
                    <select
                      className="border rounded px-2 py-1 mr-2"
                      value={statusEdits[order._id]?.paymentStatus || order.paymentStatus}
                      onChange={(e) => handleEditChange(order._id, "paymentStatus", e.target.value)}
                    >
                      <option>Pending</option>
                      <option>Processing</option>
                      <option>Completed</option>
                      <option>Failed</option>
                      <option>Refunded</option>
                    </select>
                    <button 
                      onClick={() => handleSave(order._id)}
                      className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      Save
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
