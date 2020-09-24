function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return (function a(){return seat})
    }

    var students = new Array;
    for (let i = 0; i < numbersOfStudents; i++){
        students.push(studentSeat(i + 1));
    }
    return students;
}

const classRoom = createClassRoom(10);