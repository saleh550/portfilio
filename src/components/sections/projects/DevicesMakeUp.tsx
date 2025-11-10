import React from 'react';
import type { ProjectType } from '../../../types/types';

interface props {
    project:ProjectType

}

const DevicesMakeUp: React.FC<props> = ({project}) => {
    return (
    <div className="relative  h-60 2xl:h-75 flex items-center justify-center overflow-hidden"  style={{ backgroundImage: `url(${project.image})` }}>
      {/* Desktop */}
      <img
        src={project.desktopImg}
        alt={`${project.name} desktop`}
        className="
          absolute 
          w-[450px] sm:w-[600px] md:w-[700px] lg:w-[800px]
          top-[-20px] sm:top-[-30px] md:top-[-40px] lg:top-[-50px] xl:top-[-90px] 2xl:top-[-100px] 3xl:top-[-100px]  
          left-1/2 -translate-x-1/2
          object-contain z-0
          transition-transform duration-300 hover:scale-105
        "
      />

      {/* Laptop */}
      {/* <img
        src={project.laptopImg}
        alt={`${project.name} laptop`}
        className="
          absolute 
          w-[150px] sm:w-[320px] md:w-[360px] lg:w-[400px]
          bottom-[-20px] sm:bottom-[-25px] md:bottom-[-30px]
          left-1/2 -translate-x-1/2
          object-contain z-10
          transition-transform duration-300 hover:scale-110
        "
      /> */}

      {/* Tablet (smaller now) */}
      {/* <img
        src={project.tabletImg}
        alt={`${project.name} tablet`}
        className="
          absolute 
          w-[75px] sm:w-[110px] md:w-[130px] lg:w-[150px]
          bottom-[20px] sm:bottom-[25px] md:bottom-[30px]
          left-[30px] sm:left-[50px] md:left-[70px] lg:left-[90px]
          object-contain z-20
          transition-transform duration-300 hover:scale-110
        "
      /> */}

      {/* Mobile (smaller now) */}
      <img
        src={project.mobileImg}
        alt={`${project.name} mobile`}
        className="
          absolute  shadow-xl
          w-[50px] sm:w-[65px] md:w-[70px] lg:w-[60px]
          bottom-[15px] sm:bottom-[20px] md:bottom-[25px] 
          right-[30px] 
          object-contain z-30
          transition-transform duration-300 hover:scale-110
        "
      />
    </div>
    );
};

export default DevicesMakeUp;