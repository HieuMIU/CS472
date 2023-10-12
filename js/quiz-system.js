class Student{
    #studentId;
    #answers;
    constructor(id){
        this.#studentId = id;
        this.#answers = []
    }
    addAnswer(answer){
        if(answer instanceof Question){
            this.#answers.push(answer);
        }
    }
    get ID() {
        return this.#studentId;
    }
    get Answers() {
        return this.#answers;
    }
}
class Question{
    #qid;
    #answer;
    constructor(qid, answer){
        this.#qid = qid;
        this.#answer = answer;
    }
    get QId(){
        return this.#qid;
    }
    get Answer(){
        return this.#answer;
    }
    checkAnswer(answer){
        return this.#answer == answer;
    }
}
class Quiz{
    #questions;
    #students;
    constructor(questions, students){
        this.#questions = new Map();
        questions.forEach(q => this.#questions.set(q.QId,q.Answer));
        this.#students = students;
    }
    scoreStudentBySid(sid){
        let student = this.#students.find(o => o.ID == sid);
        let rightAnswer = 0;
        if(student != null){
            student.Answers.forEach(ans => {
                if(this.#questions.get(ans.QId) == ans.Answer)
                    rightAnswer++;
            });
        }
        return rightAnswer;
    }
    getAverageScore(){
        return this.#students.map(std => this.scoreStudentBySid(std.ID)).reduce((sum, current) => sum += current) / this.#students.length;
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new
Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5