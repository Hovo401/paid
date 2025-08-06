import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import Header from '../components/header/Header.component';
import Footer from '../components/footer/Footer.component';
import FAQ from '../components/faq/FAQ.component';

function Home() {
  const [showMore, setShowMore] = useState(false);
  const { t, i18n } = useTranslation();
  const contentRef = useRef<HTMLDivElement>(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = showMore
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
  }, [showMore, i18n.language, windowWidth]);

  return (
    <>
      <Header />

      <main className="w-[100%] flex-grow ">
        <div className=" m-auto my-[30px]  shadow-lg dark:shadow-bg_c_2-dark px-[8px] w-[90%]  rounded-[16px] bg_c_1 text_c_0 pb-5 max-w-[1200px]">
          <div className=" flex flex-col  md:justify-normal md:flex-row ">
            <div className=" text-text_c_0-light dark:text-text_c_0-dark order-2 md:order-none flex-1/2 p-10 pt-0 md:pt-10 flex flex-col ">
              <h2 className="text-[30px] font-bold mb-2">{t('home.title')}</h2>
              <p className="max-w-90 mb-8 mt-5">{t('home.description')}</p>
              <div
                ref={contentRef}
                className={`max-w-90 mb-5  transition-[height] duration-1000 ease-in-out overflow-hidden`}
              >
                <b>{t('home.descriptionLong_1')}</b>
                <br />
                <br />
                {t('home.descriptionLong_2')}
              </div>
              <div>
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="main_color   cursor-pointer text-white rounded-full px-4 py-2"
                >
                  {showMore ? t('interface.ShowLess') : t('interface.ShowMore')}
                </button>
              </div>
            </div>
            <div className="flex flex-1/2 order-1 lg:order-none items-start  justify-center lg:w-[50%] ">
              <img
                src="Messages-amico.svg"
                className="w-[100%] max-w-[400px] min-w-[300px] "
                alt=""
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-text_c_0-light dark:text-text_c_0-dark text-[30px] font-bold text-center">
            {t('HowItWorks.title')}
          </h2>
        </div>
        <div
          style={{ whiteSpace: 'pre-line' }}
          className="w-[100%] flex justify-center gap-15 mt-10 mb-20 flex-wrap text-[15px] text-white  "
        >
          <div className="bg-[#1E3A8A] p-5 py-5 w-[300px] shadow-2xl dark:shadow-bg_c_2-dark max-h-[500px] rounded-2xl bg-gradient-to-br from-[#868CFF] to-[#4318FF]">
            <img className="w-[60px] m-auto pb-2" src="Group.svg" alt="" />
            <h3 className="text-center text-[20px] mb-3">
              {t('HowItWorks.1t')}
            </h3>
            <p>{t('HowItWorks.1d')}</p>
          </div>
          <div className="bg-[#1E3A8A] p-5 py-5 w-[300px] shadow-2xl dark:shadow-bg_c_2-dark max-h-[500px] rounded-2xl bg-gradient-to-br from-[#868CFF] to-[#4318FF]">
            <img className="w-[60px] m-auto pb-2" src="Group2.svg" alt="" />
            <h3 className="text-center text-[20px] mb-3">
              {t('HowItWorks.2t')}
            </h3>
            <p>{t('HowItWorks.2d')}</p>
          </div>
          <div className="bg-[#1E3A8A] p-5 py-5 w-[300px] shadow-2xl dark:shadow-bg_c_2-dark max-h-[500px] rounded-2xl bg-gradient-to-br from-[#868CFF] to-[#4318FF]">
            <img className="w-[60px] m-auto pb-2" src="Group3.svg" alt="" />
            <h3 className="text-center text-[20px] mb-3">
              {t('HowItWorks.3t')}
            </h3>
            <p>{t('HowItWorks.3d')}</p>
          </div>
        </div>

        <FAQ />
      </main>

      <Footer />
    </>
  );
}

export default Home;
