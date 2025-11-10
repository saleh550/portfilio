
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
const path = "https://e7.pngegg.com/pngimages/455/948/png-clipart-laptop-computer-ipad-computer-monitor-and-computer-tower-illustration-laptop-computer-repair-technician-mobile-phones-computer-desktop-pc-television-gadget.png";
import desktopImg from "../../../assets/images/devices/tv.png";
import desktop2Img from "../../../assets/images/devices/tv2.png";
import laptopImg from "../../../assets/images/devices/laptop.png";
import tabletImg from "../../../assets/images/devices/tablet.png";
import mobile2Img from "../../../assets/images/devices/mobile2.png";
import mobileImg from "../../../assets/images/devices/mobile1.png";

import agrismartdesktopImg from "../../../assets/images/agrismart-images/desktop.png";
import agrismartlaptopImg from "../../../assets/images/agrismart-images/laptop.png";
import agrismarttabletImg from "../../../assets/images/agrismart-images/tablet.png";
import agrismartmobileImg from "../../../assets/images/agrismart-images/mobile.png";

import miragedatedesktopImg from "../../../assets/images/mirage-date/desktop.png";
import miragedatelaptopImg from "../../../assets/images/mirage-date/laptop.png";
import miragedatetabletImg from "../../../assets/images/mirage-date/teblet.png";
import miragedatemobileImg from "../../../assets/images/mirage-date/mobile.png";


const Projects = () => {


    const projects = [
        {
            name: "Digital Menu System",
            desc: "An advanced restaurant menu platform allowing customers to scan, view, and order directly from their mobile phones.",
            image: desktopImg,
            tabletImg: tabletImg,
            mobileImg: mobileImg,
            laptopImg: laptopImg,
            desktopImg: desktop2Img,
            createdAt: "June 2024",
        },
        {
            name: "Travel Agent Portal",
            desc: "Web-based management system for agents to track deals, bookings, and customer inquiries efficiently.",
            image: laptopImg,
            tabletImg: agrismarttabletImg,
            mobileImg: agrismartmobileImg,
            laptopImg: agrismartlaptopImg,
            desktopImg: agrismartdesktopImg,
            createdAt: "March 2024",
        },
        {
            name: "Barbershop Queue App",
            desc: "Queue management and booking system designed for small businesses to organize appointments in real time.",
            image: tabletImg,
            desktopImg: miragedatedesktopImg,
            laptopImg: miragedatelaptopImg,
            tabletImg: miragedatetabletImg,
            mobileImg: miragedatemobileImg,
            createdAt: "January 2025",
        },
        {
            name: "Home Expense Tracker",
            desc: "Comprehensive platform for managing wedding and home-building expenses with cloud sync and reports.",
            image: mobileImg,
            tabletImg: tabletImg,
            mobileImg: mobileImg,
            laptopImg: laptopImg,
            desktopImg: desktop2Img,
            createdAt: "August 2024",
        },
    ];

    return (
        <section id="projects" className="bg-gray-50 py-20 px-6 md:px-20">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2
                    className="text-4xl font-bold text-gray-900 mb-4"
                    data-aos="fade-up"
                >
                    My Projects
                </h2>
                <p
                    className="text-gray-600 text-base max-w-2xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    A collection of applications I’ve built — combining beautiful
                    interfaces, real-time functionality, and scalable backend systems.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500"
                        data-aos="fade-up"
                        data-aos-delay={i * 150}
                    >
                        {/* Device-style image */}
                        {/* <div className="relative bg-gray-100 h-56 flex items-center justify-center"> */}
                        <div className="relative bg-gray-100 h-60  flex items-center justify-center overflow-hidden">
                            {/* Desktop */}
                            <img
                                src={project.desktopImg}
                                alt={`${project.name} desktop`}
                                className="absolute w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[45%] h-auto object-contain z-0 -top-6 sm:-top-10 md:-top-12 lg:-top-16 left-1/2 -translate-x-1/2 transition-transform duration-300 hover:scale-105"
                            />

                            {/* Laptop */}
                            <img
                                src={project.laptopImg}
                                alt={`${project.name} laptop`}
                                className="absolute w-[45%] sm:w-[40%] md:w-[35%] lg:w-[30%] h-auto object-contain -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 z-10 transition-transform duration-300 hover:scale-110"
                            />

                            {/* Tablet */}
                            <img
                                src={project.tabletImg}
                                alt={`${project.name} tablet`}
                                className="absolute w-[18%] sm:w-[15%] md:w-[13%] lg:w-[12%] h-auto object-contain bottom-6 sm:bottom-8 left-8 sm:left-12 md:left-16 lg:left-20 z-20 transition-transform duration-300 hover:scale-110"
                            />

                            {/* Mobile */}
                            <img
                                src={project.mobileImg}
                                alt={`${project.name} mobile`}
                                className="absolute w-[10%] sm:w-[9%] md:w-[8%] lg:w-[7%] h-auto object-contain bottom-4 sm:bottom-6 right-8 sm:right-10 md:right-16 lg:right-20 z-30 transition-transform duration-300 hover:scale-110"
                            />
                        </div>

                        <div className="p-6 text-left">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {project.name}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                {project.desc}
                            </p>
                            <div className="flex items-center text-gray-500 text-sm">
                                <CalendarDaysIcon className="w-4 h-4 mr-1" />
                                <span>Created: {project.createdAt}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
