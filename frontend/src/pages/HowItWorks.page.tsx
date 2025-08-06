import { useTranslation } from 'react-i18next';
import Footer from '../components/footer/Footer.component';
import Header from '../components/header/Header.component';
import FAQ from '../components/faq/FAQ.component';

function HowItWorks() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <main className="w-[100%] flex-grow">
        <h1 className="text-center text-2xl mt-5 font-bold text-text_c_0-light dark:text-text_c_0-dark">
          {t('HowItWorks.title')}
        </h1>

        <div
          style={{ whiteSpace: 'pre-line' }}
          className="w-[100%] flex justify-center gap-15 mt-10 mb-20 flex-wrap text-[15px] text-white  "
        >
          <div className="bg-[#1E3A8A]  shadow-2xl dark:shadow-bg_c_2-dark p-5 py-5 w-[300px]  max-h-[500px] rounded-2xl bg-gradient-to-br from-[#868CFF] to-[#4318FF]">
            <img className="w-[60px] m-auto pb-2" src="Group.svg" alt="" />
            <h3 className="text-center text-[20px] mb-3">
              {t('HowItWorks.1t')}
            </h3>
            <p>{t('HowItWorks.1d')}</p>
          </div>
          <div className="bg-[#1E3A8A] shadow-2xl dark:shadow-bg_c_2-dark p-5 py-5 w-[300px] max-h-[500px] rounded-2xl bg-gradient-to-br from-[#868CFF] to-[#4318FF]">
            <img className="w-[60px] m-auto pb-2" src="Group2.svg" alt="" />
            <h3 className="text-center text-[20px] mb-3">
              {t('HowItWorks.2t')}
            </h3>
            <p>{t('HowItWorks.2d')}</p>
          </div>
          <div className="bg-[#1E3A8A] shadow-2xl dark:shadow-bg_c_2-dark p-5 py-5 w-[300px] max-h-[500px] rounded-2xl bg-gradient-to-br from-[#868CFF] to-[#4318FF]">
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

export default HowItWorks;
