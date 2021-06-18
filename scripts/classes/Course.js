export default class Course {
    constructor(name, poster, subjects) {
        this.name = name,
        this.poster = poster,
        this.subjects = subjects
        this.inscribed = []
    }

    getName() {
        return this.name
    }

    getPoster() {
        return this.poster
    }

    getSubjects() {
        return this.subjects
    }


    setName (newName) {
        this.name = newName
    }
}
