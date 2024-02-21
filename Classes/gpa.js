export class GetStudentGPA {
    constructor() {
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
        return gradeSum/scoreSum
    }

    showCourses(){
        console.log(this.courses)
    }
}

