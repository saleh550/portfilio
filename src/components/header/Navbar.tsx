

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full  bg-transparent  z-50">
      <ul className="flex justify-center space-x-8 py-4">
        <li><a href="#home" className="hover:text-blue-400 text-slate-300 font-semibold ">Home</a></li>
        <li><a href="#about" className="hover:text-blue-400 text-slate-300 font-semibold ">About</a></li>
        <li><a href="#projects" className="hover:text-blue-400 text-slate-300 font-semibold ">Projects</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
