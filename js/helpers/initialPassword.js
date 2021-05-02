const currenDate = new Date();
const months = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

document.getElementById("generated-password").innerHTML = 'Twitter#@Hello6world9_' + months[currenDate.getMonth()] +
currenDate.getFullYear();
