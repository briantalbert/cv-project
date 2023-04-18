import React from "react"

export default function Personal(props) {
    
    const setPersonalData = props.setPersonalData;
    const personalData = props.personalData;

    function handleChange(e) {
        const {name, value} = e.target;
        setPersonalData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        });
    };

    return (
        <div className="personal-info">
            <h3 className="personal-title">Personal Information:</h3>
            <input 
                type="text"
                className="first-name"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={personalData.firstName}
            />
            <input 
                type="text"
                className="last-name"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={personalData.lastName}
            />
            <input 
                type="tel"
                className="phone"
                placeholder="Area Code + Phone Number"
                onChange={handleChange}
                name="phone"
                value={personalData.phone}
            />
            <input 
                type="email"
                className="email"
                placeholder="E-mail Address"
                onChange={handleChange}
                name="email"
                value={personalData.email}
            />
        </div>
    )
}


