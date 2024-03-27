import './App.css'
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";



function App() {
  return (
    <>

<div className='flex relative'>
      <nav className='w-[100%] h-[160px] bg-gradient-to-r from-teal-300 to-blue-800 via-blue-500 m-4'></nav>
      <div className='bg-red-700 w-[160px] h-[160px] border-8 rounded-full absolute bottom-0 top-16 left-1/1 transform -translate-x-1/1 ml-12'>
        <img src="https://www.freepnglogos.com/uploads/old-women-png/old-woman-user-pictures-anna-litviniuk-icon-person-icon-22.png" alt="" />
      </div>
    </div>

    <div className='flex justify-between items-center'>
    <h1 className='mt-10 ml-8 text-xl font-bold'>Hemnarayan Yadav</h1>
    <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
          <AiFillEdit size={20} className="mr-2" />
          Edit Profile
        </button>
    </div>
    

    <div className='flex ml-8 mt-3 font-bold'>
      <img className='w-6 h-6 ' src="https://www.freepnglogos.com/uploads/national-flag-png/india-flag-national-symbols-planet-33.png" alt="" />
      <h1 className='pl-2'> | Rajasthan, India.491332, Asia</h1>
    </div>

    <div className='flex ml-8 mt-2 font-bold'>
      <h1>Age: 24 | </h1>
      <h1 className='pl-2'>Gender: Male |</h1>
      <h1 className='pl-2'>Status: <span className='text-green-600'> Active*</span></h1>
    </div>

    <div className='flex justify-between w-[400px] mt-8'>
     
      <ul className='ml-8'>
      <li className="flex items-center"><FaRegUser className="mr-2" /> Role :</li>
      <li className="flex items-center mt-7"><MdOutlineMail className="mr-2" /> Email :</li>
      <li className="flex items-center mt-7"><FaPhoneAlt className="mr-2" /> Contact :</li>
      <li className="flex items-center mt-7"><IoLocationOutline className="mr-2" /> Region :</li>
    </ul>

      <ul>
        <li>Web Developer</li>
        <li className='mt-7'>surajmukhi1234@gmail.com</li>
        <li className='mt-7'>(+91) (12348) (56789)</li>
        <li className='mt-7'>Sanatani Hindu</li>
      </ul>
    </div>
    
     
    </>
  )
}

export default App
