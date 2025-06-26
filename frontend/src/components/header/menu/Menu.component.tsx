import { NavLink } from "react-router-dom";

function Menu({ menuOpen }: { menuOpen: boolean }) {
  return (
    <menu
      className={`fixed max-w-[440px] z-10 min-w-[200px] w-[100%] h-[100%] menu_color top-[56px]  right-0 transition-transform duration-300   ${
        menuOpen ? "translate-x-0" : "translate-x-full "
      }`}
    >
      <nav className="flex flex-col items-center justify-center gap-3 p-5">
        <NavLink
          to="/LogIn"
          className={({ isActive }) =>
            `text-[#A3AED0]  text-sm ${isActive ? "underline" : ""}`
          }
        >
          <div className="py-1.5 bg-[#FFFFFF] h-[36px] w-[70px] rounded-full px-[15px]">
            <p>Log in</p>
          </div>
        </NavLink>
        <NavLink
          to="/Categories"
          className={({ isActive }) =>
            `text-text_c_0-light dark:text-text_c_0-dark text-base  ${
              isActive ? "underline" : ""
            }`
          }
        >
          Categories
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-text_c_0-light dark:text-text_c_0-dark text-base  ${
              isActive ? "underline" : ""
            }`
          }
        >
          About us
        </NavLink>
        <NavLink
          to="/HowItWorks"
          className={({ isActive }) =>
            `text-text_c_0-light dark:text-text_c_0-dark text-base  ${
              isActive ? "underline" : ""
            }`
          }
        >
          How it works
        </NavLink>
        <NavLink
          to="/Registration"
          className={({ isActive }) =>
            `text-text_c_0-light dark:text-text_c_0-dark text-base  ${
              isActive ? "underline" : ""
            }`
          }
        >
          Registration as a influencer
        </NavLink>
        <button type="submit" className="w-[28px] h-[28px]  cursor-pointer">
          <img src="globe.svg" className="w-[28px] h-[28px]" />
        </button>
      </nav>
    </menu>
  );
}

export default Menu;
