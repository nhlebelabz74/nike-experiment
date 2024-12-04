import { Button } from "../components";

const Subscribe = () => {
  return (
    <section 
      id="contact-us"
      className="max-container flex justify-between items-center gap-10 flex-col"
    >
      <h3 className="font-palanquin font-bold text-4xl leading-[68px]">
        Sign up for <span className="text-coral-red"> Updates </span> & Newsletter
      </h3>
      <div className="w-full lg:max-w-[60%] flex items-center gap-5 p-2.5 border border-slate-gray rounded-full">
        <input 
          type="text"
          placeholder="subscribe@nike.com"
          className="input"
        />
        <div className="flex items-center max-sm:justify-end max-sm:w-full">
          <Button label="Sign Up" fullWidth/>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;