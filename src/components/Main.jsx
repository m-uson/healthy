import Image from "../assets/image/placeholder.png";
import { footers } from "../constants/constants";

export const Main = () => {
  return (
    <main id="home" className="main relative min-h-[1080px]">
      <div className="container">
        <div className="absolute left-0 top-0 w-[100%] h-[100%]">
          <img
            className="w-[100%] h-[100%] object-cover"
            src={Image}
            alt="not image"
          />
        </div>
        <div className="pt-64 relative z-20">
          <div className="flex flex-col items-center mb-[120px]">
            <p
              data-aos="zoom-in"
              className="text-[72px] text-center md:text-[62px] sm:text-[52px] mos:text-[35px] mo:text-[25px]"
            >
              Your <span className="font-bold">Favourite Food</span>
            </p>
            <p
              data-aos="zoom-in"
              className="text-[72px] text-center mb-[18px] md:text-[62px] sm:text-[52px] mos:text-[35px] mo:text-[25px]"
            >
              Delivered <span className="font-bold">Hot & Hresh</span>
            </p>
            <p
              data-aos="zoom-in"
              className="text-[16px] text-center opacity-70 max-w-[600px] tracking-[-0.2px] mos:text-[13px]"
            >
              HEALTHY SWITCHER chefs do all the prep work, like peeling,
              chopping & marinating, so you can cook a fresh homemade dinner in
              just 15 minutes.
            </p>
            <button
              data-aos="zoom-in"
              className="inline-block text-[18px] font-bold text-c-1A bg-c-34 w-[220px] h-[72px] rounded-[40px] mt-10"
            >
              Order Now
            </button>
          </div>
          <div className="flex justify-between relative z-10 sm:flex-col mb-64">
            {footers &&
              footers.map((item, i) => (
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  key={i}
                  className="flex flex-col items-center sm:mb-7 last:sm:mb-0"
                >
                  <img src={item.icon} alt="I can't find the image" />
                  <h4 className="text-base mt-4">{item.title}</h4>
                  <p className="text-sm opacity-50">{item.subtitle}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};
