class Student {
    constructor(firstName, lastName, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
        this.tardies = 0;
        this.scores = [];
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    markLate() {
        this.tardies++;
        if (this.tardies > 3) {
            return `YOU ARE EXPELLED!!`;
        }
        return `${this.getFullName()} has been late for ${this.tardies} times`;
    }

    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }

    calcAvg() {
        if (!this.scores.length) return `Sorry, there is no score yet.`;
        return Math.round(this.scores.reduce((prevScore, curScore) => prevScore + curScore, 0) / this.scores.length);
    }

    /**
     * @desc Utility function which does not require instantiation
     * @param  {...any} students
     */
    static EnrollStudents(...students) {
        // Send email to every student for example
        students.every((student) => {
            console.log(`Sending email to ${student.getFullName()}`);
        });
    }
}

const matsu = new Student("Matsu", "Chen", "Undergraduate");
console.log(matsu);
console.log(matsu.getFullName());
console.log(matsu.markLate());
console.log(matsu.markLate());
console.log(matsu.markLate());
console.log(matsu.markLate());
console.log(matsu.calcAvg());
console.log(matsu.addScore(86));
console.log(matsu.addScore(92));
console.log(matsu.addScore(97));
console.log(matsu.calcAvg());
Student.EnrollStudents(matsu);
