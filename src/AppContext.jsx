import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [userData,setUserData]=useState({})
  const [UsersData,setUsersData]= useState([])
  const [category,setCategory] = useState('')
  const [allProducts,setAllProducts]= useState([])
  const [selectedProduct,setSelectedProduct] = useState({})
  const ShowUser = (userData) =>setUserData(userData);
  
  const login = (token) => localStorage.setItem('token',token)
  const token = () => localStorage.getItem('token');
  const selectCategory = (category)=> setCategory(category)
  const fetchProducts = (products)=> setAllProducts(products)
  const showProduct = (product)=> setSelectedProduct(product)

  const logout = () => {
     localStorage.removeItem('token');
  }
  return (
    <AppContext.Provider value={{ user,category,allProducts,selectedProduct, userData,login,fetchProducts,showProduct,selectCategory, logout,ShowUser,token }}>
      {children}
    </AppContext.Provider>
  );
};

// 3. Create a custom hook to use the context
export const useAppContext = () => useContext(AppContext);
