//Assignment 5: Student Marks List
//Scenario : You receive marks from an exam system.

const marks = [78, 92, 35, 88, 40, 67];

//filter() → marks ≥ 40 (pass marks)
const passedStudents = marks.filter(mark => mark >= 40);

//map() → add 5 grace marks to each student
const graceMarks = marks.map(mark => mark + 5);

//reduce() → find highest mark
const highestMark = marks.reduce(
  (max, mark) => mark > max ? mark : max
);

//find() → first mark below 40
const firstFail = marks.find(mark => mark < 40);

//findIndex() → index of mark 92
const indexOf92 = marks.findIndex(mark => mark === 92);

// Output
console.log("Passed students marks:", passedStudents);
console.log("Marks after grace:", graceMarks);
console.log("Highest mark:", highestMark);
console.log("First failed mark:", firstFail);
console.log("Index of mark 92:", indexOf92);
