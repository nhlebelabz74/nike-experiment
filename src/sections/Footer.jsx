import { footerLogo } from "../assets/images";
import { socialMedia, footerLinks } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="nax-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/nike-experiment/" className="cursor-pointer">
            <img 
              src={footerLogo}
              width={150}
              height={46}
            />
          </a>
          <p className="text-white-400 mt-6 leading-7 font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find your perfect size, in store. 
            Get rewards. Get exclusive access. Get the Nike app.
          </p>
          <div className="flex gap-5 mt-8 items-center">
            {socialMedia.map((icon) => (
              <a 
                href={icon.url} //icon.url
                className="cursor-pointer flex justify-center items-center h-12 w-12 bg-white rounded-full hover:bg-coral-red"
              >
                <img 
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-white text-xl mb-6 font-medium">{group.title}</h4>
                <ul className="mt-4">
                  {group.links.map((link) => (
                    <li key={link.name} className="mt-2">
                      <a 
                        href={link.link}
                        className="text-white hover:text-coral-red text-base leading-normal cursor-pointer"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>

      <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img 
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full"
          />
          <p className="text-sm">2021 Nike. All Rights Reserved.</p>
        </div>
        <a className="hover:text-coral-red text-white text-sm font-montserrat cursor-pointer" href="/nike-experiment/">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}

export default Footer;
