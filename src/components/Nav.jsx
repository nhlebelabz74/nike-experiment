import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants"
import Button from "./Button";

const Nav = () => {
    return (
        <header className="padding-x py-8 w-full absolute z-10">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img 
                        src={headerLogo}
                        alt="logo" 
                        width={130}
                        height={29} // predetermined width and height values
                    />
                </a>
                <ul className="flex flex-1 justify-center items-center max-lg:hidden gap-16">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-montserrat leading-normal text-lg text-slate-gray"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <Button label="Sign Up"/>
                    </li>
                </ul>
                <div className="hidden max-lg:block">
                    <img 
                        src={hamburger}
                        alt="hamburger"
                        width={25}
                        height={25} // predetermined width and height values
                    />
                </div>
            </nav>
        </header>
    );
}

export default Nav;