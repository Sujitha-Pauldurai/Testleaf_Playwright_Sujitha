/* Student Object Analyzer : Find highest scorer, average marks, students above 75, and number of students who passed. */

let students = [
    { name: "Arun", age: 20, marks: 85 },
    { name: "Priya", age: 21, marks: 72 },
    { name: "Rahul", age: 19, marks: 91 },
    { name: "Divya", age: 22, marks: 64 },
    { name: "Kiran", age: 20, marks: 45 }
]


let students2 = [
    { name: "A", age: 20, marks: 50 },
    { name: "B", age: 21, marks: 90 },
    { name: "C", age: 19, marks: 70 },
    { name: "D", age: 22, marks: 80 }
]

function findHighScore(StudentList){
    let highScoreStudent = {name:null,age:null,marks:null}
    let name = StudentList[0].name,marks = StudentList[0].marks
    for(let i=1;i < StudentList.length; i++){

        if(marks < StudentList[i].marks){
            marks = StudentList[i].marks
            highScoreStudent.marks = StudentList[i].marks
            highScoreStudent.name = StudentList[i].name
            highScoreStudent.age = StudentList[i].age
        }
    }
    return highScoreStudent
}

function findAverageMark(StudentList){
    let average =0, sum = 0
    for(let i=0;i < StudentList.length; i++){
        sum = sum + StudentList[i].marks
    }
    average = sum / StudentList.length
    //console.log(sum,average);
    
    return average
}

function studentsAbove75(StudentList){
    let students = {}, j=0
    for(let i=0;i < StudentList.length; i++){
        //console.log(students[j],StudentList[i]);
        if(StudentList[i].marks > 75){
            students[j]={}
            students[j].marks = StudentList[i].marks
            students[j].name = StudentList[i].name
            students[j].age = StudentList[i].age
            j++
        }
            
        }
    return students
}

function numberOfPassed(StudentList){
    
    let numberOfPassed =0
    for(let i=0;i < StudentList.length; i++){
       
        if(StudentList[i].marks >= 40){
            numberOfPassed++
        }
    }
    return numberOfPassed

}

function printResult(students){
    let highScoreStudent = findHighScore(students)
    let avgMark = findAverageMark(students)
    let stuMarkabove75 = studentsAbove75(students)
    let numOfPass = numberOfPassed(students)
    console.log("The Highest Score goes to :",highScoreStudent.name+" Mark: ",highScoreStudent.marks);
    console.log("Average mark of all the students :",avgMark);
    console.log("Students Scored above 75 :",stuMarkabove75);
    console.log("Number of Studens Passed : ",numOfPass);
    
}
/* console.log(findHighScore(students));
console.log(findAverageMark(students));
console.log(studentsAbove75(students));
console.log(numberOfPassed(students)); */


printResult(students)
printResult(students2)

