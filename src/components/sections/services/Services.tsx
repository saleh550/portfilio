import React from "react";

import {
    CodeBracketIcon,
    DevicePhoneMobileIcon,
    GlobeAltIcon,
    ServerIcon,
    ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { ChartBarIcon } from "lucide-react";

const services = [
    {
        title: "Full-Stack Web Development",
        icon: <CodeBracketIcon className="w-12 h-12 text-blue-600" />,
        desc: "Building fast, scalable, and secure web applications using React, Node.js, and MongoDB with clean architecture and strong backend logic.",
        delay: 200,
    },
    {
        title: "Mobile Application Development",
        icon: <DevicePhoneMobileIcon className="w-12 h-12 text-indigo-600" />,
        desc: "Developing cross-platform mobile apps that combine beautiful design and smooth performance using modern frameworks and APIs.",
        delay: 400,
    },
    {
        title: "Business Platforms & Automation",
        icon: <ServerIcon className="w-12 h-12 text-green-600" />,
        desc: "Custom business systems like digital menus, queue management, and travel agent tools—optimized for real-time updates and cloud integration.",
        delay: 600,
    },
    {
        title: "Security & System Analysis",
        icon: <ShieldCheckIcon className="w-12 h-12 text-yellow-600" />,
        desc: "Performing in-depth security audits, analyzing performance, and ensuring your applications are resilient and data-safe.",
        delay: 800,
    },
    {
        title: "Business Growth with Google APIs",
        icon: <GlobeAltIcon className="w-12 h-12 text-red-500" />,
        desc: "Integrating Google APIs like Maps, Places, and Analytics to enhance visibility, attract more customers, and optimize business performance through data-driven insights.",
        delay: 1000,
    },
    {
        title: "Digital Presence & Marketing Tools",
        icon: <ChartBarIcon className="w-12 h-12 text-orange-500" />,
        desc: "Helping businesses grow online by building smart systems that connect to Google, social media, and SEO tools — driving more leads, engagement, and brand awareness.",
        delay: 1200,
    },
];

const Services: React.FC = () => {


    return (
        <div id="services" className="relative py-5 md:py-20 w-full  bg-gray-50 overflow-hidden">
            {/* Decorative background blob */}
            <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-400 rounded-full opacity-10 "></div>
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-400 rounded-full opacity-10 "></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Section Title */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-blue-600 uppercase tracking-widest font-semibold">
                        Services
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                        What I Do
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Delivering complete digital solutions — from backend logic to
                        elegant user interfaces, helping businesses grow through technology.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={service.delay}
                            className="bg-white shadow-md rounded-xl p-4 sm:p-6 md:p-8 hover:shadow-xl transition-transform duration-500 border border-gray-100"
                        >
                            <div className="flex items-start sm:items-center space-x-4 sm:space-x-6">
                                <div className="shrink-0">{service.icon}</div>
                                <div>
                                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
