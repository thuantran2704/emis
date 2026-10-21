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
 *  name            â€“ Display name shown on all cards.
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
  // Dr. Tran Minh Tu â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 'dr-tu',
    slug: '/dr-tu',
    portrait: drTuPortrait,

    english: {
      name: 'Dr. Tran Minh Tu',
      role: 'Odonto-Maxillofacial Surgeon',
      focus: 'Implant Surgery â€¢ Oral Surgery â€¢ Full-Mouth Rehabilitation',
      summary:
        'Currently practicing at Ho Chi Minh City Odonto-Maxillofacial Hospital and EMIS Premium Dental Clinic.',
      languages: 'Vietnamese â€¢ English â€¢ Hungarian â€¢ Chinese',
      specialties: 'Implant Surgery â€¢ Full-Mouth Rehabilitation â€¢ Oral Surgery',
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
      name: 'BS. CKI Tráº§n Minh TÃº',
      role: 'Pháº«u thuáº­t viÃªn RÄƒng HÃ m Máº·t',
      focus: 'Pháº«u thuáº­t Implant â€¢ Tiá»ƒu pháº«u RÄƒng HÃ m Máº·t â€¢ Phá»¥c há»“i toÃ n hÃ m',
      summary: 'Hiá»‡n Ä‘ang cÃ´ng tÃ¡c táº¡i Bá»‡nh viá»‡n RÄƒng HÃ m Máº·t TP.HCM vÃ  EMIS Premium Dental Clinic.',
      languages: 'Tiáº¿ng Viá»‡t â€¢ English â€¢ Hungarian â€¢ Chinese',
      specialties: 'Implant â€¢ Phá»¥c Há»“i ToÃ n HÃ m â€¢ Tiá»ƒu Pháº«u RÄƒng HÃ m Máº·t',
      descriptionOne:
        'BÃ¡c sÄ© TÃº táº­p trung vÃ o Implant, phá»¥c há»“i toÃ n hÃ m vÃ  pháº«u thuáº­t RÄƒng HÃ m Máº·t, Ä‘áº·c biá»‡t vá»›i nhá»¯ng trÆ°á»ng há»£p cáº§n phá»¥c há»“i phá»©c táº¡p vÃ  Ä‘Ã²i há»i káº¿ hoáº¡ch Ä‘iá»u trá»‹ ká»¹ lÆ°á»¡ng.',
      descriptionTwo:
        'Ná»n táº£ng há»c táº­p vÃ  Ä‘Ã o táº¡o táº¡i Hoa Ká»³, Hungary vÃ  Viá»‡t Nam giÃºp bÃ¡c sÄ© cÃ³ thÃªm gÃ³c nhÃ¬n quá»‘c táº¿ trong quÃ¡ trÃ¬nh Ä‘iá»u trá»‹ vÃ  chÄƒm sÃ³c bá»‡nh nhÃ¢n.',
      highlights: [
        'Äang CÃ´ng TÃ¡c Táº¡i Bá»‡nh Viá»‡n RÄƒng HÃ m Máº·t TP.HCM',
        'ÄÃ o Táº¡o Táº¡i Nhiá»u Quá»‘c Gia',
        'ThÃ nh ViÃªn Há»™i RÄƒng HÃ m Máº·t TP.HCM',
        'Giao Tiáº¿p Äa NgÃ´n Ngá»¯',
      ],
      cta: 'Xem Há»“ SÆ¡ Chi Tiáº¿t',
    },

    french: {
      name: 'Dr. Tran Minh Tu',
      role: 'Chirurgien Oral Et Maxillo-Facial',
      focus: 'Implantologie â€¢ RÃ©habilitation ComplÃ¨te â€¢ Chirurgie Orale',
      summary:
        'FormÃ© aux Ã‰tats-Unis, en Hongrie et au Vietnam, avec une pratique clinique active Ã  HÃ´ Chi Minh-Ville.',
      languages: 'Vietnamien â€¢ Anglais â€¢ Hongrois â€¢ Chinois',
      specialties: 'Implantologie â€¢ RÃ©habilitation ComplÃ¨te â€¢ Chirurgie Orale',
      descriptionOne:
        'Le Dr Tu se consacre Ã  l\'implantologie, Ã  la rÃ©habilitation complÃ¨te, Ã  la chirurgie orale et Ã  la dentisterie esthÃ©tique, avec un intÃ©rÃªt particulier pour les cas complexes.',
      descriptionTwo:
        'FormÃ© aux Ã‰tats-Unis, en Hongrie et au Vietnam, il associe une formation internationale Ã  une pratique clinique active.',
      highlights: [
        'Pratique HospitaliÃ¨re Active',
        'Formation Internationale',
        'Expertise En Implantologie Et RÃ©habilitation ComplÃ¨te',
        'Communication Multilingue',
      ],
      cta: 'Voir Le Profil Complet',
    },

    korean: {
      name: 'Dr. Tran Minh Tu',
      role: 'êµ¬ê°•ì•…ì•ˆë©´ì™¸ê³¼ ì „ë¬¸ì˜',
      focus: 'ìž„í”Œëž€íŠ¸ ìˆ˜ìˆ  â€¢ ì „ì²´ êµ¬ê°• ìž¬ê±´ â€¢ êµ¬ê°•ì™¸ê³¼',
      summary: 'ë¯¸êµ­, í—ê°€ë¦¬, ë² íŠ¸ë‚¨ì—ì„œ êµìœ¡ê³¼ ìˆ˜ë ¨ì„ ë°›ì€ êµ­ì œì  ë°°ê²½ì˜ êµ¬ê°•ì•…ì•ˆë©´ì™¸ê³¼ ì „ë¬¸ì˜.',
      languages: 'ë² íŠ¸ë‚¨ì–´ â€¢ ì˜ì–´ â€¢ í—ê°€ë¦¬ì–´ â€¢ ì¤‘êµ­ì–´',
      specialties: 'ìž„í”Œëž€íŠ¸ ìˆ˜ìˆ  â€¢ ì „ì²´ êµ¬ê°• ìž¬ê±´ â€¢ êµ¬ê°•ì™¸ê³¼',
      descriptionOne:
        'Tu ì›ìž¥ì€ ìž„í”Œëž€íŠ¸ ìˆ˜ìˆ , ì „ì²´ êµ¬ê°• ìž¬ê±´, êµ¬ê°•ì™¸ê³¼ ë° ì‹¬ë¯¸ì¹˜ê³¼ë¥¼ ì¤‘ì‹¬ìœ¼ë¡œ ì§„ë£Œí•˜ë©° ë³µìž¡í•œ ìž¬ê±´ ì¹˜ë£Œì— íŠ¹ë³„í•œ ê´€ì‹¬ì„ ê°€ì§€ê³  ìžˆìŠµë‹ˆë‹¤.',
      descriptionTwo:
        'ë¯¸êµ­, í—ê°€ë¦¬, ë² íŠ¸ë‚¨ì—ì„œ êµìœ¡ê³¼ ìˆ˜ë ¨ì„ ë°›ì•˜ìœ¼ë©° êµ­ì œì ì¸ êµìœ¡ ë°°ê²½ê³¼ í’ë¶€í•œ ìž„ìƒ ê²½í—˜ì„ ë°”íƒ•ìœ¼ë¡œ ì§„ë£Œí•˜ê³  ìžˆìŠµë‹ˆë‹¤.',
      highlights: [
        'ë³‘ì› ìž„ìƒ ì§„ë£Œ',
        'êµ­ì œ êµìœ¡ ì´ìˆ˜',
        'ìž„í”Œëž€íŠ¸ ë° ì „ì²´ êµ¬ê°• ìž¬ê±´ ì§‘ì¤‘',
        'ë‹¤êµ­ì–´ ì†Œí†µ',
      ],
      cta: 'ìžì„¸ížˆ ë³´ê¸°',
    },

    simplified: {
      name: 'Dr. Tran Minh Tu',
      role: 'å£è…”é¢Œé¢å¤–ç§‘åŒ»ç”Ÿ',
      focus: 'ç§æ¤æ‰‹æœ¯ â€¢ å…¨å£é‡å»º â€¢ å£è…”å¤–ç§‘',
      summary: 'æ›¾åœ¨ç¾Žå›½ã€åŒˆç‰™åˆ©å’Œè¶Šå—æŽ¥å—æ•™è‚²ä¸ŽåŸ¹è®­ï¼Œç›®å‰åœ¨èƒ¡å¿—æ˜Žå¸‚å£è…”é¢Œé¢åŒ»é™¢ä»»èŒã€‚',
      languages: 'è¶Šå—è¯­ â€¢ è‹±è¯­ â€¢ åŒˆç‰™åˆ©è¯­ â€¢ ä¸­æ–‡',
      specialties: 'ç§æ¤æ‰‹æœ¯ â€¢ å…¨å£é‡å»º â€¢ å£è…”å¤–ç§‘',
      descriptionOne:
        'Tu åŒ»ç”Ÿä¸“æ³¨äºŽç§æ¤ç‰™æ‰‹æœ¯ã€å…¨å£é‡å»ºã€å£è…”å¤–ç§‘ä»¥åŠç¾Žå­¦ç‰™ç§‘ï¼Œå°¤å…¶å…³æ³¨å¤æ‚é‡å»ºç—…ä¾‹ã€‚',
      descriptionTwo:
        'æ›¾åœ¨ç¾Žå›½ã€åŒˆç‰™åˆ©å’Œè¶Šå—æŽ¥å—æ•™è‚²ä¸ŽåŸ¹è®­ï¼Œå°†å›½é™…åŒ–èƒŒæ™¯ä¸Žä¸°å¯Œçš„ä¸´åºŠå®žè·µç›¸ç»“åˆã€‚',
      highlights: [
        'åŒ»é™¢ä¸´åºŠå·¥ä½œç»éªŒ',
        'å›½é™…åŸ¹è®­èƒŒæ™¯',
        'ä¸“æ³¨ç§æ¤ç‰™ä¸Žå…¨å£é‡å»º',
        'å¤šè¯­è¨€æ²Ÿé€š',
      ],
      cta: 'æŸ¥çœ‹å®Œæ•´èµ„æ–™',
    },

    traditional: {
      name: 'Dr. Tran Minh Tu',
      role: 'å£è…”é¡Žé¢å¤–ç§‘é†«å¸«',
      focus: 'æ¤ç‰™æ‰‹è¡“ â€¢ å…¨å£é‡å»º â€¢ å£è…”å¤–ç§‘',
      summary: 'æ›¾æ–¼ç¾Žåœ‹ã€åŒˆç‰™åˆ©åŠè¶Šå—æŽ¥å—æ•™è‚²èˆ‡åŸ¹è¨“ï¼Œç›®å‰ä»»è·æ–¼èƒ¡å¿—æ˜Žå¸‚å£è…”é¡Žé¢é†«é™¢ã€‚',
      languages: 'è¶Šå—èªž â€¢ è‹±èªž â€¢ åŒˆç‰™åˆ©èªž â€¢ ä¸­æ–‡',
      specialties: 'æ¤ç‰™æ‰‹è¡“ â€¢ å…¨å£é‡å»º â€¢ å£è…”å¤–ç§‘',
      descriptionOne:
        'Tu é†«å¸«å°ˆæ³¨æ–¼æ¤ç‰™æ‰‹è¡“ã€å…¨å£é‡å»ºã€å£è…”å¤–ç§‘åŠç¾Žå­¸ç‰™ç§‘ï¼Œç‰¹åˆ¥é—œæ³¨è¤‡é›œé‡å»ºæ¡ˆä¾‹ã€‚',
      descriptionTwo:
        'æ›¾æ–¼ç¾Žåœ‹ã€åŒˆç‰™åˆ©åŠè¶Šå—æŽ¥å—æ•™è‚²èˆ‡åŸ¹è¨“ï¼Œçµåˆåœ‹éš›èƒŒæ™¯èˆ‡è±å¯Œè‡¨åºŠç¶“é©—ã€‚',
      highlights: [
        'é†«é™¢è‡¨åºŠç¶“é©—',
        'åœ‹éš›åŸ¹è¨“èƒŒæ™¯',
        'å°ˆæ³¨æ¤ç‰™èˆ‡å…¨å£é‡å»º',
        'å¤šèªžè¨€æºé€š',
      ],
      cta: 'æŸ¥çœ‹å®Œæ•´è³‡æ–™',
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

