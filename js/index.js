// Get data from index.js
const getData = () => {
  let data = [
    (twoWords = document.getElementById("two-words").value),
    (number = document.getElementById("number").value),
    (symbol = document.getElementById("symbol").value),
    (website = document.getElementById("website").value),
    (firtLetter = document.getElementById("first-letter__website").value),
  ];

  let input = document.getElementsByTagName("input");
  let result = [];
  for (i = 0; i < input.length; i++) {
    result.push(data[i]);
  }

  return result;
};

const generatePassword = (data) => {
  let twoWords = data[0],
    number = data[1],
    symbol = data[2],
    website = data[3],
    firtLetter = data[4],
    currenDate = new Date();
  let password = "";

  //Generate password code...

  console.log(twoWords, number, symbol, website, firtLetter, currenDate);
};

const postData = () => {
  document.getElementById("generated-password").innerHTML = generatePassword(
    getData()
  );
};

const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  postData();
});
