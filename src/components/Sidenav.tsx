/* eslint-disable */

import { HiX } from "react-icons/hi";
import SidebarLinks from "./Links";
import routes from "../routes";

const Sidebar = (props: {
    open: boolean;
    onClose: React.MouseEventHandler<HTMLSpanElement>;
}) => {
    const { open, onClose } = props;
    return (
        <div
            className={` p-8 sm:none duration-175 linear fixed !z-50 flex  transition-all  md:!z-50 lg:!z-50 xl:!z-0 min-h-full ${
                open ? "translate-x-0" : "-translate-x-96"
            }`}
        >
            <div className={`flex-col bg-black rounded-3xl pr-14 pl-5`}>
                <span
                    className="absolute top-4 right-4 block cursor-pointer xl:hidden"
                    onClick={onClose}
                >
                    <HiX />
                </span>

                <div className={`mx-[30px] mt-[50px] flex`}>
                    <div className="mt-1 ml-1 h-2.5 font-poppins text-4xl font-bold text-white mb-16">
                        Cirql. <span className="font-medium"></span>
                    </div>
                </div>

                <ul className="mb-auto pt-1">
                    <SidebarLinks routes={routes} />
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
