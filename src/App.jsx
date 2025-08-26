import { useState } from 'react'
import Images from "./assets"
import ProjectData from './database/Projects'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import SmoothScroll from './components/SmoothScroll';
import { motion } from "framer-motion";

function App() {

    // Reusable variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <SmoothScroll>
            <motion.div
                className='bg-light min-h-screen flex justify-center px-6 sm:px-0 py-10 sm:py-28'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className='sm:w-1/3 space-y-12'
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {/* Profile Section */}
                    <motion.div className='flex items-center space-x-4 ' variants={item}>
                        <motion.img
                            src={Images.Profile}
                            alt=""
                            className='w-20 h-20 sm:w-36 sm:h-36 rounded-2xl sm:rounded-4xl'
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        />
                        <div>
                            <h1 className='font-display text-4xl sm:text-5xl relative'>Hla Yin Htwe
                                <motion.img
                                    src={Images.Pookie}
                                    alt=""
                                    className='w-10 h-10 absolute sm:w-20 sm:h-20 -top-2 -right-4 sm:-top-8 sm:-right-8 rotate-12 '
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                />
                            </h1>
                            <p className='font-author text-2xl text-grey'>Design Engineer</p>
                        </div>
                    </motion.div>

                    {/* About */}
                    <motion.div variants={item}>
                        <h3 className='text-3xl font-sans font-medium'>About</h3>
                        <div className="flex-1 space-y-4 text-xl font-author text-grey mt-4"> <p className=""> 👋 Hi, I’m Hla Yin Htwe, a final-year Computer Science student graduating in <span className="px-1 text-black">January 2026</span>. </p> <p className=""> I recently completed a <span className="px-1 text-black">3-month internship as a Frontend Developer</span>, where I built an <span className="px-1 text-black">Admin Dashboard for a Catering Management System</span> using <span className="px-1 text-black">React, Tailwind CSS, and Flowbite</span>, integrated with a <span className="px-1 text-black">Laravel + PHP backend</span>. </p> <p className=""> Alongside web development, I have a strong interest in <span className="px-1 text-black">Data Analytics</span>. I enjoy working with <span className="px-1 text-black">Python, SQL, Excel</span>, and visualization tools like <span className="px-1 text-black">Power BI and Tableau</span> to explore datasets, uncover insights, and solve business problems. </p> <p className=""> My goal is to start my career as a <span className="px-1 text-black">Data Analyst</span>, where I can apply my skills in <span className="px-1 text-black">data cleaning, visualization, and storytelling</span> to support decision-making. I’m especially passionate about turning raw data into clear, actionable insights that add real value. </p> <p className=""> When I’m not coding or analyzing data, I like to keep learning about <span className="px-1 text-black">emerging tech, business intelligence, and data-driven solutions</span>. </p> </div>
                    </motion.div>

                    {/* Projects */}
                    <motion.div variants={item}>
                        <h3 className='text-3xl font-sans font-medium'>Projects</h3>
                        <div className="sm:grid grid-cols-2 w-fit gap-8 mt-6">
                            {ProjectData.map((Data, index) => (
                                <motion.a
                                    key={index}
                                    href={Data.link} target='_blank'
                                    className="mt-4 sm:mt-0 block"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={Data.img}
                                        alt=""
                                        className={`w-full h-60 object-cover rounded-3xl ${index === 1 ? "object-top" : "object-center"}`}
                                    />
                                    <h2 className='font-sans text-lg mt-2'>{Data.title}</h2>
                                    <h2 className='text-grey font-author'>{Data.desc}</h2>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div variants={item}>
                        <h3 className='text-3xl font-sans font-medium'>Education</h3>
                        <div className="text-xl font-author text-grey mt-4">
                            <p>
                                <span className="px-1 text-black">Bachelor of Computer Science</span>
                                <div className='mt-2'>(University of Computer Studies, Taunggyi)</div>
                            </p>
                        </div>
                    </motion.div>

                    {/* Skills */}
                    <motion.div variants={item}>
                        <h3 className='text-3xl font-sans font-medium'>Skills</h3>
                        <div className="flex sm:w-3/4 flex-wrap gap-1.5 text-xl font-author text-grey mt-4">
                            {["SQL", "Excel", "Python", "Power BI", "Classification", "Clustering", "Regression"].map((skill, i) => (
                                <motion.div
                                    key={i}
                                    className='bg-grey text-light px-4 py-2 rounded-full text-base text-center'
                                    whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        className="flex flex-wrap justify-end gap-3 text-4xl text-black mt-4"
                        variants={item}
                    >
                        <motion.a href="https://www.linkedin.com/in/hla-yin-htwe-6a11b02b8/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
                            <FaLinkedinIn />
                        </motion.a>
                        <motion.a href="https://github.com/Hla-Yin-Htwe" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
                            <FaGithub />
                        </motion.a>
                        <motion.a href="mailto:hlayinhtwe111@gmail.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
                            <SiGmail />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </SmoothScroll>
    )
}

export default App
