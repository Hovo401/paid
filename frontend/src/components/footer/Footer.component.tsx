import { useState } from "react";
function FooterColumn() {
  return (
    <div className="text-left w-[135px]  p-[5px]">
      <h4 className="uppercase font-bold text-lg">LOREM IPSUM</h4>
      <p className="text-sm">dummy text</p>
      <p className="text-sm">dummy text</p>
      <p className="text-sm">dummy text</p>
    </div>
  );
}

function Footer() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <footer className=" text-text_c_0-light  w-[100%] dark:bg-[#8997B8] bg-[#ffffff] py-4    transition-[background-color] duration-1000">
      <div className="container mx-auto  px-4 ">
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="flex-shrink-0 mx-auto md:mx-0 w-[130px] mb-4 md:mb-0">
            <p className=" text-[24px]  font-bold">Paid Email</p>
            <div className="flex space-x-2 mt-2">
              <img src="instagram.svg" alt="Email" className="w-6 h-6" />
              <img src="facebook.svg" alt="Facebook" className="w-6 h-6" />
              <img src="instagram.svg" alt="Instagram" className="w-6 h-6" />
              <img src="twitter.svg" alt="Message" className="w-6 h-6" />
            </div>
          </div>

          <div className="flex  flex-wrap justify-center md:flex-row  mx-0 md:mx-8 space-y-4 md:space-y-0 md:space-x-4 ">
            <FooterColumn />
            <FooterColumn />
            <FooterColumn />
            <FooterColumn />
          </div>
          <div className="flex flex-col mb-4 mx-auto md:mx-0 md:mb-0 mt-[15px]">
            <button className="main_color cursor-pointer w-[150px] text-white rounded-full px-4 py-2">
              LABEL
            </button>
            <button
              onClick={toggleDarkMode}
              className="main_color cursor-pointer w-[150px] text-white rounded-full px-4 py-2 mt-2"
            >
              Dark Mode
            </button>
          </div>
        </div>
        {/* Bottom Row */}
        <div className="border-t border-gray-200 mt-4 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-2 md:mb-0">© 2022, ALL RIGHT RESERVED.</p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <a href="#" className="text-sm uppercase">
              PRIVACY
            </a>
            <a href="#" className="text-sm uppercase">
              TERMS OF SERVICE
            </a>
            <a href="#" className="text-sm uppercase">
              COOKIES SETTINGS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
