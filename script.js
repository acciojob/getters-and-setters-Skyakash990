//complete this code
class Person {
	constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Getter for name
  get name(): string {
    return this.name;
  }

  // Setter for age
  set age(age: number) {
    this.age = age;
  }
}

class Student extends Person {
	study():void{
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach():void{
		console.log(`${this.name} is teaching`);
	}
}
const student = new Student("Alice", 20);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Mr. Smith", 45);
teacher.teach(); // Output: Mr. Smith is teaching

// Updating age using setter
student.age = 21;
teacher.age = 46;

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
