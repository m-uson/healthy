import Twitter from "../assets//image/Twitter.svg";
import Instagram from "../assets//image/Instagram.svg";
import Facebook from "../assets//image/Facebook.png";
import { images } from "../constants/constants";
import { Link } from "react-scroll";

export const Social = () => {
  return (
    <section id="social" className="container py-10">
      <div
        data-aos="fade-up"
        className="decor flex items-center justify-center mb-20"
      >
        <p className="mix-blend-normal text-center text-[100px] font-black tracking-[0.2em] text-c-30 sm:text-[70px] sm:tracking-[0.1em] mos:text-[60px] mo:text-[50px]">
          SOCIAL
        </p>
        <p className="absolute text-[30px] text-center text-c-D9 tracking-[0.5em] sm:text-[25px] sm:tracking-[0.2em] mos:text-[18px] mos:tracking-[0.4em] mo:text-[14px]">
          We in Social
        </p>
      </div>
      <div className="flex justify-between items-center lg:flex-wrap lg:justify-around">
        <div
          data-aos="fade-up"
          className="py-[25px] max-w-[350px] rounded bg-c-26 lg:mb-14 mo:max-w-[310px]"
        >
          <div className="px-[25px] flex justify-between mb-[25px]">
            <div className="flex items-center">
              <img
                className="mr-5"
                src={Twitter}
                alt="I can't find the image"
              />
              <span className="text-c-BF text-sm">Twitter</span>
            </div>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="block pl-4 pt-3 uppercase text-c-73 text-[10px] font-black w-[100px] h-[40px] border-[2px] border-c-30 rounded-[30px] bg-c-26"
            >
              follow us
            </Link>
          </div>
          <div className="border-t-2 border-c-30 px-[25px]">
            <p className="text-c-73 text-[14px] my-[25px]">
              24 Jun at 16:20 pm
            </p>
            <p className="h-[200px] text-left customized-scrollbar pr-[10px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae corporis ex ducimus maiores facere dolorum nisi, qui
              quibusdam tenetur enim sequi eveniet placeat vitae asperiores aut
              praesentium blanditiis provident rem. Molestiae corporis ex
              ducimus maiores facere dolorum nisi, qui quibusdam tenetur enim
              sequi eveniet placeat vitae asperiores aut praesentium blanditiis
              provident rem. Molestiae corporis ex ducimus maiores facere
              dolorum nisi, qui quibusdam tenetur enim sequi eveniet placeat
              vitae asperiores aut praesentium blanditiis provident rem.
              Molestiae corporis ex ducimus maiores facere dolorum nisi, qui
              quibusdam tenetur enim sequi eveniet placeat vitae asperiores aut
              praesentium blanditiis provident rem. Molestiae corporis ex
              ducimus maiores facere dolorum nisi, qui quibusdam tenetur enim
              sequi eveniet placeat vitae asperiores aut praesentium blanditiis
              provident rem.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="pt-[25px] w-[350px] rounded bg-c-26 lg:mb-14 mo:max-w-[310px]"
        >
          <div className="px-[25px] flex justify-between mb-[25px]">
            <div className="flex items-center">
              <img
                className="mr-5"
                src={Instagram}
                alt="I can't find the image"
              />
              <span className="text-c-BF text-sm">Instagram</span>
            </div>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="block pl-4 pt-3 uppercase text-c-73 text-[10px] font-black w-[100px] h-[40px] border-[2px] border-c-30 rounded-[30px] bg-c-26"
            >
              follow us
            </Link>
          </div>
          <div className="border-t-2 border-c-30">
            <div className="h-[250px] text-left img-scrollbar">
              <div className="flex flex-wrap">
                {images &&
                  images.map((img, i) => (
                    <img
                      key={i}
                      className="w-[110px] h-[120px] object-cover mo:w-[100px] mo:h-[100px]"
                      src={img}
                      alt="I can't find the image"
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="py-[25px] max-w-[350px] rounded bg-c-26 mo:max-w-[310px]"
        >
          <div className="px-[25px] flex justify-between mb-[25px]">
            <div className="flex items-center">
              <img
                className="mr-5"
                src={Facebook}
                alt="I can't find the image"
              />
              <span className="text-c-BF text-sm">Facebook</span>
            </div>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="block pl-4 pt-3 uppercase text-c-73 text-[10px] font-black w-[100px] h-[40px] border-[2px] border-c-30 rounded-[30px] bg-c-26"
            >
              follow us
            </Link>
          </div>
          <div className="border-t-2 border-c-30 px-[25px]">
            <p className="text-c-73 text-[14px] my-[25px]">
              24 Jun at 16:20 pm
            </p>
            <p className="h-[200px] text-left customized-scrollbar pr-[10px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae corporis ex ducimus maiores facere dolorum nisi, qui
              quibusdam tenetur enim sequi eveniet placeat vitae asperiores aut
              praesentium blanditiis provident rem. Molestiae corporis ex
              ducimus maiores facere dolorum nisi, qui quibusdam tenetur enim
              sequi eveniet placeat vitae asperiores aut praesentium blanditiis
              provident rem. Molestiae corporis ex ducimus maiores facere
              dolorum nisi, qui quibusdam tenetur enim sequi eveniet placeat
              vitae asperiores aut praesentium blanditiis provident rem.
              Molestiae corporis ex ducimus maiores facere dolorum nisi, qui
              quibusdam tenetur enim sequi eveniet placeat vitae asperiores aut
              praesentium blanditiis provident rem. Molestiae corporis ex
              ducimus maiores facere dolorum nisi, qui quibusdam tenetur enim
              sequi eveniet placeat vitae asperiores aut praesentium blanditiis
              provident rem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
