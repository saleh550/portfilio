
import { FaFacebookF, FaLinkedinIn, FaGithub ,FaInstagram } from "react-icons/fa";

const SocialIcons = () => {
  const icons = [
    { id: 1, icon: <FaFacebookF />, href: "https://www.facebook.com/share/16mwo3qE43/?mibextid=wwXIfr" },
    { id: 2, icon: <FaInstagram />, href: "https://www.instagram.com/salehf550?igsh=emVoa3Bjbm5lejUz&utm_source=qr" },
    { id: 3, icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/saleh-fares-474a26224" },
    { id: 4, icon: <FaGithub />, href: "https://github.com/saleh550" },
  ];

  return (
    <ul className="flex flex-col space-y-6 pr-6 ">
      {icons.map(({ id, icon, href }) => (
        <li key={id}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-white text-xl w-14 h-14 flex items-center justify-center 
              border border-white/30 rounded-full transition-transform duration-500 
              hover:rotate-360 hover:bg-blue-500 hover:border-blue-500
            "
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
