const moment = require("moment");
const date = moment().format("YYYY-MM-DD");
console.log("Date:", date);

setInterval(() => {
  const time = moment().format("HH:MM");

  console.log("Time:", time);
}, 5000);

// const inquirer = require('inquirer');

// inquirer
//   .prompt([{ type: "input", name: "raqam", message: "raqamni kiriting" }])
//   .then((answer) => {
//     console.log("men kiritgan raqam qiymati:", answer.raqam);
//   })
//   .catch((err) => console.log(err));

const validator = require("validator");
const test = validator.isEmail("shskh@kj.com");
const test2 = validator.isInt("98798");

console.log(test);
console.log(test2);

const { v4: uuidv4 } = require("uuid");
const random = uuidv4();
console.log(random);
