import bgImage from "../../../assets/images/bg.jpg";
import personImg from "../../../assets/images/041A1035.png";
import { Typewriter } from "react-simple-typewriter";
import SocialIcons from "./SocialIcons";

const Home = () => {
    
    return (
        <div
            className="relative h-screen w-full bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* 🔵 Animated background circles */}
            {/* <div className="absolute right-[-100px] -top-30 w-[800px] h-[800px]  rounded-full bg-blue-400/20  animate-floating-slow " /> */}
            {/* <div className="absolute right-[-400px] -top-10 w-[1000px] h-[1000px] rounded-full bg-blue-200/10  animate-floating " /> */}
            <div
                className="
    absolute 
    right-[-50px] top-[50px] 
    w-[300px] h-[300px] 
    rounded-full bg-blue-400/20 animate-floating-slow
    sm:-right-20 sm:top-5 sm:w-[400px] sm:h-[400px]
    md:right-[-100px] md:top-[-30px] md:w-[600px] md:h-[600px]
    lg:right-[-100px] lg:top-[-30px] lg:w-[800px] lg:h-[800px]
    xl:right-[-120px] xl:top-[-50px] xl:w-[900px] xl:h-[900px]
  "
            />

            <div
                className="
    absolute 
    right-[-150px] top-[100px] 
    w-[400px] h-[400px] 
    rounded-full bg-blue-200/10 animate-floating
    sm:right-[-200px] sm:top-[50px] sm:w-[600px] sm:h-[600px]
    md:right-[-300px] md:-top-2.5 md:w-[800px] md:h-[800px]
    lg:right-[-400px] lg:-top-2.5 lg:w-[1000px] lg:h-[1000px]
    xl:right-[-450px] xl:top-[-30px] xl:w-[1100px] xl:h-[1100px]
  "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row  w-full h-full ">
                {/* LEFT SIDE (TEXT) */}
                <div className="w-full md:w-6/12 h-1/2 md:h-screen flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:pl-20 md:pr-10 text-white">
                        <span className="block font-semibold text-blue-400 xl:text-2xl sm:text-lg md:text-xl text-sm mb-2">
                            Hello I'm
                        </span>
                    <h1
                        className="xl:text-5xl sm:text-3xl md:text-4xl text-2xl font-bold uppercase mb-4"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        Saleh Fares
                    </h1>

                    <h2
                        className="xl:text-3xl sm:text-xl md:text-2xl text-lg font-semibold  mb-6"
                        data-aos="fade-right"
                        data-aos-duration="2500"
                    >
                        A Passionate{" "}
                        <span className="text-blue-400">
                            <Typewriter
                                words={["Software Engineer", "Web Designer", "FullStack Developer"]}
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={100}
                                deleteSpeed={70}
                                delaySpeed={1500}
                            />
                        </span>
                    </h2>

                    <a
                        href="#contact"
                        className="
        bg-blue-500 hover:bg-blue-600 text-white 
         font-semibold tracking-wide 
        px-4 py-2 text-sm 
        sm:px-6 sm:py-2 sm:text-base 
        md:px-8 md:py-3 md:text-lg 
        rounded-md w-fit transition duration-300 
        shadow-md hover:shadow-lg
      "
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        Say Hello
                    </a>
                </div>

                {/* RIGHT SIDE (IMAGE) */}
                <div className="w-full md:w-5/12 h-1/2 md:h-screen flex items-end justify-center mt-10 md:mt-0  ">
                    <img
                        src={personImg}
                        alt="Saleh Fares"
                        className="max-h-[60vh] md:max-h-[90%] object-contain"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    />
                </div>
                <div className="w-full md:w-1/12 h-1/2 md:h-screen hidden md:flex items-center justify-center mt-10 md:mt-0  ">
                    {/* <img
                        src={personImg}
                        alt="Saleh Fares"
                        className="max-h-[60vh] md:max-h-[90%] object-contain"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                    /> */}
                    <SocialIcons/>
                </div>
            </div>

        </div>
    );
};

export default Home;
