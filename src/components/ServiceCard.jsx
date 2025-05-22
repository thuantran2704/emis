import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ServiceCard = ({ service, image, bookNowText }) => {
  return (
    <div className="w-full flex-shrink-0 px-4" itemScope itemType="https://schema.org/MedicalProcedure">
      <div className="group h-96 [perspective:1000px]">
        <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front of Card */}
          <div className="absolute inset-0 [backface-visibility:hidden] flex flex-col">
            <div className="h-3/4 overflow-hidden">
              <img 
                src={image} 
                alt={`${service.name} service`}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                itemProp="image"
              />
            </div>
            <div className="h-1/4 bg-[#f7f2e7] p-3 flex flex-col items-center justify-center">
              <h3 className="text-lg font-bold text-[#1f2937] text-center" itemProp="name">
                {service.name}
              </h3>
              <p className="text-[#6b7280] text-sm text-center" itemProp="description">
                {service.desc}
              </p>
            </div>
          </div>
          
          {/* Back of Card */}
          <div className="absolute inset-0 bg-[#d4af37] p-4 rounded-lg flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto">
            <h3 className="text-lg font-bold text-[#1f2937] mb-2 text-center">
              {service.name}
            </h3>
            <p className="text-[#1f2937] text-sm text-center mb-4" itemProp="potentialAction">
              {service.details}
            </p>
            <Link 
              to="/contact" 
              className="bg-[#1f2937] text-[#f7f2e7] px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition"
              aria-label={`Book ${service.name} appointment`}
            >
              {bookNowText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  bookNowText: PropTypes.string.isRequired
};

export default ServiceCard;