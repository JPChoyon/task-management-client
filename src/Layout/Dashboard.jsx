import { FaHistory, FaHome, FaList, FaMailBulk, FaUser } from "react-icons/fa";
import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-full flex flex-col items-center mt-10">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open Dashboard Menu
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#FFBABA] text-base-content">
            {/* Sidebar content here */}

            <NavLink
              to={"/"}
              className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
            >
              <FaHome></FaHome>
              <li> Home</li>
            </NavLink>
            <NavLink
              to={"work-sheet"}
              className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
            >
              <BsFillFileEarmarkSpreadsheetFill />
              <li>Work Sheet</li>
            </NavLink>

            <NavLink
              to={"payment-history"}
              className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
            >
              <FaHistory />
              <li>Payment History</li>
            </NavLink>

            <div className="divider py-8 divide-red-50"></div>
            <NavLink
              to={"/"}
              className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
            >
              <FaHome></FaHome>
              <li>Home</li>
            </NavLink>

            <NavLink
              to={"contact"}
              className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
            >
              <FaMailBulk></FaMailBulk>
              <li>contact</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
