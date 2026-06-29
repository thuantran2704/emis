import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import heroImage from '../pics/doctor-explaining-treatment-x-ray-angle-3.jpg';
import consultationImage from '../pics/doctor-explaining-procedure-to-patient.jpg';

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
import ProcessSteps from '../components/ProcessSteps';

export default function VeneerLanding() {
  const language = useSelector((state) => state.language.language);
  const isVie = language === 'vietnamese';
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const images = isVie
      ? [form1Vie, form2Vie, form3Vie, form4Vie, form5Vie, form6Vie, form7Vie, form8Vie]
      : [form1Eng, form2Eng, form3Eng, form4Eng, form5Eng, form6Eng, form7Eng, form8Eng];
    setGalleryImages(images);
  }, [isVie]);

  const copy = isVie
    ? {
        metaTitle: 'Dán Sứ Veneer Thẩm Mỹ | Emis Dental',
        metaDescription:
          'Dán sứ Veneer tại Emis Dental giúp cải thiện màu sắc, hình dáng và nụ cười với mức xâm lấn tối thiểu, ưu tiên bảo tồn răng thật.',
        label: 'Thẩm Mỹ Nụ Cười',
        heroTitle: 'Dán Sứ Veneer Thẩm Mỹ',
        heroIntro:
          'Giải pháp phục hình thẩm mỹ cao với mức mài răng tối thiểu, tập trung vào sự tự nhiên, cân đối khuôn mặt và độ bền dài hạn.',
        heroPrimary: 'Đặt Lịch Tư Vấn',
        heroSecondary: 'Gửi Hình Răng Để Đánh Giá',
        whoTitle: 'Khi Nào Nên Chọn Veneer?',
        whoItems: [
          'Răng nhiễm màu nhẹ đến trung bình, tẩy trắng không đạt mong muốn.',
          'Răng sứt mẻ nhỏ hoặc hình thể răng chưa cân đối.',
          'Răng thưa nhẹ cần cải thiện thẩm mỹ nhanh và tự nhiên.',
          'Khách hàng ưu tiên bảo tồn mô răng thật tối đa.',
        ],
        benefitsTitle: 'Ưu Điểm Của Veneer Tại Emis Dental',
        benefits: [
          {
            title: 'Bảo Tồn Răng Thật',
            desc: 'Kỹ thuật mài tối thiểu hoặc không mài trong các trường hợp phù hợp.',
          },
          {
            title: 'Hiệu Ứng Tự Nhiên',
            desc: 'Độ trong và màu sắc được tinh chỉnh theo tông da, khuôn mặt và đường cười.',
          },
          {
            title: 'Độ Bền Ổn Định',
            desc: 'Vật liệu sứ chất lượng cao kết hợp quy trình dán chuẩn giúp duy trì lâu dài.',
          },
          {
            title: 'Lộ Trình Nhanh',
            desc: 'Quy trình rõ ràng, thời gian hoàn thiện ngắn cho kết quả thẩm mỹ sớm.',
          },
        ],
        processTitle: 'Quy Trình Veneer Chuẩn Tại Emis Dental',
        processSteps: [
          'Thăm khám, chụp hình và phân tích nụ cười tổng thể.',
          'Lên thiết kế nụ cười và mô phỏng kết quả dự kiến.',
          'Chuẩn bị bề mặt răng ở mức tối thiểu và lấy dấu.',
          'Thử sứ, tinh chỉnh và gắn hoàn tất.',
        ],
        galleryTitle: 'Tham Khảo Dáng Răng Veneer',
        ctaTitle: 'Sẵn Sàng Cho Nụ Cười Mới?',
        ctaText:
          'Đặt lịch tư vấn để bác sĩ đánh giá trực tiếp và đề xuất thiết kế veneer phù hợp nhất với khuôn mặt của bạn.',
        ctaButton: 'Nhận Tư Vấn Miễn Phí',
      }
    : {
        metaTitle: 'Cosmetic Veneers | Emis Dental',
        metaDescription:
          'Cosmetic veneers at Emis Dental improve tooth color, shape, and smile harmony with minimal preparation and natural-looking results.',
        label: 'Smile Aesthetics',
        heroTitle: 'Cosmetic Veneers',
        heroIntro:
          'A premium aesthetic solution with minimal tooth preparation, focused on natural harmony, facial balance, and long-term durability.',
        heroPrimary: 'Book Consultation',
        heroSecondary: 'Send Smile Photos',
        whoTitle: 'When Are Veneers Suitable?',
        whoItems: [
          'Mild to moderate discoloration not ideal for whitening alone.',
          'Minor chips or tooth-shape imbalance.',
          'Small spacing that needs a fast and natural cosmetic improvement.',
          'Patients who prioritize maximum natural-tooth preservation.',
        ],
        benefitsTitle: 'Why Veneers at Emis Dental',
        benefits: [
          {
            title: 'Tooth Preservation',
            desc: 'Minimal-prep or no-prep approach in suitable clinical cases.',
          },
          {
            title: 'Natural Aesthetics',
            desc: 'Color and translucency are calibrated to skin tone, face shape, and smile line.',
          },
          {
            title: 'Reliable Durability',
            desc: 'High-grade ceramics and controlled bonding protocol for stable long-term outcomes.',
          },
          {
            title: 'Efficient Timeline',
            desc: 'Clear treatment flow with faster completion for early aesthetic results.',
          },
        ],
        processTitle: 'Standard Veneer Workflow at Emis Dental',
        processSteps: [
          'Clinical consultation, smile photos, and full aesthetic analysis.',
          'Smile design planning with expected outcome preview.',
          'Minimal surface preparation and impression capture.',
          'Try-in, micro-adjustment, and final bonding.',
        ],
        galleryTitle: 'Veneer Shape References',
        ctaTitle: 'Ready For Your New Smile?',
        ctaText:
          'Book a consultation for a direct assessment and a veneer design plan tailored to your facial profile.',
        ctaButton: 'Get Free Consultation',
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

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
          <div className="space-y-5 text-center lg:text-left">
            <p className={sectionLabelClass}>
              {copy.label}
            </p>
            <h1 className={titleClass}>
              {copy.heroTitle}
            </h1>
            <p className={bodyClass}>
              {copy.heroIntro}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition text-center"
              >
                {copy.heroPrimary}
              </Link>
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full border border-[#d4af37] text-[#2a3439] text-sm hover:bg-[#f1f5f9] transition text-center"
              >
                {copy.heroSecondary}
              </Link>
            </div>
          </div>
          <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-[#dbe4ec] bg-[#f7fafc]">
            <img
              src={heroImage}
              alt="Cosmetic veneer treatment visual"
              className="w-full h-[220px] sm:h-[300px] lg:h-[400px] object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f7fafc]">
        <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className={titleClass}>
              {copy.whoTitle}
            </h2>
            <div className="mt-6 space-y-3">
              {copy.whoItems.map((item) => (
                <div key={item} className="flex gap-3 items-start text-[#2a3439]">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#d4af37]" />
                  <p className={bodyClass}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm border border-[#dbe4ec] bg-white">
            <img src={consultationImage} alt="Doctor consulting patient about veneer plan" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className={titleClass + ' mb-8 text-center'}>
            {copy.benefitsTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {copy.benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-2xl border border-[#dbe4ec] bg-[#f7fafc] p-6">
                <h3 className="text-[1.1rem] text-[#2a3439] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f1f5f9]">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className={titleClass + ' mb-8'}>
            {copy.processTitle}
          </h2>
          <ProcessSteps steps={copy.processSteps} />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className={titleClass + ' mb-8 text-center'}>
            {copy.galleryTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <div key={`${img}-${index}`} className="rounded-xl overflow-hidden border border-[#dbe4ec] bg-white p-2">
                <img
                  src={img}
                  alt={`Veneer style sample ${index + 1}`}
                  className="w-full h-40 object-contain bg-[#f7fafc] rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f7fafc]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className={titleClass + ' mb-5'}>
            {copy.ctaTitle}
          </h2>
          <p className={bodyClass + ' mb-8'}>
            {copy.ctaText}
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-3.5 rounded-full bg-[#d4af37] text-white text-sm font-semibold hover:bg-[#c19d30] transition"
          >
            {copy.ctaButton}
          </Link>
        </div>
      </section>
    </main>
  );
}
