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

export const consultationDateHints = {
  english: 'This date is a preference, not a confirmed appointment.',
  vietnamese: 'Đây là ngày bạn mong muốn, chưa phải lịch hẹn đã được xác nhận.',
  simplified: '这是您希望的日期，预约尚未确认。',
  traditional: '這是您希望的日期，預約尚未確認。',
  french: 'Cette date est un souhait, pas un rendez-vous confirmé.',
  korean: '희망 날짜이며, 예약이 확정된 것은 아닙니다.',
};

export const preferredDateLabels = {
  english: 'Preferred consultation date',
  vietnamese: 'Ngày tư vấn mong muốn',
  simplified: '希望咨询的日期',
  traditional: '希望諮詢的日期',
  french: 'Date de consultation souhaitée',
  korean: '희망 상담 날짜',
};

export const consultationSubmissionErrors = {
  english: 'We could not confirm your request. Please contact the clinic before submitting again.',
  vietnamese: 'Chúng tôi chưa thể xác nhận yêu cầu. Vui lòng liên hệ phòng khám trước khi gửi lại.',
  simplified: '我们无法确认您的请求。再次提交前请先联系诊所。',
  traditional: '我們無法確認您的請求。再次提交前請先聯絡診所。',
  french: 'Nous ne pouvons pas confirmer votre demande. Contactez la clinique avant de réessayer.',
  korean: '요청을 확인하지 못했습니다. 다시 제출하기 전에 병원에 문의해 주세요.',
};

export const phoneCountryCodeHints = {
  english: 'Include your country code, for example +84 912 345 678.',
  vietnamese: 'Ghi cả mã quốc gia, ví dụ +84 912 345 678.',
  simplified: '请填写国家区号，例如 +84 912 345 678。',
  traditional: '請填寫國家區碼，例如 +84 912 345 678。',
  french: 'Indiquez l’indicatif du pays, par exemple +84 912 345 678.',
  korean: '국가번호를 포함해 입력하세요. 예: +84 912 345 678.',
};

export const otherServiceLabels = {
  english: 'Other treatment or not sure',
  vietnamese: 'Dịch vụ khác hoặc chưa rõ',
  simplified: '其他治疗或尚未确定',
  traditional: '其他治療或尚未確定',
  french: 'Autre soin ou pas encore sûr',
  korean: '기타 치료 또는 미정',
};

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
