

import React, { useState } from 'react'
import Style from './style.module.scss';
import SvgValidateWarn from '../SvgValidateWarn';

export default () => {




  const [state, setState] = useState({
    fullname: '',
    email: '',
    password: '',
    dateOfBirth: {
      day: '',
      month: '',
      year: ''
    },
    gender: ''
  });

  const [errors, setErrors] = useState({
    fullname: false,
    email: false,
    password: false,
    dateOfBirth: {
      day: false,
      month: false,
      year: false
    },
    gender: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => {
      return {
        ...state,
        [name]: value
      }
    })
  }
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors(prevState => {
        return {
          ...prevState,
          gender: true
        }
      })
    }

    setErrors(prevState => {
      return {
        ...prevState,
        gender: false
      }
    });

    setState(prevState => {
      return {
        ...state,
        [name]: value
      }
    })
  }

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    if (!value) {
      setErrors(prevState => {
        return {
          ...prevState,
          dateOfBirth: {
            ...prevState.dateOfBirth,
            [name]: true
          }
        }
      })
    } else {
      setErrors(prevState => {
        return {
          ...prevState,

          dateOfBirth: {
            ...prevState.dateOfBirth,
            [name]: false

          },
        }
      })
    }
    setState(prevState => {
      return {
        ...state,
        dateOfBirth: {
          ...prevState.dateOfBirth,
          [name]: value
        }
      }
    })
  }
  console.log(state);
  console.log(errors);

  const handleFocus = (e) => {
    const { name, value } = e.target;

    setErrors(prevState => {
      return {
        ...prevState,
        [name]: false
      }
    })

  }

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      // e.target.style.border = '1px solid red'
      setErrors(prevState => {
        return {
          ...prevState,
          [name]: true
        }
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    const {
      fullname,
      email,
      password,
      dateOfBirth,
      gender
    } = state;

    if (!fullname || !email || !password || !dateOfBirth.day || !dateOfBirth.month || !dateOfBirth.year || !gender) {
      setErrors(prevState => {
        return {
          ...prevState,
          fullname: fullname ? false : true,
          email: email ? false : true,
          password: password ? false : true,
          dateOfBirth: {
            day: dateOfBirth.day ? false : true,
            month: dateOfBirth.month ? false : true,
            year: dateOfBirth.year ? false : true,
          },
          gender: gender ? false : true
        }
      })
      console.log('not validated');
      return;
    }
  }

  const generateYearsOptions = () => {
    let currentYear = new Date().getFullYear();
    let i = 1910;
    let result = []
    while (i < currentYear) {
      result.push(<option key={Math.random() * 1000} value={i}>{i}</option>)
      i++
    }
    return result;
  }

  const generateMonthOptions = () => {
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


  const generateDaysOptions = () => {
    let i = 1;
    let result = []
    while (i <= 30) {
      result.push(<option key={Math.random() * 1000} value={i}>{i}</option>)
      i++
    }
    return result;
  }

  return (
    <div className={Style.container}>
      <div className={Style.formContainer}>

        <form onSubmit={handleSubmit}>

          <div>
            <i>Fullname :</i>
            <input
              type='text'
              name='fullname'
              placeholder='Fullname'
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={fullname}
              onChange={() => setFullname(fullname)}
              className={fullnameError ? Style.warnBorder : ''} />
            {errors['fullname'] ? <SvgValidateWarn /> : ''}

          </div>

          <div>
            <i>Email :</i>
            <input type='email' name='email' placeholder='Email address' onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} className={errors['email'] ? Style.warnBorder : ''} />
            {errors['email'] ? <SvgValidateWarn /> : ''}
          </div>

          <div>
            <i>Password :</i>
            <input type='password' name='password' placeholder='Password' onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} className={errors['password'] ? Style.warnBorder : ''} />
            {errors['password'] ? <SvgValidateWarn /> : ''}
          </div>

          <div className={Style.birthContainer}>
            <div>
              <i>Date of birth</i>
            </div>
            {errors.dateOfBirth['day'] || errors.dateOfBirth['month'] || errors.dateOfBirth['year'] ? <svg className={Style.svgErrorSelect} viewBox="0 0 24 24" ><path d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="19" r="2" /><path d="M10 3h4v12h-4z" /></svg> : ''}

            <div className={Style.selectContainer}>
              <select value={state.dateOfBirth.day} name='day' onChange={handleSelectChange} className={errors['dateOfBirth']['day'] ? Style.warnBorder : ''} >
                <option value={0}>Day</option>

                {generateDaysOptions()}
              </select>

              <select value={state.dateOfBirth.month} name='month' onChange={handleSelectChange} className={errors.dateOfBirth['month'] ? Style.warnBorder : ''} >
                <option value={0}>Month</option>

                {generateMonthOptions()}
              </select>

              <select value={state.dateOfBirth.year} name='year' onChange={handleSelectChange} className={errors.dateOfBirth['year'] ? Style.warnBorder : ''} >
                <option value={0}>Year</option>
                {generateYearsOptions()}
              </select>
            </div>
          </div>

          <div>
            <div>
              <i>Gender</i>
            </div>
            {errors['gender'] ? <svg className={Style.svgErrorSelect} viewBox="0 0 24 24" ><path d="M0 0h24v24H0z" fill="none" /><circle cx="12" cy="19" r="2" /><path d="M10 3h4v12h-4z" /></svg> : ''}
            <div className={Style.radioContainer}>

              <div className={errors['gender'] ? Style.warnBorder : ''}>
                <label htmlFor='male'>Male</label>
                <input type="radio" id="male" name="gender" value="male" onChange={handleRadioChange} />
              </div>

              <div className={errors['gender'] ? Style.warnBorder : ''}>
                <label htmlFor='female'>Female</label>
                <input type="radio" id="female" name="gender" value="female" onChange={handleRadioChange} />
              </div>

              <div className={errors['gender'] ? Style.warnBorder : ''}>
                <label htmlFor="other">Other</label>
                <input onFocus={() => console.log('focus')} onBlur={() => console.log('blur')} type="radio" id="other" name="gender" value="other" onChange={handleRadioChange} />
              </div>
            </div>
          </div>

          <div>
            <input type='submit' value='Sign Up' />
          </div>

        </form>

      </div>

    </div>
  )
}
