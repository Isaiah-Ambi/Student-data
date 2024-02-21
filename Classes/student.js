// Purpose: Student class to store student data and properties
// The student has a name and properties. The properties are stored as an array of objects with label and value keys
// The student can add properties and get the student data as an object
// The student can also get the properties of the student
export class Student {
  constructor(name) {
    this.name = name;
    this.properties = [];
    // this.gpa = 0;
    // Property { label, value }[]
    this.courses = [];
    this.gradeScore = {
        'A' : 5,
        'B' : 4,
        'C' : 3,
        'D' : 2,
        'E' : 1,
        'F' : 0,
    }
  }
  

  addProperty(label, value) {
    this.properties.push({ label, value });
  }

  getStudentData() {
    const data = { 
      name: this.name, 
      age: this.age,
    };
    
    for (let x of this.properties) {
      data[x.label] = x.value;
    }

    return data;
  }

  getProperties() {
    console.log(this.properties);
  }

  getGradeScore(grade){
    grade = grade.toUpperCase()
    for(let x in this.gradeScore){
        if (x == grade){
            return this.gradeScore[x]
        }
        
    }
    
}

addCourse(course, courseUnit, grade) {
    grade = this.getGradeScore(grade)
    this.courses.push({ course, courseUnit, grade });
  
}

calculateGPA(){
    let gradeSum = 0
    let scoreSum = 0
    for (let x of this.courses) {
        gradeSum += x.grade * x.courseUnit
        scoreSum += x.courseUnit
    }
    let gpa = gradeSum/scoreSum
    this.addProperty('GPA', gpa)
    // return gradeSum/scoreSum
}

showCourses(){
    console.log(this.courses)
}

}