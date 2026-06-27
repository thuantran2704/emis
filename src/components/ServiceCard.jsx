import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ServiceCard = ({ service, image, altText, bookNowText }) => {
  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#d9e4ed] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
      itemScope
      itemType="https://schema.org/MedicalProcedure"
    >
      <div className="hidden overflow-hidden border-b border-[#e4edf4] md:block">
        <img
          src={image}
          alt={altText || `${service.name} service`}
          className="aspect-[4/3] w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          itemProp="image"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3
          className="text-xl font-semibold text-[#1d3953]"
          itemProp="name"
        >
          {service.name}
        </h3>
        <p className="mt-2 text-sm font-medium text-[#6f8da6]" itemProp="description">
          {service.desc || service.brief}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#5d7388]" itemProp="potentialAction">
          {service.brief || service.details}
        </p>

        <div className="mt-auto pt-5">
          <Link
            to="/contact"
            className="inline-flex w-fit rounded-full border border-[#9ab1c5] bg-white px-4 py-2 text-sm font-semibold text-[#1f3b57] transition hover:bg-[#f2f7fb]"
            aria-label={`Book ${service.name} appointment`}
          >
            {bookNowText}
          </Link>
        </div>
      </div>
    </article>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  altText: PropTypes.string,
  bookNowText: PropTypes.string.isRequired
};

export default ServiceCard;