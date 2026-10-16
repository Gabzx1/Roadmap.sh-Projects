const getLetterGrade = (score) => {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
};

const hasPassed = (score) => score >= 60;

const getFeedBack = (grades) => {
  const feedbackMap = {
    A: 'Excellent work',
    B: 'Keep practicing',
    C: 'You passed',
    D: 'You passed',
  };

  return feedbackMap[grades] || 'You Failed';
};

const createGradeReport = (name, score) => {
  const grade = getLetterGrade(score);
  const passed = hasPassed(score);
  const feedback = getFeedBack(grade);

  return { name, score, grade, passed, feedback };
};

console.log(createGradeReport('Gabriel', 100));
console.log(createGradeReport('Ava', 92));
console.log(createGradeReport('Noah', 48));
console.log(createGradeReport('Mina', 75));
console.log(createGradeReport('Sam', 60));