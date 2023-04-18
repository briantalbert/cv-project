import React from "react"
import Personal from "./Personal"
import Education from "./Education"
import WorkExperience from "./WorkExperience"

export default function InfoForm(props) {
    return (
        <div className="info-form">
            <Personal 
                personalData={props.personalData} 
                setPersonalData={props.setPersonalData}
            />

            <Education 
                educationData={props.educationData} 
                setEducationData={props.setEducationData}
            />

            <WorkExperience 
                workExperience={props.workExperience}
                setWorkExperience={props.setWorkExperience}
            />
        </div>
    )
}