
import React, { useRef, useState } from 'react'
import './style.scss';
import GenerateYearOptions from '../../../../shared/GenerateYearOptions';
import GenerateMonthOptions from '../../../../shared/GenerateMonthOptions';
import GenerateDayOptions from '../../../../shared/GenerateDayOptions';
import UploadImageSvg from './UploadImageSvg';
export default () => {

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [birthDay, setBirthDay] = useState(0);
  const [birthMonth, setBirthMonth] = useState(0);
  const [birthYear, setBirthYear] = useState(0);
  const [file, setFile] = useState({});

  const uploadImageInput = useRef(null);
  const previewImage = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    form.append('image', file);
    form.append('name', name);
    form.append('userBio', bio);
    form.append('birthDay', birthDay);
    form.append('birthMonth', birthMonth);
    form.append('birthYear', birthYear);
    console.log(form.get('image'));
    console.log(form.get('username'));
    console.log(form.get('userBio'));

    return form;
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
              <div className="preview-image" ref={previewImage}></div>
            </div>
          </div>
          <div className="field-wraper">
            <label htmlFor="username">Username : </label>
            <input
              type="text"
              name="username"
              id="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <select
              name="birth-day"
              id="birth-month"
              value={birthDay}
              onChange={(e) => setBirthDay(e.target.value)}>
              <option value={0}>Day</option>
              <GenerateDayOptions />
            </select>

            <select
              name="birth-month"
              id="birth-month"
              value={birthMonth}
              onChange={(e) => setBirthMonth(e.target.value)}>
              <option value={0}>Month</option>
              <GenerateMonthOptions />
            </select>


            <select
              name="birth-year"
              id="birth-month"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}>
              <option value={0}>Year</option>
              <GenerateYearOptions />
            </select>
          </div>
          <div className="field-wraper">
            <input type="submit" className='submit' value="save" />
          </div>
        </form>
      </div>
    </div>
  )
}
