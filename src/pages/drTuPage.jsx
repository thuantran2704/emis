import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import drTuContent from '../Translations/drTuContent';
import DoctorProfileSection from '../components/DoctorProfileSection';
import { DOCTORS, getDoctorTranslation } from '../data/doctors';

const sectionLabels = {
  english: { back: 'All doctors', education: 'Education and training', practice: 'Current practice', focus: 'Clinical focus', language: 'Language' },
  vietnamese: { back: 'Đội ngũ bác sĩ', education: 'Học vấn và đào tạo', practice: 'Nơi công tác hiện tại', focus: 'Lĩnh vực chuyên môn', language: 'Ngôn ngữ' },
  french: { back: 'Tous les praticiens', education: 'Formation', practice: 'Lieux d’exercice', focus: 'Domaines de pratique', language: 'Langues' },
  korean: { back: '의료진 전체 보기', education: '교육 및 수련', practice: '현재 진료 기관', focus: '주요 진료 분야', language: '사용 언어' },
  simplified: { back: '查看所有医生', education: '教育与培训', practice: '当前执业机构', focus: '临床重点', language: '语言' },
  traditional: { back: '查看所有醫師', education: '教育與培訓', practice: '目前執業機構', focus: '臨床重點', language: '語言' },
};

export default function DrTuPage() {
  const language = useSelector((state) => state.language.language);
  const doctor = DOCTORS.find((entry) => entry.id === 'dr-tu');
  const t = getDoctorTranslation(doctor, language);
  const content = drTuContent[language] || drTuContent.english;
  const labels = sectionLabels[language] || sectionLabels.english;

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7fafc] pt-20">
      <Helmet>
        <title>{t.name} | Emis Dental</title>
        <meta name="description" content={t.summary} />
      </Helmet>
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div className="order-2 lg:order-1">
            <Link to="/doctors" className="mb-10 inline-flex min-h-11 items-center text-sm font-semibold text-[#806019] hover:underline">← {labels.back}</Link>
            <div className="mb-6 h-1 w-14 rounded-full bg-[#d7bc7b]" aria-hidden="true" />
            <h1 className="text-4xl font-semibold leading-tight text-[#2a3439] sm:text-5xl">{t.name}</h1>
            <p className="mt-4 text-lg font-semibold text-[#806019]">{t.role}</p>
            <p className="mt-5 text-sm leading-relaxed text-[#46576a]">{t.specialties}</p>
            <p className="mt-7 max-w-[65ch] text-base leading-relaxed text-[#344b54]">{t.summary}</p>
            <Link to="/contact" className="mt-9 inline-flex min-h-11 items-center rounded-full bg-[#d7bc7b] px-7 py-3 text-sm font-semibold text-[#20313d] transition hover:bg-[#ebd59f]">{content.contact}</Link>
          </div>
          <div className="doctor-portrait-frame order-1 mx-auto w-full max-w-[460px] overflow-hidden rounded-3xl border border-[#d7bc7b] shadow-2xl lg:order-2">
            <img src={doctor.portrait} alt={t.name} className="aspect-[4/5] w-full object-cover object-top" fetchPriority="high" />
          </div>
        </div>
      </section>
      <DoctorProfileSection number="01" title={labels.education} items={content.education} tone="cream" />
      <DoctorProfileSection number="02" title={labels.practice} items={content.practice} />
      <DoctorProfileSection number="03" title={labels.focus} items={t.focus.split(' • ')} tone="cream" />
      <DoctorProfileSection number="04" title={labels.language} items={[content.languages.join(', ')]} />
    </main>
  );
}
