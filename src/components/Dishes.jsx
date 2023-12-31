import { dishes } from "../constants/constants";

export const Dishes = () => {
  return (
    <section id="dishes" className="w-full container py-[70px]">
      <div
        data-aos="fade-up"
        className="w-full decor flex items-center justify-center mb-20"
      >
        <p className="mix-blend-normal text-center text-[100px] font-black tracking-[0.2em] text-c-30 sm:text-[70px] sm:tracking-[0.1em] mos:text-[60px] mo:text-[50px]">
          DISHES
        </p>
        <p className="absolute text-[30px] text-center text-c-D9 tracking-[0.5em] sm:text-[25px] sm:tracking-[0.2em] mos:text-[18px] mos:tracking-[0.4em] mo:text-[14px]">
          Dish Of The Day
        </p>
      </div>
      <div className="grid grid-cols-3 justify-items-center lg:grid-cols-2 md:grid-cols-1 gap-2">
        {dishes &&
          dishes.map(({ title, des, subDes, img, icons }, i) => (
            <div
              data-aos="fade-up"
              className="w-full max-w-[330px] mb-10 mo:max-w-[310px]"
              key={i}
            >
              <img
                className="w-full object-cover"
                src={img}
                alt={`Image for ${title}`}
              />
              <div className="w-full max-w-[330px] p-[30px] bg-c-25 rounded-b-[6px] mo:max-w-[310px]">
                <h2 className="text-[32px] text-c-D9">{title}</h2>
                <p className="text-[12px] text-c-A4 mb-5">{des}</p>
                <p className="text-[13px] text-c-85">{subDes}</p>
                <div className="flex justify-between mt-[26px]">
                  <div className="flex items-center">
                    {icons.map((icon, i) => (
                      <img key={i} className="mr-1" src={icon} alt="Star 1" />
                    ))}

                    <span className="text-c-B3 text-xs">12</span>
                  </div>
                  <button className="btn text-[10px] text-c-05 font-black w-[100px] h-[40px] rounded-[40px] border-2 border-c-30 tracking-[0.2em] duration-[1s]">
                    ORDER
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
