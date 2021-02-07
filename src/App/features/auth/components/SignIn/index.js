import React, { useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalContext } from '../../../../shared/Modal/ModalProvider';
import { NavLink } from 'react-router-dom';
import Style from './style.module.scss';
import SvgValidateWarn from '../SvgValidateWarn';
import ShowSignError from '../ShowSignError';
import { validateEmail, validatePassword } from '../../validation';
import { clearUserRegistrationError, signIn } from '../../actionsCreator';

export default () => {
  const dispatch = useDispatch();
  const { toggleModal } = useContext(modalContext);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { error } = useSelector(({ signError }) => signError);
  const { isAuthenticate } = useSelector(({ mainUser }) => mainUser);
  useEffect(() => {
    if (isAuthenticate) {
      toggleModal();
    }
  }, [isAuthenticate]);

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
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let check = false;

    if (!validateEmail(email)) {
      setEmailError('email invalid');
      check = true;
    }
    if (!validatePassword(password)) {
      setPasswordError('password must be at least 6 letters');
      check = true;
    }

    if (check) {
      console.log('not validated');
      return;
    }

    const userInfo = {
      email,
      password,
    };

    dispatch(signIn(userInfo));
  };

  return (
    <div className={Style.container}>
      <div className={Style.formContainer}>
        <form onSubmit={handleSubmit}>
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
            <i>Password : </i>
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
          <div>{error ? <ShowSignError errorMsg={error.msg} /> : ''}</div>
          <div>
            <input type='submit' value='Sign In' />
          </div>

          <div className={Style.border}></div>

          <div>
            <NavLink
              className={Style.createAccount}
              role='input'
              to='/signup'
              onClick={() => toggleModal()}
            >
              Sign Up
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
