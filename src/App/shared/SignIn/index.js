
import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import Style from './style.module.scss';
import SvgValidateWarn from '../SvgValidateWarn';

export default function SignIn() {

   const [state, setState] = useState({
    email: '',
    password: '',
  });

  
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    
  });
  
   const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setState(prevState => {
      return {
      ...state,
      [name] : value
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
    if (!value ){
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
     const { email, password } = state;
     
    if ( !email || !password ) {
      setErrors(prevState => {
        return {
          ...prevState,
          email: email ? false : true,
          password: password ? false : true,
          
        }
      })
      console.log('not validated');
      return;
    }
  }
  /**
   * style={errors['email'] ? { border: '1px solid red' } : { border: '1px solid #ddd' }}
   */
  return (
    <div className={Style.container}>
      <div className={Style.formContainer}>

        
        <form onSubmit={handleSubmit}>
          <div>
            <i >Email :</i>
            <input type='email' name='email' placeholder='Email address' onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} className={errors['email'] ?  Style.warnBorder : ''} />

            {errors['email'] ?  <SvgValidateWarn />: ''}
          </div>

          <div>
            <i >Password : </i>
            <input type='password' name='password' placeholder='Password' onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} className={errors['password'] ? Style.warnBorder : ''}/> 

            {errors['password'] ? <SvgValidateWarn /> : ''}
          </div>

          <div>
            <input type='submit' value='Sign In' />
          </div>
            
          <div className={Style.border}></div>
          
          <div>
            <NavLink className={Style.createAccount} role='input' to='/signup' > Sign Up </NavLink>
          </div>
        </form>
        

      </div>
      
    </div>
  )
}

