import { chefs } from "../constants/constants";

export const Chefs = () => {
  return (
    <div className="container py-[70px]">
      <div
        data-aos="fade-up"
        className="decor flex items-center justify-center mb-20"
      >
        <p className="mix-blend-normal text-center text-[100px] font-black tracking-[0.2em] text-c-30 sm:text-[70px] sm:tracking-[0.1em] mos:text-[60px] mo:text-[50px]">
          CHEFS
        </p>
        <p className="absolute text-[30px] text-center text-c-D9 tracking-[0.5em] sm:text-[25px] sm:tracking-[0.2em] mos:text-[18px] mos:tracking-[0.4em] mo:text-[14px]">
          This month is chefs
        </p>
      </div>
      <div className="flex justify-between gap-4 sm:flex-wrap sm:justify-around">
        {chefs &&
          chefs.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="lg:flex lg:flex-col sm:mb-16"
            >
              <div className="flex items-center mb-6">
                <img
                  className="mr-6"
                  src={item.avatar}
                  alt="I can't find the image"
                />
                <div>
                  <h3 className="text-[18px]">{item.title}</h3>
                  <h4 className="text-[12px] text-c-05">{item.subTitle}</h4>
                </div>
              </div>
              <div className="flex lg:flex-col">
                <img
                  className="mr-[30px] rounded-[3px] lg:mb-6 lg:mr-0"
                  src={item.img}
                  alt="I can't find the image"
                />
                <div className="flex justify-between">
                  {item?.images?.map((img, i) => (
                    <img
                      key={i}
                      className="rounded-[3px]"
                      src={img}
                      alt="I can't find the image"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
