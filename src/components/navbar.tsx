import Dropdown from "./dropdown";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
// import navbarimage from "assets/img/layout/Navbar.png";
import { BsArrowBarUp } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import {
    IoMdNotificationsOutline,
    IoMdInformationCircleOutline,
} from "react-icons/io";
import avatar from "../assets/avatar.png";

const Navbar = (props: {
    onOpenSidenav: () => void;
    brandText: string;
    secondary?: boolean | string;
}) => {
    const { onOpenSidenav, brandText } = props;

    return (
        <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl  p-2 bg-white/10 p-2 backdrop-blur-xl">
            <div className="ml-[6px]">
                <p className="shrink text-[33px] capitalize text-navy-700 ">
                    <Link
                        to="#"
                        className="font-bold capitalize hover:text-navy-700 "
                    >
                        {brandText}
                    </Link>
                </p>
            </div>

            <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full px-2  md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
                <div className=" bg-white p-3 rounded-xl">
                    <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700  xl:w-[180px]">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400  sm:w-fit"
                        />
                        <p className="text-xl">
                            <FiSearch className="h-4 w-4 text-gray-400 " />
                        </p>
                    </div>
                </div>
                <span
                    className="flex cursor-pointer text-xl text-gray-600  xl:hidden"
                    onClick={onOpenSidenav}
                >
                    <FiAlignJustify className="h-5 w-5" />
                </span>
                {/* start Notification */}
                <Dropdown
                    button={
                        <p className="cursor-pointer">
                            <IoMdNotificationsOutline className="h-5 w-5 text-gray-600 " />
                        </p>
                    }
                    animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
                    children={
                        <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4  sm:w-[460px]">
                            <div className="flex items-center justify-between">
                                <p className="text-base font-bold text-navy-700 ">
                                    Notification
                                </p>
                                <p className="text-sm font-bold text-navy-700 ">
                                    Mark all read
                                </p>
                            </div>

                            <button className="flex w-full items-center">
                                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                                    <BsArrowBarUp />
                                </div>
                                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                                    <p className="mb-1 text-left text-base font-bold text-gray-900 ">
                                        New Update: Horizon UI Dashboard PRO
                                    </p>
                                    <p className="font-base text-left text-xs text-gray-900 ">
                                        A new update for your downloaded item is
                                        available!
                                    </p>
                                </div>
                            </button>

                            <button className="flex w-full items-center">
                                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                                    <BsArrowBarUp />
                                </div>
                                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                                    <p className="mb-1 text-left text-base font-bold text-gray-900 ">
                                        New Update: Horizon UI Dashboard PRO
                                    </p>
                                    <p className="font-base text-left text-xs text-gray-900 ">
                                        A new update for your downloaded item is
                                        available!
                                    </p>
                                </div>
                            </button>
                        </div>
                    }
                    classNames={
                        "py-2 top-4 -left-[230px] md:-left-[440px] w-max"
                    }
                />
                {/* Profile & Dropdown */}
                <Dropdown
                    button={
                        <img
                            className="h-10 w-10 rounded-full"
                            src={avatar}
                            alt="Elon Musk"
                        />
                    }
                    children={
                        <div className="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat">
                            <div className="mt-3 ml-4">
                                <div className="flex items-center gap-2">
                                    <p className="text-sm font-bold text-navy-700 ">
                                        👋 Hey, Adela
                                    </p>{" "}
                                </div>
                            </div>
                            <div className="mt-3 h-px w-full bg-gray-200 " />

                            <div className="mt-3 ml-4 flex flex-col">
                                <a
                                    href=" "
                                    className="text-sm text-gray-800  hover:"
                                >
                                    Profile Settings
                                </a>
                                <a
                                    href=" "
                                    className="mt-3 text-sm text-gray-800  hover:"
                                >
                                    Newsletter Settings
                                </a>
                                <a
                                    href=" "
                                    className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                                >
                                    Log Out
                                </a>
                            </div>
                        </div>
                    }
                    classNames={"py-2 top-8 -left-[180px] w-max"}
                />
            </div>
        </nav>
    );
};

export default Navbar;
