import React from 'react'
import './experience.css'

import EjadTech from '../../imeges/WhatsApp_Image_2023-01-06_at_16.10.17-removebg-preview.png'
import Z2data from '../../imeges/WhatsApp_Image_2023-01-06_at_16.10.09-removebg-preview.png'
import Scriptoria from '../../imeges/WhatsApp_Image_2023-01-06_at_16.10.27-removebg-preview.png'
import Arabapps from '../../imeges/WhatsApp Image 2023-01-06 at 16.10.34.jpg'

function Experience() {

    const experiance = [
        {
            id: 1,
            img: EjadTech,
            company: 'EjadTech',
            job: "Software Tester",
            dete: "jun 2022 - present"
        },
        {
            id: 2,
            img: Z2data,
            company: 'Z2data',
            job: "Data Entry",
            dete: "oct 2020-Mar 2021"
        },
        {
            id: 3,
            img: Scriptoria,
            company: 'Scriptoria',
            job: "Software Tester (part time)",
            dete: "jan 2022 - present"
        },
        {
            id: 4,
            img: Arabapps,
            company: 'Arab apps',
            job: "Software Tester ",
            dete: "May 2022 - jun 2022"
        },
    ]


    return (
        <div className='experience'>
            <h3 className='text-center text-white mt-5'>My Experience</h3>
            <div className="container mt-5">
                <div className="row">
                    {experiance.map(item => {
                        return (
                            <div className="col-lg-4 col-md-6" key={item.id}>
                                <div className="card py-2 ps-3 d-flex flex-row my-3">
                                    <div className="num">{item.id}</div>
                                    <div className="left d-flex align-items-center me-3">
                                        <div className="image">
                                            <img className='w-100 h-100' src={item.img} alt="" />
                                        </div>
                                    </div>
                                    <div className="right mt-2">
                                        <h5>{item.company}</h5>
                                        <h6>{item.job}</h6>
                                        <p>{item.dete}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Experience
