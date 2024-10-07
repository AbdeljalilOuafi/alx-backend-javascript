#!/usr/bin/node

export default function updateStudentGradeByCity(students, city, grades) {
  const cityStudents = students.filter((student) => student.location === city);
  return cityStudents.map((student) => {
    const studentGrade = grades.filter((grade) => grade.studentId === student.id);
    if (studentGrade.length === 0) {
      return { ...student, grade: 'N/A' };
    }
    return { ...student, grade: studentGrade[0].grade };
  });
}
