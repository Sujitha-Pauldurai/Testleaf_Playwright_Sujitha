
function findTotalMarks(sub1,sub2,sub3,sub4,sub5){
    
    let total = sub1 + sub2 + sub3 + sub4 + sub5
    return total
}

let averageMark = (total) => total /5 

function findGrade(avg){
    let grade
    if(avg > 80)
        grade = 'A'
    else if(avg >60)
        grade = 'B'
    else if(avg > 40)
        grade = 'C'
    else
        grade = 'D'

    return grade
}

function findResult(grd){
    if(grd === 'A' || grd === 'B' || grd === 'C')
        console.log("The Student is pass");
     else
        console.log("The Student is fail");

}

function printResult(sub1,sub2,sub3,sub4,sub5){
let avg,grade,total
    if ( (sub1>=0 && sub1 <= 100) && (sub2>=0 && sub2 <= 100) && (sub3>=0 && sub3 <= 100)&& (sub4>=0 && sub4 <= 100) && (sub5>=0 && sub5 <= 100)){
        total= findTotalMarks(sub1,sub2,sub3,sub4,sub5)
        avg = averageMark(total)
        grade = findGrade(avg)
        console.log(total,avg);
        findResult(grade)
    }
    else{
    console.log("The mark should be 0 to 100")
    }
}



let sub1 = 80, sub2 = 60, sub3=50, sub4=80,sub5 = 100
printResult(sub1,sub2,sub3,sub4,sub5)

sub1 = 30, sub2 = 60, sub3=50, sub4=20,sub5 = 40
printResult(sub1,sub2,sub3,sub4,sub5)

sub1 = 30, sub2 =-60, sub3= -50, sub4=20,sub5 = 40
printResult(sub1,sub2,sub3,sub4,sub5)

sub1 = 30, sub2 =-60, sub3= -50, sub4=20,sub5 = 140
printResult(sub1,sub2,sub3,sub4,sub5)

//total= totalMarks(30,60,50,20,40)

