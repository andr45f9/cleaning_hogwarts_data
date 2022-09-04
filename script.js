"use strict";

window.addEventListener("DOMContentLoaded", start);

//url with JSON data
const url = "https://petlatkea.dk/2021/hogwarts/students.json";

//array where the new object should get stored in
const allStudents = [];

//...
let list;

//Object with new "cleaned" data.
const Student = {
  firstName: "",
  lastName: "",
  middleName: "undefined",
  nickName: "",
  image: "",
  house: "",
};

function start() {
  console.log("ready");

  loadJSON();
}

async function loadJSON() {
  const response = await fetch(url);
  const json = await response.json();

  list = json;

  // when loaded, prepare objects
  prepareStudents(list);
}

function prepareStudents(list) {
  list.forEach((studentObject) => {
    const student = Object.create(Student); //Create object with cleaned data - store it in the allStudents array.
    allStudents.push(student); //storeing our new object in the allStudents array.

    //Getting all the right data placed into the new object properties.
    //first name

    //last name
    //middle name
    //nick name
    //image
    //house

    console.table(allStudents);
  });

  /*   displayList(); */
}
