import FAQItem from './FAQ.item.component';
import { useTranslation } from 'react-i18next';

function FAQ() {
  const { t } = useTranslation();
  const faqData = t('FAQ', { returnObjects: true });
  return (
    <div className="max-w-[600px] m-auto text_c_0 my-10">
      <div>
        <p className="text-center">FAQ</p>
      </div>
      <div className="px-2.5">
        {Array.isArray(faqData) &&
          faqData.map((item, i) => (
            <FAQItem
              key={i}
              title={item.title}
              description={item.description}
            />
          ))}
      </div>
    </div>
  );
}

export default FAQ;
