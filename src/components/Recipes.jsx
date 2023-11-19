import { recipes } from "../constants/constants";
import Wiev from "../assets/image/icon-wiev.svg";
import Comment from "../assets/image/icon-comment.svg";
import Image from "../assets/image/image.jpg";

export const Recipes = () => {
  return (
    <section id="recipes" className="container py-[70px]">
      <div
        data-aos="fade-up"
        className="decor flex items-center justify-center mb-20"
      >
        <p className="mix-blend-normal text-[100px] font-black tracking-[0.2em] text-c-30 sm:text-[70px] sm:tracking-[0.1em] mos:text-[60px] mo:text-[50px]">
          RECIPES
        </p>
        <p className="absolute text-[30px] text-c-D9 tracking-[0.5em] sm:text-[25px] sm:tracking-[0.2em] mos:text-[18px] mos:tracking-[0.4em] mo:text-[14px]">
          Recipes From Our Chefs
        </p>
      </div>
      <div className="flex justify-between md:flex-col md:items-center">
        <div
          data-aos="fade-up"
          className="mr-[30px] py-[60px] px-[90px] flex flex-col relative rounded-[7px] max-w-[540px] min-h-[510px] lg:max-w-[450px] lg:min-h-[425px] lg:px-[60px] lg:py-[40px] md:py-[60px] md:px-[70px] md:max-w-[500px] md:min-h-[510px] md:mr-0 md:mb-10 mos:px-[10px] mos:py-[40px]"
        >
          <img
            className="w-full h-full absolute left-0 top-0 -z-10 bg-cover bg-no-repeat rounded-[7px]"
            src={Image}
            alt="I can't find the image"
          />
          <h3 className="break bg-c-50 uppercase text-[10px] font-black w-[89px] h-[25px] rounded-[2px] tracking-[1.25px] flex items-center justify-center lg:mb-[45px]">
            breakfast
          </h3>
          <p className="text-center mb-[25px] text-[14px]">05 Jul 2016</p>
          <p className="text-[24px] text-center mb-[45px] lg:mb-[35px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <p className="text-center mb-[60px] text-[14px] lg:mb-[40px]">
            Jason Keller
          </p>
          <div className="flex m-auto">
            <div className="flex mr-6 items-center">
              <img
                className="mr-[14px]"
                src={Wiev}
                alt="I can't find the icon"
              />
              <span className="text-xs">275</span>
            </div>
            <div className="flex items-center">
              <img
                className="mr-[14px]"
                src={Comment}
                alt="I can't find the icon"
              />
              <span className="text-xs">12</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          {recipes &&
            recipes.map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                className="max-w-[500px] p-[30px] bg-c-25 rounded-md md:mb-10"
              >
                <p className="text-[14px] text-center text-c-05 leading-[18px] duration-[1s] mb-8">
                  {item.title}
                </p>
                <div className="flex justify-between">
                  <div className="flex mo:flex-col">
                    <h5 className="text-[10px] font-black uppercase mr-5 bg-c-1A w-16 h-6 flex items-center justify-center rounded-[2px]">
                      {item.lunch}
                    </h5>
                    <span className="text-[12px] mo:mt-2">{item.date}</span>
                  </div>
                  <div className="flex mo:flex-col">
                    <div className="flex mr-6 items-center mos:mb-2">
                      <img
                        className="mr-[14px]"
                        src={item.iconSee}
                        alt="I can't find the icon"
                      />
                      <span className="text-xs">{item.see}</span>
                    </div>
                    <div className="flex items-center">
                      <img
                        className="mr-[14px]"
                        src={item.iconCom}
                        alt="I can't find the icon"
                      />
                      <span className="text-xs">{item.comment}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
