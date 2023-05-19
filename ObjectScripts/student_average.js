let students = [
  { name: "Zephaniah", scores: [100, 96, 99, 92] },
  { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
  { name: "Siddalee", scores: [86, 72, 92] },
  { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
  { name: "Elisha", scores: [89, 100] },
  { name: "Ezra", scores: [100, 99, 100, 87] }
]

function displayAverageScoresByStudent (studentsWithScores) {
  let averageByStudent = []
  for (let index = 0; index < studentsWithScores.length; index += 1) {
      const currentStudent = studentsWithScores[index]
      console.log(currentStudent.name)

      for (let index = 0; currentStudent.scores.length; index += 1) {
          const currentScore = currentScore.scores[index]
          console.log(currentScore)
      }
  }
  
      // console.log(averageScores) // output
}

const total = displayAverageScoresByStudent(students)


