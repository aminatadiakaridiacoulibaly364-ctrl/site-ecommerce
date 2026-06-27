import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import About from './pages/About'
import Contact from './pages/Contact'
import { CartProvider } from './data/CartContext'

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produit/:id" element={<Product />} />
            <Route path="/panier" element={<Cart />} />
            <Route path="/commande" element={<Checkout />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
