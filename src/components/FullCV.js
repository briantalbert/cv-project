import React from "react"

export default function FullCV(props) {
    console.log(props)
    const personalData = props.personalData;
    const educationData = props.educationData;
    const workExperience = props.workExperience;
    
    const workElements = workExperience.map(job => {
        console.log(job)
        return (
        <div className="job-card">
            <h3>{`${job.company} - ${job.title}`}</h3><br />
            <h5>{`${job.from} - ${job.to}`}</h5><br />
            <p>{`${job.duties}`}</p>
        </div>)

    })
    workExperience.forEach(element => {
        console.log(element.title)
    });

    if (props.displayCV) 
        {return (
            <div className="full-cv">
                <div className="cv-personal">
                    <h2 className="cv-name">{`${personalData.firstName} ${personalData.lastName}`}</h2>
                    <span className="cv-email-phone">{`${personalData.phone} // ${personalData.email}`}</span>
                </div>
                <hr />
                <div className="cv-education">
                    <span className="cv-school">{`${educationData.school}`}</span><br />
                    <span className="cv-school-dates">{`${educationData.startYear + ' - '}${educationData.endYear}`}</span><br />
                    <span className="cv-school-major">{`Major: ${educationData.major}`}</span>
                </div>
                <div className="cv-work-history">
                    {workElements}
                </div>
            </div>
        )} else {
            return (<div className="full-cv"></div>)
        }
}