import React from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';
import Menu from './Menu';
import { Link } from 'react-scroll';

function Navbar() {
  const [scroll, setscroll] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      setscroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <nav className={`flex justify-between items-center px-16 py-5 max-md:px-5 max-md:py-2 fixed top-0 left-0 w-full z-50` + (scroll ? ' bg-white shadow-lg pt-5.5 transition-all ease-in ' : ' bg-transparent')}>
        <div>
          <h1 className="text-2xl font-extrabold uppercase text-yellow-400 max-md:text-sm">
            Chandu's <span className="font-bold text-black text-xl max-md:text-xs capitalize">portfolio</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="max-md:hidden">
          <ul className="flex space-x-6 text-lg font-semibold">
            <li className='cursor-pointer'><Link  to="home" smooth={true} duration={500} offset={-80}>Home</Link ></li>
            <li  className='cursor-pointer'><Link  to="about" smooth={true} duration={500} offset={-80}>About</Link></li>
            <li className='cursor-pointer' ><Link  to="project" smooth={true} duration={500} offset={-80}>Projects</Link></li>
            <li className='cursor-pointer'><Link  to="contact" smooth={true} duration={500} offset={-80}>Contact</Link></li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="p-1" onClick={() => document.getElementById('my_modal_3').showModal()}>
            <CgMenuRightAlt size={28} />
          </button>
        </div>
      </nav>

      <Menu />
    </>
  );
}

export default Navbar;
