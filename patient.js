class Patient {
    #governmnetId;#Name;#SurName;#middleName;#address;#phoneNumber;#email;#CDCareg;
  constructor(governmnetId, name, surname, middleName, address, phoneNumber, email, CDCareg, login, password) {
    this.#governmnetId = governmnetId;
    this.#Name = name;
    this.#SurName = surname;
    this.#middleName = middleName;
    this.#address = address;
    this.#phoneNumber = phoneNumber;
    this.#email = email;
    this.#CDCareg = CDCareg;
    this.#login=login;
    this.#password=password;
  }
  getGovernmnetId(){
    return this.#governmnetId;
  }
  getName(){
    return this.#Name;
  }
  getSurName(){
    return this.#SurName;
  }
  getMiddleName(){
    return this.#middleName;
  }
  getAddress(){
    return this.#address;
  }
  getPhoneNumber(){
    return this.#phoneNumber;
  }
  getEmail(){
    return this.#email;
  }
  getCDCareg(){
    return this.#CDCareg;
  }
  getLogin(){
    return this.#login;
  }
  getPassword(){
    return this.#password;
  }

  
  setGovernmnetId(gI){
    this.#governmnetId = gI;
  }
  setName(Name){
    this.#Name=Name;
  }
  setSurName(surName){
    this.#SurName=surName;
  }
  setMiddleName(middleName){
    this.#middleName=middleName;
  }
  setAddress(address){
    this.#address=address;
  }
  setPhoneNumber(phoneNumber){
    this.#phoneNumber=phoneNumber;
  }
  setEmail(email){
    this.#email=email;
  }
  setCDCareg(CDCareg){
    this.#CDCareg=CDCareg;
  }
  setLogin(login){
    this.#login=login;
  }
  setPassword(password){
    this.#password=password;
  }
}