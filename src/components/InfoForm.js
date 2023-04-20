import React from "react"
import Personal from "./Personal"
import Education from "./Education"
import WorkExp from "./WorkExp"

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

            <WorkExp 
                workExperience={props.workExperience}
                setWorkExperience={props.setWorkExperience}
                workExp={props.workExp}
                addWorkExp={props.addWorkExp}
                showCV={props.showCV}
            />
            
        </div>
    )
}