import React from 'react'
import { useNavigate } from 'react-router-dom';
//import Marquee from "react-fast-marquee"
//import "./landingpage.css"
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa"
import { SiMongodb } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiMui } from "react-icons/si";

import { MdDashboard } from "react-icons/md";
import { FaShield } from "react-icons/fa6";
import { TbAutomaticGearbox } from "react-icons/tb";
import { FaMoneyCheck } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";


const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <div className="pt-32 select-none">
                <div className="text-center pb-12 md:pb-16 md:pt-40 md:pb-20">
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Assist yourself with <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Auto-Assist Hub</span>
                    </h1>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Streamline your automotive services with a dedicated dashboard for mechanics and an intuitive job portal for users.</p>
                            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                                <div>
                                    <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none font-button" type="button" onClick={()=>navigate("AdminPortal")}>Get ur DashBoard Now</button>
                                </div>
                                <div>
                                    <button className="sm:ml-4 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none " type="button" onClick={()=>navigate("UserPortal")} >Get your Machanic ASAP</button>
                                </div>
                            </div>
                    </div>
                </div>
                

                <div className='py-20'>
                <h2 className="text-2xl font-bold text-center mb-4">Developed using Modern and powerfull Library and Framework</h2>
                    <div className="flex items-center justify-center overflow-hidden">
                        <div className="flex space-x-12 animate-marquee">
                            <SiMongodb className="h-12 w-auto text-green-600"/>
                            <SiExpress className="h-12 w-auto text-yellow-500" />
                            <FaReact className="h-12 w-auto text-blue-500" />
                            <SiNextdotjs className="h-12 w-auto"/>
                            <FaNodeJs className="h-12 w-auto text-green-500" />
                            <SiMui className="h-12 w-auto text-blue-700"/>
                        </div>
                    </div>
                </div>

                <section className="bg-white dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                            <div className="max-w-screen-md mb-8 lg:mb-16">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-justify">Designed for business teams like yours</h2>
                                <p className="text-gray-500 text-justify sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                            </div>
                            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                                <div className="text-center flex flex-col items-center">
                                    <MdDashboard className="text-4xl mb-2 text-blue-500 dark:text-blue-300" />
                                    <h3 className="mb-2 text-xl font-bold dark:text-white">Dedicated Power Dashboard</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-justify">AutoAssist Hub offers a robust and free dedicated dashboard that empowers business owners to have complete control over their operations. </p>
                                </div>
                                <div className="text-center flex flex-col items-center">
                                    <FaUserFriends className="text-4xl mb-2 text-blue-500 dark:text-blue-300"/>
                                    <h3 className="mb-2 text-xl font-bold dark:text-white">Job Portal to Find Jobs and Customers</h3>
                                    <p className="text-gray-500 text-justify dark:text-gray-400">Our job portal is designed to connect mechanics with potential customers seamlessly. Business owners can list available services, and users can easily browse and book the services they need.</p>
                                </div>
                                <div className="text-center flex flex-col items-center">
                                    <TbAutomaticGearbox className="text-4xl mb-2 text-blue-500 dark:text-blue-300"/>
                                    <h3 className="mb-2 text-xl font-bold dark:text-white">Business Automation</h3>
                                    <p className="text-gray-500 dark:text-gray-400 j
                                    text-justify">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new customers to help you get started.</p>
                                </div>
                                <div className="text-center flex flex-col items-center">
                                    <FaMoneyCheck className="text-4xl mb-2 text-blue-500 dark:text-blue-300"/>
                                    <h3 className="mb-2 text-xl font-bold dark:text-white">Finance</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-justify">Keeping track of your finances is crucial for any business includes comprehensive financial management tools that help you monitor income, expenses, and overall financial health.</p>
                                </div>
                                <div className="text-center flex flex-col items-center">
                                    <FaShield className="text-4xl mb-2 text-blue-500 dark:text-blue-300"/>
                                    <h3 className="mb-2 text-xl font-bold dark:text-white">Secure</h3>
                                    <p className="text-gray-500 text-justify dark:text-gray-400">Security is a top priority at AutoAssist Hub. We implement industry-standard security measures to protect your data and ensure the privacy of your business operations. Our platform uses encrypted connections and secure authentication protocols to safeguard sensitive information. You can trust that your business data and customer information are safe with us.</p>
                                </div>
                                <div className="text-center flex flex-col items-center">
                                    <FaNetworkWired  className="text-4xl mb-2 text-blue-500 dark:text-blue-300"/>
                                    <h3 className="mb-2 text-xl font-bold dark:text-white">Operations</h3>
                                    <p className="text-gray-500 text-justify dark:text-gray-400">AutoAssist Hub is not just a tool; You have full ownership and control over your data and the flexibility to integrate additional features or third-party services. Join a growing community of developers and business owners who contribute to and benefit from an ever-evolving platform designed to support your success.</p>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
            


        </React.Fragment>
    )
}

export default LandingPage
