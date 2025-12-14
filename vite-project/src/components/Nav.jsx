import img1 from "../img/Group.png";
import img2 from "../img/Vector.png";
import img3 from "../img/Group 1.png";
import img4 from "../img/Logout.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="flex items-center justify-around mt-4 flex-wrap">
        <img src={img1} alt="" />
        <ul className="flex items-center gap-11 flex-wrap">
          <Link to="/">
            <li className="relative text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-400 hover:after:w-full">
              Home
            </li>
          </Link>
          <Link to="/Shop">
            <li className="relative text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-400 hover:after:w-full">
              Shop
            </li>
          </Link>
          <Link to="/PlantCare">
            <li className="relative text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-400 hover:after:w-full">
              PlantCare
            </li>
          </Link>
          <Link to="/Blogs">
            <li>Blogs</li>
          </Link>
        </ul>
        <div className="flex items-center gap-9">
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <button className="w-[100px] h-[35px] bg-[#46A358] rounded-md flex items-center justify-center gap-3">
            <img src={img4} alt="" />{" "}
            <p className="font-medium text-[#FFFFFF] text-base leading-[100%] tracking-[0%]">
              Login
            </p>
          </button>
        </div>
      </div>
    </>
  );
};
export default Nav;
