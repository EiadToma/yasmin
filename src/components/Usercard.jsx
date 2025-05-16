import { useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";
const UserCard = ({ user }) => {
  const navigate = useNavigate()
  const {ShowUser} = useAppContext()
  return (
    <div  onClick={()=>{
      ShowUser(user),
      navigate(`./${user.id}`)
    }} 
      className=" w-full mt-1 mb-1 cursor-pointer   bg-green-50 inline-block  shadow-xl rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition-shadow">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{user.name}</h2>
      <p className="text-sm text-blue-600 mb-4">{user.email}</p>

      <div className="mb-3">
        <h3 className="font-semibold text-gray-700">Address:</h3>
        <p className="text-gray-600">
          {user.address.city}
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-gray-700">📞 {user.phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
