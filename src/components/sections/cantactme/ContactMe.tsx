import React from "react";
import ContactForm from "./ContactForm";
import Image from "./Image";


const ContactMe: React.FC = () => {


    return (
        // <div className="min-h-svh w-full relative place-ite   items-center justify-center  bg-transparent p-6 rounded-2xl  ">



        //     <div className="flex flex-col md:flex-row items-center justify-center mt-8">
        //         <div className="w-full">
        //             <ContactForm />
        //         </div>

        //         <div className="w-full  flex justify-center">
        //             <Image />
        //         </div>
        //     </div>
        // </div>
        <div className="flex flex-col md:flex-row w-full min-h-screen">
            {/* Left Side */}
            <div className="flex-1 w-full  p-6 items-center my-auto  justify-center ">
                {/* <h1 className="text-xl md:text-3xl font-semibold">Left Side</h1> */}
                  <ContactForm />

            </div>


            {/* Right Side */}
            <div className="hidden flex-1  p-6 md:flex items-center justify-center border border-gray-100">
               <Image />

            </div>
        </div>
    );
};

export default ContactMe;
