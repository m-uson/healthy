import { dishes } from "../constants/constants";

export const Dishes = () => {
  return (
    <section id="dishes" className="scroll container py-[70px]">
      <div
        data-aos="fade-up"
        className="decor flex items-center justify-center mb-20"
      >
        <p className="mix-blend-normal text-[100px] font-black tracking-[0.2em] text-c-30 mos:text-[70px] mo:text-[55px]">
          DISHES
        </p>
        <p className="absolute text-[30px] text-c-D9 tracking-[0.6em] sm:text-[27px] mos:text-[20px] mo:text-[16px] mo:tracking-[0.7em]">
          Dish Of The Day
        </p>
      </div>
      <div className="flex justify-between flex-wrap lg:justify-around">
        {dishes &&
          dishes.map(({ title, des, subDes, img, icons }, i) => (
            <div
              data-aos="fade-up"
              className="w-[330px] mb-10 mo:w-[310px]"
              key={i}
            >
              <img src={img} alt={`Image for ${title}`} />
              <div className="w-[330px] p-[30px] bg-c-25 rounded-b-[6px] mo:w-[310px]">
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
