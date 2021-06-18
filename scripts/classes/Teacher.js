import User from "./User.js"

export default class Teacher extends User {
    constructor (names, lastName, email, active, coursesGiven, score) {
      super(names, lastName, email, active)
      this.coursesGiven = coursesGiven,
      this.score = score
    }
  }