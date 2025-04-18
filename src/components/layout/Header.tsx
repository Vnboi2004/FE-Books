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
    <div className='bg-surface-2'>
      <div className='max-w-[var(--container-width-lg)] mx-auto py-6'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <h1 className='text-3xl font-primary font-semibold text-primary'>
            TPHung
          </h1>
          {/* Nav links */}
          <div>
            <ul className='flex items-center gap-6'>
              {navLinks.map((navLink) => (
                <li key={navLink.id} className='min-w-[100px] truncate'>
                    <NavLink 
                      to={navLink.path}
                      className={({ isActive }) => `text-base p-2 ${isActive ? 'text-primary' : 'text-inverse-surface'}`}
                      >
                        {t(navLink.label)}
                    </NavLink>
                </li>
              ))}
            </ul>
          </div>
          
          <div className='flex items-center gap-1 text-primary'>
            {/* infomation author */}
            <button className='px-3.5 py-1 cursor-pointer hover:bg-primary group rounded-sm'>
              <IoLogoGithub className='text-2xl group-hover:text-on-primary'/>
            </button>
            {/* dark mode */}
            <button className='px-3.5 py-1 cursor-pointer hover:bg-primary group rounded-sm'>
              <MdDarkMode className='text-2xl group-hover:text-on-primary'/>
            </button>
            {/* Translation */}
            <div className='relative group cursor-pointer'>
              <button className='px-3.5 py-1 group-hover:bg-primary rounded-sm'>
                <MdGTranslate className='text-2xl group-hover:text-on-primary'/>
              </button>
              <div className='absolute top-full left-0 hidden group-hover:block bg-surface-3 text-sm rounded z-[10]'>
                <div className='px-4 py-2.5 flex flex-col items-start gap-2'>
                  <button 
                    disabled={currentLanguage === 'en'}
                    onClick={() => handleChangeLanguage('en')}
                    className={`px-4 py-1.5 text-base font-bold hover:bg-primary rounded-sm hover:text-on-primary cursor-pointer ${currentLanguage === 'en' ? 'text-primary' : 'text-inverse-surface'}`}
                    >English
                  </button>
                  <button 
                    disabled={currentLanguage === 'vi'}
                    onClick={() => handleChangeLanguage('vi')}
                    className={`px-4 py-1.5 text-base font-bold hover:bg-primary rounded-sm hover:text-on-primary cursor-pointer ${currentLanguage !== 'en' ? 'text-primary' : 'text-inverse-surface'}`}
                    >Vietnamese
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Acount */}
          <button className='flex items-center gap-2 cursor-pointer text-primary min-w-[100px]'>
            <LuUserRound />
            <h1 className='text-base'>{t('account')}</h1>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
