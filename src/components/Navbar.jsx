import { Home, LayoutDashboard, LogOut } from 'lucide-react';
import { Link,useNavigate } from 'react-router-dom';
import { useAppContext } from '../AppContext';

const Navbar = () => {
    const {logout} =useAppContext()
    const navigate = useNavigate()
  return (
    <div className="block top-0 w-full bg-green-100 shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-1">
        {/* Logo */}
        <div onClick={()=>navigate('/home')}> 
            <img src={'/Yasmin Ai (1).png'} alt="Logo" className=" inline-block h-12 w-12" />
            </div>
        <div className="flex space-x-6">
          <Link to="/home" className="flex items-center text-green-900 hover:text-green-600 transition">
            <Home className="mr-1 h-5 w-5" />
            <span>Home</span>
          </Link>

          <Link to="/dashboard" className="flex items-center text-green-900 hover:text-green-600 transition">
            <LayoutDashboard className="mr-1 h-5 w-5" />
            <span>Dashboard</span>
          </Link>

          <button 
          onClick={()=>{
            console.log('logging out')
            logout()
            navigate('/login')
          }}
          className="flex items-center text-green-900 hover:text-green-600 transition">
            <LogOut className="mr-1 h-5 w-5" />
           Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
