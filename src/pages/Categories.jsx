import { useState, useEffect } from 'react';
import { useAppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Categories = () => {
  const { selectCategory, fetchProducts } = useAppContext();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const GetProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      fetchProducts(response.data);
    };
    GetProducts();
  }, []);

  const categories = [...new Set(products.map((item) => item.category))];

  return (
    <div className="min-h-screen  px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Shop by Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {categories.map((item) => (
          <div
            key={item}
            className="w-64 h-40 rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => {
              selectCategory(item);
              navigate(`./${item}`);
            }}
          >
            <div
              className="w-full h-full bg-cover bg-center flex items-end p-4"
              style={{ backgroundImage: `url("/${item}.jpg")` }}
            >
              <div className="bg-black opacity-75 text-white text-lg font-semibold rounded px-2 py-1">
                {item}
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
