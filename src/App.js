import React from "react";
import Personal from "./components/Personal"
import Education from "./components/Education"
import WorkExperience from "./components/WorkExperience"
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

  return (
    <div className="app">
      <InfoForm
        personalData={personalData} 
        setPersonalData={setPersonalData}
        educationData={educationData} 
        setEducationData={setEducationData}
        workExperience={workExperience}
        setWorkExperience={setWorkExperience}
      />
      <FullCV 
        personalData={personalData}
        educationData={educationData} 
        workExperience={workExperience}
      /> 
    </div>
  )
}
