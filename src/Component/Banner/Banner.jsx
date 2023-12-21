import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/Banner/banner.gif";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col gap-5 md:mx-8   lg:flex-row-reverse">
        <img src={bannerImg} className="max-w-sm rounded-lg  flex-1" />
        <div className="flex-1 space-y-3">
          <h2 className=" text-3xl font-bold tracking-tight text-[#ff0000] sm:text-4xl sm:leading-none">
            With Our website
          </h2>
          <p className=" text-[#2f2e2e] md:w-[80%]">
            Efficient task management website with a user-friendly interface for
            seamless task creation, organization, and collaboration. Enhances
            productivity with intuitive design, deadlines, and progress
            tracking. Essential for effective project and time management.
          </p>
          <Link to={'/login'}>
            <button className="btn text-white btn-primary bg-[#a70000] border-none hover:bg-[#ff7b7b]">
              Let's Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;