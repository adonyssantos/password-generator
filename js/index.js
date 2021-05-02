const submit = document.getElementById("submit");
submit.addEventListener("click", () => postData(generatePassword(getData())));
