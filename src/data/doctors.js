/**
 * Single source of truth for EMIS doctor information.
 *
 * Adding a new doctor:
 *  1. Import their portrait image below.
 *  2. Append a new entry to the DOCTORS array with id, slug, portrait,
 *     and translation blocks for each language.
 *  3. Create a page file (e.g. src/pages/drNewPage.jsx) using their
 *     detail translation file.
 *  4. Register the route in src/App.jsx.
 *
 * Fields per language block:
 *  name            – Display name shown on all cards.
 *  role            â€“ Professional title / position.
 *  focus           â€“ Specialty areas (short bullet string for home mini-card).
 *  summary         â€“ One-sentence summary for home mini-card.
 *  languages       â€“ Spoken languages string.
 *  specialties     â€“ Specialty string for listing-page card header.
 *  descriptionOne  â€“ First paragraph for listing-page card.
 *  descriptionTwo  â€“ Second paragraph for listing-page card.
 *  highlights      â€“ Bullet array for listing-page card.
 *  cta             â€“ "View profile" button label.
 */

import drTuPortrait from '../pics/dr-tu-potrait.jpg';

export const DOCTORS = [
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
        'Currently practicing at Ho Chi Minh City Odonto-Maxillofacial Hospital and EMIS Premium Dental Clinic.',
      languages: 'Vietnamese • English • Hungarian • Chinese',
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
      summary: 'Hiện đang công tác tại Bệnh viện Răng Hàm Mặt TP.HCM và EMIS Premium Dental Clinic.',
      languages: 'Tiếng Việt • Tiếng Anh • Tiếng Hungary • Tiếng Trung',
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
      languages: 'Vietnamien • Anglais • Hongrois • Chinois',
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
      languages: '베트남어 • 영어 • 헝가리어 • 중국어',
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
      languages: '越南语 • 英语 • 匈牙利语 • 中文',
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
      languages: '越南語 • 英語 • 匈牙利語 • 中文',
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
