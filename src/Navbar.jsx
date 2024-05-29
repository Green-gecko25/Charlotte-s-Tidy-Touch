import logo from './Green house.png'
import { FaPhoneAlt } from "react-icons/fa";


const Navbar = () => {

  return (
      <div>
        <nav className='fixed top-0 right-0 w-full flex justify-between items-center duration-300 tracking-wider h-26 pt-4 bg-black z-50'>
          <div className='translate-x-10 flex justify-center items-center'>
            <img src={logo} className='w-20 duration-300' alt='logo'/>
            <h1 className="text-white text-2xl font-semibold">CTT</h1>
            <div className='bg-white w-0.5 h-14 translate-x-3'></div>
            <div className='text-white text-xs translate-x-5'>
              <p>Commercial</p>
              <p>Cleaning</p>
              <p>Commercial</p>
            </div>
          </div>
            <ul className='text-white gap-20 relative flex justify-center items-center font-semibold uppercase text-sm duration0300 -translate-x-12'>
              <li className='duration-300 bg-zinc-700 p-3 w-36 text-center cursor-pointer hover:text-green-500 hover:bg-white/40'>Residential</li>
              <li className='duration-300 bg-zinc-700 p-3 w-36 text-center cursor-pointer hover:text-green-500 hover:bg-white/40'>Commercial</li>
              <li className='duration-300 bg-zinc-700 p-3 w-24 text-center cursor-pointer hover:text-green-500 hover:bg-white/40'>About</li>
              <li className='duration-300 bg-zinc-700 p-3 w-36 text-center cursor-pointer hover:text-green-500 hover:bg-white/40'>Repository</li>
              <li className='duration-300 bg-gradient-to-r from-zinc-500 to-zinc-800 p-2 cursor-pointer rounded-3xl p-4'><FaPhoneAlt size={16} color='green' /></li>
            </ul>
        </nav>
      </div>
  )
}

export default Navbar

