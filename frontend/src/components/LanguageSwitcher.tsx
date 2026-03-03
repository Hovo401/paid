import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
}) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const languages = ['en', 'ru', 'am'];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`relative w-[30px] h-[30px] ${className}`}
      ref={dropdownRef}
    >
      <button
        className="bg-transparent border-none cursor-pointer  w-[30px] h-[30px]"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <img src="static/globe.svg" alt="Language" className=" w-[30px] h-[30px]" />
      </button>
      {isOpen && (
        <div
          className="absolute top-full -left-4 bg_c_2 text_c_0 t_c_1000 border border-gray-300 shadow-lg z-10"
          role="menu"
        >
          {languages.map((lang) => (
            <button
              key={lang}
              className={`block w-full px-4 py-2 text-left  ${
                i18n.language === lang ? 'text-gray-400' : 'cursor-pointer'
              }`}
              onClick={() => changeLanguage(lang)}
              role="menuitem"
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
