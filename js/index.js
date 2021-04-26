import generatePassword from "./generatePassword";
import getData from "./getData";
import postData from "./postData";

const submit = document.getElementById("submit");
submit.addEventListener("click", () => postData(generatePassword(getData())));

// const getData = () => {
//   let data = [
//     (twoWords = document.getElementById("two-words").value),
//     (number = document.getElementById("number").value),
//     (symbol = document.getElementById("symbol").value),
//     (website = document.getElementById("website").value),
//     (firtLetter = document.getElementById("first-letter__website").value),
//   ];

//   let input = document.getElementsByTagName("input");
//   let result = [];
//   for (i = 0; i < input.length; i++) {
//     result.push(data[i]);
//   }

//   return result;
// };

// const generatePassword = (data) => {
//   let twoWords = data[0],
//     number = data[1],
//     symbol = data[2],
//     website = data[3],
//     firtLetter = data[4],
//     currenDate = new Date();
//   let password = "";

//   //Generate password code...

//   return password;
// };

// const postData = () => {
//   document.getElementById("generated-password").innerHTML = generatePassword(
//     getData()
//   );
// };
