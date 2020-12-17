
import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.scss';
import GenerateYearOptions from '../../../../../shared/GenerateYearOptions';
import GenerateMonthOptions from '../../../../../shared/GenerateMonthOptions';
import GenerateDayOptions from '../../../../../shared/GenerateDayOptions';
import UploadImageSvg from './UploadImageSvg';
import { editUserInfo } from '../..';

export default () => {
  const dispatch = useDispatch();
  const { user, userEditInfoError } = useSelector(({ mainUser }) => (mainUser));
  // let src = `${process.env.REACT_APP_API_URL}/images/${user.profImage}`;
  let src = user.profImage;

  let userBirthMonth = user.dateOfBirth.birthMonth.charAt(0).toUpperCase() + user.dateOfBirth.birthMonth.slice(1)
  const [fullname, setFullname] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const [birthDay, setBirthDay] = useState(user.dateOfBirth.birthDay);
  const [birthMonth, setBirthMonth] = useState(userBirthMonth);
  const [birthYear, setBirthYear] = useState(user.dateOfBirth.birthYear);
  const [file, setFile] = useState(null);
  const [isError, setIsError] = useState('');

  const uploadImageInput = useRef(null);
  const previewImage = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    form.append('username', user.username);

    if (user.username && fullname && birthDay && birthMonth && birthYear) {
      dispatch(editUserInfo(form));
    } else {
      setIsError('please fill all fields');
    }

  }

  const onUploadFileChange = () => {

    if (uploadImageInput.current.files && uploadImageInput.current.files[0]) {

      const reader = new FileReader();
      reader.onload = (e) => {
        setFile(uploadImageInput.current.files[0])
        previewImage.current.style.backgroundImage = `url(${e.target.result})`;
      };
      reader.readAsDataURL(uploadImageInput.current.files[0]);
    }
  }

  useEffect(() => {
    let timeOut;
    if (isError) {
      timeOut = setTimeout(() => {
        console.log('reset error');
        setIsError('');
      }, 3000);
    }
    return () => {
      clearTimeout(timeOut)
    }
  }, [isError]);

  useEffect(() => { /** error from server and you can handle message also but i'm not empty now */
    if (userEditInfoError) {
      setIsError(userEditInfoError.msg);
    }
  }, [userEditInfoError]);

  return (
    <div>
      <div className="user-edit-wrapper">
        <form action="/" id="user-edit-form" onSubmit={onSubmit}>
          <div className="field-wraper">
            <div className="input-file-wrapper">
              <label htmlFor="upload-image" className="file-label">
                <UploadImageSvg />
              </label>
              <input
                type="file"
                name="image"
                ref={uploadImageInput}
                id="upload-image"
                accept="image/*"
                onChange={onUploadFileChange}
              />
            </div>
            <div className="preview-image-wrapper">
              <div className="preview-image" style={{ backgroundImage: `url(${src})` }} ref={previewImage}></div>
            </div>
          </div>
          <div className="field-wraper">
            <label htmlFor="name">Fullname : </label>
            <input
              type="text"
              name="name"
              id="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className="field-wraper">
            <label htmlFor="bio">Bio : </label>
            <textarea
              name="bio"
              id="bio"
              maxLength="150"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>

          <div className="birth field-wraper">
            <label htmlFor="">Birth : </label>
            <div className="select-container">
              <select
                name="birthDay"
                value={birthDay}
                onChange={(e) => setBirthDay(e.target.value)}>
                <option value={0}>Day</option>
                <GenerateDayOptions />
              </select>

              <select
                name="birthMonth"
                value={birthMonth}
                onChange={(e) => setBirthMonth(e.target.value)}>
                <option value={0}>Month</option>
                <GenerateMonthOptions />
              </select>


              <select
                name="birthYear"
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}>
                <option value={0}>Year</option>
                <GenerateYearOptions />
              </select>

            </div>
          </div>
          <div className="field-wraper">
            {
              isError && (
                <div className="show-edit-user-error">
                  <p>{isError}</p>
                </div>
              )
            }
          </div>
          <div className="field-wraper">
            <input type="submit" className='submit' value="save" />
          </div>
        </form>
      </div>
    </div>
  )
}
