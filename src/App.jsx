import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import Products from './components/Products'
import Product from './components/Product'
import { Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
