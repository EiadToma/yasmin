import './App.css'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import { Routes,Route,Navigate,useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import UserDetails from './pages/UserDetails.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ProductCard from './components/ProductCard.jsx'
import Categories from './pages/Categories.jsx'
import Products from './pages/Products.jsx'
function App() {
  const location = useLocation();
  const hideNavbarOn = ["/login", "/register"];
  const shouldHideNavbar = hideNavbarOn.includes(location.pathname);

  return (
    <div className=' h-fit  w-10/12 m-auto overflow-hidden '>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard/>} />

      <Route path="/dashboard/:id" element={<UserDetails/>} />
      <Route path="/categories" element={<Categories/>} />
      <Route path="/categories/:category" element={<Products/>} />
      <Route path="/categories/:category/:id" element={<ProductCard/>} />

      {/* <Route path="/test" element={<ArticleSkeleton/>} /> */}


      </Routes>
    </div>
  )
}

export default App
