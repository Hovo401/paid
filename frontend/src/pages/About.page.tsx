import {useTranslation} from 'react-i18next';

import Footer from '../components/footer/Footer.component';
import Header from '../components/header/Header.component';


function About() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <main className="w-[100%] flex-grow">
        <h1 className="text-center text-2xl mt-5 font-bold text-text_c_0-light dark:text-text_c_0-dark ">
          {t('aboutUs.title')}
        </h1>
        <div className=" m-auto my-[30px] p-10  shadow-lg dark:shadow-bg_c_2-dark  px-[8px] w-[90%]  rounded-[16px] bg_c_1 text_c_0  max-w-[1200px]">
          <div className=" flex flex-col  md:justify-normal md:flex-row ">
            <div className=" text-text_c_0-light dark:text-text_c_0-dark order-2 md:order-none flex-1/2 p-10 pt-0 md:pt-10 flex flex-col ">
              <h2 className="text-[30px] font-bold mb-2">{t('home.title')}</h2>
              <p className="max-w-90 mb-8 mt-5">{t('aboutUs.description')}</p>
              {/* <p className={`max-w-90 mb-5   ${showMore ? '' : 'hidden'}`}>
                <b>{t('home.descriptionLong_1')}</b>
                <br />
                <br />
                {t('home.descriptionLong_2')}
              </p>
              <div>
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="main_color   cursor-pointer text-white rounded-full px-4 py-2"
                >
                  {showMore ? t('interface.ShowLess') : t('interface.ShowMore')}
                </button>
              </div> */}
            </div>
            <div className="flex flex-1/2 order-1 lg:order-none  items-start  justify-center lg:w-[50%] ">
              <img
                src="static/GroupAbout.svg"
                className="w-[80%]  max-w-[360px] min-w-[200px] "
                alt=""
              />
            </div>
          </div>
        </div>

        

        

        
      </main>
      <Footer />
    </>
  );
}

export default About;
