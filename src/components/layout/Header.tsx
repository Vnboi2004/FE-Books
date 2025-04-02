import Logo from '../../assets/images/logo.png';
import { navLinks } from '../../data';
import { LuUserRound } from "react-icons/lu";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='border-b border-b-gray-300 bg-[#3E92CC]'>
      <div className='max-w-[var(--container-width-lg)] mx-auto py-6'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center gap-2.5'>
            <img src={Logo} alt="" className='w-12 h-12 object-cover'/>
            <h1 className='text-3xl font-primary font-semibold'>
              TPHung
            </h1>
          </div>
          {/* Nav links */}
          <div>
            <ul className='flex items-center gap-4'>
              {navLinks.map((navLink) => (
                <li key={navLink.id}>
                    <NavLink 
                      to={navLink.path}
                      className={({ isActive }) => `text-base font-heading p-2 ${isActive ? 'text-white' : 'text-black'}`}
                      >
                        {navLink.label}
                    </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Acount */}
          <button className='flex items-center gap-2 cursor-pointer'>
            <LuUserRound />
            <h1 className='text-base font-heading'>ACCOUNT</h1>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
