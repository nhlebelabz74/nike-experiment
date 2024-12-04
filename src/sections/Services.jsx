import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section id="services" className="max-sm:mt-12 max-container">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols:1 sm:gap-4 gap-14">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services;