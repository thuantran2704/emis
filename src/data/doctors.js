/**
 * Single source of truth for Emis Dental doctor information.
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

import drLongPortrait from '../pics/dr-long-portrait.png';
import drTuPortrait from '../pics/dr-tu-portrait-updated.png';

export const DOCTORS = [
  {
    id: 'dr-long',
    slug: '/dr-long',
    portrait: drLongPortrait,
    featured: true,

    english: {
      name: 'Dr. Do Thai Long',
      role: 'Lead Dentist · Emis Dental',
      focus: 'Dental Implants • Orthodontics • Aesthetic Restorations • Endodontics',
      summary: 'Trained in China and Vietnam, with clinical experience at Ho Chi Minh City Hospital of Odonto-Stomatology.',
      languages: 'Language: Chinese, Vietnamese, English',
      specialties: 'Dentistry • Dental Implants • Orthodontics • Aesthetic Restorations • Endodontics',
      descriptionOne: 'Dr. Long is the dentist in charge of professional care at Emis Dental. His training spans China and Vietnam, with clinical practice at Ho Chi Minh City Hospital of Odonto-Stomatology.',
      descriptionTwo: 'He continues to develop his skills through advanced training in implants, orthodontics, oral surgery, infection control, and endodontics.',
      highlights: ['Specialist Level I in Odonto-Stomatology (2026)', 'Licensed by the Ho Chi Minh City Department of Health', 'Clinical practice at Ho Chi Minh City Hospital of Odonto-Stomatology'],
      cta: 'View Full Profile',
    },
    vietnamese: {
      name: 'BS. CKI Đỗ Thái Long',
      role: 'Bác sĩ phụ trách chuyên môn · Emis Dental',
      focus: 'Implant • Chỉnh hình răng mặt • Phục hình thẩm mỹ • Nội nha',
      summary: 'Được đào tạo tại Trung Quốc và Việt Nam, có quá trình thực hành tại Bệnh viện Răng Hàm Mặt TP. Hồ Chí Minh.',
      languages: 'Ngôn ngữ: Tiếng Trung, Tiếng Việt, Tiếng Anh',
      specialties: 'Răng Hàm Mặt • Implant • Chỉnh hình răng mặt • Phục hình thẩm mỹ • Điều trị nội nha',
      descriptionOne: 'Bác sĩ Đỗ Thái Long phụ trách chuyên môn tại Emis Dental, được đào tạo tại Trung Quốc và Việt Nam, đồng thời có quá trình thực hành lâm sàng tại Bệnh viện Răng Hàm Mặt TP. Hồ Chí Minh.',
      descriptionTwo: 'Bác sĩ tiếp tục cập nhật kiến thức qua các chương trình chuyên sâu về Implant, chỉnh hình răng mặt, phẫu thuật miệng, kiểm soát lây nhiễm và nội nha.',
      highlights: ['Bác sĩ Chuyên khoa I Răng Hàm Mặt (2026)', 'Chứng chỉ hành nghề do Sở Y tế TP. Hồ Chí Minh cấp', 'Thực hành tại Bệnh viện Răng Hàm Mặt TP. Hồ Chí Minh'],
      cta: 'Xem hồ sơ chi tiết',
    },
    french: {
      name: 'Dr Do Thai Long', role: 'Dentiste responsable des soins · Emis Dental',
      focus: 'Implants • Orthodontie • Restaurations esthétiques • Endodontie',
      summary: 'Formé en Chine et au Vietnam, avec une expérience clinique à l’hôpital d’odontostomatologie de Hô Chi Minh-Ville.',
      languages: 'Langues : chinois, vietnamien, anglais',
      specialties: 'Dentisterie • Implants • Orthodontie • Restaurations esthétiques • Endodontie',
      descriptionOne: 'Le Dr Long est responsable des soins professionnels chez Emis Dental. Il a été formé en Chine et au Vietnam et a exercé à l’hôpital d’odontostomatologie de Hô Chi Minh-Ville.',
      descriptionTwo: 'Il poursuit sa formation en implantologie, orthodontie, chirurgie orale, prévention des infections et endodontie.',
      highlights: ['Spécialiste de niveau I en odontostomatologie (2026)', 'Autorisation d’exercice délivrée par le service de santé de Hô Chi Minh-Ville', 'Expérience clinique hospitalière à Hô Chi Minh-Ville'],
      cta: 'Voir le profil complet',
    },
    korean: {
      name: 'Dr. Do Thai Long', role: 'Emis Dental 진료 책임 치과의사',
      focus: '임플란트 • 교정 • 심미 수복 • 근관 치료',
      summary: '중국과 베트남에서 교육받고 호찌민시 구강악안면병원에서 임상 경험을 쌓았습니다.',
      languages: '사용 언어: 중국어, 베트남어, 영어',
      specialties: '치과 진료 • 임플란트 • 교정 • 심미 수복 • 근관 치료',
      descriptionOne: '롱 원장은 Emis Dental의 진료 책임 치과의사입니다. 중국과 베트남에서 교육받고 호찌민시 구강악안면병원에서 임상 실습을 했습니다.',
      descriptionTwo: '임플란트, 교정, 구강외과, 감염 관리 및 근관 치료 관련 심화 교육을 지속하고 있습니다.',
      highlights: ['구강악안면 분야 전문의 1급 (2026)', '호찌민시 보건국 발급 진료 면허', '호찌민시 구강악안면병원 임상 경험'],
      cta: '자세히 보기',
    },
    simplified: {
      name: 'Dr. Do Thai Long', role: 'Emis Dental 牙科诊所专业负责人',
      focus: '种植牙 • 正畸 • 美学修复 • 根管治疗',
      summary: '在中国和越南接受专业培训，并曾在胡志明市口腔颌面医院进行临床实践。',
      languages: '语言：中文、越南语、英语',
      specialties: '口腔医学 • 种植牙 • 正畸 • 美学修复 • 根管治疗',
      descriptionOne: '杜泰龙医生担任 Emis Dental 牙科诊所专业负责人，曾在中国和越南接受培训，并在胡志明市口腔颌面医院进行临床实践。',
      descriptionTwo: '他持续参加种植牙、正畸、口腔外科、感染控制和根管治疗等专业培训。',
      highlights: ['口腔颌面医学一级专科医师（2026）', '持胡志明市卫生部门颁发的执业证书', '胡志明市口腔颌面医院临床实践'],
      cta: '查看完整资料',
    },
    traditional: {
      name: 'Dr. Do Thai Long', role: 'Emis Dental 牙科診所專業負責人',
      focus: '植牙 • 正畸 • 美學修復 • 根管治療',
      summary: '在中國及越南接受專業培訓，並曾於胡志明市口腔顎面醫院進行臨床實習。',
      languages: '語言：中文、越南語、英語',
      specialties: '牙科醫學 • 植牙 • 正畸 • 美學修復 • 根管治療',
      descriptionOne: '杜泰龍醫師擔任 Emis Dental 牙科診所專業負責人，曾在中國及越南受訓，並於胡志明市口腔顎面醫院進行臨床實習。',
      descriptionTwo: '他持續參與植牙、正畸、口腔外科、感染控制及根管治療等專業培訓。',
      highlights: ['口腔顎面醫學一級專科醫師（2026）', '持胡志明市衛生部門核發的執業證書', '胡志明市口腔顎面醫院臨床實習'],
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
        'Currently practicing at Ho Chi Minh City Odonto-Maxillofacial Hospital and Emis Dental.',
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
      summary: 'Hiện đang công tác tại Bệnh viện Răng Hàm Mặt TP.HCM và Emis Dental.',
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
