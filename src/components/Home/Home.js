import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

import img  from '../../imeges/WhatsApp_Image_2023-01-05_at_19.35.07-removebg-preview (1).png'

function Home() {

    const Data = {
        name: "Mohammed Raafat"
    }

    return (
        <div className='home' id='home'>
            <div className="container  d-flex align-items-center justify-content-start justify-content-lg-center">
                <div className='row w-100 '>

                    <div className='col-6 d-flex justify-content-start align-items-center'>
                        <div className="left">
                            <span>Hello In My Portofolio</span>
                            <h1 className='my-4'>{Data.name}</h1>
                            <h3>Software Quality Control</h3>
                            <Link to='/about' className='btn btnmore mt-3'>More About Me</Link>
                        </div>
                    </div>
                    <div className='col-6 d-none d-lg-block'>
                        <div className="right">
                            <div className="imege">
                                <img className='w-100 h-100' src={img} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
