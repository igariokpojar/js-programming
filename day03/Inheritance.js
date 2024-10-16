/**
 * Represents a person.
 * @constructor
 * @param {string} name - The person's name.
 * @param {number} age - The person's age.
 * @param {string} gender - The person's gender.
 */
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  /**
   * Logs a message indicating that the person is eating.
   */
  eat() {
    console.log(`${this.name} is eating`);
  }
}

/**
 * Represents a student who extends the Person class.
 * @extends Person
 * @constructor
 * @param {string} name - The student's name.
 * @param {number} age - The student's age.
 * @param {string} gender - The student's gender.
 * @param {string} grade - The student's grade.
 */
class Student extends Person {
  constructor(name, age, gender, grade) {
    super(name, age, gender);
    this.grade = grade;
  }

  /**
   * Logs a message indicating that the student is studying.
   */
  study() {
    console.log(`${this.name} is studying`);
  }
}

/**
 * Represents a teacher who extends the Person class.
 * @extends Person
 * @constructor
 * @param {string} name - The teacher's name.
 * @param {number} age - The teacher's age.
 * @param {string} gender - The teacher's gender.
 */
class Teacher extends Person {
  /**
   * Logs a message indicating that the teacher is teaching.
   */
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

let student1 = new Student("Alexandru Smith", 25, "Male", "High School");
let teacher1 = new Teacher("Meda Maria", 35, "Female");

console.log(student1);
console.log(teacher1);

student1.study();
teacher1.teach();
