// Get data from index.js
const getData = () => {
	let data = {
		twoWords = document.getElementById('two-words').value,
		number = document.getElementById('number').value,
		symbol = document.getElementById('symbol').value,
		website = document.getElementById('website').value,
		firtLetter = document.getElementById('first-letter__website').value,
		lastUpdate = new Date(),
	}
	
	return data;
}

export default getData;
