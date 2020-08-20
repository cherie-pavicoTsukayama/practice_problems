function lateRide(minutes) {
  let hours = 0;
  let min = 0;
  let hoursToString = '';
  hours = minutes / 60;
  if (hours % 1 !== 0) {
    hours = hours.toFixed(2); // 808 / 60 = 13.46
  } else {
    return hours;
  }

  hoursToString = hours.toString(); //'13.46'
  if (hoursToString.length === 1) {
    return hours
  } else {
    min = parseFloat(hoursToString.slice(-3));
    min = Math.round(min * 60);
    min = min.toString();
    if (min.length === 2) {
      min = parseInt(min[0]) + parseInt(min[1]);
    } else {
      return parseInt(min);
    }
    if (hoursToString.length === 4) {
      return parseInt(hoursToString[0]) + min;
    } else {
      hours = hoursToString.slice(0, 2);
      hours = parseInt(hours[0]) + parseInt(hours[1]);
      return hours + min;
    }
  }
}

//60min in an hour
//60 secons in a min
//mins/60 = hours
//fraction of a min * 60 = seconds
//Math.round = rounds a decimal up
//storage for hours
//storage for mins

//--create a storage for hours
//--creeate a storage for mins
//--store n / 60 in hours
//--store hours toString in hoursToString
//i--f hoursToString length is === 1
    //--return hours
    //--otherwise
    //--get the last 3 characters of the string and conver them into numbers
    //--then multiply it by 60 seconds and round the number up
    //--store the number in mins
    //--convert mins to string
    //--turn each indicy to a number and add it together
    //--then store in mins
    //--if hoursToString length is === 4
        //--return - then get the first indicy of the hoursToString conver it to a number and add it to mins
    //--otherwise
    //--get the first two chars of the string and convert them to numbers
    //--then store them in hours
    //--convert hours to string
    //--turn each indicy to a number and add it together
    //--then store in hours
    //return add min and hours

