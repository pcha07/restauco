import AboutPic from "../assets/about-pic.jpg";
import Chef from "../assets/chef.jpg";

const About = () => {
  return (
    <section className="w-full mt-20 flex flex-col items-center justify-center  gap-4 bg-black">
      {/* flex item */}
      <div className="w-[80%] mx-auto flex flex-col items-center justify-center p-4 text-white space-y-3">
        <h1 className="text-3xl font-bold text-center">About Us</h1>
        <p className="text-center leading-7 font-semibold text-2xl">
          Since our modest beginnings in 2005 with a little space in Toronto’s
          stylish Yorkville locale, ‘Organization Name’ ‘s development has been
          enlivened with the energy to cook and serve solid, Indian-roused
          takeout food.
        </p>
        <img src={AboutPic} alt="" className="h-[350px] object-cover" />
      </div>

      <div className="w-[80%] mx-auto flex flex-col items-center justify-center p-4 text-white space-y-3">
        <h1 className="text-3xl font-bold text-center">Our Goal</h1>
        <p className="text-center leading-7 font-semibold text-2xl">
          We realize numerous individuals love Indian sustenance, yet a large
          number of them loathe or are unconscious of the regularly unfortunate
          fixings that make run-of-the-mill Indian nourishment taste so
          great.deleniti.
        </p>
        <img src={Chef} alt="" className="h-[350px] object-cover" />
      </div>
    </section>
  );
};

export default About;
