import { useAppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const { allProducts, category,showProduct } = useAppContext();

  const navigate = useNavigate()
  const categoryProducts = allProducts?.filter(
    (item) => item.category === category
  );
  console.log(allProducts);
  console.log(categoryProducts);
  console.log(category);

  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8">
  {categoryProducts?.map((item, index) => (
    <div
      onClick={()=>{
        showProduct(item)
        navigate(`./${item.id}`)
      }}
      key={index}
      className="bg-white cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-contain bg-gray-100 p-4"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-md font-semibold text-gray-800 line-clamp-2">{item.title}</h2>
        <p className="text-gray-500 text-sm">{item.category}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold text-green-600">${item.price}</span>
          <span className="text-sm text-yellow-600">
            ⭐ {item.rating.rate} ({item.rating.count})
          </span>
        </div>
      </div>
      
    </div>
  ))}
</div>

  );
};

export default Products;
