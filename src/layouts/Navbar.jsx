import React from 'react'
import { Link } from 'react-router-dom'

const linkStyle = { marginRight: 12, textDecoration: 'none', color: '#e8ecf2ff' }

export default function Navbar() {
  return (
    <header style={{ padding: 12, borderBottom: '1px solid #e2e8f0' }}>
      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/Deals" style={linkStyle}>Deals</Link>
        <Link to="/categories" style={linkStyle}>Categories</Link>
        <Link to="/products" style={linkStyle}>Products</Link>
        <Link to="/cart" style={linkStyle}>Cart</Link>
        <Link to="/checkout" style={linkStyle}>Checkout</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <Link to="/Auth" style={linkStyle}>Auth</Link>
      </nav>
    </header>
  )
}
