import User from "./User.js"

export default class Student extends User {
    constructor (names, lastName, email, active, coursesTaken) {
      super(names, lastName, email, active)
      this.coursesGiven = coursesTaken
    }
  }