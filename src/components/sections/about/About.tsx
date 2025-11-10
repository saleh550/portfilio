import React from "react";
import aboutImg from "../../../assets/images/about.jpg";
import { Phone, Mail, User, Calendar, Globe } from "lucide-react"; // icon library
import "aos/dist/aos.css";

const About: React.FC = () => {
    return (
        <div
            //   id="about"
            className="relative flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-gray-50 text-gray-800 overflow-hidden px-6 md:px-12 lg:px-20"
        >
            {/* LEFT - IMAGE */}

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Image */}
                <div className="relative flex justify-center" data-aos="fade-right" data-aos-duration="2000" >
                    <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-2xl overflow-hidden shadow-2xl z-10">
                        <img
                            src={aboutImg}
                            alt="Saleh Fares"
                            className="w-full h-full object-cover  grayscale-0 transition-all duration-700"
                        />
                    </div>
                    {/* <div className="absolute -top-6 -left-6 w-72 h-72 sm:w-96 sm:h-96 bg-blue-100 rounded-2xl  animate-pulse opacity-60" /> */}
                    <div
                        className="absolute -top-6 -left-6 w-72 h-72 sm:w-96 sm:h-96 
             bg-blue-100 rounded-2xl opacity-60 
             animate-floatAround"
                    ></div>
                </div>

                {/* Right Content */}
                <div data-aos="fade-left" data-aos-duration="2000" className="text-gray-800">
                    <span className="uppercase text-blue-500 font-semibold text-sm tracking-wider">
                        About Me
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-5 leading-tight">
                        I Build Smart & Scalable Systems
                    </h2>
                    <p className="text-gray-600 mb-6">
                        I’m a passionate <strong>Full Stack Developer</strong> who turns complex ideas
                        into simple and powerful digital solutions. With a background in
                        software engineering and strong experience across React, Node.js,
                        MongoDB, and cloud environments, I love creating products that scale
                        beautifully.
                    </p>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-gray-700 mb-8">
                        <div className="flex items-center space-x-3">
                            <User className="text-blue-500" size={18} />
                            <span><strong>Name:</strong> Saleh Fares</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Calendar className="text-blue-500" size={18} />
                            <span><strong>Age:</strong> {new Date().getFullYear() - 1995}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="text-blue-500" size={18} />
                            <span><strong>Phone:</strong> +972-52-8511672</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Mail className="text-blue-500" size={18} />
                            <span><strong>Email:</strong> salehf550@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Globe className="text-blue-500" size={18} />
                            <span><strong>Location:</strong> Israel</span>
                        </div>
                    </div>

                    {/* Signature */}
                    <div className="flex items-center space-x-5 mt-4">
                        {/* <img
              src="https://shthemes.net/demosd/thames/wp-content/uploads/2024/08/signature-2.png"
              alt="Signature"
              className="w-28 opacity-80"
            /> */}
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800">
                                Saleh Fares
                            </h4>
                            <span className="text-sm text-gray-500">
                                Full Stack Developer | Team Leader
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
