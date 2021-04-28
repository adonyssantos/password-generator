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

// export default getData;
