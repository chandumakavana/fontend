import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";


function Aboutme() {
  return (
    < >
      <h1 className='uppercase text-5xl text-center ' id='about'>about me</h1>
      <hr className='w-[20vw] max-md:w-[50vw] m-auto border-gray-400 mt-2' />
      <hr className='w-[8vw] max-md:w-[20vw] border-2 m-auto -translate-y-0.5 rounded-2xl border-yellow-400' />
      <div className='flex flex-col items-center  py-3 justify-between gap-10 px-15 md:flex-row max-md:px-5 pt-20 max-md:pt-5'>
        <div className='w-full max-md:text-center space-y-5 max-md:pt-5'>
          <p className='text-gray-500 text-lg max-md:text-sm'>
            As a fresher full stack developer,
            I am eager to apply my skills in real-world
            projects and continuously learn new
            technologies. I have a good grasp of frontend
            and backend tools, and i am passionate about
            building clean, user-friendly websites. I am
            ready to work hard and grow with a supportive
            development team.
          </p>
          <button className='capitalize px-6 py-3 mt-5 font-bold bg-white rounded-lg border hover:bg-yellow-300  hover:shadow-lg hover:-translate-y-0.5 transition-all ease-in-out'>download resume</button>
        </div>
        <div className='w-full space-y-5'>

          {/* HTML  */}
          <div>
            <div className='flex justify-between items-center mb-2'>
              <span className='font-bold flex items-center'> <FaHtml5 className='text-2xl mr-2' /> HTML</span> <span>90%</span>
            </div>
            <div className='bg-gray-200 w-full h-2.5 rounded-full overflow-hidden'>
              <div className='bg-black w-[90%] h-2.5 rounded-full'></div>
            </div>
          </div>

          {/* CSS  */}
          <div>
            <div className='flex justify-between items-center mb-2'>
              <span className='font-bold flex items-center'> <IoLogoCss3 className='text-2xl mr-2' /> CSS</span> <span>80%</span>
            </div>

            <div className='bg-gray-200 w-full h-2.5 rounded-full overflow-hidden'>
              <div className='bg-black w-[80%] h-2.5 rounded-full'></div>
            </div>

          </div>

          {/* JavaScript  */}
          <div>
            <div className='flex justify-between items-center mb-2'>
              <span className='font-bold flex items-center'> <IoLogoJavascript className='text-2xl mr-2' /> JAVA SCRIPT</span> <span>75%</span>
            </div>
            <div className='bg-gray-200 w-full h-2.5 rounded-full overflow-hidden'>
              <div className='bg-black w-[75%] h-2.5 rounded-full'></div>
            </div>
          </div>

          {/* TAILWIND CSS  */}
          <div>
            <div className='flex justify-between items-center mb-2'>
              <span className='font-bold flex items-center'> <RiTailwindCssFill Html5 className='text-2xl mr-2' /> TAILWIND CSS</span> <span>75%</span>
            </div>

            <div className='bg-gray-200 w-full h-2.5 rounded-full overflow-hidden'>
              <div className='bg-black w-[75%] h-2.5 rounded-full'></div>
            </div>
          </div>

          <div className='text-3xl flex justify-center items-center gap-10 '>
            <FaNodeJs />
            <SiExpress />
            <BiLogoMongodb />
          </div>
        </div>


      </div>
    </>
  )
}

export default Aboutme
