import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import crownHeroImage from '../pics/crown.jpg';
import planningImage from '../pics/doctor-discussing-treatment-other-pic-ad-in-the-back.jpg';
import labImage from '../pics/doctor-discussing-case-with-each-other-at-work-desk.jpg';

import form1Eng from '../pics/WEB/forms/eng/01-baby-style.png';
import form2Eng from '../pics/WEB/forms/eng/02-aggressive-style.png';
import form3Eng from '../pics/WEB/forms/eng/03-vigorous-style.png';
import form4Eng from '../pics/WEB/forms/eng/04-softened-style.png';
import form5Eng from '../pics/WEB/forms/eng/05-ovan-style.png';
import form6Eng from '../pics/WEB/forms/eng/06-youthful-style.png';
import form7Eng from '../pics/WEB/forms/eng/07-enhanced-style.png';
import form8Eng from '../pics/WEB/forms/eng/08-functional-style.png';

import form1Vie from '../pics/WEB/forms/vie/01-rang-tre-trung.png';
import form2Vie from '../pics/WEB/forms/vie/02-rang-ca-tinh.png';
import form3Vie from '../pics/WEB/forms/vie/03-rang-dang-manh-me.png';
import form4Vie from '../pics/WEB/forms/vie/04-rang-de-thuong.png';
import form5Vie from '../pics/WEB/forms/vie/05-rang-ovan.png';
import form6Vie from '../pics/WEB/forms/vie/06-rang-tho.png';
import form7Vie from '../pics/WEB/forms/vie/07-dang-rang-khenh.png';
import form8Vie from '../pics/WEB/forms/vie/08-dang-rang-nanh.png';

import crown1Eng from '../pics/WEB/veneer/eng/01-porcelain-DB-BIO-Crowns-Germany.png';
import crown2Eng from '../pics/WEB/veneer/eng/02-zirconia-porcelain-crown.png';
import crown3Eng from '../pics/WEB/veneer/eng/03-cercon-ht-porcelain-crowns-germany.png';
import crown4Eng from '../pics/WEB/veneer/eng/04-lava-plus-porcelain-crowns-usa.png';
import crown5Eng from '../pics/WEB/veneer/eng/05-full-nt200-porcelain-crowns-england.png';
import crown6Eng from '../pics/WEB/veneer/eng/06-ordent-porcelain-crowns-italy.png';
import crown7Eng from '../pics/WEB/veneer/eng/07-zico-centonia-porcelain-crowns-korea.png';
import crown8Eng from '../pics/WEB/veneer/eng/08-emax-porcelain-veneer-germany.png';

import crown1Vie from '../pics/WEB/veneer/vie/01-rang-su-dd-bio-duc.png';
import crown2Vie from '../pics/WEB/veneer/vie/02-rang-su-zirconia-my.png';
import crown3Vie from '../pics/WEB/veneer/vie/03-rang-su-cercon-ht-duc.png';
import crown4Vie from '../pics/WEB/veneer/vie/04-rang-su-lava-plus.png';
import crown5Vie from '../pics/WEB/veneer/vie/05-mat-dan-su-veneer-duc.png';
import crown6Vie from '../pics/WEB/veneer/vie/06-rang-su-full-ordent-y.png';
import crown7Vie from '../pics/WEB/veneer/vie/07-rang-su-full-nt200-anh.png';
import crown8Vie from '../pics/WEB/veneer/vie/08-rang-su-zico-centonia-han-quoc.png';

export default function CrownLanding() {
  const language = useSelector((state) => state.language.language);
  const isVie = language === 'vietnamese';

  const shapeImages = isVie
    ? [form1Vie, form2Vie, form3Vie, form4Vie, form5Vie, form6Vie, form7Vie, form8Vie]
    : [form1Eng, form2Eng, form3Eng, form4Eng, form5Eng, form6Eng, form7Eng, form8Eng];

  const crownTypes = isVie
    ? [crown1Vie, crown2Vie, crown3Vie, crown4Vie, crown5Vie, crown6Vie, crown7Vie, crown8Vie]
    : [crown1Eng, crown2Eng, crown3Eng, crown4Eng, crown5Eng, crown6Eng, crown7Eng, crown8Eng];

  const copy = isVie
    ? {
        metaTitle: 'Bọc Răng Sứ Thẩm Mỹ | Emis Dental',
        metaDescription:
          'Bọc răng sứ tại Emis Dental giúp cải thiện màu sắc, hình thể và chức năng ăn nhai với vật liệu chính hãng và quy trình chuẩn.',
        label: 'Phục Hình Thẩm Mỹ',
        heroTitle: 'Bọc Răng Sứ Thẩm Mỹ',
        heroIntro:
          'Giải pháp phục hình cố định giúp tái tạo hình thể răng, cải thiện nụ cười và duy trì chức năng ăn nhai ổn định.',
        heroPrimary: 'Đặt Lịch Tư Vấn',
        heroSecondary: 'Nhận Báo Giá Phù Hợp',
        suitableTitle: 'Trường Hợp Nên Bọc Răng Sứ',
        suitableItems: [
          'Răng xỉn màu nặng, nhiễm màu không đáp ứng tẩy trắng.',
          'Răng mẻ lớn, hình thể răng mất cân đối hoặc mòn nhiều.',
          'Răng thưa, lệch nhẹ cần cải thiện nhanh về thẩm mỹ.',
          'Răng sau điều trị tủy cần được bảo vệ lâu dài.',
        ],
        advantagesTitle: 'Ưu Điểm Nổi Bật',
        advantages: [
          {
            title: 'Thẩm Mỹ Tự Nhiên',
            desc: 'Điều chỉnh màu sắc và form răng hài hòa với khuôn mặt.',
          },
          {
            title: 'Ăn Nhai Ổn Định',
            desc: 'Phục hồi chức năng và bảo vệ mô răng bên dưới hiệu quả.',
          },
          {
            title: 'Vật Liệu Rõ Nguồn Gốc',
            desc: 'Sử dụng các dòng răng sứ chính hãng, thông tin minh bạch.',
          },
          {
            title: 'Quy Trình Kiểm Soát',
            desc: 'Theo dõi độ khít, khớp cắn và cảm giác sử dụng trước khi hoàn tất.',
          },
        ],
        processTitle: 'Quy Trình Bọc Răng Sứ',
        processSteps: [
          'Thăm khám tổng quát, chụp phim và đánh giá nền răng.',
          'Lập thiết kế nụ cười, chọn màu sắc và dáng răng phù hợp.',
          'Chuẩn bị răng theo tỉ lệ bảo tồn và lấy dấu phục hình.',
          'Gắn răng tạm trong thời gian labo hoàn thiện răng sứ.',
          'Thử sứ, điều chỉnh khớp cắn và gắn hoàn tất.',
        ],
        shapeTitle: 'Dáng Răng Thẩm Mỹ Tham Khảo',
        crownTypeTitle: 'Các Dòng Răng Sứ Tại Emis Dental',
        ctaTitle: 'Sẵn Sàng Cải Thiện Nụ Cười?',
        ctaText:
          'Đặt lịch để được bác sĩ đánh giá trực tiếp tình trạng răng và đề xuất kế hoạch phục hình phù hợp với mục tiêu thẩm mỹ của bạn.',
        ctaButton: 'Liên Hệ Tư Vấn Ngay',
      }
    : {
        metaTitle: 'Cosmetic Dental Crowns | Emis Dental',
        metaDescription:
          'Cosmetic crowns at Emis Dental improve tooth color, shape, and chewing stability with genuine materials and a controlled treatment workflow.',
        label: 'Aesthetic Restoration',
        heroTitle: 'Cosmetic Dental Crowns',
        heroIntro:
          'A fixed restorative solution to rebuild tooth shape, improve smile aesthetics, and maintain stable chewing performance.',
        heroPrimary: 'Book Consultation',
        heroSecondary: 'Get Personalized Quote',
        suitableTitle: 'When Crowns Are Suitable',
        suitableItems: [
          'Severe discoloration not responsive to whitening.',
          'Large chips, shape loss, or advanced tooth wear.',
          'Mild spacing or alignment concerns needing faster cosmetic correction.',
          'Root-canal-treated teeth requiring long-term protection.',
        ],
        advantagesTitle: 'Key Advantages',
        advantages: [
          {
            title: 'Natural Aesthetic Outcome',
            desc: 'Color and tooth shape are calibrated to your facial profile.',
          },
          {
            title: 'Functional Stability',
            desc: 'Restores chewing while protecting underlying tooth structure.',
          },
          {
            title: 'Traceable Materials',
            desc: 'Genuine crown lines with clear sourcing and clinical indication.',
          },
          {
            title: 'Controlled Protocol',
            desc: 'Fit, bite, and comfort are validated before final placement.',
          },
        ],
        processTitle: 'Crown Treatment Workflow',
        processSteps: [
          'Comprehensive exam, imaging, and baseline dental assessment.',
          'Smile planning with matched shade and shape selection.',
          'Conservative tooth preparation and precision impression.',
          'Temporary crowns during laboratory fabrication.',
          'Try-in, bite refinement, and final cementation.',
        ],
        shapeTitle: 'Reference Smile Shapes',
        crownTypeTitle: 'Crown Lines at Emis Dental',
        ctaTitle: 'Ready To Upgrade Your Smile?',
        ctaText:
          'Book a direct consultation for clinical assessment and a crown plan aligned with your aesthetic and functional goals.',
        ctaButton: 'Contact For Consultation',
      };

  const sectionLabelClass = 'uppercase tracking-[0.28em] text-[#C5AF73] text-[10px] font-semibold';
  const titleClass = 'text-[1.85rem] md:text-[2.2rem] text-[#2a3439]';
  const bodyClass = 'text-[15px] md:text-[17px] text-gray-600 leading-relaxed';

  return (
    <main className="min-h-screen bg-[#f7fafc] pt-20">
      <Helmet>
        <title>{copy.metaTitle}</title>
        <meta name="description" content={copy.metaDescription} />
      </Helmet>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-14 items-center">
          <div className="space-y-6">
            <p className={sectionLabelClass} style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
              {copy.label}
            </p>
            <h1 className={titleClass} style={{ fontFamily: "'Playfair Display', serif" }}>
              {copy.heroTitle}
            </h1>
            <p className={bodyClass} style={{ fontFamily: "'Cormorant', serif" }}>
              {copy.heroIntro}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition text-center"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                {copy.heroPrimary}
              </Link>
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm hover:bg-[#f1f5f9] transition text-center"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                {copy.heroSecondary}
              </Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm border border-[#dbe4ec] bg-[#f7fafc] max-w-sm lg:max-w-md lg:ml-auto">
            <img src={crownHeroImage} alt="Cosmetic crown treatment visual" className="w-full h-[260px] md:h-[300px] object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f7fafc]">
        <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="flex flex-col">
            <h2 className={titleClass} style={{ fontFamily: "'Playfair Display', serif" }}>
              {copy.suitableTitle}
            </h2>
            <div className="mt-6 flex flex-1 flex-col justify-between gap-3">
              {copy.suitableItems.map((item) => (
                <div key={item} className="flex gap-3 items-start text-[#2a3439]">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#d4af37]" />
                  <p className={bodyClass} style={{ fontFamily: "'Cormorant', serif" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm border border-[#dbe4ec] bg-white">
            <img src={planningImage} alt="Doctor discussing crown treatment options with patient" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className={titleClass + ' mb-8 text-center'} style={{ fontFamily: "'Playfair Display', serif" }}>
            {copy.advantagesTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {copy.advantages.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#dbe4ec] bg-[#f7fafc] p-6">
                <h3 className="text-[1.1rem] text-[#2a3439] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
                <p className="text-[14px] text-gray-600 leading-relaxed" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f1f5f9]">
        <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="flex flex-col">
            <h2 className={titleClass + ' mb-8'} style={{ fontFamily: "'Playfair Display', serif" }}>
              {copy.processTitle}
            </h2>
            <div className="flex flex-1 flex-col justify-between gap-4">
              {copy.processSteps.map((step, idx) => (
                <div key={step} className="rounded-xl bg-white border border-[#dbe4ec] px-5 py-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#C5AF73] mb-2" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                    Step {idx + 1}
                  </p>
                  <p className="text-[15px] text-[#2a3439]" style={{ fontFamily: "'Cormorant', serif" }}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm border border-[#dbe4ec] bg-white">
            <img src={labImage} alt="Clinical team discussing crown case planning" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className={titleClass + ' mb-8 text-center'} style={{ fontFamily: "'Playfair Display', serif" }}>
            {copy.shapeTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {shapeImages.map((img, idx) => (
              <div key={`${img}-${idx}`} className="rounded-xl overflow-hidden border border-[#dbe4ec] bg-[#f7fafc]">
                <img src={img} alt={`Smile shape sample ${idx + 1}`} className="w-full h-40 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f7fafc]">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className={titleClass + ' mb-8 text-center'} style={{ fontFamily: "'Playfair Display', serif" }}>
            {copy.crownTypeTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {crownTypes.map((img, idx) => (
              <div key={`${img}-${idx}`} className="rounded-xl overflow-hidden border border-[#dbe4ec] bg-white">
                <img src={img} alt={`Crown type sample ${idx + 1}`} className="w-full h-40 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className={titleClass + ' mb-5'} style={{ fontFamily: "'Playfair Display', serif" }}>
            {copy.ctaTitle}
          </h2>
          <p className={bodyClass + ' mb-8'} style={{ fontFamily: "'Cormorant', serif" }}>
            {copy.ctaText}
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition"
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
          >
            {copy.ctaButton}
          </Link>
        </div>
      </section>
    </main>
  );
}
