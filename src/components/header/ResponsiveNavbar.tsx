import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import image from '../../assets/images/041A1035.png'
import logo from '../../../public/piqtek.svg'
import file from "../../../public/files/file.pdf"
const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isNavDisplay, setIsNavDisplay] = useState(false);
    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        const showNavTemporarily = (duration = 4000) => {
            setIsNavDisplay(true);
            clearTimeout(timer);
            timer = setTimeout(() => {
                setIsNavDisplay(false);
            }, duration);
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            showNavTemporarily(1000); // show for 1 second on scroll
        };

        const handleMouseMove = () => {
            showNavTemporarily(4000); // show for 4 seconds on mouse move
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
            clearTimeout(timer);
        };
    }, []);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = file;
        link.download = "salehCV.pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? (isNavDisplay ? 'bg-black/50 backdrop-blur-sm shadow-md' : 'hiiden opacity-0 pointer-events-none') : 'bg-transparent'
                }`}
        >
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
                aria-label="Global"
            >
                {/* Logo */}
                <div className="flex lg:flex-1 items-center
                ">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-12 w-auto" src={logo} alt="Logo" />
                    </a>
                    <p className='text-white magic-font'>PIQTEK</p>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a
                            onClick={() => setMobileMenuOpen(false)}
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Right side buttons */}
                <div className="flex flex-1 items-center justify-end gap-x-6">
                    {/* <a
            href="#"
            className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 text-white hover:text-blue-400 transition"
          >
            Log in
          </a> */}
                    <button
                        onClick={handleDownload}
                        className="rounded-md bg-blue-500/30 hover:bg-blue-500/50 text-white px-3 py-2 text-sm font-semibold shadow-sm backdrop-blur-sm transition"
                    >
                        Download CV
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-blue-400 transition"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10 bg-black/30 backdrop-blur-sm" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-black/70 backdrop-blur-lg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                    <div className="flex items-center gap-x-6">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto" src={image} alt="Logo" />
                        </a>
                        <button
                            onClick={handleDownload}
                            className="ml-auto rounded-md bg-blue-500/30 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500/50 transition"
                        >
                            Download CV
                        </button>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-white hover:text-blue-400 transition"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-white/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        onClick={() => setMobileMenuOpen(false)}
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/10 transition"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            {/* <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-white/10 transition"
                >
                  Log in
                </a>
              </div> */}
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
