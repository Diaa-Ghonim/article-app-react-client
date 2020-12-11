

export const Cookie = Object.freeze({

  get(name) {
    let val;
    const cookies = document.cookie.split(';');
    cookies.forEach((ele) => {
      let cook = ele;
      if (ele.charAt(0) === ' ') {
        cook = cook.slice(1);
      }
      if (cook.indexOf(name) > -1) {
        val = cook.slice(name.length + 1);
      }
    });
    return val;
  },

  set(name, value, options) {
    const data = [`${name}=${value}`];

    if (options) {
      Object.keys(options).forEach((key) => {
        if (key === 'expires' && typeof options[key] === 'number') {
          data.push(`${key}=${new Date(options.expires * 1000 + +new Date())}`);
        } else if (key === 'secure') {
          data.push(`${key};`);
        } else {
          data.push(`${key}=${options[key]}`);
        }
      });
    }

    document.cookie = data.join('; ');
  },

  clear(name, options) {
    let optionsObj;
    if (!options) {
      optionsObj = {};
    }
    optionsObj.expires = -14785;
    if (!arguments.length) {
      document.cookie.split(';').forEach((ele) => {
        let cook = ele;
        if (cook.charAt(0) === ' ') {
          cook = cook.slice(1);
        }
        const arr = cook.split('=');
        optionsObj.expires = -14785;
        this.set(arr[0], ' ', optionsObj);
      });
      return;
    }

    this.set(name, '', options);
  },
});


/**
 * // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjdlMzJhMDMxYjdjMDJmYTBmNDNhMzciLCJfbmFtZSI6InRvYWEiLCJfdXNlcm5hbWUiOiJ0b2FhIiwiX2VtYWlsIjoic29yYUBnbWFpbC5jb20iLCJfcGFzc3dvcmQiOiIkMmIkMTAkV2hjUVQ2SS9CdjdXSy42SVhwbzBpZXNRbS8vandqdS85NW1RUzNBbDF1NHU0bWhSTEhjbVMiLCJfcHJvZkltYWdlIjoiZGVmYXVsdC1pbWFnZS5wbmciLCJfcmF0ZSI6MTIsImlhdCI6MTYwMjEwNjAxNiwiZXhwIjoxNjA1NzA2MDE2fQ.XBAPl8_LYbcE1KTs7AFVB1OdYyUOKggd_ZQLxFHnLHY';
 */