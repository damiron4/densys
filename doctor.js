class Doctor {
    #Name;#SurName;#login;#password;
  constructor(name, surname, login, password) {
    this.#Name = name;
    this.#SurName = surname;
    this.#login=login;
    this.#password=password;
  }
  getName(){
    return this.#Name;
  }
  getSurName(){
    return this.#SurName;
  }
  getLogin(){
    return this.#login;
  }
  getPassword(){
    return this.#password;
  }
  setName(Name){
    this.#Name=Name;
  }
  setSurName(SurName){
    this.#SurName=SurName;
  }
  setLogin(login){
    this.#login=login;
  }
  setPassword(password){
    this.#password=password;
  }
  
}

