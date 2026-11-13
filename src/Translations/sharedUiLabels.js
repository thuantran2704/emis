const sharedUiLabels = {
  english: { whoWeAre: 'Who We Are', bookNow: 'Book Now', contents: 'Contents', topics: 'Topics', implantPlanner: 'Implant Planner', smileAesthetics: 'Smile Aesthetics', oralSurgery: 'Oral Surgery', step: 'Step', slide: 'Slide', previous: 'Previous', next: 'Next', moreAds: 'Click to see more' },
  vietnamese: { whoWeAre: 'Về chúng tôi', bookNow: 'Đặt lịch', contents: 'Mục lục', topics: 'Chủ đề', implantPlanner: 'Lập kế hoạch cấy ghép implant', smileAesthetics: 'Thẩm mỹ nụ cười', oralSurgery: 'Phẫu thuật răng miệng', step: 'Bước', slide: 'Ảnh', previous: 'Trước', next: 'Tiếp', moreAds: 'Nhấn để xem thêm' },
  french: { whoWeAre: 'Qui sommes-nous', bookNow: 'Prendre rendez-vous', contents: 'Sommaire', topics: 'Thèmes', implantPlanner: 'Planification implantaire', smileAesthetics: 'Esthétique du sourire', oralSurgery: 'Chirurgie orale', step: 'Étape', slide: 'Diapositive', previous: 'Précédent', next: 'Suivant', moreAds: 'Cliquez pour en voir plus' },
  korean: { whoWeAre: '병원 소개', bookNow: '예약하기', contents: '목차', topics: '주제', implantPlanner: '임플란트 치료 계획', smileAesthetics: '심미 치과 치료', oralSurgery: '구강외과', step: '단계', slide: '이미지', previous: '이전', next: '다음', moreAds: '더 보려면 클릭하세요' },
  simplified: { whoWeAre: '关于我们', bookNow: '预约咨询', contents: '目录', topics: '主题', implantPlanner: '种植牙治疗规划', smileAesthetics: '微笑美学', oralSurgery: '口腔外科', step: '步骤', slide: '图片', previous: '上一张', next: '下一张', moreAds: '点击查看更多' },
  traditional: { whoWeAre: '關於我們', bookNow: '預約諮詢', contents: '目錄', topics: '主題', implantPlanner: '植牙治療規劃', smileAesthetics: '微笑美學', oralSurgery: '口腔外科', step: '步驟', slide: '圖片', previous: '上一張', next: '下一張', moreAds: '點擊查看更多' },
};

export default sharedUiLabels;

export function numberedStepLabel(language, number) {
  if (language === 'korean') return `${number}단계`;
  if (language === 'simplified' || language === 'traditional') return `第${number}步`;
  return `${sharedUiLabels[language]?.step || sharedUiLabels.english.step} ${number}`;
}
