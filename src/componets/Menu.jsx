import React from 'react';
import { Link } from 'react-scroll';

function Menu() {
  const closeModal = () => {
    document.getElementById('my_modal_3').close();  
  }
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* This button will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
       
        <ul className="space-y-5 text-center">
          <li className='cursor-pointer'><Link to="home" smooth={true} duration={500} offset={-80} onClick={closeModal}>Home</Link ></li>
          <li className='cursor-pointer'><Link to="about" smooth={true} duration={500} offset={-80} onClick={closeModal}>About</Link></li>
          <li className='cursor-pointer' ><Link to="project" smooth={true} duration={500} offset={-80} onClick={closeModal}>Projects</Link></li>
          <li className='cursor-pointer'><Link to="contact" smooth={true} duration={500} offset={-80} onClick={closeModal}>Contact</Link></li>
        </ul>
        </form>
      </div>
       
    </dialog>
  );
}

export default Menu;
