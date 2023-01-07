import React from 'react'
import './skills.css'
import Agile from '../../imeges/icons8-agile-64.png'
import APITesting from '../../imeges/icons8-api-64.png'
import Testing from '../../imeges/icons8-unit-testing-64.png'


function Skills() {


    const dataSkills = [
        {
            id: 1,
            img: "https://cdn.worldvectorlogo.com/logos/c--4.svg",
            title: "c#"
        },
        {
            id: 2,
            img: "https://cdn.worldvectorlogo.com/logos/java.svg",
            title: "java"
        },
        {
            id: 3,
            img: "https://cdn.worldvectorlogo.com/logos/selenium-1.svg",
            title: "selenium"
        },
        {
            id: 4,
            img: "https://cdn.worldvectorlogo.com/logos/trello-logo.svg",
            title: "trello"
        },
        {
            id: 5,
            img: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
            title: "html"
        },
        {
            id: 6,
            img: "https://cdn.worldvectorlogo.com/logos/bootstrap-5.svg",
            title: "bootstrap"
        },
        {
            id: 7,
            img: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
            title: "css"
        },
        {
            id: 8,
            img: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
            title: "javascript"
        },
        {
            id: 9,
            img: "https://cdn.worldvectorlogo.com/logos/mysql-2.svg",
            title: "mysql"
        },
        {
            id: 10,
            img: "https://cdn.worldvectorlogo.com/logos/visual-studio-2013.svg",
            title: "TFS"
        },
        {
            id: 11,
            img: "https://cdn.worldvectorlogo.com/logos/jira-1.svg",
            title: "JIRA"
        },
        {
            id: 12,
            img: "https://cdn.worldvectorlogo.com/logos/postman.svg",
            title: "postman"
        },
        {
            id: 13,
            img: Agile,
            title: "Agile"
        },
        {
            id: 14,
            img: APITesting,
            title: "API Testing"
        },
        {
            id: 15,
            img: Testing,
            title: "Testing"
        },
    ]

    return (
        <>
            <h2 className='my-5 text-center'>My Skills</h2>
            <div className='container mt-5'>
                <div className="cards">
                    <div className='row '>
                        {dataSkills.map(item => {
                            return (
                            <div className='col-lg-2 col-md-3 col-sm-4 my-3' key={item.id}>
                                <div className="cardskills p-2 d-flex flex-column justify-content-center align-items-center p-2">
                                    <div className='p-img my-2'>
                                        <img className='w-100 h-100' src={item.img} alt="" />
                                    </div>
                                    <span className='d-block text-center fw-bold mt-2'>{item.title}</span>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
