import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Education: {
        school: '',
        from: '',
        to: '',
        degree: ''
      },
      Personal: {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      },
      WorkHistory: {
        jobList: []
      }

    }
  }

}

export default App;
