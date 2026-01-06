//Assignment 1: User Profile Manager
//Scenario : You are managing a logged-in user’s profile in a web application.


const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

console.log(user.name)
console.log(user.email)

user.lastLogin= "2026-01-01"
console.log(user.lastLogin)

user.role="admin"
console.log(user.role)

console.log(user)

delete user.isActive
console.log(user)

console.log(Object.keys(user))
