import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function FAQItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {

    if (contentRef.current) {
      contentRef.current.style.height = open
        ? `${contentRef.current.scrollHeight}px`
        : '0px';
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [open, i18n.language, windowWidth]);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="bg_c_1 shadow-md dark:shadow-0 cursor-pointer  t_c_1000 p-2.5 px-5 rounded-2xl my-4"
    >
      <div className="bg_c_1t_c_1000 flex justify-between">
        <p>{title}</p>
        <div
          className={`transition-transform duration-500 w-[30px] h-[30px] flex justify-center items-center ${
            open ? 'rotate-180' : ''
          }  `}
        >
          <span className="w-[40px] h-[3px] bg-text_c_0-light dark:bg-text_c_0-dark rotate-50 relative left-[3.5px]"></span>
          <span className="w-[40px] h-[3px] bg-text_c_0-light dark:bg-text_c_0-dark -rotate-50 relative -left-[3.5px]"></span>
        </div>
      </div>
      <div
        ref={contentRef}
        className="transition-[height] duration-500 ease-in-out overflow-hidden"
      >
        <div className="mt-3 ">
          <hr className="mb-1" />
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default FAQItem;
