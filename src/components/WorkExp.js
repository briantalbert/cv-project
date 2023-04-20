import React from "react"
import WorkExpForm from "./WorkExpForm"

export default function WorkExp(props) {
    
    //let [workExp, addWorkExp] = React.useState([]);

    const workExp = props.workExp;
    const addWorkExp = props.addWorkExp;

    function saveWork(workInfo) {
        console.log(workInfo);
        const newWorkExp = [...workExp, workInfo];
        console.log(newWorkExp);
        addWorkExp(newWorkExp);
        
    }
    console.log(workExp);
    return (
        <div className="work-exp">
            <WorkExpForm saveWork={saveWork}/>
            <button className="show-cv" onClick={props.showCV}>Create CV</button>
        </div>
    )
}