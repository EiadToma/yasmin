import { useEffect, useState } from 'react'
import axios from 'axios'
import { CircleChevronDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ArticleSkeleton from '../components/Loading'
import UserCard from '../components/Usercard'
const Dashboard = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)  
  const [search, setSearch] = useState('')
  const [expand, setExpand] = useState(false)
  const [city,setCity] = useState('')
  const [company,setCompany] = useState('')
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  useEffect(() => {
    if (token !== 'usertoken') navigate('/login')
  }, [])

  const cards = data.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase());
    const matchesCity = city ? user.address.city === city : true;
    const matchesCompany = company ? user.company.name === company : true;
    return matchesSearch && matchesCity && matchesCompany;
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setData(response.data)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)  
      }
    }
    fetchData()
  }, [])
console.log(cards)
  return (
    <>
      {loading ? ( 
        <ArticleSkeleton />
      ) : (
        <>
          <div className='mx-auto w-1/4 m-2 h-fit'>
            <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder='search...'
              className=' inline-block rounded-xl w-4/5 bg-white p-1 border border-green-100 focus:outline-green-100'
            />
            <CircleChevronDown onClick={() => setExpand(!expand)} className='cursor-pointer inline-block text-green-500' />
          </div>
<div
  className={`overflow-hidden transition-all duration-300 bg-white rounded-xl shadow-md p-4 mt-2 border border-gray-200 ${
    expand ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
  }`}
>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">City</label>
      <select onChange={(e)=>setCity(e.target.value)} className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300">
        <option selected disabled>No thing Selected</option>
        <option>Bartholomebury</option>
        <option>Lebsackbury</option>
        <option>Howemouth</option>
        <option>South Christy</option>
        <option>Roscoeview</option>
      </select>
    </div>

    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">Company</label>
      <select  onChange={(e)=>setCompany(e.target.value)} className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300">
        <option selected disabled>No thing Selected</option>    
        <option>Keebler LLC</option>
        <option>Johns Group</option>
        <option>Abernathy Group</option>
        <option>Yost and Sons</option>
        <option>Hoeger LLC</option>
      </select>
    </div>
  </div>
</div>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {cards.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default Dashboard
