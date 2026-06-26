import { NavLink } from 'react-router-dom';
import Menu from './menu/Menu.component';
import { useState, useContext } from 'react';
import LanguageSwitcher from '../LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../context/AuthContext.context';

function Header({ mode = 'standart' }: { mode?: 'standart' | 'sitebar' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('Home must be used within an AuthProvider');
  }
  const { isLoggedIn, setIsLoggedIn } = authContext;

  const handleLogout = async () => {
    try {
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Ошибка выхода:', error);
    }
  };

  return (
    <header className="pt-[10px] shadow-md dark:shadow-bg_c_1-dark h-[56px]  pl-[10px] pr-[20px] fixed w-[100%] top-0 pb-[10px]  z-100  border-0  bg_c_0 t_c_1000 transition-[background-color] duration-1000">
      <div className="mx-auto flex  justify-between items-center">
        <nav className={`flex items-center gap-6  `}>
          <div
            className={` absolute h-[56px] w-[200px] left-0 top-0 -z-10 border-0 transition-[background-color] duration-1000
              ${
                mode == 'sitebar'
                  ? 'md:bg-bg_c_1-light dark:md:bg-bg_c_1-dark'
                  : ' '
              } `}
          ></div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-text_c_0-light flex h-[36px] items-center pl-5  gap-1.5 dark:text-text_c_0-dark text-[18px] sm:text-[24px] font-bold ${
                isActive ? 'underline' : ''
              } `
            }
          >
            {/* <img src="static/logo.png" className='h-[40px] w-full' alt="" /> */}
            PRIMESS
          </NavLink>
          <div className="absolute left-[210px]  flex items-center gap-6">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-text_c_0-light dark:text-text_c_0-dark text-base hidden lg:block ${
                  isActive ? 'underline' : ''
                }`
              }
            >
              {t('pageName.about')}
            </NavLink>
            <NavLink
              to="/HowItWorks"
              className={({ isActive }) =>
                `text-text_c_0-light dark:text-text_c_0-dark text-base hidden lg:block ${
                  isActive ? 'underline' : ''
                }`
              }
            >
              {t('pageName.Howitworks')}
            </NavLink>
          </div>
        </nav>
        <div className="flex  items-center gap-5">
          {/* <div className="relative flex items-center">
            <input
              type="search"
              placeholder="Search"
              className="pl-10 pr-2 py-1.5 h-[36px] bg_c_2 t_c_1000 rounded-ful text_c_0 w-30 rounded-2xl sm:w-48 text-sm placeholder-[#9CA3AF] focus:outline-none"
              aria-label="Search"
            />
            <button
              type="submit"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer p-0"
              aria-label="Submit search"
            >
              <img src="static/search.svg" alt="Search icon" className="w-4 h-4" />
            </button>
          </div> */}

          <LanguageSwitcher className="hidden lg:block" />
          {/* <button
            type="submit"
            className="w-[28px] h-[28px] hidden lg:block cursor-pointer"
          {/* <NavLink to="/accaunt">
            <button
              type="submit"
              className="w-[28px] h-[28px] hidden lg:block cursor-pointer"
            >
              <img src="static/personIcon.svg" className="w-[23px] h-[23px]" />
            </button>
          </NavLink> */}

          {isLoggedIn ? (
            <>
              <NavLink to="/accaunt">
                <button
                  type="submit"
                  className="w-[28px] h-[28px] hidden lg:block cursor-pointer"
                >
                  <img src="static/personIcon.svg" className="w-[23px] h-[23px]" />
                </button>
              </NavLink>
              <NavLink to="/login">
                <button
                  type="submit"
                  onClick={handleLogout}
                  className="h-[28px] text_c_0 hidden lg:block cursor-pointer"
                >
                  log out
                </button>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/LogIn"
                className={({ isActive }) =>
                  `text_c_0 hidden lg:block text-sm ${
                    isActive ? 'underline' : ''
                  }`
                }
              >
                <div className="py-1.5 bg- h-[36px] flex items-center rounded-full  bg_c_2 t_c_1000 px-[15px]">
                  <p>{t('interface.Login')}</p>
                </div>
              </NavLink>
              <NavLink
                to="/Registration"
                className={({ isActive }) =>
                  `text-[#A3AED0] hidden  lg:block text-sm ${
                    isActive ? 'underline' : ''
                  }`
                }
              >
                <div className="py-1.5 bg- h-[36px]  flex items-center rounded-full main_color text-white t_c_1000 px-[15px]">
                  <p>{t('interface.SingUp')}</p>
                </div>
              </NavLink>
            </>
          )}

          <button
            type="submit"
            className="w-[36px] select-none h-[36px] lg:hidden cursor-pointer flex flex-col justify-center items-center space-y-2 hover:scale-110 transition-transform duration-200 "
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-[30px] h-[3px] bg-text_c_0-light dark:bg-text_c_0-dark transition-all duration-400 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
                menuOpen
                  ? 'rotate-45 translate-y-[11px] scale-x-110'
                  : 'scale-x-100'
              }`}
            ></span>
            <span
              className={`w-[30px] h-[3px] bg-text_c_0-light dark:bg-text_c_0-dark transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] delay-100 ${
                menuOpen ? 'scale-x-0' : 'scale-x-100'
              }`}
            ></span>
            <span
              className={`w-[30px] h-[3px] bg-text_c_0-light dark:bg-text_c_0-dark transition-all duration-400 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] delay-50 ${
                menuOpen
                  ? '-rotate-45 -translate-y-[11px] scale-x-110'
                  : 'scale-x-100'
              }`}
            ></span>
          </button>
        </div>
      </div>
      <Menu menuOpen={menuOpen} />
    </header>
  );
}

export default Header;
