import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { DOCTORS, getDoctorTranslation } from '../data/doctors';

const profile = {
  english: {
    back: 'All doctors',
    contact: 'Discuss your situation',
  },
  vietnamese: {
    back: 'Đội ngũ bác sĩ',
    contact: 'Trao đổi về trường hợp của bạn',
  },
  french: {
    back: 'Tous les praticiens',
    contact: 'Parler de votre situation',
  },
  korean: {
    back: '의료진 전체 보기',
    contact: '상담 문의',
  },
  simplified: {
    back: '查看所有医生',
    contact: '咨询您的情况',
  },
  traditional: {
    back: '查看所有醫師',
    contact: '諮詢您的情況',
  },
};

export default function DrLongPage() {
  const language = useSelector((state) => state.language.language);
  const doctor = DOCTORS.find((entry) => entry.id === 'dr-long');
  const t = getDoctorTranslation(doctor, language);
  const content = profile[language] || profile.english;

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7fafc] pt-20">
      <Helmet>
        <title>{t.name} | Emis Dental</title>
        <meta name="description" content={`${t.name} | Emis Dental`} />
      </Helmet>
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div className="order-2 lg:order-1">
            <Link to="/doctors" className="mb-10 inline-flex min-h-11 items-center text-sm font-semibold text-[#806019] hover:underline">← {content.back}</Link>
            <div className="mb-6 h-1 w-14 rounded-full bg-[#d7bc7b]" aria-hidden="true" />
            <h1 className="text-4xl font-semibold leading-tight text-[#2a3439] sm:text-5xl">{t.name}</h1>
            <p className="mt-5 text-base leading-relaxed text-[#46576a]">{t.languages}</p>
            <Link to="/contact" className="mt-9 inline-flex min-h-11 items-center rounded-full bg-[#d7bc7b] px-7 py-3 text-sm font-semibold text-[#20313d] transition hover:bg-[#ebd59f]">{content.contact}</Link>
          </div>
          <div className="doctor-portrait-frame order-1 mx-auto w-full max-w-[460px] overflow-hidden rounded-3xl border border-[#d7bc7b] shadow-2xl lg:order-2">
            <img src={doctor.portrait} alt={t.name} className="aspect-[4/5] w-full object-cover object-top" fetchPriority="high" />
          </div>
        </div>
      </section>
    </main>
  );
}
