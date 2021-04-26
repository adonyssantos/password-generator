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

  return data;
};

const get = () => {
	let input = document.getElementsByTagName("input");
	for (i = 0; i < input.length; i++) {
		input[i].addEventListener("change", () => {
			resultados = getData();
			console.log(resultados);
		});
	}
};

const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  document.write('fsdfsf')
});
