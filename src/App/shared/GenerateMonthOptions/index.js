import React from 'react';
export const months = new Array(12);
months[0] = 'Jan';
months[1] = 'Feb';
months[2] = 'Mar';
months[3] = 'Apr';
months[4] = 'May';
months[5] = 'Jun';
months[6] = 'Jul';
months[7] = 'Aug';
months[8] = 'Sep';
months[9] = 'Oct';
months[10] = 'Nov';
months[11] = 'Dec';
export default () => {
  let result = [];
  let i = 0;

  while (i < 12) {
    result.push(
      <option key={Math.random() * 1000} value={months[i]}>
        {months[i]}
      </option>
    );
    i++;
  }
  // console.log(result);
  return result;
};
