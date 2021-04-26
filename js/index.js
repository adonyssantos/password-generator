// Get data from index.js
const getData = () => {
  let data = [
    (twoWords = document.getElementById("two-words").value),
    (number = document.getElementById("number").value),
    (symbol = document.getElementById("symbol").value),
    (website = document.getElementById("website").value),
    (firtLetter = document.getElementById("first-letter__website").value),
    (lastUpdate = new Date()),
  ];

  let input = document.getElementsByTagName("input");
  console.log("push", input);
  for (i = 0; i < input.length; i++) {
    return {
      index: i,
      data: data[i],
    };
  }
};

const generatePassword = (data) => {
	console.log(data)
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
