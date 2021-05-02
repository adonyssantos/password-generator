const generatePassword = (data) => {
  let password = "";
  let twoWords = data[0],
    number = data[1],
    symbol = data[2],
    website = data[3],
    firtLetter = data[4],
    currenDate = new Date();
  const months = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

  // first letter condition
  if (firtLetter == "true") website = website[0];

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
