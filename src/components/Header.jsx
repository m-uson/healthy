import { useState } from "react";
import { menu } from "../constants/constants";
import Logo from "../assets/image/logo.svg";
import { Link } from "react-scroll";

export const Header = () => {
  const [isActive, setIsActive] = useState(0);
  const [isClose, setIsClose] = useState(false);

  const handleClick = (value) => {
    setIsActive(value);
  };

  return (
    <header className="fixed bg-c-25 w-full left-0 top-0 z-50">
      <div
        data-aos="zoom-in-down"
        className="container py-[45px] relative z-50"
      >
        <nav className="flex justify-between items-center">
          <Link
            onClick={() => {
              setIsActive(0), setIsClose(false);
            }}
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="text-[24px] font-bold leading-8 relative z-50 cursor-pointer"
          >
            <img src={Logo} alt="Logo" />
          </Link>
          <div
            onClick={() => setIsClose(!isClose)}
            className={`${
              isClose ? "h-6 " : null
            } hidden sm:block cursor-pointer relative z-50`}
          >
            <span className={`${isClose ? "one" : null} span`}></span>
            <span className={`${isClose ? "two" : "false-two"} span`}></span>
            <span className={`${isClose ? "tree" : null} span`}></span>
          </div>
          <ul className="flex sm:hidden">
            {menu &&
              menu.map((item, i) => (
                <li key={i} className="mr-[40px]">
                  <Link
                    onClick={() => handleClick(i)}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className={`${
                      isActive === i ? "is-active" : ""
                    } text-base cursor-pointer font-bold`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        <nav className={`${isClose ? "active-block" : "translateO z-30"} `}>
          <ul className="mt-[105px] ml-[8px]">
            {menu &&
              menu.map((item, i) => (
                <li className="mb-4 last:mb-0" key={i}>
                  <Link
                    onClick={() => {
                      setIsClose(false), handleClick(i);
                    }}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}
                    className={`${
                      isActive === i ? "is-active" : ""
                    } text-xl cursor-pointer font-bold`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
