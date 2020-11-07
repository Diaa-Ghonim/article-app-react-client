import React from 'react';

export default () => {
  var months = new Array(12);
  months[0] = "Jan";
  months[1] = "Feb";
  months[2] = "Mar";
  months[3] = "Apr";
  months[4] = "May";
  months[5] = "Jun";
  months[6] = "Jul";
  months[7] = "Aug";
  months[8] = "Sep";
  months[9] = "Oct";
  months[10] = "Nov";
  months[11] = "Dec";
  let i = 0;
  let result = []
  while (i < 12) {
    result.push(<option key={Math.random() * 1000} value={months[i]}>{months[i]}</option>)
    i++
  }
  return result;
}