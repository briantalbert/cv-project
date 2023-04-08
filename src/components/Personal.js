import React from "react"

export default function Personal() {

    const [personalData, setPersonalData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    console.log(personalData);

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
                value={personalData.firstName}
            />
            <input 
                type="email"
                className="email"
                placeholder="E-mail Address"
                onChange={handleChange}
                name="email"
                value={personalData.firstName}
            />
        </div>
    )
}


