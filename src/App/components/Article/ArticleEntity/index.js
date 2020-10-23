

export default class Article {
  constructor(article) {
    // console.log(article);
    this._id = article._id;
    this._ownerID = article._ownerID;
    this._ownerName = article._ownerName;
    this._ownerUsername = article._ownerUsername;
    this._title = article._title;
    this._content = article._content;
    this._numberOfReaders = article._numberOfReaders;
    this._dateOfCreate = article._dateOfCreate;
    this.likes = article._likes;
    this.dislikes = article._dislikes;
    this.saves = article._saves;
    this.shares = article._shares;
  }

  get id() {
    return this._id.toString();
  }
  // this temporary method until i connect with db
  set id(value) {
    this._id = value;
  }

  get ownerID() {
    return this._ownerID;
  }

  set ownerID(value) {
    this._ownerID = value;
  }

  get ownerName() {
    return this._ownerName;
  }

  set ownerName(value) {
    this._ownerName = value;
  }

  
  get ownerUsername() {
    return this._ownerUsername;
  }

  set ownerUsername(value) {
    this._ownerUsername = value;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get content() {
    return this._content;
  }

  set content(value) {
    this._content = value;
  }

  get numberOfReaders() {
    return this._numberOfReaders;
  }

  set numberOfReaders(value) {
    this._numberOfReaders = value;
  }

  get dateOfCreate() {
    const date = new Date(this._dateOfCreate).toDateString();

    return date;
  }

  set dateOfCreate(value) {
    this._dateOfCreate = value;
  }

  get likes() {
    return this._likes;
  }

  set likes(value) {
    this._likes = value;
  }

  get dislikes() {
    return this._dislikes;
  }

  set dislikes(value) {
    this._dislikes = value;
  }

  get saves() {
    return this._saves;
  }

  set saves(value) {
    this._saves = value;
  }

  get shares() {
    return this._shares;
  }

  set shares(value) {
    this._shares = value;
  }
}
