const generatePassword = (data) => {
  let twoWords = data[0],
    number = data[1],
    symbol = data[2],
    website = data[3],
    firtLetter = data[4],
    currenDate = new Date();
  let password = "";

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

  twoWords = twoWords.split(" ", 2);

  password =
    website +
    symbol +
    twoWords[0] +
    number[0] +
    twoWords[1] +
    number[1] +
    "_" +
    months[currenDate.getMonth()] +
    currenDate.getFullYear();

  return password;
};

// export default generatePassword;
