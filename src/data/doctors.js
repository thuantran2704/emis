/**
 * Doctor profiles published on the Emis Dental website. A published profile
 * does not by itself indicate registration to practise at the clinic.
 *
 * Adding a new doctor:
 *  1. Import their portrait image below.
 *  2. Append a new entry to the DOCTORS array with id, slug, portrait,
 *     and translation blocks for each language.
 *  3. Create a page file (e.g. src/pages/drNewPage.jsx) using their
 *     detail translation file.
 *  4. Register the route in src/App.jsx.
 *
 * Keep doctor-specific claims in each language block only when approved source
 * material supports them. Cards require name, languages, and cta. Other fields
 * are optional and are rendered only when present.
 */

import drLongPortrait from '../pics/dr-long-portrait.png';
import drTuPortrait from '../pics/dr-tu-portrait-updated.png';

export const DOCTORS = [
  {
    id: 'dr-long',
    slug: '/dr-long',
    portrait: drLongPortrait,

    english: {
      name: 'Dr. Do Thai Long',
      role: 'Lead Dentist · Emis Dental',
      serviceLabel: 'Chinese-language dental care',
      registration: 'Registered to practice at Emis Dental',
      focus: 'Tooth Preservation • Aesthetic Restorations • Endodontics',
      summary: 'Trained in China and Vietnam, with a focus on preserving natural teeth and minimally invasive care.',
      languages: 'Languages: Chinese, Vietnamese',
      specialties: 'Tooth Preservation • Minimally Invasive Restorations • Endodontics • General Dentistry',
      descriptionOne: 'Dr. Long is the dentist in charge of professional care at Emis Dental. Trained in China and Vietnam, he focuses on preserving natural teeth, aesthetic restorations, and endodontic care.',
      descriptionTwo: 'His treatment plans consider oral health, function, natural appearance, and long-term results.',
      highlights: ['Specialist Level I in Odonto-Stomatology (2026)', 'Clinical practice at Ho Chi Minh City Hospital of Odonto-Stomatology'],
      cta: 'View Full Profile',
    },
    vietnamese: {
      name: 'BS.CKI Đỗ Thái Long',
      role: 'Bác sĩ phụ trách chuyên môn · Emis Dental',
      serviceLabel: 'Dịch vụ nha khoa tiếng Trung',
      registration: 'Bác sĩ đăng ký hành nghề tại Emis Dental',
      focus: 'Bảo tồn răng thật • Phục hình thẩm mỹ • Nội nha',
      summary: 'Được đào tạo tại Trung Quốc và Việt Nam, bác sĩ chú trọng bảo tồn răng thật và điều trị xâm lấn tối thiểu.',
      languages: 'Ngôn ngữ: Tiếng Trung, Tiếng Việt',
      specialties: 'Bảo tồn răng thật • Phục hình thẩm mỹ xâm lấn tối thiểu • Nội nha • Điều trị tổng quát',
      descriptionOne: 'BS.CKI Đỗ Thái Long phụ trách chuyên môn tại Emis Dental, được đào tạo tại Trung Quốc và Việt Nam, chú trọng nha khoa bảo tồn, phục hình thẩm mỹ xâm lấn tối thiểu và nội nha.',
      descriptionTwo: 'Mỗi kế hoạch điều trị cân bằng sức khỏe răng miệng, chức năng ăn nhai, thẩm mỹ tự nhiên và hiệu quả lâu dài.',
      highlights: ['Bác sĩ Chuyên khoa I Răng Hàm Mặt (2026)', 'Thực hành tại Bệnh viện Răng Hàm Mặt TP. Hồ Chí Minh'],
      cta: 'Xem hồ sơ chi tiết',
    },
    french: {
      name: 'Dr Do Thai Long', role: 'Dentiste responsable des soins · Emis Dental',
      serviceLabel: 'Soins dentaires en chinois',
      registration: 'Praticien déclaré chez Emis Dental',
      focus: 'Préservation dentaire • Restaurations esthétiques • Endodontie',
      summary: 'Formé en Chine et au Vietnam, il privilégie la préservation des dents naturelles et les soins peu invasifs.',
      languages: 'Langues : chinois, vietnamien',
      specialties: 'Préservation dentaire • Restaurations peu invasives • Endodontie • Soins généraux',
      descriptionOne: 'Responsable des soins chez Emis Dental, le Dr Long se consacre à la préservation des dents naturelles, aux restaurations esthétiques et à l’endodontie.',
      descriptionTwo: 'Ses plans de soins tiennent compte de la santé bucco-dentaire, de la fonction, de l’esthétique et de la durabilité.',
      highlights: ['Spécialiste de niveau I en odontostomatologie (2026)', 'Expérience clinique hospitalière à Hô Chi Minh-Ville'],
      cta: 'Voir le profil complet',
    },
    korean: {
      name: 'Dr. Do Thai Long', role: 'Emis Dental 진료 책임 치과의사',
      serviceLabel: '중국어 치과 진료',
      registration: 'Emis Dental 등록 진료 치과의사',
      focus: '자연 치아 보존 • 심미 수복 • 근관 치료',
      summary: '중국과 베트남에서 교육받았으며 자연 치아 보존과 최소 침습 치료에 집중합니다.',
      languages: '사용 언어: 중국어, 베트남어',
      specialties: '자연 치아 보존 • 최소 침습 심미 수복 • 근관 치료 • 일반 진료',
      descriptionOne: '도 타이 롱 치과의사는 Emis Dental의 진료 책임 치과의사로 자연 치아 보존, 심미 수복, 근관 치료에 집중합니다.',
      descriptionTwo: '치료 계획에서 구강 건강, 저작 기능, 자연스러운 심미성과 장기적인 결과를 함께 고려합니다.',
      highlights: ['구강악안면 분야 전문의 1급 (2026)', '호찌민시 구강악안면병원 임상 경험'],
      cta: '자세히 보기',
    },
    simplified: {
      name: '杜泰龙医生', role: 'Emis Dental 牙科诊所专业医疗负责人',
      serviceLabel: '中文牙科服务',
      registration: '在 Emis Dental 登记执业',
      focus: '天然牙保存 • 微创美学修复 • 牙髓治疗',
      summary: '在中国和越南接受专业培训，重视保存天然牙齿及微创治疗。',
      languages: '语言：中文、越南语',
      specialties: '天然牙保存 • 微创美学修复 • 牙体牙髓病治疗 • 综合治疗',
      descriptionOne: '杜泰龙医生担任 Emis Dental 牙科诊所专业医疗负责人，专注于保存天然牙齿、微创美学修复及牙体牙髓病治疗。',
      descriptionTwo: '治疗计划兼顾口腔健康、咀嚼功能、自然美观及长期效果。',
      highlights: ['口腔颌面医学一级专科医师（2026）', '胡志明市口腔颌面医院临床实践'],
      cta: '查看完整资料',
    },
    traditional: {
      name: '杜泰龍醫師', role: 'Emis Dental 牙科診所專業醫療負責人',
      serviceLabel: '中文牙科服務',
      registration: '於 Emis Dental 登記執業',
      focus: '天然牙保存 • 微創美學修復 • 牙髓治療',
      summary: '在中國及越南接受專業培訓，重視保存天然牙齒與微創治療。',
      languages: '語言：中文、越南語',
      specialties: '天然牙保存 • 微創美學修復 • 牙髓治療 • 綜合治療',
      descriptionOne: '杜泰龍醫師擔任 Emis Dental 牙科診所專業醫療負責人，專注於保存天然牙齒、微創美學修復及牙髓治療。',
      descriptionTwo: '治療計畫兼顧口腔健康、咀嚼功能、自然美觀及長期效果。',
      highlights: ['口腔顎面醫學一級專科醫師（2026）', '胡志明市口腔顎面醫院臨床實習'],
      cta: '查看完整資料',
    },
  },
  // Dr. Tran Minh Tu -----------------------------------------------------
  {
    id: 'dr-tu',
    slug: '/dr-tu',
    portrait: drTuPortrait,

    english: {
      name: 'Dr. Tran Minh Tu',
      role: 'Odonto-Maxillofacial Surgeon',
      focus: 'Implant Surgery • Oral Surgery • Full-Mouth Rehabilitation',
      summary:
        'Currently practicing at Ho Chi Minh City Odonto-Maxillofacial Hospital.',
      languages: 'Language: Vietnamese, English',
      specialties: 'Implant Surgery • Full-Mouth Rehabilitation • Oral Surgery',
      descriptionOne:
        'Dr. Tu focuses on implant surgery, full-mouth rehabilitation, oral surgery, and aesthetic dentistry, with a particular interest in complex rehabilitation cases.',
      descriptionTwo:
        'Having studied and trained in the United States, Hungary, and Vietnam, he combines international training with active clinical practice.',
      highlights: [
        'Active Hospital Practice',
        'International Training',
        'Implant & Full-Mouth Rehabilitation Focus',
        'Multilingual Communication',
      ],
      cta: 'View Full Profile',
    },

    vietnamese: {
      name: 'BS. CKI Trần Minh Tú',
      role: 'Bác sĩ chuyên khoa Răng Hàm Mặt',
      focus: 'Phẫu thuật Implant • Tiểu phẫu Răng Hàm Mặt • Phục hồi toàn hàm',
      summary: 'Hiện đang công tác tại Bệnh viện Răng Hàm Mặt TP.HCM.',
      languages: 'Ngôn ngữ: Tiếng Việt, Tiếng Anh',
      specialties: 'Implant • Phục hồi toàn hàm • Tiểu phẫu Răng Hàm Mặt',
      descriptionOne:
        'Bác sĩ Tú tập trung vào Implant, phục hồi toàn hàm và phẫu thuật Răng Hàm Mặt, đặc biệt với những trường hợp cần phục hồi phức tạp và đòi hỏi kế hoạch điều trị kỹ lưỡng.',
      descriptionTwo:
        'Nền tảng học tập và đào tạo tại Hoa Kỳ, Hungary và Việt Nam giúp bác sĩ có thêm góc nhìn quốc tế trong quá trình điều trị và chăm sóc bệnh nhân.',
      highlights: [
        'Đang công tác tại Bệnh viện Răng Hàm Mặt TP.HCM',
        'Được đào tạo tại nhiều quốc gia',
        'Thành viên Hội Răng Hàm Mặt TP.HCM',
        'Giao tiếp đa ngôn ngữ',
      ],
      cta: 'Xem hồ sơ chi tiết',
    },

    french: {
      name: 'Dr. Tran Minh Tu',
      role: 'Chirurgien Oral Et Maxillo-Facial',
      focus: 'Implantologie • Réhabilitation complète • Chirurgie orale',
      summary:
        'Formé aux États-Unis, en Hongrie et au Vietnam, avec une pratique clinique active à Hô Chi Minh-Ville.',
      languages: 'Langues : vietnamien, anglais',
      specialties: 'Implantologie • Réhabilitation complète • Chirurgie orale',
      descriptionOne:
        'Le Dr Tu se consacre à l\'implantologie, à la réhabilitation complète, à la chirurgie orale et à la dentisterie esthétique, avec un intérêt particulier pour les cas complexes.',
      descriptionTwo:
        'Formé aux États-Unis, en Hongrie et au Vietnam, il associe une formation internationale à une pratique clinique active.',
      highlights: [
        'Pratique hospitalière active',
        'Formation Internationale',
        'Expertise en implantologie et réhabilitation complète',
        'Communication Multilingue',
      ],
      cta: 'Voir Le Profil Complet',
    },

    korean: {
      name: 'Dr. Tran Minh Tu',
      role: '구강악안면외과 전문의',
      focus: '임플란트 수술 • 전악 재건 • 구강외과',
      summary: '미국, 헝가리, 베트남에서 교육과 수련을 받은 국제적 배경의 구강악안면외과 전문의입니다.',
      languages: '사용 언어: 베트남어, 영어',
      specialties: '임플란트 수술 • 전악 재건 • 구강외과',
      descriptionOne:
        'Tu 원장은 임플란트 수술, 전악 재건, 구강외과 및 심미치과 진료에 집중하며, 특히 복잡한 재건 치료에 관심을 두고 있습니다.',
      descriptionTwo:
        '미국, 헝가리, 베트남에서 교육과 수련을 받았으며, 국제적인 교육 배경과 풍부한 임상 경험을 바탕으로 진료하고 있습니다.',
      highlights: [
        '병원 임상 진료',
        '국제 교육 이수',
        '임플란트 및 전악 재건 집중',
        '다국어 소통',
      ],
      cta: '자세히 보기',
    },

    simplified: {
      name: 'Dr. Tran Minh Tu',
      role: '口腔颌面外科医生',
      focus: '种植手术 • 全口重建 • 口腔外科',
      summary: '曾在美国、匈牙利和越南接受教育与培训，目前在胡志明市口腔颌面医院任职。',
      languages: '语言：越南语、英语',
      specialties: '种植手术 • 全口重建 • 口腔外科',
      descriptionOne:
        'Tu 医生专注于种植牙手术、全口重建、口腔外科以及美学牙科，尤其关注复杂重建病例。',
      descriptionTwo:
        '曾在美国、匈牙利和越南接受教育与培训，将国际化背景与丰富的临床实践相结合。',
      highlights: [
        '医院临床工作经验',
        '国际培训背景',
        '专注种植牙与全口重建',
        '多语言沟通',
      ],
      cta: '查看完整资料',
    },

    traditional: {
      name: 'Dr. Tran Minh Tu',
      role: '口腔顎面外科醫師',
      focus: '植牙手術 • 全口重建 • 口腔外科',
      summary: '曾於美國、匈牙利及越南接受教育與培訓，目前任職於胡志明市口腔顎面醫院。',
      languages: '語言：越南語、英語',
      specialties: '植牙手術 • 全口重建 • 口腔外科',
      descriptionOne:
        'Tu 醫師專注於植牙手術、全口重建、口腔外科及美學牙科，特別關注複雜重建案例。',
      descriptionTwo:
        '曾於美國、匈牙利及越南接受教育與培訓，結合國際背景與豐富臨床經驗。',
      highlights: [
        '醫院臨床經驗',
        '國際培訓背景',
        '專注植牙與全口重建',
        '多語言溝通',
      ],
      cta: '查看完整資料',
    },
  },
];

/**
 * Returns the language-specific translation block for a doctor,
 * falling back to English if the requested language is not available.
 */
export function getDoctorTranslation(doctor, language) {
  return doctor[language] || doctor.english;
}
