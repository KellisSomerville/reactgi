import React, { Component } from "react";

export default class basicinfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        name: "Kellis Somerville",
        age: 22,
        jobTitle: "Coding Apprentice",
        dob: "August 8th, 2000",
      },
    };
  }
  render() {
    return (
      <div>
        <h1>Basic Info About Me</h1>
        <p>Name: {this.state.person.name}</p>
        <p>Age: {this.state.person.age}</p>
        <p>Job Title: {this.state.person.jobTitle}</p>
        <p>Date of Birth: {this.state.person.dob}</p>
      </div>
    );
  }
}
