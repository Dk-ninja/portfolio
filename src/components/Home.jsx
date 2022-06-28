import React from "react";
import HeroImage from "../assets/portfolio/hero.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
        >

            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-2 md:flex-row ">
                <div>
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-2/5 mt-11 md:w-full"
                    />
                </div>
                <div className="flex flex-col h-full p-10 items-center md:justify-end">

                    <h2 className="text-2xl sm:text-7xl mt-1 font-bold text-white font-signature">
                        Front-End Developer
                    </h2>
                    <p className="text-gray-500 py-3 max-w-md ">
                        Meticulous web developer with over 2 years of front end experience and passion for responsive website design and a firm believer in the mobile-first approach
                    </p>

                    <div>
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Home;
