import React from "react";
import FullCV from "./components/FullCV"
import "./style.css"
import InfoForm from "./components/InfoForm";

export default function App() {
  const [personalData, setPersonalData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const [educationData, setEducationData] = React.useState({
    school: '',
    startYear: '',
    endYear: '',
    major: ''
  });

  const [workExperience, setWorkExperience] = React.useState({
    company: '',
    beginDate: '',
    endDate: '',
    duties: ''
  });

  const [workExpList, addWorkExp] = React.useState([]);
  const [displayCV, setDisplay] = React.useState(false);

  function showCV() {
    setDisplay(prevDisplay => !prevDisplay)
  }

  return (
    <div className="app">
      <InfoForm
        personalData={personalData} 
        setPersonalData={setPersonalData}
        educationData={educationData} 
        setEducationData={setEducationData}
        workExperience={workExperience}
        setWorkExperience={setWorkExperience}
        workExp={workExpList}
        addWorkExp={addWorkExp}
        showCV={showCV}
      />
      
      <FullCV 
        personalData={personalData}
        educationData={educationData} 
        workExperience={workExpList}
        displayCV={displayCV}
      /> 
    </div>
  )
}
