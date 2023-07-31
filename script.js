const students = [
  {  
    name: "Alberto",
    grade1: 4.9,
    grade2: 9.7,
    grade3: 7.8,
  },

  {
    name: "Maria",
    grade1: 8.9,
    grade2: 9.4,
    grade3: 9.2,
    
  },

  {
    name: "Adriano",
    grade1: 3.2,
    grade2: 4.7,
    grade3: 7.2,
  },

  {
    name: "Fernanda",
    grade1: 8.5,
    grade2: 7.1,
    grade3: 9.9,
  }
]



const finalGrade = (student) => {
  let average = ((Number(student.grade1) + Number(student.grade2) + Number(student.grade3)) / 3).toFixed(2)

  if (average >= 7){
    return `
      A média do(a) aluno(a) ${student.name} é: ${average}
      Parabéns, ${student.name}! Você foi aprovado(a) no concurso.
    `
  } else {
    return `
    A média do(a) aluno(a) ${student.name} é: ${average}
    Não foi dessa vez, ${student.name}. Tente novamente!
    `
  }
}

for (let student of students) {
  let message = finalGrade(student)
  alert(message)
}