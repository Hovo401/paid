import { NavLink } from 'react-router-dom';
import Menu from './menu/Menu.component';
import { useState } from 'react';

function Header({ mode = 'standart' }: { mode?: 'standart' | 'sitebar' }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="pt-[10px] h-[56px] pl-[30px] pr-[10px] fixed w-[100%] top-0 pb-[10px]  z-100  border-0  bg_c_0 t_c_1000 transition-[background-color] duration-1000">
      <div className="mx-auto flex justify-between items-center">
        <nav className={`flex items-center gap-6  `}>
          <div
            className={` absolute h-[55px] w-[200px] left-0 top-0 -z-10 border-0 transition-[background-color] duration-1000
              ${
                mode == 'sitebar'
                  ? 'md:bg-bg_c_1-light dark:md:bg-bg_c_1-dark'
                  : ' '
              } `}
          ></div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-text_c_0-light dark:text-text_c_0-dark text-[18px] sm:text-[24px] font-bold ${
                isActive ? 'underline' : ''
              } `
            }
          >
            Paid Email
          </NavLink>
          <div className="absolute left-[210px] flex items-center gap-6">
            <NavLink
              to="/Categories"
              className={({ isActive }) =>
                `text-text_c_0-light dark:text-text_c_0-dark text-base hidden lg:block ${
                  isActive ? 'underline' : ''
                }`
              }
            >
              Categories
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-text_c_0-light dark:text-text_c_0-dark text-base hidden lg:block ${
                  isActive ? 'underline' : ''
                }`
              }
            >
              About us
            </NavLink>
            <NavLink
              to="/HowItWorks"
              className={({ isActive }) =>
                `text-text_c_0-light dark:text-text_c_0-dark text-base hidden lg:block ${
                  isActive ? 'underline' : ''
                }`
              }
            >
              How it works
            </NavLink>
            <NavLink
              to="/Registration"
              className={({ isActive }) =>
                `text-text_c_0-light dark:text-text_c_0-dark text-base hidden lg:block ${
                  isActive ? 'underline' : ''
                }`
              }
            >
              Registration as a influencer
            </NavLink>
          </div>
        </nav>
        <div className="flex items-center gap-2">
          <div className="relative flex items-center">
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
              <img src="search.svg" alt="Search icon" className="w-4 h-4" />
            </button>
          </div>
          <button
            type="submit"
            className="w-[28px] h-[28px] hidden lg:block cursor-pointer"
          >
            <img src="globe.svg" className="w-[28px] h-[28px]" />
          </button>
          <NavLink to="/accaunt">
            <button
              type="submit"
              className="w-[28px] h-[28px] hidden lg:block cursor-pointer"
            >
              <img src="personIcon.svg" className="w-[23px] h-[23px]" />
            </button>
          </NavLink>
          <NavLink
            to="/LogIn"
            className={({ isActive }) =>
              `text-[#A3AED0] hidden lg:block text-sm ${
                isActive ? 'underline' : ''
              }`
            }
          >
            <div className="py-1.5 bg- h-[36px] w-[70px] rounded-full bg_c_2 t_c_1000 px-[15px]">
              <p>Log in</p>
            </div>
          </NavLink>
          <button
            type="submit"
            className="w-[28px] select-none h-[28px] lg:hidden cursor-pointer flex flex-col justify-center items-center space-y-1.5 hover:scale-110 transition-transform duration-200 "
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-text_c_0-light dark:bg-text_c_0-dark transition-all duration-400 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
                menuOpen ? 'rotate-45 translate-y-2 scale-x-110' : 'scale-x-100'
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-text_c_0-light dark:bg-text_c_0-dark transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] delay-100 ${
                menuOpen ? 'scale-x-0' : 'scale-x-100'
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-text_c_0-light dark:bg-text_c_0-dark transition-all duration-400 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] delay-50 ${
                menuOpen
                  ? '-rotate-45 -translate-y-2 scale-x-110'
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
