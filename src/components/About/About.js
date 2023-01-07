import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'
import img from '../../imeges/WhatsApp_Image_2023-01-05_at_19.35.07-removebg-preview (1).png'


function About() {

    const Data = {
        details: "Seeking a full time Software Testing Engineer position where my skills of handling software, judging its features and usability will be used for the betterment of client experiences as I have good knowledge in testing field"
    }

    const Social = [
        {
            id:1,
            type:"fa-solid fa-w",
            link: "https://wuzzuf.net/me/mohammed-Eldokmery-7985513adc"
        },
        {
            id:2,
            type:"fa-brands fa-linkedin",
            link: "https://www.linkedin.com/in/mohammed-raafat-101aa7142/"
        },
    ]


    return (
        <>
            <h2 className='text-center text-white mt-lg-5 mt-3 mb-5'>About Me</h2>
            <div className='row justify-content-center w-100'>
                <div className="col-6 d-none d-lg-block">
                    <div className="left d-flex flex-column align-items-center justify-content-center">
                        <div className="image">
                            <img className='w-100 h-100' src={img} alt="" />
                        </div>
                        <ul className='ms-5 mt-4 d-flex'>
                            {Social.map(item => {
                                return(   
                                <li key={item.id}><a target="_blank" href={item.link} rel="noreferrer"><i className={`${item.type}`}></i></a></li>
                                )
                            })}
                            
                        </ul>
                    </div>
                </div>
                <div className="col-6 d-flex align-items-center">
                    <div className="right mt-5">
                        <p>{Data.details}</p>
                        <button className='btn btn-dark mx-2 p-3 mt-3'>Download CV</button>
                        <button className='btn btn-dark mx-2 p-3 mt-3'>Hire Me</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
