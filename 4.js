//Assignment 2: Exam Result Summary
//Scenario : Marks are stored subject-wise for a student.

const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

//Add a new subject
marks.computer= 90
console.log(marks)

//Total marks
let total = 0;
for (let subject in marks) {
  total += marks[subject];
}
console.log("Total Marks:", total);

//Average marks
let count = Object.keys(marks).length;
let average = total / count;
console.log("Average Marks:", average);

//Highest marks
let highestSubject = "";
let highestMarks = 0;
for (let subject in marks) {
  if (marks[subject] > highestMarks) {
    highestMarks = marks[subject];
    highestSubject = subject;
  }
}
console.log("Highest Scoring Subject:", highestSubject, "-", highestMarks);
