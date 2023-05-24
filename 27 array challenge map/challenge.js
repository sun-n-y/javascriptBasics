//array challenge

const updatedStudents = students.map(function (student) {
  //   console.log(student);
  student.role = 'student';
  return student;
});

console.log(updatedStudents);
