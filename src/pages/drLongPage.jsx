import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { DOCTORS, getDoctorTranslation } from '../data/doctors';

const profile = {
  english: {
    back: 'All doctors',
    qualifications: 'Professional qualifications',
    certificates: 'Professional license and advanced training',
    workshops: 'Selected training and workshops',
    practice: 'Clinical experience',
    language: 'Language proficiency and international education',
    contact: 'Discuss your situation',
    qualificationsList: [
      'Degree in Dentistry: Guangxi Medical University, China (2018).',
      'Completed 40 academic credits of supplementary dentistry training at the University of Medicine and Pharmacy, Hue University.',
      'Master’s Degree: Anhui Normal University, China.',
      'Specialist Level I in Odonto-Stomatology (CKI): Can Tho University of Medicine and Pharmacy (2026), classified as Excellent.',
    ],
    certificatesList: [
      'Certificate of Practice in Dentistry, issued by the Ho Chi Minh City Department of Health, No. 055829/HCM-CCHN.',
      'Basic Dental Implantology: 120 hours, Van Lang University (2023).',
      'Infection Control in Dental Practice: 48 hours, Van Lang University (2023).',
      'Continuing Medical Education in Basic Orthodontics: 200 hours, Van Lang University (2024).',
      'Basic Oral Surgery: 90 hours, Van Lang University (2024).',
    ],
    workshopsList: [
      'Veneer Master Workshop: three-day theory and hands-on program (2024).',
      'Endodontic Retreatment and Management of Complex Cases workshop (2024).',
      'Practical Endodontics workshop (2023).',
      'Challenges, Science and Art in Shaping Curved Root Canals (2023).',
      'Non-Surgical Endodontic Retreatment workshop (2023).',
      'Multidisciplinary Approach to Dental Treatment (2024).',
      'Emergency Management of Anaphylactic Shock and Local Anesthetic Toxicity (2025).',
      'Digital Dentistry: From Single-Tooth Restorations to Full-Mouth Rehabilitation (2025).',
    ],
    practiceList: [
      'Clinical training and practice at Ho Chi Minh City Hospital of Odonto-Stomatology.',
      'Completed clinical training and was certified as competent in basic dental procedures within the scope of general dentistry.',
    ],
    languageList: [
      'Recognized by the University of Medicine and Pharmacy, Hue University, as proficient in using Chinese for medical examination and treatment.',
      'Bachelor of Arts in Chinese Language and Literature: Anhui Normal University, China (2007–2011).',
      'Completed a four-year full-time undergraduate program in China.',
    ],
  },
  vietnamese: {
    back: 'Đội ngũ bác sĩ',
    qualifications: 'Bằng cấp chuyên môn',
    certificates: 'Chứng chỉ hành nghề và đào tạo chuyên sâu',
    workshops: 'Đào tạo và hội thảo chuyên môn tiêu biểu',
    practice: 'Quá trình thực hành chuyên môn',
    language: 'Ngoại ngữ và học tập quốc tế',
    contact: 'Trao đổi về trường hợp của bạn',
    qualificationsList: [
      'Bác sĩ Răng Hàm Mặt: Đại học Y khoa Quảng Tây, Trung Quốc (2018).',
      'Hoàn thành 40 tín chỉ đào tạo bổ sung ngành Răng Hàm Mặt tại Trường Đại học Y Dược, Đại học Huế.',
      'Thạc sĩ: Trường Đại học Sư phạm An Huy, Trung Quốc.',
      'Bác sĩ Chuyên khoa I Răng Hàm Mặt: Trường Đại học Y Dược Cần Thơ (2026), loại Giỏi.',
    ],
    certificatesList: [
      'Chứng chỉ hành nghề khám bệnh, chữa bệnh chuyên ngành Răng Hàm Mặt do Sở Y tế TP. Hồ Chí Minh cấp, số 055829/HCM-CCHN.',
      'Cấy ghép nha khoa cơ bản: 120 tiết, Trường Đại học Văn Lang (2023).',
      'Kiểm soát lây nhiễm trong thực hành nha khoa: 48 tiết, Trường Đại học Văn Lang (2023).',
      'Cập nhật kiến thức y khoa liên tục về Chỉnh hình răng mặt cơ bản: 200 tiết, Trường Đại học Văn Lang (2024).',
      'Phẫu thuật miệng cơ bản: 90 tiết, Trường Đại học Văn Lang (2024).',
    ],
    workshopsList: [
      'Veneer Master Workshop: ba ngày học lý thuyết và thực hành (2024).',
      'Điều trị nội nha lại và xử lý các trường hợp nội nha phức tạp (2024).',
      'Nội nha thực chiến (2023).',
      'Thách thức, khoa học và nghệ thuật trong tạo dạng ống tủy cong (2023).',
      'Thảo luận về điều trị nội nha lại không phẫu thuật (2023).',
      'Tiếp cận điều trị nha khoa dưới góc nhìn đa chuyên khoa (2024).',
      'Cấp cứu sốc phản vệ và ngộ độc thuốc tê (2025).',
      'Nha khoa thời đại số: Từ phục hồi đơn lẻ đến phục hồi toàn bộ (2025).',
    ],
    practiceList: [
      'Thực hành chuyên môn tại Bệnh viện Răng Hàm Mặt TP. Hồ Chí Minh.',
      'Hoàn thành chương trình thực hành lâm sàng và được xác nhận có khả năng thực hiện các kỹ thuật chuyên môn cơ bản của bác sĩ Răng Hàm Mặt.',
    ],
    languageList: [
      'Được Trường Đại học Y Dược, Đại học Huế công nhận đủ trình độ sử dụng thành thạo tiếng Trung trong khám bệnh, chữa bệnh.',
      'Cử nhân Văn học, chuyên ngành Ngôn ngữ và Văn học Trung Quốc: Đại học Sư phạm An Huy, Trung Quốc (2007–2011).',
      'Được đào tạo đại học chính quy bốn năm tại Trung Quốc.',
    ],
  },
  french: {
    back: 'Tous les praticiens',
    qualifications: 'Diplômes et qualifications',
    certificates: 'Autorisation d’exercice et formations spécialisées',
    workshops: 'Formations et ateliers sélectionnés',
    practice: 'Expérience clinique',
    language: 'Compétences linguistiques et études en Chine',
    contact: 'Parler de votre situation',
    qualificationsList: [
      'Diplôme en odontologie : Université de médecine du Guangxi, Chine (2018).',
      'Formation complémentaire en odontologie de 40 crédits à l’Université de médecine et de pharmacie de Hué.',
      'Diplôme de master : Université normale de l’Anhui, Chine.',
      'Spécialisation de niveau I en odontostomatologie (CKI) : Université de médecine et de pharmacie de Cần Thơ (2026), mention Excellent.',
    ],
    certificatesList: [
      'Autorisation d’exercice en odontologie délivrée par le service de santé de Hô Chi Minh-Ville, n° 055829/HCM-CCHN.',
      'Formation initiale en implantologie dentaire : 120 heures, Université Văn Lang (2023).',
      'Prévention des infections en pratique dentaire : 48 heures, Université Văn Lang (2023).',
      'Formation médicale continue en orthodontie de base : 200 heures, Université Văn Lang (2024).',
      'Chirurgie orale de base : 90 heures, Université Văn Lang (2024).',
    ],
    workshopsList: [
      'Veneer Master Workshop : trois jours de théorie et de pratique (2024).',
      'Retraitement endodontique et prise en charge des cas complexes (2024).',
      'Atelier pratique d’endodontie (2023).',
      'Défis, science et art de la mise en forme des canaux radiculaires courbes (2023).',
      'Retraitement endodontique non chirurgical (2023).',
      'Approche pluridisciplinaire des soins dentaires (2024).',
      'Prise en charge d’urgence de l’anaphylaxie et de la toxicité des anesthésiques locaux (2025).',
      'Dentisterie numérique : de la restauration unitaire à la réhabilitation complète (2025).',
    ],
    practiceList: [
      'Formation et pratique cliniques à l’hôpital d’odontostomatologie de Hô Chi Minh-Ville.',
      'Formation clinique achevée, avec validation de l’aptitude à réaliser les actes dentaires de base relevant de la dentisterie générale.',
    ],
    languageList: [
      'L’Université de médecine et de pharmacie de Hué a reconnu sa maîtrise du chinois pour les examens et traitements médicaux.',
      'Licence en langue et littérature chinoises : Université normale de l’Anhui, Chine (2007–2011).',
      'Quatre années d’études universitaires à temps plein en Chine.',
    ],
  },
  korean: {
    back: '의료진 전체 보기',
    qualifications: '학력 및 전문 자격',
    certificates: '진료 면허 및 심화 교육',
    workshops: '주요 교육 및 학술 워크숍',
    practice: '임상 경험',
    language: '언어 능력 및 중국 유학',
    contact: '상담 문의',
    qualificationsList: [
      '치의학 학위: 중국 광시의과대학교 (2018).',
      '후에대학교 의약학대학에서 치의학 보충 교육 40학점 이수.',
      '석사 학위: 중국 안후이사범대학교.',
      '구강악안면 분야 1급 전문과정(CKI): 껀터 의약대학교 (2026), 우수 등급.',
    ],
    certificatesList: [
      '호찌민시 보건국 발급 치과 진료 면허, 번호 055829/HCM-CCHN.',
      '기초 치과 임플란트 교육: 120시간, 반랑대학교 (2023).',
      '치과 진료 감염 관리: 48시간, 반랑대학교 (2023).',
      '기초 교정학 지속 의학 교육: 200시간, 반랑대학교 (2024).',
      '기초 구강외과 교육: 90시간, 반랑대학교 (2024).',
    ],
    workshopsList: [
      'Veneer Master Workshop: 3일간의 이론 및 실습 교육 (2024).',
      '재근관 치료와 복잡한 근관 치료 사례 관리 워크숍 (2024).',
      '실전 근관 치료 워크숍 (2023).',
      '만곡 근관 형성의 과제, 과학과 기술에 관한 학술 워크숍 (2023).',
      '비수술적 재근관 치료 워크숍 (2023).',
      '다학제 관점에서의 치과 치료 (2024).',
      '아나필락시스와 국소마취제 독성의 응급 대처 (2025).',
      '디지털 치과학: 단일 치아 수복에서 전악 재건까지 (2025).',
    ],
    practiceList: [
      '호찌민시 구강악안면병원에서 임상 교육 및 실습.',
      '임상 교육을 마치고 일반 치과 범위의 기본 진료 기술을 수행할 수 있음을 확인받았습니다.',
    ],
    languageList: [
      '후에대학교 의약학대학에서 진료와 치료에 중국어를 사용할 수 있는 능력을 인정받았습니다.',
      '중국어 언어문학 학사: 중국 안후이사범대학교 (2007–2011).',
      '중국에서 4년제 정규 대학 과정을 이수했습니다.',
    ],
  },
  simplified: {
    back: '查看所有医生',
    qualifications: '专业学历与资格',
    certificates: '执业证书与进修培训',
    workshops: '部分专业培训与学术研讨',
    practice: '临床实践经历',
    language: '语言能力与在华学习经历',
    contact: '咨询您的情况',
    qualificationsList: [
      '牙医学学位：中国 Guangxi Medical University（2018）。',
      '在顺化大学医药学院完成牙医学补充培训，共 40 学分。',
      '硕士学位：中国 Anhui Normal University。',
      '口腔颌面医学一级专科（CKI）：Can Tho University of Medicine and Pharmacy（2026），成绩优秀。',
    ],
    certificatesList: [
      '胡志明市卫生部门颁发的牙科执业证书，编号 055829/HCM-CCHN。',
      '基础牙种植培训：120 小时，Van Lang University（2023）。',
      '牙科诊疗感染控制培训：48 小时，Van Lang University（2023）。',
      '基础正畸继续医学教育：200 小时，Van Lang University（2024）。',
      '基础口腔外科培训：90 小时，Van Lang University（2024）。',
    ],
    workshopsList: [
      'Veneer Master Workshop：为期三天的理论与实践培训（2024）。',
      '根管再治疗与复杂根管病例处理工作坊（2024）。',
      '实用根管治疗工作坊（2023）。',
      '弯曲根管预备的挑战、科学与艺术专题研讨（2023）。',
      '非手术根管再治疗工作坊（2023）。',
      '多学科视角下的牙科治疗（2024）。',
      '过敏性休克与局部麻醉药毒性的急救处理（2025）。',
      '数字牙科：从单牙修复到全口重建（2025）。',
    ],
    practiceList: [
      '曾在胡志明市口腔颌面医院接受临床培训并开展实践。',
      '已完成临床培训，并获确认具备实施普通牙科范围内基础诊疗技术的能力。',
    ],
    languageList: [
      '顺化大学医药学院认可其在医学检查和治疗中使用中文的能力。',
      '中国语言文学学士：中国 Anhui Normal University（2007–2011）。',
      '在中国完成四年全日制大学课程。',
    ],
  },
  traditional: {
    back: '查看所有醫師',
    qualifications: '專業學歷與資格',
    certificates: '執業證書與進修訓練',
    workshops: '部分專業訓練與學術研討',
    practice: '臨床實務經歷',
    language: '語言能力與在華學習經歷',
    contact: '諮詢您的情況',
    qualificationsList: [
      '牙醫學學位：中國 Guangxi Medical University（2018）。',
      '於順化大學醫藥學院完成牙醫學補充訓練，共 40 學分。',
      '碩士學位：中國 Anhui Normal University。',
      '口腔顎面醫學一級專科（CKI）：Can Tho University of Medicine and Pharmacy（2026），成績優秀。',
    ],
    certificatesList: [
      '胡志明市衛生部門核發的牙科執業證書，編號 055829/HCM-CCHN。',
      '基礎牙科植體訓練：120 小時，Van Lang University（2023）。',
      '牙科診療感染控制訓練：48 小時，Van Lang University（2023）。',
      '基礎正畸繼續醫學教育：200 小時，Van Lang University（2024）。',
      '基礎口腔外科訓練：90 小時，Van Lang University（2024）。',
    ],
    workshopsList: [
      'Veneer Master Workshop：為期三天的理論與實作訓練（2024）。',
      '根管再治療與複雜根管病例處理工作坊（2024）。',
      '實務根管治療工作坊（2023）。',
      '彎曲根管成形的挑戰、科學與藝術專題研討（2023）。',
      '非手術根管再治療工作坊（2023）。',
      '多學科觀點下的牙科治療（2024）。',
      '過敏性休克與局部麻醉藥毒性的緊急處置（2025）。',
      '數位牙科：從單顆牙修復到全口重建（2025）。',
    ],
    practiceList: [
      '曾於胡志明市口腔顎面醫院接受臨床訓練並進行實務工作。',
      '已完成臨床訓練，並獲確認具備執行一般牙科範圍內基礎診療技術的能力。',
    ],
    languageList: [
      '順化大學醫藥學院認可其於醫療檢查與治療中使用中文的能力。',
      '中國語言文學學士：中國 Anhui Normal University（2007–2011）。',
      '於中國完成四年全日制大學課程。',
    ],
  },
};

function ProfileSection({ number, title, items, tone = 'white' }) {
  return (
    <section className={`py-16 md:py-20 ${tone === 'cream' ? 'bg-[#f7f2e7]' : 'bg-white'}`}>
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.35fr_0.65fr] md:gap-16">
        <div>
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-[#8a691f]">{number}</p>
          <h2 className="max-w-md text-2xl font-semibold leading-snug text-[#193543] sm:text-3xl">{title}</h2>
        </div>
        <ul className="divide-y divide-[#d9dedb] border-t border-[#d9dedb]">
          {items.map((item) => (
            <li key={item} className="flex gap-4 py-4 text-sm leading-relaxed text-[#344b54] sm:text-base">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a48034]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function DrLongPage() {
  const language = useSelector((state) => state.language.language);
  const doctor = DOCTORS.find((entry) => entry.id === 'dr-long');
  const t = getDoctorTranslation(doctor, language);
  const content = profile[language] || profile.english;

  return (
    <main className="bg-white pt-20">
      <Helmet>
        <title>{t.name} | EMIS Dental</title>
        <meta name="description" content={t.descriptionOne} />
      </Helmet>
      <section className="bg-[#193543] text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div className="order-2 lg:order-1">
            <Link to="/doctors" className="mb-10 inline-flex min-h-11 items-center text-sm font-semibold text-[#ead19a] hover:underline">← {content.back}</Link>
            <div className="mb-6 h-1 w-14 rounded-full bg-[#d7bc7b]" aria-hidden="true" />
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">{t.name}</h1>
            <p className="mt-4 text-lg font-semibold text-[#ead19a]">{t.role}</p>
            <p className="mt-5 text-sm leading-relaxed text-[#d9e3e6]">{t.specialties}</p>
            <p className="mt-7 max-w-[65ch] text-base leading-relaxed text-[#f3f0e9]">{t.descriptionOne}</p>
            <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-[#d9e3e6]">{t.descriptionTwo}</p>
            <Link to="/contact" className="mt-9 inline-flex min-h-11 items-center rounded-full bg-[#d7bc7b] px-7 py-3 text-sm font-semibold text-[#193543] transition hover:bg-[#ebd59f]">{content.contact}</Link>
          </div>
          <div className="order-1 mx-auto w-full max-w-[460px] overflow-hidden rounded-3xl border border-[#d7bc7b] bg-[#fff0be] shadow-2xl lg:order-2">
            <img src={doctor.portrait} alt={t.name} className="aspect-[4/5] w-full object-cover object-top" fetchPriority="high" />
          </div>
        </div>
      </section>
      <ProfileSection number="01" title={content.qualifications} items={content.qualificationsList} tone="cream" />
      <ProfileSection number="02" title={content.certificates} items={content.certificatesList} />
      <ProfileSection number="03" title={content.workshops} items={content.workshopsList} tone="cream" />
      <ProfileSection number="04" title={content.practice} items={content.practiceList} />
      <ProfileSection number="05" title={content.language} items={content.languageList} tone="cream" />
    </main>
  );
}
