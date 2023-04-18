import React from "react";
import WorkExpForm from "./WorkExpForm";
import { v4 as uuidv4 } from 'uuid';

export default function WorkExperience(props) {
    const initialJobList = [];
    const [numSlots, setNumSlots] = React.useState(1);
    const [jobSlots, setJobSlots] = React.useState([
        <WorkExpForm
            id={uuidv4()}
            workExperience={props.workExperience}
            setWorkExperience={props.setWorkExperience}
        />
    ])

    const [jobList, setJobList] = React.useState(initialJobList)

    function addJobSlot(e) {
        e.preventDefault();

        setNumSlots(prevNum => prevNum + 1);
        setJobSlots(prevData => [
                ...prevData,
                <WorkExpForm
                    id={uuidv4()}
                    workExperience={props.workExperience}
                    setWorkExperience={props.setWorkExperience}
                    jobList={jobList}
                    setJobList={setJobList}
                />]
        )
    }

    return(
        <div className="work-experience">
            <h3 className="work-experience-title">Work Experience:</h3>
            {jobSlots}
            
        </div>
    )
}