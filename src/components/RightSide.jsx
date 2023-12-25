import React from 'react'

import { MdOutlineKeyboardArrowDown } from "react-icons/md"



const RightSide = () => {

    return (
        <>
            <div className=" ml-5 overflow-x-hidden">
                <div className=" flex gap-2  items-center w-full">

                    <p className="text-black/60 flex mt-3"><b>NewExisting Reg</b></p>

                    <div className="relative w-[100%] lg:w-1/4 p-2 mt-2">
                        <div className="absolute inset-0 border-t-2 border-l-2 border-b-2 border-black/35"></div>
                        <div className="absolute inset-0 lg:w-28 w-[100%] lg:border-b-2 "></div>
                        <MdOutlineKeyboardArrowDown className="float-right relative z-10" />
                    </div>
                    <div className=" mt-2">
                        <p>Title</p>
                    </div>
                    <div className="relative lg:w-1/4 w-[100%] p-2 mt-2">
                        <div className="absolute inset-0 border-2 border-black/35"></div>
                        <div className="absolute inset-0 w-28 border-b-4 "></div>
                        <MdOutlineKeyboardArrowDown className="float-right relative z-10" />
                    </div>
                </div>

                <div className=" flex items-center gap-3 w-full">
                    <div className=" bg-red-600 text-white p-1 mt-2 w-[120px] text-[15px]">
                        <span >CompanyName</span>
                    </div>

                    <div className="relative w-[100%] lg:w-3/5 sm:w-1/3 p-2 mt-2">
                        <div className="absolute inset-0 border-2 border-black/35"></div>
                        <div className="absolute inset-0 lg:w-72 border-b-2 "></div>
                        <MdOutlineKeyboardArrowDown className="float-right relative z-10" />
                    </div>

                </div>



                <div className=" flex items-center mt-2 gap-5">
                    <div className=" flex">
                        <span>BillingCart(Taiff)</span>
                    </div>

                    <div className="relative w-[100%] lg:w-4/6 p-2 mt-3">
                        <div className="absolute inset-0 border-2 border-black/35"></div>
                        <div className="absolute inset-0 w-40 lg:border-b-4 "></div>
                        <MdOutlineKeyboardArrowDown className="float-right relative z-10" />
                    </div>

                    <div className="w-52 gap-10 flex items-center">
                        <div className="border-t-2 border-l-2 mt-3 relative right-2  border-black/35 h-5 w-5">
                            <h1 className=" text-black/60 text-[15px] ml-3 "><b>ShowAll</b></h1>
                        </div>


                    </div>

                </div>


                <div className=" flex gap-3 mt-1 items-center">
                    <h1>HMO Enroll Plan</h1>

                    <div className="relative w-[100%] lg:w-3/6 h-8 mt-2">
                        <div className="absolute inset-0 border-2 border-black/35"></div>
                        <div className="absolute inset-0 w-48 lg:border-b-4 "></div>
                        <MdOutlineKeyboardArrowDown className="float-right relative z-10" />
                    </div>

                    <div className=" border-r-2 border-b-2 w-12 h-7 mt-2 border-black/35">
                        <p className=" text-[14px]"><b>New...</b></p>
                    </div>

                </div>

                <div className=" flex gap-4 mt-2">
                    <div className=" bg-red-600 w-28 text-[12px] h-6 text-white">
                        <h1>Admission limit(1hr)</h1>
                    </div>
                    <div className=" border-2 w-20 border-black/40 ">0</div>

                    <div className="bg-red-600 text-white px-5 lg:mr-20">
                        <p className="mr-7 text-[13px] mt-1 lg:mt-0">Enter 0 to ignore</p>
                    </div>


                </div>

                <div className="flex gap-[5px] mt-2 ml-[1.60rem]">

                    <h1 className="mb-2 lg:mb-0">EnrolleeNo</h1>

                    <div className="relative left-5 w-[100%] lg:w-3/5 p-2 mt-3">
                        <div className="absolute inset-0 border-t-2 border-black/35"></div>
                        <div className="absolute inset-0 border-l-2 border-black/35"></div>
                    </div>
                </div>

                <div className=" flex items-center gap-5 ml-[.80rem]">
                    <h1 className="">FeeforService</h1>
                    <div className="relative w-[100%] lg:w-3/6 p-2 mt-3">
                        <div className="absolute inset-0 border-2 border-black/35"></div>
                        <div className="absolute inset-0 w-56 lg:border-b-4 "></div>
                        <MdOutlineKeyboardArrowDown className="float-right relative z-10" />
                    </div>

                </div>

                <div className=" flex items-center  gap-4 ml-6">
                    <div>
                        <h1>HMOReferal</h1>
                    </div>

                    <div className="relative w-[100%] lg:w-2/6 p-2 mt-2">
                        <div className="absolute inset-0 border-2 border-black/35"></div>
                        <div className="absolute inset-0 w-36 border-b-4 "></div>
                        <MdOutlineKeyboardArrowDown className="float-right relative z-10" />
                    </div>


                </div>


                <div className=" flex items-center gap-2">
                    <div className=" bg-red-600 px-7 mt-2 text-white">
                        <p className="">Surname</p>
                    </div>
                    <div className="relative w-[100%] lg:w-3/5  mb-4 p-2 mt-3">
                        <div className="absolute inset-0 border-t-2  border-black/35"></div>
                        <div className="absolute inset-0 border-l-2 h-7 w-10 border-black/35"></div>
                    </div>


                </div>

                <div className=" flex items-center mt-3">
                    <div className=" bg-red-600 px-[6px] mt-1 mr-6 text-[15px] tracking-tighter text-white">
                        <h1 className="">OtherNames[two]</h1>
                    </div>

                    <div className="relative right-4 w-[100%] lg:w-3/5  p-2 mt-1">
                        <div className="absolute inset-0 border-t-2 border-black/35"></div>
                        <div className="absolute inset-0 border-l-2 h-7 mb-3 w-10 border-black/35"></div>
                    </div>

                </div>

                <div className=" flex items-center gap-10">
                    <div className=" text-[15px] mt-8">
                        <h1>HomeAddress</h1>
                    </div>

                    <div className="relative right-2 w-[100%] lg:w-3/5  p-2 mt-1">
                        <div className="absolute inset-0 border-t-2 border-black/35"></div>
                        <div className="absolute inset-0 border-l-2 h-20 border-black/35"></div>
                    </div>


                </div>


                <div className=" flex items-center mt-14 gap-[1rem]">
                    <div>
                        <h1>Area/Location</h1>
                    </div>

                    <div className="relative left-[10px] w-[100%] lg:w-4/6 p-2 mt-3">
                        <div className="absolute inset-0 border-2 border-black/35"></div>
                        <div className="absolute inset-0 w-[20rem] lg:border-b-4 "></div>
                        <MdOutlineKeyboardArrowDown className="float-right relative z-10" />
                    </div>


                    <div className="relative w-[100%] lg:w-2/3 sm:w-1/3 p-2 mt-3">
                        <div className="absolute inset-0 border-t-2 border-black/35"></div>
                        <div className="absolute inset-0 border-l-2 w-16 h-7 border-black/35"></div>
                    </div>


                </div>

                <div className=" flex mt-4 gap-2 ml-[5rem]">
                    <h1>Sex</h1>

                    <div className="relative w-[100%] sm:w-2/4 p-2 mt-2 ml-3">
                        <div className="absolute inset-0 border-t-2  border-r-2 border-l-2 border-b-2 border-black/35"></div>
                        <div className="absolute inset-0 w-44 lg:border-b-4 "></div>
                        <MdOutlineKeyboardArrowDown className="float-right relative z-10" />
                    </div>
                </div>

                <div className=" flex items-center ml-10 gap-2">
                    <h1>CardType</h1>
                    <div className="relative left-1 w-[100%] lg:w-4/6 p-2 mt-3">
                        <div className="absolute inset-0 border-2 border-black/35"></div>
                        <div className="absolute inset-0 w-[18rem] lg:border-b-4 "></div>
                        <MdOutlineKeyboardArrowDown className="float-right relative z-10" />
                    </div>
                </div>

                <div className=" flex items-center ml-1 gap-2">
                    <h1 className=" text-[15px]">PatientMaturity</h1>
                    <div className="relative left-1 w-[100%] lg:w-4/6 p-2 mt-3">
                        <div className="absolute inset-0 border-2 border-black/35"></div>
                        <div className="absolute inset-0 w-[18rem] lg:border-b-4 "></div>
                        <MdOutlineKeyboardArrowDown className="float-right relative z-10" />
                    </div>
                </div>

                <div className=" flex items-center gap-2 ml-7">
                    <div className="mb-2 lg:mb-0">
                        <h1 className="text-sm lg:text-base mb-0">DateofBirth</h1>
                    </div>

                    <div className="relative w-[100%] lg:w-2/4 mt-3 flex">

                        <div className="absolute inset-0 border-2 border-black/35"></div>
                        <div className="absolute inset-0 w-28 border-b-4 "></div>
                        <div className=" border-t-2 border-l-2 border-r-2 border-b-2 pt-2 mb-1 border-black/40 w-9">
                            <div className=" border-t-2 border-l-2 border-black/70 p-2 relative w-6 top- bottom-[6px] ml-1">

                            </div>
                        </div>
                        <p>28 jun 2021</p>
                        <MdOutlineKeyboardArrowDown className=" left-10 top-2 relative z-10" />
                    </div>
                    <h1 className=" mr-1 ml-1">Age</h1>
                    <div className="relative w-[100%] sm:w-2/4 p-2 mt-2">
                        <div className="absolute inset-0 border-t-2 border-black/35"></div>
                        <div className="absolute inset-0 w-1 border-l-2 h-6 border-black/35"></div>

                    </div>
                </div>

                <div className=" flex items-center gap-8 ml-[3.40rem]">
                    <h1>Phone</h1>
                    <div className="relative right-4 w-[100%] lg:w-3/5 p-2 mt-1">
                        <div className="absolute inset-0 border-t-2 border-black/35"></div>
                        <div className="absolute inset-0 border-l-2 h-7 mb-3 w-10 border-black/35"></div>
                    </div>
                </div>

                <div className=" flex items-center gap-2 ml-[3.60rem] mt-2">
                    <h1>Email</h1>
                    <div className="relative left-[10px] w-[100%] lg:w-4/6 p-2 mt-3">
                        <div className="absolute inset-0 border-2 border-black/35"></div>
                        <div className="absolute inset-0 w-[20rem] lg:border-b-4 "></div>
                        <p className=" float-right relative z-10">Add</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RightSide
