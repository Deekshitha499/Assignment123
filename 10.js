//Assignment 4: Online Course Name Processor
//Scenario : You are preparing a course list for display on a WebTransportBidirectionalStream.

const courses = ["javascript", "react", "node", "mongodb", "express"];

//filter() → courses with name length > 5
const longCourses = courses.filter(course => course.length > 5);

//map() → convert course names to uppercase
const upperCaseCourses = courses.map(course => course.toUpperCase());

//reduce() → generate a single string
const courseString = upperCaseCourses.reduce(
  (result, course) => result + " | " + course
);

//find() → find the course "react"
const foundCourse = courses.find(course => course === "react");

//findIndex() → index of "node"
const indexOfNode = courses.findIndex(course => course === "node");

// Output
console.log("Courses with length > 5:", longCourses);
console.log("Uppercase courses:", upperCaseCourses);
console.log("Course string:", courseString);
console.log("Found course:", foundCourse);
console.log("Index of node:", indexOfNode);
