import React from 'react'
import Card from '../../utils/Card'
import './education.css'

const Education = () => {

    const educationData = [
        {
            educationLevel: "BSIT(Honours)",
            instituteName: "Sindh Agriculture University Tandojam",
            year: "2020 - 2024"
        },
        {
            educationLevel: "Intermediate",
            instituteName: "Govt:Degree College Lrk",
            year: "2018 - 2019"
        },
        {
            educationLevel: "Matriculation",
            instituteName: "Saint Joesph High School Lrk",
            year: "2008 - 2017"
        },
    ]

    return (
        <div className='education'>
            <h1>Education</h1>

            <div className='projectCards'>
                {educationData.map((i, index) => {
                    return (
                        <Card
                            projectDesc={i.instituteName}
                            yearVisible={true}
                            projectTitle={i.educationLevel}
                            year={i.year}
                            isButtonVisible={false}

                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Education
