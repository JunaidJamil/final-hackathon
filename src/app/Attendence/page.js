"use client"
import React from "react";
import '@fontsource/montserrat'
import { useRouter } from "next/navigation";

const Attendence = () => {


   const router = useRouter()

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900 antialiased" style={{ fontFamily: "Montserrat", display: "flex", height: "100vh" }}>
                <aside id="default-sidebar" aria-label="Sidebar" style={{ width: "300px" }}>
                    <div className="h-full px-3 py-4 overflow-y-auto w-300" style={{ backgroundColor: "white" }}>
                        <ul className="space-y-2 font-medium">
                            <li>
                                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <span style={{textAlign:"center",width:"100%",fontWeight:"bold",fontSize:"18px"}}>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <img src="https://www.freeiconspng.com/uploads/school-student-icon-18.png" width={25} />
                                    <span className="flex-1 ms-3 whitespace-nowrap" onClick={()=>{router.push('/Admin')}}>Students</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <img className="rounded-full" src="https://w1.pngwing.com/pngs/902/328/png-transparent-timetracking-software-text-computer-software-timesheet-management-system-human-resource-management-payroll-time-and-attendance-human-resource-management-system-thumbnail.png" width={25} />
                                    <span className="flex-1 ms-3 whitespace-nowrap" 
                                    
                                    
                                    >Attendance</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div className="p-10 w-full">
                    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden w-full">
                        <div className="w-full flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                            <div className="w-full flex">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-2">
                                        <img src="https://i.imgur.com/zyxf5OP.png" style={{ width: "45px", height: "45px", borderRadius: "50%" }} />
                                        <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>Students</h1>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">Id</th>
                                        <th scope="col" className="px-4 py-3">Profile </th>
                                        <th scope="col" className="px-4 py-3"> Name</th>
                                        <th scope="col" className="px-4 py-3">Check in</th>
                                        <th scope="col" className="px-4 py-3">Check out</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b dark:border-gray-700">
                                        <td className="px-4 py-3">1.</td>
                                        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <div className="flex items-center mr-3">
                                                <img src="https://i.imgur.com/zyxf5OP.png" alt="iMac Front Image" className="h-8 w-auto mr-3 rounded-lg" />
                                             
                                            </div>
                                        </th>
                                        <td className="px-4 py-3">Junaid Jamil</td>
                                        <td className="px-4 py-3">1-12-0</td>
                                        <td className="px-4 py-3">1-22-0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Attendence
