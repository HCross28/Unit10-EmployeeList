const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const jest = require("jest");


const EmployeeFile = require("./lib/employee");
const ManagerFile = require("./lib/manager");
const EngineerFile = require("./lib/engineer");
const InternFile = require("./lib/intern");

const employees = {
    manager: [],
    engineer: [],
    intern: [],
};

console.log("test");

//Here is where I'm trying to begin the questioning process
const opening = [
    {
        type: "list",
        name: "opening",
        message: "What would you like to do?", 
        choices: [
            "Add an employee",
            "Create employee roster"
        ]
    }
];


//Here are the employee info questions
const employeeQuestions = [
    {
        type: "input",
        message: "What is the employees name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the employees ID number?",
        name: "ID"
    },
    {
        type: "input",
        message: "What is the employee's email?",
        name: "email"
    },
    {
        type: "list",
        message: "What type of employee is being entered?",
        name: "employee class",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
        ]
    }
];


//This (I'm sure poorly written function) is my if/else section which is supposed to take user input from the "employee class" question and send the applicable next question. 
function nextQuestion() {
    if("Manager"){
        managerInfo
    
    ifelse("Engineer")
        engineerInfo
    
    ifelse("Intern")
        internInfo
    
    ifelse(undefined)
        throw(err)
    }
}

// This section has the class specific questions
const managerInfo = [
    {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
    }
];

const engineerInfo = [
    {
      type: "input",
      message: "What is the engineer's Git-Hub username?",
      name: "gitHub"
    }
  ];
  
  const internInfo = [
    {
      type: "input",
      message: "What school does the intern attend?",
      name: "school"
    }
  ];



//this is the portion where I'm trying to get the questions to pop up in node 
function init(){
    inquirer
        .prompt(opening)
};

