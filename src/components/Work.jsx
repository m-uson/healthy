export const Work = () => {
  return (
    <section className="container pt-20 pb-10">
      <div
        data-aos="fade-up"
        className="decor flex items-center justify-center mb-20"
      >
        <p className="mix-blend-normal text-center text-[100px] font-black tracking-[0.2em] text-c-30 sm:text-[70px] sm:tracking-[0.1em] mos:text-[60px] mo:text-[50px]">
          WORK
        </p>
        <p className="absolute text-[30px] text-center text-c-D9 tracking-[0.5em] sm:text-[25px] sm:tracking-[0.2em] mos:text-[18px] mos:tracking-[0.4em] mo:text-[14px]">
          How It Work
        </p>
      </div>
      <div className="flex justify-between md:flex-wrap md:justify-around">
        <div
          data-aos="flip-down"
          className="hover-class max-w-[200px] p-6 bg-c-25 rounded-md duration-[1s] cursor-pointer md:mx-[50px] md:mb-8 sm:mx-[10px] mos:max-w-[300px]"
        >
          <h5 className="mb-9 capitalize text-[22px] duration-[1s]">
            Pick meals
          </h5>
          <p className="text-[14px] text-c-05 leading-[18px] duration-[1s]">
            Choose your meals from our diverse weekly menu. Find gluten or dairy
            free, low carb & veggie options.
          </p>
        </div>
        <div
          data-aos="flip-down"
          className="hover-class max-w-[200px] p-6 bg-c-25 rounded-md duration-[1s] cursor-pointer md:mx-[50px] md:mb-8 sm:mx-[10px] mos:max-w-[300px]"
        >
          <h5 className="mb-9 capitalize text-[22px] duration-[1s]">
            Our Team
          </h5>
          <p className="text-[14px] text-c-05 leading-[18px] duration-[1s]">
            Our team of chefs do the prep work - no more chopping, measuring, or
            sink full of dishes!
          </p>
        </div>
        <div
          data-aos="flip-down"
          className="hover-class max-w-[200px] p-6 bg-c-25 rounded-md duration-[1s] cursor-pointer md:mx-[50px] sm:mx-[10px] mos:mb-8 mos:max-w-[300px]"
        >
          <h5 className="mb-9 capitalize text-[22px] duration-[1s]">
            fast deliveries
          </h5>
          <p className="text-[14px] text-c-05 leading-[18px] duration-[1s]">
            Your freshly prepped 15-min dinner kits arrive on your doorstep in a
            refrigerated box.
          </p>
        </div>
        <div
          data-aos="flip-down"
          className="hover-class max-w-[200px] p-6 bg-c-25 rounded-md duration-[1s] cursor-pointer md:mx-[50px] sm:mx-[10px] mos:mb-8 mos:max-w-[300px]"
        >
          <h5 className="mb-9 capitalize text-[22px] duration-[1s]">
            tasty meals
          </h5>
          <p className="text-[14px] text-c-05 leading-[18px] duration-[1s]">
            Gobble makes cooking fast, so you have more time to unwind and be
            with family.
          </p>
        </div>
      </div>
    </section>
  );
};
