/**
 * i need class validate email
 */
// import Email from '../../validaions/EmailValidation';

export default class index {
  

  constructor(user) {
    
    this._id = user._id;
    this._name = user._name;
    this._age = user._age;
    this._username = user._username;
    this._email = user._email;
    this._password = user._password;
    this._profImage = user._profImage;
    this._bio = user._bio;
    this._birthDay = user._birthDay;
    this.rate = user._rate;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get age(){
    return this._age;
  }

  set age(value) {
    this._age = value;
  }

  set name(value) {
    this._name = value;
  }

  get username() {
    return this._username;
  }

  set username(value) {
    this._username = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }

  get profImage() {
    return `http://localhost:5000/images/${this._profImage}`;
  }

  set profImage(value) {
    this._profImage = value;
  }

  get bio() {
    return this._bio;
  }

  set bio(value) {
    this._bio = value;
  }

  get birthDay() {
    return this._birthDay;
  }

  set birthDay(value) {
    this._birthDay = value;
  }

  set rate(value) {
    this._rate = value;
  }

  get rate(){
    return this._rate;
  }
}
