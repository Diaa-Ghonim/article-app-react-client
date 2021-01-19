import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Style from './style.module.scss';
import SvgValidateWarn from '../SvgValidateWarn';
import GenerateYearOptions from '../../../../shared/GenerateYearOptions';
import GenerateMonthOptions from '../../../../shared/GenerateMonthOptions';
import GenerateDayOptions from '../../../../shared/GenerateDayOptions';
import {
  validateEmail,
  validateFullname,
  validatePassword,
} from '../../validation';
import ShowSignError from '../ShowSignError';
import { clearUserRegistrationError, signUp } from '../../actionsCreator';

export default function SignUp() {
  const dispatch = useDispatch();

  const { error } = useSelector(({ signError }) => signError);

  useEffect(() => {
    let timeOut;
    if (error) {
      timeOut = setTimeout(() => {
        dispatch(clearUserRegistrationError());
      }, 3000);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [dispatch, error]);

  const [fullname, setFullname] = useState('');
  const [fullnameError, setFullnameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [birthDay, setBirthDay] = useState('');
  const [birthDayError, setBirthDayError] = useState('');

  const [birthMonth, setBirthMonth] = useState('');
  const [birthMonthError, setBirthMonthError] = useState('');

  const [birthYear, setBirthYear] = useState('');
  const [birthYearError, setBirthYearError] = useState('');

  const [gender, setGender] = useState('');
  const [genderError, setGenderError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');

    let check = false;

    if (!validateFullname(fullname)) {
      setFullnameError('fullname must be at least 3 letters ');
      check = true;
    }
    if (!validateEmail(email)) {
      setEmailError('email invalid');
      check = true;
    }
    if (!validatePassword(password)) {
      setPasswordError('password must be at least 6 letters');
      check = true;
    }
    if (!birthDay) {
      setBirthDayError('select birthDay');
      check = true;
    }
    if (!birthMonth) {
      setBirthMonthError('select birthMonth');
      check = true;
    }
    if (!birthYear) {
      setBirthYearError('select birthYear');
      check = true;
    }
    if (!gender) {
      setGenderError('select gender');
      check = true;
    }

    if (check) {
      console.log('not validated');
      return;
    }

    const userInfo = {
      fullname,
      email,
      password,
      dateOfBirth: {
        birthDay,
        birthMonth,
        birthYear,
      },
      gender,
    };

    dispatch(signUp(userInfo));
    console.log(userInfo);
  };

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
              onFocus={() => setFullnameError('')}
              onBlur={(e) =>
                !validateFullname(fullname)
                  ? setFullnameError('fill input')
                  : ''
              }
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className={fullnameError ? Style.warnBorder : ''}
            />
            {fullnameError ? <SvgValidateWarn className={Style.svgWarn} /> : ''}
          </div>

          <div>
            <i>Email :</i>
            <input
              type='email'
              name='email'
              placeholder='Email address'
              onFocus={() => setEmailError('')}
              onBlur={(e) =>
                !validateEmail(email) ? setEmailError('fill input') : ''
              }
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={emailError ? Style.warnBorder : ''}
            />
            {emailError ? <SvgValidateWarn className={Style.svgWarn} /> : ''}
          </div>

          <div>
            <i>Password :</i>
            <input
              type='password'
              name='password'
              placeholder='Password'
              onFocus={() => setPasswordError('')}
              onBlur={(e) =>
                !validatePassword(password)
                  ? setPasswordError('fill input')
                  : ''
              }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={passwordError ? Style.warnBorder : ''}
            />
            {passwordError ? <SvgValidateWarn className={Style.svgWarn} /> : ''}
          </div>

          <div className={Style.birthContainer}>
            <div>
              <i>Date of birth</i>
            </div>
            {birthDayError || birthMonthError || birthYearError ? (
              <SvgValidateWarn className={Style.svgWarnSelect} />
            ) : (
              ''
            )}

            <div className={Style.selectContainer}>
              <select
                value={birthDay}
                name='day'
                onBlur={(e) =>
                  !birthDay ? setBirthDayError('fill input') : ''
                }
                onFocus={() => setBirthDayError('')}
                onChange={(e) => setBirthDay(e.target.value)}
                className={birthDayError ? Style.warnBorder : ''}
              >
                <option value={0}>Day</option>

                <GenerateDayOptions />
              </select>

              <select
                value={birthMonth}
                name='month'
                onBlur={(e) =>
                  !birthMonth ? setBirthMonthError('fill input') : ''
                }
                onFocus={() => setBirthMonthError('')}
                onChange={(e) => setBirthMonth(e.target.value)}
                className={birthMonthError ? Style.warnBorder : ''}
              >
                <option value={0}>Month</option>

                <GenerateMonthOptions />
              </select>

              <select
                value={birthYear}
                name='year'
                onBlur={(e) =>
                  !birthYear ? setBirthYearError('fill input') : ''
                }
                onFocus={() => setBirthYearError('')}
                onChange={(e) => setBirthYear(e.target.value)}
                className={birthYearError ? Style.warnBorder : ''}
              >
                <option value={0}>Year</option>
                <GenerateYearOptions />
              </select>
            </div>
          </div>

          <div>
            <div>
              <i>Gender</i>
            </div>
            {genderError ? (
              <SvgValidateWarn className={Style.svgWarnSelect} />
            ) : (
              ''
            )}
            <div className={Style.radioContainer}>
              <div className={genderError ? Style.warnBorder : ''}>
                <label htmlFor='male'>Male</label>
                <input
                  type='radio'
                  id='male'
                  name='gender'
                  value='male'
                  onFocus={() => setGenderError('')}
                  onChange={() => setGender('male')}
                />
              </div>

              <div className={genderError ? Style.warnBorder : ''}>
                <label htmlFor='female'>Female</label>
                <input
                  type='radio'
                  id='female'
                  name='gender'
                  value='female'
                  onFocus={() => setGenderError('')}
                  onChange={() => setGender('female')}
                />
              </div>

              <div className={genderError ? Style.warnBorder : ''}>
                <label htmlFor='other'>Other</label>
                <input
                  type='radio'
                  id='other'
                  name='gender'
                  value='other'
                  onFocus={() => setGenderError('')}
                  onChange={() => setGender('other')}
                />
              </div>
            </div>
          </div>
          <div>{error ? <ShowSignError errorMsg={error.msg} /> : ''}</div>
          <div>
            <input type='submit' value='Sign Up' />
          </div>
        </form>
      </div>
    </div>
  );
}
