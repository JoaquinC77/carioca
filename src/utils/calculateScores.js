export const calculateScores = (scoresByPlayer = []) => {
  const players = JSON.parse(localStorage.getItem('players'))
  let scoresByPlayerResult = []
  let finalPlayerScore = players.map(player => ({ ...player, score: 0 }))

  scoresByPlayer.forEach((scorePlayers) => {
    scoresByPlayerResult = [...scoresByPlayerResult, ...scorePlayers]
  })

  scoresByPlayerResult.forEach(score => {
    finalPlayerScore = finalPlayerScore.map(finalScore => (score.player === finalScore.id
      ? {
          ...finalScore,
          score: Number(finalScore.score) + Number(score.score)
        }
      : finalScore))
  })

  console.log(finalPlayerScore.sort(({ score: scorea }, { score: scoreb }) => scorea + scoreb))

  return finalPlayerScore.sort((a, b) => a.score - b.score)
}
