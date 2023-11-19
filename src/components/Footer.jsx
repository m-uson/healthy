import Logo from "../assets/image/logo.svg";
import { footers } from "../constants/constants";

export const Footer = () => {
  return (
    <footer data-aos="fade-up" className="bg-c-25 py-7">
      <div className="container mt-[70px] flex justify-between sm:flex-col mb-10">
        {footers &&
          footers.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center sm:mb-7 last:sm:mb-0"
            >
              <img src={item.icon} alt="I can't find the image" />
              <h4 className="text-base mt-4">{item.title}</h4>
              <p className="text-sm opacity-50">{item.subtitle}</p>
            </div>
          ))}
      </div>
      <div className="border-b-2 border-c-30"></div>
      <div className="container mt-10">
        <a href="#">
          <img className="m-auto" src={Logo} alt="I can't find the image" />
        </a>
        <p className="mt-[10px] text-c-73 text-xs text-center">
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
