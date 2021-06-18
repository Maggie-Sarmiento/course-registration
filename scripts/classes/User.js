
export default class User{
    constructor (names, lastName, email, active) {
    this.names = names,
    this.lastName = lastName,
    this.email = email,
    this.active = active
    }
  
    presentation() {
      return `Hola soy ${this.names} y mi correo es ${this.email}`
    }
  
    getLastName() {
      return this.lastName
    }
  
    getName() {
      return this.names
    }
  
    setLastName(newLastName) {
      this.lastName = newLastName
    }
  
  }



















