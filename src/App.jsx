import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Deals from './pages/Deals'
import Categories from './pages/Categories'
import Products from './pages/Products'
import Category from './pages/Category'
import Auth from './pages/Auth'
import { Icon } from "lucide-react";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:id" element={<Category />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
      </main>
      <Footer />
   
    </BrowserRouter>
  )
}

export default App
