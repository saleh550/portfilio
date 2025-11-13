

// import mobile2Img from "../../../assets/images/devices/mobile2.png";

import agrismartdesktopImg from "../../../assets/images/agrismart-images/desktop.png";
import agrismartlaptopImg from "../../../assets/images/agrismart-images/laptop.png";
import agrismarttabletImg from "../../../assets/images/agrismart-images/tablet.png";
import agrismartmobileImg from "../../../assets/images/agrismart-images/mobile.png";

import miragedatedesktopImg from "../../../assets/images/mirage-date/desktop.png";
import miragedatelaptopImg from "../../../assets/images/mirage-date/laptop.png";
import miragedatetabletImg from "../../../assets/images/mirage-date/teblet.png";
import miragedatemobileImg from "../../../assets/images/mirage-date/mobile.png";

import labalconedesktopImg from "../../../assets/images/la-balcone/desktop.png";
import labalconemobileImg from "../../../assets/images//la-balcone/mobile.png";

import bgImage from "../../../assets/images/projectbg.webp"
import DevicesMakeUp from "./DevicesMakeUp";
import Details from "./Details";



const Projects = () => {


    const projects = [
        {
            name: "🌱 AgriSmart - Intelligent Agriculture Management System",
            desc: `AgriSmart is a comprehensive agricultural management platform built to help farmers, plantation owners, and agricultural companies monitor and improve the health of their crops.
The system uses advanced data-driven techniques and integrates powerful APIs such as Google Earth Engine, Sentinel Hub, and other geospatial tools to analyze plantations at scale.
Users can track plant health, detect issues early, and receive actionable insights to optimize irrigation, fertilization, and harvesting.
The platform simplifies complex agricultural data into visual dashboards and reports, helping customers maintain healthier plantations and increase productivity with confidence.`,
            image: bgImage,
            tabletImg: agrismarttabletImg,
            mobileImg: agrismartmobileImg,
            laptopImg: agrismartlaptopImg,
            desktopImg: agrismartdesktopImg,
            createdAt: "March 2024",
            link:"https://grow-tech.digital/dashboard"
        },
        {
            name: "🏡 MirageDate - Home & Wedding Expense Management Platform",
            desc: `MirageDate is a beautifully designed, user-friendly platform that helps individuals and families manage all financial and logistical aspects of building a new home or planning a wedding.
The system includes smart expense tracking, detailed cost categories, and a fully integrated calendar-based task scheduling tool to keep everything organized.
Users can manage guest lists, stay on top of deadlines, and upload images efficiently using AWS S3 for secure media storage.
With its clean UI/UX and intuitive flow, MirageDate turns stressful planning processes into a smooth and enjoyable experience.`,
            image: bgImage,
            desktopImg: miragedatedesktopImg,
            laptopImg: miragedatelaptopImg,
            tabletImg: miragedatetabletImg,
            mobileImg: miragedatemobileImg,
            createdAt: "January 2024",
            link:"https://mariage-date-alpha.vercel.app/login"
        },
        {
            name: "🍽️ La-Balcone Restaurant - Digital Menu & Admin Management System",
            desc: `La-Balcone is a modern digital restaurant menu designed for clarity, simplicity, and an excellent dining experience.
The system includes an admin dashboard where restaurant owners can easily add, edit, or delete menu items, manage categories, and keep content updated in real time.
The customer-facing menu is designed with a clean and friendly UI, making it easy to browse dishes, view details, and explore categories effortlessly.
La-Balcone helps restaurants present a professional digital experience while simplifying menu management.`,
            image: bgImage,
            tabletImg: labalconedesktopImg,
            mobileImg: labalconemobileImg,
            laptopImg: labalconedesktopImg,
            desktopImg: labalconedesktopImg,
            createdAt: "August 2025",
            link: "https://la-balcone.com/"
        },
    ];

    return (
        <section id="projects" className="bg-gray-50 py-20 px-6 md:px-20">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <span className="text-blue-600 uppercase tracking-widest font-semibold">
                    Projects
                </span>
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
