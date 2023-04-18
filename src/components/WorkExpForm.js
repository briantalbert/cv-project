import React from "react"
import { v4 as uuidv4 } from 'uuid';

export default function WorkExpForm(props) {
    const workExperience = props.workExperience;
    const setWorkExperience = props.setWorkExperience;
    const jobList = props.jobList;
    const setJobList = props.setJobList;

    function handleChange(e) {
        const {name, value} = e.target;
        setWorkExperience(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    };

    function addJobSlot(e) {
        e.preventDefault();
        const newList = jobList.concat({
            id: uuidv4(), 
            company: workExperience.company, 
            beginDate: workExperience.beginDate, 
            endDate: workExperience.endDate, 
            duties: workExperience.duties 
        });

        setJobList(newList);

        setWorkExperience({})
    }
    
    return (
        <div className="work-exp-form" key={props.id}>

            <input
                type="text"
                className="company"
                placeholder="Company Name"
                onChange={handleChange}
                name="company"
                defaultValue={workExperience.company}
            />

            <input
                type="text"
                className="begin-date"
                placeholder="Begin date (mm/yy)"
                onChange={handleChange}
                name="beginDate"
                defaultValue={workExperience.beginDate}
            />

            <input
                type="text"
                className="end-date"
                placeholder="End Date (mm/yy)"
                onChange={handleChange}
                name="endDate"
                defaultValue={workExperience.endDate}
            />

            <textarea
                type="text"
                className="duties"
                placeholder="Job Duties"
                onChange={handleChange}
                name="duties"
                defaultValue={workExperience.duties}
            />

            <button
                onClick={addJobSlot}
                className="add-slot-button" 
            > Add Job </button>

        </div>
    )
}