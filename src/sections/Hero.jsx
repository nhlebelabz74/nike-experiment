import { Button, ShoeCard } from "../components";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";

import { useState } from "react";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="flex flex-col xl:flex-row justify-center w-full gap-10 max-container min-h-screen"
    >
      <div className="flex flex-col relative xl:w-2/5 justify-center items-start w-full pt-28 max-xl:padding-x">
        <p className="text-xl text-coral-red font-montserrat">Our Summer Collections</p>
        <h1 className="text-8xl mt-10 font-palanquin max-sm:text-[72px] font-bold">
          <span className="xl:bg-white relative xl:whitespace-nowrap z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort and innovation for your active lifestyle.
        </p>
        <Button label="Show Now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((statistic) => (
            <div key={statistic.label}>
              <p className="font-bold font-palanquin text-4xl">{statistic.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{statistic.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center relative xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img 
            src={bigShoeImage} 
            alt="big shoe" 
            width={610}
            height={500} // predetermined height
            className="object-contain relative z-10"
          />

          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-6 max-sm:px-6">
            {shoes.map((shoe) => (
              <ShoeCard imgUrl={shoe} changeBigShoeImage = {(newShoe) => {setBigShoeImage(newShoe)}} bigShoeImage={bigShoeImage}/>
            ))}
          </div>
        </div>
    </section>
  );
}

export default Hero;