import { useState } from 'react'
import Images from "./assets"
import ProjectData from './database/Projects'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function App() {

    return (
        <div className='bg-light min-h-screen flex justify-center px-6 sm:px-0 py-10 sm:py-28 '>
            <div className='sm:w-1/3  space-y-12'>
                <div className='flex items-center space-x-4'>
                    <img src={Images.Profile} alt="" className=' w-20 h-20 sm:w-36 sm:h-36 rounded-2xl sm:rounded-4xl ' />
                    <div>
                        <h1 className='font-display text-4xl sm:text-5xl '>Hla Yin Htwe</h1>
                        <p className='font-author text-2xl text-grey '>Design Engineer</p>
                    </div>
                </div>

                <div>
                    <h3 className='text-3xl font-sans font-medium'>About</h3>
                    <div className="flex-1 space-y-4 text-xl font-author text-grey mt-4">
                        <p className="">
                            👋 Hi, I’m Hla Yin Htwe, a final-year Computer Science student graduating in
                            <span className="px-1 text-black">January 2026</span>.
                        </p>

                        <p className="">
                            I recently completed a <span className="px-1 text-black">3-month internship as a Frontend Developer</span>,
                            where I built an <span className="px-1 text-black">Admin Dashboard for a Catering Management System</span>
                            using <span className="px-1 text-black">React, Tailwind CSS, and Flowbite</span>, integrated with a
                            <span className="px-1 text-black">Laravel + PHP backend</span>.
                        </p>

                        <p className="">
                            Alongside web development, I have a strong interest in
                            <span className="px-1 text-black">Data Analytics</span>.
                            I enjoy working with <span className="px-1 text-black">Python, SQL, Excel</span>, and visualization tools
                            like <span className="px-1 text-black">Power BI and Tableau</span> to explore datasets, uncover insights,
                            and solve business problems.
                        </p>

                        <p className="">
                            My goal is to start my career as a <span className="px-1 text-black">Data Analyst</span>,
                            where I can apply my skills in <span className="px-1 text-black">data cleaning, visualization, and storytelling</span>
                            to support decision-making. I’m especially passionate about turning raw data into clear,
                            actionable insights that add real value.
                        </p>

                        <p className="">
                            When I’m not coding or analyzing data, I like to keep learning about
                            <span className="px-1 text-black">emerging tech, business intelligence, and data-driven solutions</span>.
                        </p>

                    </div>
                </div>

                <div>
                    <h3 className='text-3xl font-sans font-medium'>Projects</h3>
                    <div className="sm:grid grid-cols-2 w-fit gap-8 mt-6 ">
                        {
                            ProjectData.map((Data, index) => (
                                <a href={Data.link} className="mt-4 sm:mt-0">
                                    <img src={Data.img} alt="" className={`w-full h-60 object-cover rounded-3xl ${index === 1 ? "object-top" : "object-center"}`} />
                                    <h2 className='font-sans font-regular text-lg mt-2'>{Data.title}</h2>
                                    <h2 className='  text-grey font-author'>{Data.desc}</h2>
                                </a>
                            ))
                        }
                    </div>
                </div>

                <div>
                    <h3 className='text-3xl font-sans font-medium'>Education</h3>
                    <div className="flex-1 space-y-4 text-xl font-author text-grey mt-4">
                        <p className="">
                            <span className="px-1 text-black ">Bachelor of Computer Science</span>
                            <div className='mt-2'>(University of Computer Studies, Taunggyi)</div>
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className='text-3xl font-sans font-medium'>Skills</h3>
                    <div className="flex sm:w-3/4 flex-wrap h-fit  gap-1.5 text-xl font-author text-grey mt-4">
                        <div className='bg-grey text-light px-4 py-2 rounded-full text-nowrap text-base  text-center'>SQL</div>
                        <div className='bg-grey text-light px-4 py-2 rounded-full text-nowrap text-base  text-center'>Excel</div>
                        <div className='bg-grey text-light px-4 py-2 rounded-full text-nowrap text-base  text-center'>Python</div>
                        <div className='bg-grey text-light px-4 py-2 rounded-full text-nowrap text-base  text-center'>Power BI</div>
                        <div className='bg-grey text-light px-4 py-2 rounded-full text-nowrap text-base  text-center'>Classification</div>
                        <div className='bg-grey text-light px-4 py-2 rounded-full text-nowrap text-base  text-center'>Clustering</div>
                        <div className='bg-grey text-light px-4 py-2 rounded-full text-nowrap text-base  text-center'>Regression</div>
                    </div>
                </div>

                <div>
                    {/* <h3 className='text-3xl font-sans font-medium'>Contact</h3> */}
                    <div className="flex  flex-wrap h-fit justify-end  gap-3 text-4xl  text-black mt-4">
                        <a href="https://www.linkedin.com/in/hla-yin-htwe-6a11b02b8/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        <a href="https://github.com/Hla-Yin-Htwe" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="mailto:hlayinhtwe111@gmail.com" target="_blank" rel="noopener noreferrer"><SiGmail /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
