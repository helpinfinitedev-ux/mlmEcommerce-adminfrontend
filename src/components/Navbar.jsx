import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/admin">Dashboard</Link> | 
      <Link to="/admin/users">Users</Link> | 
      <Link to="/admin/orders">Orders</Link> | 
      <Link to="/admin/products">Products</Link> | 
      <Link to="/admin/wallets">Wallets</Link> | 
      <Link to="/admin/downline">Downline</Link>
    </nav>
  );
}