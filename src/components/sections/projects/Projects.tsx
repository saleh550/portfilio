
import desktopImg from "../../../assets/images/devices/tv.png";
import desktop2Img from "../../../assets/images/devices/tv2.png";
import laptopImg from "../../../assets/images/devices/laptop.png";
import tabletImg from "../../../assets/images/devices/tablet.png";
// import mobile2Img from "../../../assets/images/devices/mobile2.png";
import mobileImg from "../../../assets/images/devices/mobile1.png";

import agrismartdesktopImg from "../../../assets/images/agrismart-images/desktop.png";
import agrismartlaptopImg from "../../../assets/images/agrismart-images/laptop.png";
import agrismarttabletImg from "../../../assets/images/agrismart-images/tablet.png";
import agrismartmobileImg from "../../../assets/images/agrismart-images/mobile.png";

import miragedatedesktopImg from "../../../assets/images/mirage-date/desktop.png";
import miragedatelaptopImg from "../../../assets/images/mirage-date/laptop.png";
import miragedatetabletImg from "../../../assets/images/mirage-date/teblet.png";
import miragedatemobileImg from "../../../assets/images/mirage-date/mobile.png";

import bgImage from "../../../assets/images/projectbg.webp"
import DevicesMakeUp from "./DevicesMakeUp";
import Details from "./Details";



const Projects = () => {


    const projects = [
        {
            name: "Digital Menu System",
            desc: "An advanced restaurant menu platform allowing customers to scan, view, and order directly from their mobile phones.",
            image: bgImage,
            tabletImg: tabletImg,
            mobileImg: mobileImg,
            laptopImg: laptopImg,
            desktopImg: desktop2Img,
            createdAt: "June 2024",
        },
        {
            name: "Travel Agent Portal",
            desc: "Web-based management system for agents to track deals, bookings, and customer inquiries efficiently.",
            image: bgImage,
            tabletImg: agrismarttabletImg,
            mobileImg: agrismartmobileImg,
            laptopImg: agrismartlaptopImg,
            desktopImg: agrismartdesktopImg,
            createdAt: "March 2024",
        },
        {
            name: "Barbershop Queue App",
            desc: "Queue management and booking system designed for small businesses to organize appointments in real time.",
            image: bgImage,
            desktopImg: miragedatedesktopImg,
            laptopImg: miragedatelaptopImg,
            tabletImg: miragedatetabletImg,
            mobileImg: miragedatemobileImg,
            createdAt: "January 2025",
        },
        {
            name: "Home Expense Tracker",
            desc: "Comprehensive platform for managing wedding and home-building expenses with cloud sync and reports.",
            image: bgImage,
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
                        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform  transition-all duration-500"
                        data-aos="fade-up"
                        data-aos-delay={i * 150}
                    >
                        {/* Device-style image */}
                        {/* <div className="relative bg-gray-100 h-56 flex items-center justify-center"> */}
                        <DevicesMakeUp project={project} />
                        <Details project={project} />


                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
