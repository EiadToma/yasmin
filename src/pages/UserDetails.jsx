import { useAppContext } from '../AppContext';

const UserDetails = () => {

  const {userData}= useAppContext()
  return (
    <div className="max-w-sm mx-auto mt-20 bg-white shadow-xl rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition-shadow">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{userData.name}</h2>
      <p className="text-sm text-gray-500 mb-1">@{userData.username}</p>
      <p className="text-sm text-blue-600 mb-4">{userData.email}</p>

      <div className="mb-3">
        <h3 className="font-semibold text-gray-700">Address:</h3>
        <p className="text-gray-600">
          {userData.address.suite}, {userData.address.street},<br />
          {userData.address.city}, {userData.address.zipcode}
        </p>
      </div>

      <div className="mb-3">
        <h3 className="font-semibold text-gray-700">Company:</h3>
        <p className="text-gray-600">{userData.company.name}</p>
        <p className="text-sm italic text-gray-500">"{userData.company.catchPhrase}"</p>
        <p className="text-sm text-gray-400">{userData.company.bs}</p>
      </div>

      <div className="flex flex-col gap-1">
        <a href={`http://${userData.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          🌐 {userData.website}
        </a>
        <p className="text-gray-700">📞 {userData.phone}</p>
      </div>
    </div>
  );
};

export default UserDetails;
