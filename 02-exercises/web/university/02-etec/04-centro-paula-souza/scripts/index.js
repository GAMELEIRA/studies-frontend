import { teachers } from '../const/teachers.js';

let idOfTeacher = 0;
const buttonBack = document.getElementById('button-back');
const buttonNext = document.getElementById('button-next');

buttonNext.addEventListener('click', () => {
  if (idOfTeacher >= 0 && idOfTeacher < teachers.length - 1) { 
    idOfTeacher++;
    builderTeachers();
  }
});

buttonBack.addEventListener('click', () => {
  if (idOfTeacher > 0 && idOfTeacher < teachers.length) {
    idOfTeacher--;
    builderTeachers();
   }
});

const getTeacher = (id) => {
  return teachers[id];
}

const renderTeacher = (teacher) => {
  const tagTeacherImage = document.getElementById('teacher-image');
  const tagTeacherName = document.getElementById('teacher-name');
  const tagTeacherGraduate = document.getElementById('teacher-graduate');
  const tagTeacherArea = document.getElementById('teacher-area');

  tagTeacherImage.src = teacher.image;
  tagTeacherImage.alt = teacher.name;
  tagTeacherName.innerHTML = teacher.name;
  tagTeacherGraduate.innerHTML = teacher.academicBackground.join('<br>');
  tagTeacherArea.innerHTML = teacher.areaOfExpertise;
}

const builderTeachers = () => {
  const teacher = getTeacher(idOfTeacher);
  renderTeacher(teacher);
}

builderTeachers();