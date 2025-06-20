import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import profileimge from '../../public/images/main_large.png';

function Hero() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/chandu_resume.pdf'; // Make sure this file exists in public folder
    link.download = "chandu_makavana_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='px-15 max-md:p-5 bg-gray-100 pt-20' id='home'>
      <h1 className='uppercase text-gray-200 tracking-widest text-9xl max-lg:text-8xl text-center font-bold max-md:hidden'>Developer</h1>
      
      <div className='flex justify-between items-center gap-40 max-md:gap-0 max-lg:gap-20 flex-col md:flex-row max-md:text-center'>
        {/* Text Content */}
        <div className='max-md:w-[90vw] max-md:pt-20'>
          <p className='text-gray-400'>Hello, I am </p>
          <h2 className='text-3xl uppercase font-bold max-md:break-all max-sm:text-lg'>CHANDU MAKAVANA</h2>
          
          <div className='max-md:w-[90vw] overflow-hidden py-5'>
            <hr className='border-gray-300' />
            <p className='flex items-center flex-wrap text-gray-500 max-md:text-center max-md:flex-col'>
              I Am <br className='md:hidden'/>
              <span className='px-1 '>
                <br className='md:hidden'/>
                <TypeAnimation
                  sequence={[
                    'Web Developer',
                    1000,
                    'Full Stack Developer',
                    1000,
                    'MERN Stack Developer',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className='text-3xl max-md:text-2xl font-bold text-yellow-400'
                  repeat={Infinity}
                />
              </span>
            </p>
            <hr className='border-gray-300' />

            <div className='flex gap-4 mt-5 max-md:flex-col max-md:items-center'>
              <button className='uppercase px-6 py-3 font-bold bg-white rounded-lg border hover:bg-yellow-300 hover:shadow-lg hover:-translate-y-0.5 transition-all ease-in-out'>
                contact me
              </button>
            
            </div>
          </div>
        </div>

        {/* Image - now properly aligned */}
        <div className='order-1 max-md:pt-10'>
          <img 
            src={profileimge} 
            alt="Chandu Makavana" 
            className='max-md:w-[80vw] w-full max-w-[400px] rounded-lg -translate-y-10' 
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;