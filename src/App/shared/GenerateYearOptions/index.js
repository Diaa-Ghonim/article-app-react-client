import React from 'react';

export default () => {
  let currentYear = new Date().getFullYear();
  let i = 1910;
  let result = [];
  while (i < currentYear) {
    result.push(
      <option key={Math.random() * 1000} value={i}>
        {i}
      </option>
    );
    i++;
  }
  return result;
};
