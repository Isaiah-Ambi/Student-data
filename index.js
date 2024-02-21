import { Table } from "./Classes/Table.js";
import { Student } from "./Classes/student.js";

// Create a table instance
const table = new Table();

//Create a student instance with the name John
const student = new Student("John");

// Add properties to the student instance
student.addProperty("State Of Origin", "Abia");
student.addProperty("Department", "Computer Science");
student.addProperty("Level", "300");
student.addProperty("Matric Number", "U/2018/123456");
student.addCourse('English', 4, 'A');
student.addCourse('French', 3, 'D')
student.addCourse('Physics', 5, 'A')
student.calculateGPA()

// Create another student instance with the name Anabelle
const student2 = new Student("Anabelle");

// Add properties to the student2 instance
student2.addProperty("State Of Origin", "Abuja");
student2.addProperty("Department", "Computer Engineering");
student2.addProperty("Level", "100");
student2.addProperty("Matric Number", "U/2023/123456");
student2.addCourse('English', 4, 'B');
student2.addCourse('French', 3, 'B')
student2.addCourse('Physics', 5, 'A')
student2.calculateGPA()

// Set the columns of the table you want to create
const columns = ["name", "State Of Origin", "Department", "Level", "Matric Number", 'GPA']

// Pass these columns to the Table instance you created
table.setColumns(columns);

// Add the John's data to the table as a row.
table.addRow(student.getStudentData());

// Add the Anabelle's data to the table as a row.
table.addRow(student2.getStudentData());

// Draw the table in the HTML app element
table.drawTable();

const student3 = new Student("Anna");

// Add properties to the student2 instance
student3.addProperty("State Of Origin", "Niger");
student3.addProperty("Department", "Cybersecurity");
student3.addProperty("Level", "400");
student3.addProperty("Matric Number", "U/2023/1993856");
student3.addCourse('English', 4, 'B');
student3.addCourse('French', 3, 'C')
student3.addCourse('Physics', 5, 'B')
student3.calculateGPA()


// Add the Anabelle's data to the table as a row.
table.addRow(student3.getStudentData());

// Draw the table in the HTML app element
table.drawTable();