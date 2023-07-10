import React, { Component } from "react";

export default class contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactList: [
        {
          name: "Kellis Somerville",
          age: 22,
          jobTitle: "Coding Apprentice",
          dob: "August 8th, 2000",
        },
        {
          name: "John Smith",
          age: 20,
          jobTitle: "Farmer",
          dob: "March 20th, 1932",
        },
        {
          name: "Killua Zoldyck",
          age: 14,
          jobTitle: "Assassin",
          dob: "July 7th, 2009",
        },
      ],
    };
  }
  render() {
    const { contactList } = this.state;

    return (
      <div>
        <h1>Contact List With Basic Info</h1>
        {contactList.map((person, index) => (
          <div key={index}>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <p>Job Title: {person.jobTitle}</p>
            <p>Date of Birth: {person.dob}</p>
          </div>
        ))}
      </div>
    );
  }
}
