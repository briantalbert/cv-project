import React from "react"

export default function WorkExpForm(props) {
    const saveWork = props.saveWork;
    
    const initialState = {
        title: '',
        company: '',
        from: '',
        to: '',
        duties: '',
      };
    
    const [workInfo, setWorkInfo] = React.useState(initialState);
    
    function handleChange(e) {
        const {name, value} = e.target;
        setWorkInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value
        }));
    };

    function resetState() {
        setWorkInfo(initialState);
    }

    function submitWork(e) {
        e.preventDefault();
        props.saveWork(workInfo);
        resetState();
      };

    return (
        <div>
            <h3 className="work-exp-title">Work Experience:</h3>
            <input 
                type="text"
                className="title"
                placeholder="Job Title"
                onChange={handleChange}
                name="title"
                value={workInfo.title}
            />
            <input 
                type="text"
                className="company"
                placeholder="Company Name"
                onChange={handleChange}
                name="company"
                value={workInfo.company}
            />
            <input 
                type="text"
                className="start-date"
                placeholder="Start Date (mm/yy)"
                onChange={handleChange}
                name="from"
                value={workInfo.from}
            />
            <input 
                type="text"
                className="end-date"
                placeholder="End Date (mm/yy)"
                onChange={handleChange}
                name="to"
                value={workInfo.to}
            />
            <textarea 
                type="text"
                className="duties"
                placeholder="Job Duties"
                onChange={handleChange}
                name="duties"
                value={workInfo.duties}
            />
            <button 
                className="add-job-button"
                onClick={submitWork}
            > Save Job </button>
        </div>
    )
}