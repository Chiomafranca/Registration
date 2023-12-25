import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { IoIosArrowUp } from "react-icons/io";


const LeftSide = () => {
    return (
        <>
            <div className=" ml-5 overflow-x-hidden">
                <h1 className="pl-2">Next of Kin (Nok)</h1>
                <div className="flex justify-around ">
                    <div>

                        <div className="flex-shrink-0 border-l-2 border-t-2 border-black/40 w-[300px] h-10 mt-2">
                            {/* Your content goes here */}
                        </div>
                        <div className="flex items-center">
                            <h1 className=""> NokRelationship</h1>
                            <div className="relative left-[10px] w-full lg:w-4/2 p-2 mt-3">
                                <div className="absolute inset-0 border-2 border-black/35"></div>
                                <div className="absolute inset-0 w-[9rem] lg:border-b-4 "></div>
                                <MdOutlineKeyboardArrowDown className="float-right relative z-10" />
                            </div>
                        </div>

                        <div className=" flex items-center gap-2">
                            <h1>NokNumber</h1>
                            <div className="relative left-[1.80rem] w-full lg:lg:w-[188px] sm:w-2/3 p-2 mt-1">
                                <div className="absolute inset-0 border-t-2 border-black/35"></div>
                                <div className="absolute inset-0 border-l-2 h-7 mb-3 w-10 border-black/35"></div>
                            </div>
                        </div>

                        <div className=" flex items-center mt-2">
                            <h1 className=" relative top-7">AddressofNok</h1>
                            <div className="relative left-[1.55rem] top-2 w-full lg:lg:w-[190px] sm:w-1/3 p-2">
                                <div className="absolute inset-0 border-t-2 border-black/35"></div>
                                <div className="absolute inset-0 border-l-2 h-[60px] mb-3 w-10 border-black/35"></div>
                                <div className=" flex-col">
                                    <MdOutlineKeyboardArrowDown className="float-right relative z-10" />
                                    <div className=" float-right relative top-8 left-4">
                                        <IoIosArrowUp cla />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className=" border-2 border-black/40  h-[200px] w-[300px] ml-24 mt-3"></div>

                </div>

                <div className=" flex items-center gap-5 ml-14">
                    <h1>Reg Date</h1>
                    <div className="relative w-full sm:w-1/4 mt-3 flex">

                        <div className="absolute inset-0 border-2 border-black/35"></div>
                        <div className="absolute inset-0 w-28 border-b-4 "></div>
                        <div className=" border-t-2 border-l-2 border-r-2 border-b-2 pt-2 mb-1 border-black/40 w-9">
                            <div className=" border-t-2 border-l-2 border-black/70 p-2 relative w-6 top- bottom-[6px] ml-1">

                            </div>
                        </div>
                        <p>28 jun 2021</p>
                        <MdOutlineKeyboardArrowDown className=" left-10 top-2 relative z-10" />
                    </div>
                </div>

                <div className=" flex items-center justify-between gap-2">
                    <div className=" flex items-center relative left-8 gap-3">
                        <h1>CardDuration</h1>
                        <div className="relative w-[250px] p-2 mt-3">
                            <div className="absolute inset-0 border-2 border-black/35"></div>
                            <div className="absolute inset-0 w-56 lg:border-b-4 "></div>
                            <MdOutlineKeyboardArrowDown className="float-right relative z-10" />
                        </div>
                    </div>
                    <div className=" border-b-2 border-r-2 border-black/60 w-[160px] relative right-5">
                        <h1 className=" relative left-5">Select picture</h1>
                    </div>
                </div>

                <div className=" flex items-center gap-6">
                    <div className=" flex items-center gap-5 ml-14">
                        <h1>Exp Date</h1>
                        <div className="relative w-full sm:w-[190px] mt-3 flex">

                            <div className="absolute inset-0 border-2 border-black/35"></div>
                            <div className="absolute inset-0 w-40 border-b-4 "></div>
                            <div className=" border-t-2 border-l-2 border-r-2 border-b-2 pt-2 mb-1 border-black/40 w-9">
                                <div className=" border-t-2 border-l-2 border-black/70 p-2 relative w-6 top- bottom-[6px] ml-1">

                                </div>
                            </div>
                            <p>28 jun 2021</p>
                            <MdOutlineKeyboardArrowDown className=" left-10 top-2 relative z-10" />
                        </div>
                    </div>
                    <div className=" flex items-center">
                        <h1><b>Blood Group</b></h1>
                        <div className="relative w-[130px] p-2 mt-3">
                            <div className="absolute inset-0 border-2 border-black/35"></div>
                            <div className="absolute inset-0 w-[6rem] lg:border-b-4 "></div>
                            <MdOutlineKeyboardArrowDown className="float-right relative z-10" />
                        </div>
                    </div>
                    <div className=" flex items-center">
                        <h1><b>Genotype</b></h1>
                        <div className="relative w-[80px] p-2 mt-3">
                            <div className="absolute inset-0 border-2 border-black/35"></div>
                            <div className="absolute inset-0 w-[3rem] lg:border-b-4 "></div>
                            <MdOutlineKeyboardArrowDown className="float-right relative z-10" />
                        </div>
                    </div>
                </div>

                <div className=" flex items-center ml-10 gap-12">
                    <div className=" flex items-center gap-2">
                        <h1>maritalStatus</h1>
                        <div className="relative w-[250px] p-2 mt-3">
                            <div className="absolute inset-0 border-2 border-black/35"></div>
                            <div className="absolute inset-0 w-[13rem] lg:border-b-4 "></div>
                            <MdOutlineKeyboardArrowDown className="float-right relative z-10" />
                        </div>
                    </div>
                    <div className=" flex items-center gap-2">
                        <h1>Religion</h1>
                        <div className="relative w-[250px] p-2 mt-3">
                            <div className="absolute inset-0 border-2 border-black/35"></div>
                            <div className="absolute inset-0 w-[13rem] lg:border-b-4 "></div>
                            <MdOutlineKeyboardArrowDown className="float-right relative z-10" />
                        </div>
                    </div>
                </div>
                {/* 
                <div className="flex items-center gap-3 mt-2 ml-10">
                    <h1 className="">Occupation</h1>
                    <div className="relative left-2 p-2">
                        <div className="absolute inset-0 border-t-2 border-l-2 w-[614px] h-6 border-black/35"></div>
                    </div>
                </div> */}

                <div className="flex items-center gap-3 mt-2 ml-10">
                    <h1 className="">OfficeName</h1>
                    <div className="relative left-2 p-2">
                        <div className="absolute inset-0 border-t-2 border-l-2 w-[614px] h-6 border-black/35"></div>
                    </div>
                </div>

                <div className="flex items-center ml-4 gap-3 ">
                    <h1 className=""> NokRelationship</h1>
                    <div className="relative w-[450px] p-2 mt-3">
                        <div className="absolute inset-0 border-2 border-black/35"></div>
                        <div className="absolute inset-0 w-[26rem] lg:border-b-4 "></div>
                        <MdOutlineKeyboardArrowDown className="float-right relative z-10" />
                    </div>
                </div>

                <div className=" flex items-center gap-2 ml-4 mt-3">
                    <h1 className=" bg-red-600 w-[120px] text-white">Carry Over Debt</h1>
                    <h1 className=" bg-red-600 w-[130px] text-white">0</h1>
                </div>

                <div>
                    <div className="border-t-2 border-l-2 border-black/40 w-10 relative top-7 "></div>
                    <div className=" border-t-2 relative top-6 left-[12.50rem] w-[200px] border-black/40">

                    </div>
                    <div className=" border-r-2 border-l-2 border-b-2 p-10 relative right-[1px] mt-6 w-[400px] border-black/40">
                        <div className="flex items-center">
                            <h1 className="">Clinic</h1>
                            <div className="relative left-[10px] w-full lg:w-4/2 p-2 mt-3">
                                <div className="absolute inset-0 border-2 border-black/35"></div>
                                <div className="absolute inset-0 w-[9rem] lg:border-b-4 "></div>
                                <MdOutlineKeyboardArrowDown className="float-right relative z-10" />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <h1 className="">purpose</h1>
                            <div className="relative left-[10px] w-full lg:w-4/2 p-2 mt-3">
                                <div className="absolute inset-0 border-2 border-black/35"></div>
                                <div className="absolute inset-0 w-[9rem] lg:border-b-4 "></div>
                                <MdOutlineKeyboardArrowDown className="float-right relative z-10" />
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </>
    )
}

export default LeftSide
