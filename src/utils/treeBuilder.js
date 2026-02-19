// // // // // // // src/utils/treeBuilder.js
// // // // // // /**
// // // // // //  * Build a Ternary Tree (max 3 children per parent)
// // // // // //  * @param {Array} orders - all order objects (each has _id, userId, parentId, paymentStatus)
// // // // // //  * @param {Array} rootIds - ids of root orders
// // // // // //  * @param {Number} maxDepth - max layers to build
// // // // // //  * @returns {Array} array of root nodes with full children
// // // // // //  */
// // // // // // export function buildTernaryTree(orders, rootIds, maxDepth = 10) {
// // // // // //   if (!Array.isArray(orders) || orders.length === 0) return [];

// // // // // //   // Convert orders to map for fast lookup
// // // // // //   const orderMap = new Map();
// // // // // //   orders.forEach((o) => orderMap.set(o._id, o));

// // // // // //   // Create nodes for all orders
// // // // // //   const nodes = orders.map((order) => ({
// // // // // //     orderId: order._id,
// // // // // //     userId: order.userId,
// // // // // //     parentId: order.parentId || null,
// // // // // //     paymentStatus: order.paymentStatus || "Pending",
// // // // // //     children: [],
// // // // // //     depth: 1,
// // // // // //   }));

// // // // // //   // Map orderId -> node
// // // // // //   const nodeMap = new Map(nodes.map((n) => [n.orderId, n]));

// // // // // //   // Build tree structure
// // // // // //   const roots = [];
// // // // // //   nodes.forEach((node) => {
// // // // // //     if (!node.parentId || !nodeMap.has(node.parentId)) {
// // // // // //       // root node
// // // // // //       roots.push(node);
// // // // // //     } else {
// // // // // //       const parentNode = nodeMap.get(node.parentId);
// // // // // //       if (parentNode.children.length < 3) {
// // // // // //         node.depth = parentNode.depth + 1;
// // // // // //         parentNode.children.push(node);
// // // // // //       } else {
// // // // // //         // Parent already has 3 children → find next available slot using BFS
// // // // // //         const queue = [...parentNode.children];
// // // // // //         while (queue.length) {
// // // // // //           const current = queue.shift();
// // // // // //           if (current.children.length < 3) {
// // // // // //             node.depth = current.depth + 1;
// // // // // //             current.children.push(node);
// // // // // //             break;
// // // // // //           }
// // // // // //           queue.push(...current.children);
// // // // // //         }
// // // // // //       }
// // // // // //     }
// // // // // //   });

// // // // // //   // Trim by depth (if maxDepth is set)
// // // // // //   const filterByDepth = (node, maxDepth) => {
// // // // // //     if (node.depth >= maxDepth) {
// // // // // //       node.children = [];
// // // // // //     } else {
// // // // // //       node.children = node.children.map((c) => filterByDepth(c, maxDepth));
// // // // // //     }
// // // // // //     return node;
// // // // // //   };

// // // // // //   return roots.map((r) => filterByDepth(r, maxDepth));
// // // // // // }


// // // // // /**
// // // // //  * Build a Ternary Tree (max 3 children per parent)
// // // // //  * @param {Array} orders - all order objects (each has _id, userId, parentId, paymentStatus)
// // // // //  * @param {Array} rootIds - ids of root orders (optional)
// // // // //  * @param {Number} maxDepth - max layers to build
// // // // //  * @returns {Array} array of root nodes with full children
// // // // //  */
// // // // // export function buildTernaryTree(orders, rootIds = [], maxDepth = 10) {
// // // // //   if (!Array.isArray(orders) || orders.length === 0) return [];

// // // // //   // Convert orders to map for fast lookup
// // // // //   const nodeMap = new Map();

// // // // //   // Create nodes for all orders
// // // // //   const nodes = orders.map((order) => {
// // // // //     const node = {
// // // // //       orderId: order._id,
// // // // //       userId: order.userId,
// // // // //       parentId: order.parentId || null,
// // // // //       paymentStatus: order.paymentStatus || "Pending",
// // // // //       children: [],
// // // // //       depth: 1,
// // // // //     };
// // // // //     nodeMap.set(node.orderId, node);
// // // // //     return node;
// // // // //   });

// // // // //   // Build tree
// // // // //   const roots = [];
// // // // //   nodes.forEach((node) => {
// // // // //     if (!node.parentId || !nodeMap.has(node.parentId)) {
// // // // //       // Root node
// // // // //       roots.push(node);
// // // // //     } else {
// // // // //       const parentNode = nodeMap.get(node.parentId);
// // // // //       attachNode(parentNode, node);
// // // // //     }
// // // // //   });

// // // // //   // Attach node to parent (ternary + BFS fallback)
// // // // //   function attachNode(parentNode, childNode) {
// // // // //     if (parentNode.depth >= maxDepth) return; // prevent going beyond maxDepth

// // // // //     if (parentNode.children.length < 3) {
// // // // //       childNode.depth = parentNode.depth + 1;
// // // // //       parentNode.children.push(childNode);
// // // // //     } else {
// // // // //       // BFS to find next available slot
// // // // //       const queue = [...parentNode.children];
// // // // //       while (queue.length) {
// // // // //         const current = queue.shift();
// // // // //         if (current.depth >= maxDepth) continue;

// // // // //         if (current.children.length < 3) {
// // // // //           childNode.depth = current.depth + 1;
// // // // //           current.children.push(childNode);
// // // // //           return;
// // // // //         } else {
// // // // //           queue.push(...current.children);
// // // // //         }
// // // // //       }

// // // // //       // If no slot found, treat as extra root
// // // // //       childNode.depth = parentNode.depth + 1;
// // // // //       roots.push(childNode);
// // // // //     }
// // // // //   }

// // // // //   return roots;
// // // // // }


// // // // /**
// // // //  * Build a Ternary Tree (max 3 children per parent)
// // // //  * @param {Array} orders - all order objects (each has _id, userId, parentId, paymentStatus)
// // // //  * @param {Array} rootIds - ids of root orders (optional)
// // // //  * @param {Number} maxDepth - max layers to build
// // // //  * @returns {Array} array of root nodes with full children
// // // //  */
// // // // export function buildTernaryTree(orders, rootIds = [], maxDepth = 10) {
// // // //   if (!Array.isArray(orders) || orders.length === 0) return [];

// // // //   const nodeMap = new Map();

// // // //   // Step 1: Create nodes for all orders
// // // //   const nodes = orders.map((order) => {
// // // //     const node = {
// // // //       orderId: order._id,
// // // //       userId: order.userId,
// // // //       parentId: order.parentId || null,
// // // //       paymentStatus: order.paymentStatus || "Pending",
// // // //       children: [],
// // // //       depth: 1,
// // // //     };
// // // //     nodeMap.set(node.orderId, node);
// // // //     return node;
// // // //   });

// // // //   const roots = [];

// // // //   // Step 2: Attach nodes to parents
// // // //   nodes.forEach((node) => {
// // // //     if (!node.parentId || !nodeMap.has(node.parentId)) {
// // // //       // Root node
// // // //       roots.push(node);
// // // //     } else {
// // // //       const parentNode = nodeMap.get(node.parentId);
// // // //       attachNode(parentNode, node);
// // // //     }
// // // //   });

// // // //   // Attach child to parent respecting max 3 children
// // // //   function attachNode(parentNode, childNode) {
// // // //     if (parentNode.depth >= maxDepth) return; // stop if maxDepth reached

// // // //     if (parentNode.children.length < 3) {
// // // //       childNode.depth = parentNode.depth + 1;
// // // //       parentNode.children.push(childNode);
// // // //     } else {
// // // //       // BFS to find first available slot
// // // //       const queue = [...parentNode.children];
// // // //       while (queue.length) {
// // // //         const current = queue.shift();
// // // //         if (current.depth >= maxDepth) continue;

// // // //         if (current.children.length < 3) {
// // // //           childNode.depth = current.depth + 1;
// // // //           current.children.push(childNode);
// // // //           return;
// // // //         } else {
// // // //           queue.push(...current.children);
// // // //         }
// // // //       }

// // // //       // If no slot found, attach as extra child to parent (not roots)
// // // //       childNode.depth = parentNode.depth + 1;
// // // //       parentNode.children.push(childNode);
// // // //     }
// // // //   }

// // // //   return roots;
// // // // }


// // // /**
// // //  * Build a Ternary Tree (max 3 children per parent)
// // //  * @param {Array} orders - all order objects (each has _id, userId, parentId, paymentStatus)
// // //  * @param {Array} rootIds - ids of root orders (optional)
// // //  * @param {Number} maxDepth - max layers to build
// // //  * @returns {Array} array of root nodes with full children
// // //  */
// // // export function buildTernaryTree(orders, rootIds = [], maxDepth = 10) {
// // //   if (!Array.isArray(orders) || orders.length === 0) return [];

// // //   const nodeMap = new Map();

// // //   // Step 1: Create nodes for all orders (depth = 0 for now)
// // //   const nodes = orders.map((order) => {
// // //     const node = {
// // //       orderId: order._id,
// // //       userId: order.userId,
// // //       parentId: order.parentId || null,
// // //       paymentStatus: order.paymentStatus || "Pending",
// // //       children: [],
// // //       depth: 0, // depth assign later
// // //     };
// // //     nodeMap.set(node.orderId, node);
// // //     return node;
// // //   });

// // //   const roots = [];

// // //   // Step 2: Attach nodes to parents
// // //   nodes.forEach((node) => {
// // //     if (!node.parentId || !nodeMap.has(node.parentId)) {
// // //       // Root node
// // //       node.depth = 1;
// // //       roots.push(node);
// // //     } else {
// // //       const parentNode = nodeMap.get(node.parentId);
// // //       attachNode(parentNode, node);
// // //     }
// // //   });

// // //   // Attach child to parent respecting max 3 children
// // //   function attachNode(parentNode, childNode) {
// // //     if (parentNode.depth >= maxDepth) return; // stop if maxDepth reached

// // //     childNode.depth = parentNode.depth + 1;

// // //     if (parentNode.children.length < 3) {
// // //       parentNode.children.push(childNode);
// // //     } else {
// // //       // BFS to find first available slot
// // //       const queue = [...parentNode.children];
// // //       while (queue.length) {
// // //         const current = queue.shift();
// // //         if (current.depth >= maxDepth) continue;

// // //         if (current.children.length < 3) {
// // //           childNode.depth = current.depth + 1;
// // //           current.children.push(childNode);
// // //           return;
// // //         } else {
// // //           queue.push(...current.children);
// // //         }
// // //       }

// // //       // If no slot found, still attach to parent
// // //       parentNode.children.push(childNode);
// // //     }
// // //   }

// // //   return roots;
// // // }



// // /**
// //  * Build a Ternary Tree (max 3 children per parent)
// //  * @param {Array} orders - all order objects (each has _id, userId, parentId, paymentStatus)
// //  * @param {Array} rootIds - ids of root orders (optional)
// //  * @param {Number} maxDepth - max layers to build
// //  * @returns {Array} array of root nodes with full children
// //  */
// // export function buildTernaryTree(orders, rootIds = [], maxDepth = 10) {
// //   if (!Array.isArray(orders) || orders.length === 0) return [];

// //   const nodeMap = new Map();

// //   // Step 1: Create nodes for all orders (depth = 0 for now)
// //   const nodes = orders.map((order) => {
// //     const node = {
// //       orderId: order._id,
// //       userId: order.userId,
// //       parentId: order.parentId ?? null, // ✅ null safe
// //       paymentStatus: order.paymentStatus || "Pending",
// //       children: [],
// //       depth: 0, // depth assign later
// //     };
// //     nodeMap.set(node.orderId, node);
// //     return node;
// //   });

// //   const roots = [];

// //   // Step 2: Attach nodes to parents
// //   nodes.forEach((node) => {
// //     if (!node.parentId) {
// //       // ✅ Root node केवल वही जिनका parentId null है
// //       node.depth = 1;
// //       roots.push(node);
// //     } else {
// //       const parentNode = nodeMap.get(node.parentId);
// //       if (parentNode) {
// //         attachNode(parentNode, node);
// //       }
// //     }
// //   });

// //   // Attach child to parent respecting max 3 children
// //   function attachNode(parentNode, childNode) {
// //     if (parentNode.depth >= maxDepth) return; // stop if maxDepth reached

// //     childNode.depth = parentNode.depth + 1;

// //     if (parentNode.children.length < 3) {
// //       parentNode.children.push(childNode);
// //     } else {
// //       // BFS to find first available slot
// //       const queue = [...parentNode.children];
// //       while (queue.length) {
// //         const current = queue.shift();
// //         if (current.depth >= maxDepth) continue;

// //         if (current.children.length < 3) {
// //           childNode.depth = current.depth + 1;
// //           current.children.push(childNode);
// //           return;
// //         } else {
// //           queue.push(...current.children);
// //         }
// //       }

// //       // If no slot found, still attach to parent
// //       parentNode.children.push(childNode);
// //     }
// //   }

// //   return roots;
// // }


// // utils/treeBuilder.js
// export function buildTernaryTree(orders, rootIds = null, maxDepth = 20) {
//   if (!orders || orders.length === 0) return [];

//   const orderMap = new Map(orders.map(o => [String(o._id), { ...o, children: [] }]));

//   // Determine roots if not provided
//   const roots = rootIds || orders.filter(o => !o.parentId).map(o => o._id);

//   function buildNode(orderId, depth = 1) {
//     if (depth > maxDepth) return null;

//     const node = orderMap.get(String(orderId));
//     if (!node) return null;

//     // Attach children (max 3)
//     node.children = orders
//       .filter(o => String(o.parentId) === String(orderId))
//       .slice(0, 3)
//       .map(child => buildNode(child._id, depth + 1))
//       .filter(Boolean);

//     return node;
//   }

//   const tree = roots.map(rootId => buildNode(rootId)).filter(Boolean);

//   return tree;
// }


// utils/treeBuilder.js

/**
 * Build a Ternary Tree from flat array (max 3 children per node)
 * This version works even if there is no parentId
 * @param {Array} orders - flat array of orders/users
 * @returns {Array} - tree array
 */
export function buildTernaryTree(orders) {
  if (!orders || orders.length === 0) return [];

  const tree = [];
  const queue = []; // nodes to attach children

  orders.forEach((order, index) => {
    // create node with children array
    const node = { ...order, children: [] };

    if (index === 0) {
      // first node is root
      tree.push(node);
      queue.push(node);
    } else {
      // attach to first node in queue with less than 3 children
      let attached = false;
      for (let parent of queue) {
        if (parent.children.length < 3) {
          parent.children.push(node);
          attached = true;
          break;
        }
      }
      if (!attached) {
        // if all parents full, attach to first node again
        queue[0].children.push(node);
      }
      // add node to queue to be parent for next nodes
      queue.push(node);
    }
  });

  return tree;
}

