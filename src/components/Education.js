import React from "react";

export default function Education(props) {
    
    const educationData = props.educationData;
    const setEducationData = props.setEducationData;

    function handleChange(e) {
        const {name, value} = e.target;
        setEducationData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        });
    };

    return(
        <div className="education-info">
            <h3 className="education-title">Education Information:</h3>
            <input 
                type="text"
                className="school-name"
                placeholder="Name of School"
                onChange={handleChange}
                name="school"
                value={educationData.school}
            />
            <input 
                type="text"
                className="start-year"
                placeholder="Year Started"
                onChange={handleChange}
                name="startYear"
                value={educationData.startYear}
            />
            <input 
                type="text"
                className="end-year"
                placeholder="Year Graduated"
                onChange={handleChange}
                name="endYear"
                value={educationData.endYear}
            />
            <input 
                type="text"
                className="major"
                placeholder="Degree/Major"
                onChange={handleChange}
                name="major"
                value={educationData.major}
            />
        </div>
    )
}