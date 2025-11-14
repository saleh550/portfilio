import React from "react";
import logo from "../../../../public/piqtek.svg";

const CompanyExplainer: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-6">
      <div className="flex flex-col items-center text-center space-y-4">
        <img src={logo} alt="Piqtek Logo" className="w-32 h-auto" />
        <h1 className="text-3xl text-blue-400 font-bold">Welcome to Piqtek</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          At Piqtek, we specialize in delivering innovative digital solutions that help
          businesses scale and stand out. Whether you're looking for powerful web
          applications, seamless user experiences, or modern software architecture,
          our team is here to turn vision into reality.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl shadow-inner space-y-3">
        <h2 className="text-xl text-blue-400 font-semibold">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Cutting-edge Software Development</li>
          <li>Creative UI/UX & Branding Solutions</li>
          <li>Business-focused Product Strategy</li>
          <li>Reliable Long-term Support</li>
        </ul>
      </div>


    </div>
  );
};

export default CompanyExplainer;
