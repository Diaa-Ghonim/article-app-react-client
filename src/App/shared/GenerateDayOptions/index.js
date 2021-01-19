import React from 'react';
export default () => {
  let i = 1;
  let result = [];
  while (i <= 30) {
    result.push(
      <option key={Math.random() * 1000} value={i}>
        {i}
      </option>
    );
    i++;
  }
  return result;
};
