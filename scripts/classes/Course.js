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

    getInscribed() {
        return this.inscribed
    }


    setName (newName) {
        this.name = newName
    }

    setPoster(newPoster) {
        this.poster = newPoster
    }

    setSubjects(newSubjects) {
        this.subjects = newSubjects
    }

    setInscribed(newInscribed) {
        this.inscribed = newInscribed
    }
}
