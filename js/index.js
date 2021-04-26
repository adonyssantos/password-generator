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
  console.log(data);
  return data;
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
