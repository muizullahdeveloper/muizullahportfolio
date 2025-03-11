import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TbBrandFiverr } from 'react-icons/tb'
import './aboutme.css'

const AboutMe = () => {
    return (
        <div className='aboutme'>
            <div className='aboutme-leftsection'>
                <h1>Frontend ReactJS Developer</h1>

                <p>Hi, I'm <span>Muizullah</span>. A passionate Front-end React Developer based in Karachi, Pakistan. 📍</p>

                <div>
                    <FaLinkedin />
                    <FaGithub />
                    <TbBrandFiverr />
                </div>
            </div>

            {/* YEH IMAGE WALI DIV HAI */}
            <div className='aboutme-picture'>
                <img src='https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?ga=GA1.1.909818565.1741259515&semt=ais_hybrid=' />
            </div>

        </div>
    )
}

export default AboutMe
