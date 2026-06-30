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
 *  role            – Professional title / position.
 *  focus           – Specialty areas (short bullet string for home mini-card).
 *  summary         – One-sentence summary for home mini-card.
 *  languages       – Spoken languages string.
 *  specialties     – Specialty string for listing-page card header.
 *  descriptionOne  – First paragraph for listing-page card.
 *  descriptionTwo  – Second paragraph for listing-page card.
 *  highlights      – Bullet array for listing-page card.
 *  cta             – "View profile" button label.
 */

import drSonPortrait from '../pics/dr-son-potrait.jpg';
import drTuPortrait from '../pics/dr-tu-potrait.jpg';

export const DOCTORS = [
  // ─── Dr. Nguyen The Son ─────────────────────────────────────────────────────
  {
    id: 'dr-son',
    slug: '/dr-son',
    portrait: drSonPortrait,

    english: {
      name: 'Dr. Nguyen The Son',
      role: 'Chief Dentist at Emis Dental',
      focus: 'Dental Implants • Aesthetic Prosthetics • Sinus Lift & Bone Grafting Surgery',
      summary:
        'Over 10 years of specialized experience in dental implants and aesthetic prosthetics, with extensive clinical work in advanced implant and restoration cases.',
      languages: 'Vietnamese • English',
      specialties: 'Dental Implants • Aesthetic Prosthetics • Sinus Lift & Bone Grafting',
      descriptionOne:
        'Dr. Son has over 10 years of specialized experience in dental implants, aesthetic prosthetics, and sinus lift - bone grafting procedures.',
      descriptionTwo:
        'With more than 3,000 implant cases from simple to complex, he focuses on restoring chewing function, natural esthetics, and long-term treatment stability.',
      highlights: [
        'Over 10 Years Of Experience',
        '3,000+ Implant Cases',
        'Advanced Bone Grafting & Sinus Lift Training',
        'Digital Implant Planning & 3D Diagnostics',
      ],
      cta: 'View Full Profile',
    },

    vietnamese: {
      name: 'BS. Nguyễn Thế Sơn',
      role: 'Bác sĩ trưởng tại Emis Dental',
      focus: 'Implant nha khoa • Phục hình thẩm mỹ • Phẫu thuật nâng xoang và ghép xương',
      summary:
        'Hơn 10 năm kinh nghiệm chuyên sâu trong Implant nha khoa và phục hình thẩm mỹ, với nhiều kinh nghiệm lâm sàng ở các ca Implant và phục hồi phức tạp.',
      languages: 'Tiếng Việt • English',
      specialties: 'Cấy Ghép Implant • Phục Hình Thẩm Mỹ • Nâng Xoang & Ghép Xương',
      descriptionOne:
        'Bác sĩ Sơn có hơn 10 năm kinh nghiệm chuyên sâu trong lĩnh vực cấy ghép Implant, phục hình thẩm mỹ và phẫu thuật nâng xoang - ghép xương.',
      descriptionTwo:
        'Với hơn 3.000 ca Implant từ đơn giản đến phức tạp, bác sĩ tập trung phục hồi chức năng ăn nhai, thẩm mỹ tự nhiên và sự ổn định lâu dài.',
      highlights: [
        'Hơn 10 Năm Kinh Nghiệm',
        'Hơn 3.000 Ca Implant',
        'Đào Tạo Chính Quy Tại ĐH Y Dược TP.HCM',
        'Ứng Dụng Chẩn Đoán 3D Trong Lập Kế Hoạch',
      ],
      cta: 'Xem Hồ Sơ Chi Tiết',
    },

    french: {
      name: 'Dr. Nguyen The Son',
      role: 'Dentiste En Chef — Implantologie Et Prothèse Esthétique',
      focus: 'Implantologie • Prothèse Esthétique • Élévation Sinusienne Et Greffe Osseuse',
      summary:
        'Plus de 10 ans d\'expérience en implantologie et prothèse esthétique, avec de nombreux cas complexes traités.',
      languages: 'Vietnamien • Anglais',
      specialties: 'Implantologie • Prothèse Esthétique • Élévation Sinusienne Et Greffe Osseuse',
      descriptionOne:
        'Le Dr Son possède plus de 10 ans d\'expérience spécialisée en implantologie, prothèse esthétique et chirurgie de greffe osseuse avec élévation sinusienne.',
      descriptionTwo:
        'Avec plus de 3 000 cas d\'implants, il se concentre sur la restauration fonctionnelle, l\'esthétique naturelle et la stabilité à long terme.',
      highlights: [
        'Plus De 10 Ans D\'Expérience',
        'Plus De 3 000 Cas D\'Implants',
        'Formation Avancée En Greffe Osseuse Et Sinus Lift',
        'Planification Numérique Et Diagnostic 3D',
      ],
      cta: 'Voir Le Profil Complet',
    },

    korean: {
      name: 'Dr. Nguyen The Son',
      role: '총괄 원장 - 임플란트 및 심미 보철',
      focus: '임플란트 • 심미 보철 • 상악동 거상술 및 골이식',
      summary: '임플란트, 심미 보철 분야에서 10년 이상 전문 임상 경험을 보유하고 있습니다.',
      languages: '베트남어 • 영어',
      specialties: '임플란트 • 심미 보철 • 상악동 거상술 및 골이식',
      descriptionOne:
        'Son 원장은 임플란트, 심미 보철, 상악동 거상술과 골이식 분야에서 10년 이상 전문 임상 경험을 보유하고 있습니다.',
      descriptionTwo:
        '3,000건 이상의 임플란트 케이스 경험을 바탕으로 기능 회복, 자연스러운 심미성, 장기적인 안정성을 중점으로 진료합니다.',
      highlights: [
        '10년 이상 임상 경험',
        '3,000건 이상 임플란트 케이스',
        '골이식 및 상악동 거상술 고급 교육',
        '디지털 임플란트 계획 및 3D 진단',
      ],
      cta: '자세히 보기',
    },

    simplified: {
      name: 'Dr. Nguyen The Son',
      role: '主任医师 - 种植与美学修复',
      focus: '种植牙 • 美学修复 • 上颌窦提升与骨增量',
      summary: '拥有超过10年种植牙及美学修复专科经验，擅长复杂病例处理。',
      languages: '越南语 • 英语',
      specialties: '种植牙 • 美学修复 • 上颌窦提升与骨增量',
      descriptionOne:
        'Son 医生在种植牙、美学修复及上颌窦提升与骨增量手术方面拥有超过10年的专科经验。',
      descriptionTwo:
        '凭借超过3,000例种植病例经验，他专注于恢复咀嚼功能、自然美观及长期稳定效果。',
      highlights: [
        '10年以上临床经验',
        '3,000+ 种植病例',
        '骨增量与上颌窦提升进阶培训',
        '数字化种植规划与3D诊断',
      ],
      cta: '查看完整资料',
    },

    traditional: {
      name: 'Dr. Nguyen The Son',
      role: '主任醫師 - 植牙與美學修復',
      focus: '植牙 • 美學修復 • 上顎竇提升與骨增量',
      summary: '擁有超過10年植牙及美學修復專科經驗，擅長複雜案例處理。',
      languages: '越南語 • 英語',
      specialties: '植牙 • 美學修復 • 上顎竇提升與骨增量',
      descriptionOne:
        'Son 醫師在植牙、美學修復，以及上顎竇提升與骨增量手術領域擁有超過10年專科經驗。',
      descriptionTwo:
        '累積超過3,000例植牙案例，專注於恢復咀嚼功能、自然美觀與長期穩定成果。',
      highlights: [
        '10年以上臨床經驗',
        '3,000+ 植牙案例',
        '骨增量與上顎竇提升進階培訓',
        '數位植牙規劃與3D診斷',
      ],
      cta: '查看完整資料',
    },
  },

  // ─── Dr. Tran Minh Tu ───────────────────────────────────────────────────────
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
      role: 'Phẫu thuật viên Răng Hàm Mặt',
      focus: 'Phẫu thuật Implant • Tiểu phẫu Răng Hàm Mặt • Phục hồi toàn hàm',
      summary: 'Hiện đang công tác tại Bệnh viện Răng Hàm Mặt TP.HCM và EMIS Premium Dental Clinic.',
      languages: 'Tiếng Việt • English • Hungarian • Chinese',
      specialties: 'Implant • Phục Hồi Toàn Hàm • Tiểu Phẫu Răng Hàm Mặt',
      descriptionOne:
        'Bác sĩ Tú tập trung vào Implant, phục hồi toàn hàm và phẫu thuật Răng Hàm Mặt, đặc biệt với những trường hợp cần phục hồi phức tạp và đòi hỏi kế hoạch điều trị kỹ lưỡng.',
      descriptionTwo:
        'Nền tảng học tập và đào tạo tại Hoa Kỳ, Hungary và Việt Nam giúp bác sĩ có thêm góc nhìn quốc tế trong quá trình điều trị và chăm sóc bệnh nhân.',
      highlights: [
        'Đang Công Tác Tại Bệnh Viện Răng Hàm Mặt TP.HCM',
        'Đào Tạo Tại Nhiều Quốc Gia',
        'Thành Viên Hội Răng Hàm Mặt TP.HCM',
        'Giao Tiếp Đa Ngôn Ngữ',
      ],
      cta: 'Xem Hồ Sơ Chi Tiết',
    },

    french: {
      name: 'Dr. Tran Minh Tu',
      role: 'Chirurgien Oral Et Maxillo-Facial',
      focus: 'Implantologie • Réhabilitation Complète • Chirurgie Orale',
      summary:
        'Formé aux États-Unis, en Hongrie et au Vietnam, avec une pratique clinique active à Hô Chi Minh-Ville.',
      languages: 'Vietnamien • Anglais • Hongrois • Chinois',
      specialties: 'Implantologie • Réhabilitation Complète • Chirurgie Orale',
      descriptionOne:
        'Le Dr Tu se consacre à l\'implantologie, à la réhabilitation complète, à la chirurgie orale et à la dentisterie esthétique, avec un intérêt particulier pour les cas complexes.',
      descriptionTwo:
        'Formé aux États-Unis, en Hongrie et au Vietnam, il associe une formation internationale à une pratique clinique active.',
      highlights: [
        'Pratique Hospitalière Active',
        'Formation Internationale',
        'Expertise En Implantologie Et Réhabilitation Complète',
        'Communication Multilingue',
      ],
      cta: 'Voir Le Profil Complet',
    },

    korean: {
      name: 'Dr. Tran Minh Tu',
      role: '구강악안면외과 전문의',
      focus: '임플란트 수술 • 전체 구강 재건 • 구강외과',
      summary: '미국, 헝가리, 베트남에서 교육과 수련을 받은 국제적 배경의 구강악안면외과 전문의.',
      languages: '베트남어 • 영어 • 헝가리어 • 중국어',
      specialties: '임플란트 수술 • 전체 구강 재건 • 구강외과',
      descriptionOne:
        'Tu 원장은 임플란트 수술, 전체 구강 재건, 구강외과 및 심미치과를 중심으로 진료하며 복잡한 재건 치료에 특별한 관심을 가지고 있습니다.',
      descriptionTwo:
        '미국, 헝가리, 베트남에서 교육과 수련을 받았으며 국제적인 교육 배경과 풍부한 임상 경험을 바탕으로 진료하고 있습니다.',
      highlights: [
        '병원 임상 진료',
        '국제 교육 이수',
        '임플란트 및 전체 구강 재건 집중',
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
