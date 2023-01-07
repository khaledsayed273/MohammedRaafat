import React from 'react'
import './certification.css'
import img1 from '../../imeges/WhatsApp Image 2023-01-07 at 20.16.53.jpg'
import img2 from '../../imeges/2.jpg'
import img3 from '../../imeges/3.jpg'
import img4 from '../../imeges/4.jpg'
import img5 from '../../imeges/5.jpg'

function Certification() {


    const Data = [
        {
            id: 1,
            img: img1,
            title: "Full Stack Web Developement using .NEW Track"
        },
        {
            id: 2,
            img: img2,
            title: "SQL Course"
        },
        {
            id: 3,
            img: img3,
            title: "Postman"
        },
        {
            id: 4,
            img: img4,
            title: "Manual Testing Course"
        },
        {
            id: 5,
            img: img5,
            title: "Manual Testing Course at Software Quality Academy"
        },
    ]


    return (
        <div className='certification'>
            <h3 className='text-white text-center my-5'>Certification</h3>
            <div className="container">
                <div className="row">

                    {Data.map(item => {
                        return (
                        <div className="col-lg-4 col-md-6 col-12 my-3" key={item.id}>
                            <div className="card">
                                <div className="image">
                                    <img className='w-100 h-100' src={item.img} alt="" />
                                </div>
                                <div className="foot">
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        </div>)
                    })}

                </div>

            </div>
        </div>
    )
}

export default Certification
