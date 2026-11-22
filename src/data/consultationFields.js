export const consultationFields = {
  english: { freeTitle: 'Get a free consultation', heading: 'Help us prepare your consultation', country: 'Country of residence', date: 'Earliest available date', method: 'Preferred contact method', language: 'Preferred language', referral: 'How did you hear about us?', optional: 'Optional', choose: 'Choose an option', sources: ['Google', 'Facebook', 'Instagram', 'Clinic website', 'Referral', 'In-person visit', 'Other'], contactHint: 'We will reply using your selected method when possible.' },
  vietnamese: { freeTitle: 'Nhận tư vấn miễn phí', heading: 'Thông tin giúp chuẩn bị tư vấn', country: 'Quốc gia cư trú', date: 'Ngày có thể bắt đầu', method: 'Cách liên hệ ưu tiên', language: 'Ngôn ngữ ưu tiên', referral: 'Bạn biết đến chúng tôi qua đâu?', optional: 'Không bắt buộc', choose: 'Chọn một mục', sources: ['Google', 'Facebook', 'Instagram', 'Website phòng khám', 'Người giới thiệu', 'Đến trực tiếp', 'Khác'], contactHint: 'Chúng tôi sẽ cố gắng liên hệ qua kênh bạn chọn.' },
  simplified: { freeTitle: '获取免费咨询', heading: '帮助我们准备咨询', country: '居住国家或地区', date: '最早方便的日期', method: '首选联系方法', language: '首选语言', referral: '您从哪里了解到我们？', optional: '选填', choose: '请选择', sources: ['Google', 'Facebook', 'Instagram', '诊所网站', '朋友推荐', '到店咨询', '其他'], contactHint: '我们会尽量通过您选择的方式回复。' },
  traditional: { freeTitle: '取得免費諮詢', heading: '協助我們準備諮詢', country: '居住國家或地區', date: '最早方便的日期', method: '偏好聯絡方式', language: '偏好語言', referral: '您從哪裡得知我們？', optional: '選填', choose: '請選擇', sources: ['Google', 'Facebook', 'Instagram', '診所網站', '親友推薦', '親臨診所', '其他'], contactHint: '我們會盡量透過您選擇的方式回覆。' },
  french: { freeTitle: 'Obtenir une consultation gratuite', heading: 'Préparons votre consultation', country: 'Pays de résidence', date: 'Première date disponible', method: 'Moyen de contact préféré', language: 'Langue préférée', referral: 'Comment nous avez-vous connus ?', optional: 'Facultatif', choose: 'Choisir', sources: ['Google', 'Facebook', 'Instagram', 'Site de la clinique', 'Recommandation', 'Visite en personne', 'Autre'], contactHint: 'Nous répondrons par le moyen choisi si possible.' },
  korean: { freeTitle: '무료 상담 받기', heading: '상담 준비를 도와주세요', country: '거주 국가', date: '가능한 가장 빠른 날짜', method: '선호 연락 방법', language: '선호 언어', referral: '어떻게 알게 되셨나요?', optional: '선택 사항', choose: '선택하세요', sources: ['Google', 'Facebook', 'Instagram', '치과 웹사이트', '지인 추천', '직접 방문', '기타'], contactHint: '가능한 경우 선택한 방법으로 답변드립니다.' },
};

export const languageOptions = [
  ['English', 'English'], ['Mandarin', '中文'], ['Vietnamese', 'Tiếng Việt'],
  ['French', 'Français'], ['Korean', '한국어'],
];

const countryCache = new Map();

export function countryNames(locale) {
  if (countryCache.has(locale)) return countryCache.get(locale);
  const names = new Intl.DisplayNames([locale], { type: 'region' });
  const regionNames = Array.from({ length: 26 * 26 }, (_, index) => String.fromCharCode(65 + Math.floor(index / 26), 65 + index % 26))
    .map((code) => names.of(code))
    .filter((name) => name && !/^[A-Z]{2}$/.test(name));
  const countries = Array.from(new Set(regionNames)).sort((a, b) => a.localeCompare(b, locale));
  countryCache.set(locale, countries);
  return countries;
}
