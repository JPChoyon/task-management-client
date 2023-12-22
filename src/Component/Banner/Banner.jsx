import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/Banner/banner.gif";

const Banner = () => {
  return (
    <div className="hero md:min-h-[calc(99vh-68px)] bg-base-200">
      <div className="hero-content  flex-col gap-5 md:mx-8   lg:flex-row-reverse">
        <img src={bannerImg} className="max-w-sm rounded-lg  flex-1" />
        <div className="flex-1">
          <h2 className=" mb-4 text-3xl font-bold tracking-tight text-[#ff0000] sm:text-4xl sm:leading-none">
            With Our website
          </h2>
          <p className=" text-[#2f2e2e] md:w-[80%]">
            Enhances productivity with intuitive design, deadlines, and progress
            tracking. Essential for effective project and time management.
          </p>
          <Link to={"/login"}>
            <button className="btn my-4 text-white btn-primary bg-[#a70000] border-none hover:bg-[#ff7b7b]">
              Let's Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;