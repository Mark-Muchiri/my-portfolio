'use client';
import { useState } from "react";

export default function Sidebar() {
    const [isSidebarExpanded, setSidebarExpanded] = useState(false);

    const toggleSidebar = () => {
        setSidebarExpanded(!isSidebarExpanded);
    };

    return (
        <>
            <div className="flex items-center justify-start h-screen">
                <div
                    className={`${isSidebarExpanded ? "w-48" : "w-14"
                        } relative duration-200 grid h-auto grid-flow-row py-5 mx-5 border-0 rounded-lg gap-y-6 bg-slate-200`}
                >
                    {/* Expand */}
                    <div className="flex items-center pl-2 cursor-pointer">
                        <div
                            className={`p-2 transition ease-in delay-100 border-4 border-purple-600 rounded-full cursor-pointer place-self-center hover:border-purple-600 hover:scale-90 hover:border-opacity-50 ${isSidebarExpanded && "rotate-180"
                                }`}
                            onClick={toggleSidebar}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    d="M17.1718 11.0003L12.5149 6.34341L13.9291 4.9292L21.0002 12.0003L13.9291 19.0713L12.5149 17.6571L17.1718 13.0003L7.99995 13.0004L7.99993 11.0004L17.1718 11.0003ZM4 19.0002L4 5.00021H6V19.0002H4Z"
                                    fill="rgba(49,72,104,1)"
                                ></path>
                            </svg>
                        </div>
                    </div>

                    {/* Home */}
                    <div className="flex items-center pl-3 cursor-pointer gap-x-2">
                        <svg
                            className="transition ease-in delay-75 hover:scale-125 hover:-rotate-12"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                        >
                            <path
                                d="M6.75 2.5C9.09721 2.5 11 4.40279 11 6.75V11H6.75C4.40279 11 2.5 9.09721 2.5 6.75C2.5 4.40279 4.40279 2.5 6.75 2.5ZM6.75 13H11V17.25C11 19.5972 9.09721 21.5 6.75 21.5C4.40279 21.5 2.5 19.5972 2.5 17.25C2.5 14.9028 4.40279 13 6.75 13ZM17.25 2.5C19.5972 2.5 21.5 4.40279 21.5 6.75C21.5 9.09721 19.5972 11 17.25 11H13V6.75C13 4.40279 14.9028 2.5 17.25 2.5ZM13 13H17.25C19.5972 13 21.5 14.9028 21.5 17.25C21.5 19.5972 19.5972 21.5 17.25 21.5C14.9028 21.5 13 19.5972 13 17.25V13Z"
                                fill="rgba(124,155,192,1)"
                            ></path>
                        </svg>
                        <h1
                            className={`text-xl font-medium origin-left text-slate-600 duration-200 ${!isSidebarExpanded && "scale-0"
                                }`}
                        >
                            Home
                        </h1>
                    </div>

                    {/* Portfolio */}
                    <div className="flex items-center pl-3 cursor-pointer top-20 gap-x-2">
                        <svg
                            className="transition ease-in delay-75 hover:scale-125 hover:-rotate-12"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                        >
                            <path
                                d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM11 7V17H13V7H11ZM15 11V17H17V11H15ZM7 13V17H9V13H7Z"
                                fill="rgba(124,155,192,1)"
                            ></path>
                        </svg>
                        <h1
                            className={`text-xl font-medium origin-left text-slate-600 duration-200 ${!isSidebarExpanded && "scale-0"
                                }`}
                        >
                            Portfolio
                        </h1>
                    </div>

                    {/* Blog */}
                    <div className="flex items-center pl-3 cursor-pointer top-20 gap-x-2">
                        <svg
                            className="transition ease-in delay-75 scale-125 hover:scale-125 hover:-rotate-12"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                        >
                            <path
                                d="M5 3V19H21V21H3V3H5ZM19.9393 5.93934L22.0607 8.06066L16 14.1213L13 11.121L9.06066 15.0607L6.93934 12.9393L13 6.87868L16 9.879L19.9393 5.93934Z"
                                fill="rgba(124,155,192,1)"
                            ></path>
                        </svg>
                        <h1
                            className={`text-xl font-medium origin-left text-slate-600 duration-200 ${!isSidebarExpanded && "scale-0"
                                }`}
                        >
                            Blog
                        </h1>
                    </div>



                    {/* Theme switcher */}
                    <div className="flex items-center pl-3 cursor-pointer top-20 gap-x-2">
                        <svg
                            className="transition ease-in delay-75 hover:scale-125 hover:-rotate-12"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="32"
                            height="32"
                        >
                            <path
                                d="M5.33409 4.54491C6.3494 3.63637 7.55145 2.9322 8.87555 2.49707C9.60856 3.4128 10.7358 3.99928 12 3.99928C13.2642 3.99928 14.3914 3.4128 15.1245 2.49707C16.4486 2.9322 17.6506 3.63637 18.6659 4.54491C18.2405 5.637 18.2966 6.90531 18.9282 7.99928C19.5602 9.09388 20.6314 9.77679 21.7906 9.95392C21.9279 10.6142 22 11.2983 22 11.9993C22 12.7002 21.9279 13.3844 21.7906 14.0446C20.6314 14.2218 19.5602 14.9047 18.9282 15.9993C18.2966 17.0932 18.2405 18.3616 18.6659 19.4536C17.6506 20.3622 16.4486 21.0664 15.1245 21.5015C14.3914 20.5858 13.2642 19.9993 12 19.9993C10.7358 19.9993 9.60856 20.5858 8.87555 21.5015C7.55145 21.0664 6.3494 20.3622 5.33409 19.4536C5.75952 18.3616 5.7034 17.0932 5.0718 15.9993C4.43983 14.9047 3.36862 14.2218 2.20935 14.0446C2.07212 13.3844 2 12.7002 2 11.9993C2 11.2983 2.07212 10.6142 2.20935 9.95392C3.36862 9.77679 4.43983 9.09388 5.0718 7.99928C5.7034 6.90531 5.75952 5.637 5.33409 4.54491ZM13.5 14.5974C14.9349 13.7689 15.4265 11.9342 14.5981 10.4993C13.7696 9.0644 11.9349 8.57277 10.5 9.4012C9.06512 10.2296 8.5735 12.0644 9.40192 13.4993C10.2304 14.9342 12.0651 15.4258 13.5 14.5974Z"
                                fill="rgba(124,155,192,1)"
                            ></path>
                        </svg>
                        <h1
                            className={`text-xl font-medium origin-left text-slate-600 duration-200 ${!isSidebarExpanded && "scale-0"
                                }`}
                        >
                            Dark/Light
                        </h1>
                    </div>


                </div>
            </div>
        </>
    );
};