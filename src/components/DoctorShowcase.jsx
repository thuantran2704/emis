import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DOCTORS, getDoctorTranslation } from '../data/doctors';

export default function DoctorShowcase({ language }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2 lg:gap-7">
      {DOCTORS.map((doctor) => {
        const profile = getDoctorTranslation(doctor, language);

        return (
          <article
            key={doctor.id}
            className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#dce4e7] bg-white shadow-[0_16px_40px_-30px_rgba(25,53,67,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            <div className="doctor-portrait-frame aspect-[4/3] overflow-hidden bg-[#f5e6b8]">
              <img
                src={doctor.portrait}
                alt={profile.name}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
              />
            </div>
            <div className="flex flex-1 flex-col px-6 pb-7 pt-6 sm:px-8 sm:pb-8">
              <h3 className="text-2xl font-semibold leading-snug text-[#193543] sm:text-[1.75rem]">{profile.name}</h3>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-[#765a1e]">{profile.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-[#435b66] sm:text-base">{profile.summary}</p>
              <Link
                to={doctor.slug}
                className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 border-b border-[#a98639] pt-5 text-sm font-semibold text-[#193543] transition-colors hover:text-[#896415] focus-visible:outline-offset-4"
              >
                {profile.cta}
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
