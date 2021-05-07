const generatePassword = (data) => {
  let password = "";
  // let twoWords = data[0],
  //   number = data[1],
  //   symbol = data[2],
  //   website = data[3],
  //   firtLetter = data[4],
  //   currenDate = new Date();
  const currenDate = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  // verify that the user enters data
  if (!data.twoWords[1] || !data.number[1] || !data.symbol || !data.website) {
    alert("You must complete all the fields.");
    return null;
  }

  // first letter condition
  if (data.firtLetter == "true") data.website = data.website[0];

  // split the two words
  let twoWords = data.twoWords.split(" ", 2);

  password =
    data.website +
    data.symbol +
    twoWords[0] +
    data.number[0] +
    twoWords[1] +
    data.number[1] +
    "_" +
    months[currenDate.getMonth()] +
    currenDate.getFullYear();

  return password;
};
