import { offer } from "../assets/images";
import { Button } from "../components";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse max-container gap-10">
      <div className="flex-1">
        <img 
          src={offer}
          width={773}
          height={687}
          alt="offer"
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red inline-block mt-3">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with ubeatable deals. From premier selections
          to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate the realm of unique possibilities designed to fulfill your unique desires, surpassing the loftiest 
          expectations. Your journey with us is nothing but exceptional.
        </p>
        <div className="mt-5 flex flex-wrap gap-4">
          <Button label="Shop Now" iconUrl={arrowRight}/>
          <Button label="View More" bgColour="bg-white" textColour="text-slate-gray" borderColour="border-slate-gray"/>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;