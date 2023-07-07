import {
    MdAttachMoney,
    MdKeyboardArrowRight,
    MdPerson,
    MdTag,
    MdThumbUp,
} from "react-icons/md";
import Card from "../components/Card";
import LineChart from "../components/charts/LineChart";
import {
    lineChartDataTotalSpent,
    lineChartOptionsTotalSpent,
    pieChartData,
    pieChartOptions,
} from "../components/charts/chartData";
import PieChart from "../components/charts/PieChart";

export default function DashboardPage() {
    const totalPie = pieChartData[0] + pieChartData[1] + pieChartData[2];
    return (
        <div>
            <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 3xl:grid-cols-6">
                <Card
                    title="Total Revenues"
                    detail="$2,129,430"
                    bg="bg-[#DDEFE0]"
                    icon={<MdAttachMoney className="h-6 w-6" />}
                />
                <Card
                    title="Total Transactions"
                    detail="1,520"
                    bg="bg-[#F4ECDD]"
                    icon={<MdTag className="h-6 w-6" />}
                />
                <Card
                    title="Total Likes"
                    detail="9,721"
                    bg="bg-[#EFDADA]"
                    icon={<MdThumbUp className="h-6 w-6" />}
                />
                <Card
                    title="Total Users"
                    detail="892"
                    bg="bg-[#DEE0EF]"
                    icon={<MdPerson className="h-6 w-6" />}
                />
            </div>
            <div className=" w-full mt-5 bg-white rounded-xl p-6">
                <h1 className="font-bold">Activities</h1>
                <div className="mb-6 flex mt-2 font-thin">
                    <select className="mb-3 mr-2 flex text-sm text-gray-600 hover:cursor-pointer ">
                        <option value="0">Jan-Feb 2023</option>
                        <option value="1">Feb-Mar 2023</option>
                        <option value="2">Mar-Apr 2023</option>
                        <option value="3">Apr-May 2023</option>
                        <option value="4">May-Jun 2023</option>
                        <option value="5">Jun-Jul 2023</option>
                    </select>
                </div>
                <LineChart
                    chartOptions={lineChartOptionsTotalSpent}
                    chartData={lineChartDataTotalSpent}
                />
            </div>
            <div className=" w-full mt-5 grid gap-5 grid-cols-1 md:grid-cols-2">
                <div className=" bg-white rounded-xl w-full p-6">
                    <div className="flex justify-between">
                        <h1 className="font-bold">Top Products</h1>
                        <div className="mb-6 flex mt-2 font-thin">
                            <select className="mb-3 mr-2 flex text-sm text-gray-600 hover:cursor-pointer ">
                                <option value="0">Jan-Feb 2023</option>
                                <option value="1">Feb-Mar 2023</option>
                                <option value="2">Mar-Apr 2023</option>
                                <option value="3">Apr-May 2023</option>
                                <option value="4">May-Jun 2023</option>
                                <option value="5">Jun-Jul 2023</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-auto flex h-[220px] w-full items-center justify-center">
                        <PieChart
                            chartOptions={pieChartOptions}
                            chartData={pieChartData}
                        />
                        <div className="flex flex-col items-start justify-between h-32">
                            <span className="flex justify-center items-center">
                                <div
                                    className="w-2 h-2 mr-2 bg-[#98D89E]"
                                    style={{ borderRadius: "50%" }}
                                ></div>
                                <h2>Basic Test</h2>
                            </span>
                            <span className="ml-4">
                                {(pieChartData[0] / totalPie) * 100}%
                            </span>
                            <span className="flex justify-center items-center">
                                <div
                                    className="w-2 h-2 mr-2 bg-[#F6DC7D]"
                                    style={{ borderRadius: "50%" }}
                                ></div>
                                Custom Short Pants
                            </span>
                            <span className="ml-4">
                                {(pieChartData[1] / totalPie) * 100}%
                            </span>
                            <span className="flex justify-center items-center">
                                <div
                                    className="w-2 h-2 mr-2 bg-[#EE8484]"
                                    style={{ borderRadius: "50%" }}
                                ></div>
                                Super Hoodies
                            </span>
                            <span className="ml-4">
                                {(pieChartData[2] / totalPie) * 100}%
                            </span>
                        </div>
                    </div>
                </div>
                <div className=" bg-white rounded-xl w-full p-6">
                    <div className="flex justify-between">
                        <h1 className="font-bold">Today's Schedule</h1>
                        <span className="flex mt-2 font-thin">
                            See All{" "}
                            <MdKeyboardArrowRight className="w-6 h-6 fill-gray-500" />
                        </span>
                    </div>
                    <div className="h-16 flex mt-7">
                        <div className="bg-[#9BDD7C] h-full w-2"></div>
                        <div className="flex flex-col ml-3">
                            <h2 className="font-semibold text-sm">
                                Meeting with Supplier
                            </h2>
                            <span className="font-thin text-sm">
                                14:00 - 15:00
                            </span>
                            <span className="font-thin text-sm">
                                at Sunset Road, Kuta, Bali
                            </span>
                        </div>
                    </div>
                    <div className="h-16 flex mt-7">
                        <div className="bg-[#6972C3] h-full w-2"></div>
                        <div className="flex flex-col ml-3">
                            <h2 className="font-semibold text-sm">
                                Check operation at Giga Factory 1
                            </h2>
                            <span className="font-thin text-sm">
                                18:00 - 20:00
                            </span>
                            <span className="font-thin text-sm">
                                at Central Jakarta
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
