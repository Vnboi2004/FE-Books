import { navLinks } from '../../data';
import { LuUserRound } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { MdGTranslate } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
const Header = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation('header');
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language?.split('-')[0] || 'en');
  
  useEffect(() => {
    setCurrentLanguage(i18n.language?.split('-')[0]);
    console.log(currentLanguage);
  }, [i18n.language]);
  
  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
  };

  return (
    <div className='bg-primary'>
      <div className='max-w-[var(--container-width-lg)] mx-auto py-6'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <h1 className='text-3xl font-primary font-semibold text-text-primary'>
            TPHung
          </h1>
          {/* Nav links */}
          <div>
            <ul className='flex items-center gap-6'>
              {navLinks.map((navLink) => (
                <li key={navLink.id} className='min-w-[80px] max-w-[200px] truncate'>
                    <NavLink 
                      to={navLink.path}
                      className={({ isActive }) => `text-base font-heading p-2 ${isActive ? 'text-text-primary' : 'text-text-p'}`}
                      >
                        {t(navLink.label)}
                    </NavLink>
                </li>
              ))}
            </ul>
          </div>
          
          {/* <div className="flex items-center gap-2">
            <button 
              disabled={currentLanguage === 'en'}
              onClick={() => handleChangeLanguage('en')}
              className={`text-base font-primary font-bold cursor-pointer ${currentLanguage === 'en' ? 'text-white' : 'text-black'}`}
            >English</button>
            <button 
              disabled={currentLanguage === 'vi'}
              onClick={() => handleChangeLanguage('vi')}
               className={`text-base font-primary font-bold cursor-pointer ${currentLanguage !== 'en' ? 'text-white' : 'text-black'}`}
              >Vietnamese</button>
          </div> */}
          <div className='flex items-center gap-4'>
            {/* infomation author */}
            <button>
              <IoLogoGithub className='text-text-primary'/>
            </button>
            {/* dark mode */}
            <button>
              <MdDarkMode className='text-text-primary'/>
            </button>
            {/* Translation */}
            <button>
              <MdGTranslate className='text-text-primary'/>
            </button>
          </div>
          {/* Acount */}
          <button className='flex items-center gap-2 cursor-pointer text-text-primary'>
            <LuUserRound />
            <h1 className='text-base font-heading'>{t('account')}</h1>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
