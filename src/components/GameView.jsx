import React, { useState } from 'react'
import ContainerLayout from './Layouts/ContainerLayout'
import PropTypes from 'prop-types'
import Button from './Form/Button'
import PlayerCardScoreInput from './Form/PlayerCardScore'
import { STEPS } from '../constant'

function GameView ({ players, results, setResults, setSteps }) {
  const currentRound = results.find(round => !round.played)?.round

  if (!currentRound) {
    setSteps(STEPS.game_finished)
    return
  }

  const initialState = {
    round: currentRound,
    result: players.map((player) => ({
      player: player.id,
      score: 0
    })),
    played: true
  }

  const roundsActiveLegth = results.filter(result => !result.played).length
  const [roundRes, setRoundRes] = useState(initialState)

  const renderButton = <Button primary text={`${roundsActiveLegth > 1 ? 'Listo!' : 'Finalizar Partida'}`} type='submit' icon />

  const handleSubmit = (e) => {
    e.preventDefault()

    const newResults = results.map(result => result.round.code === currentRound.code
      ? roundRes
      : result
    )

    setResults(newResults)
    localStorage.setItem('results', JSON.stringify(newResults))
    setRoundRes(initialState)
  }

  return (
    <>
      <div className='w-full flex justify-center'>
        <div className='w-10/12 bg-primary-bg p-3 mt-5 font-semibold text-gray-100 text-xl text-center rounded'>
          <h3>{currentRound.name}</h3>
        </div>
      </div>
      <ContainerLayout>
        <form onSubmit={handleSubmit} className='my-2 w-11/12 flex items-center flex-col'>
          {players.map(player => (
            <PlayerCardScoreInput
              key={player.id}
              player={player}
              round={currentRound}
              roundResults={roundRes}
              setRoundResults={setRoundRes}
            />
          ))}
          <div className='w-full mt-4'>
            {renderButton}
          </div>
        </form>
      </ContainerLayout>
    </>
  )
}

GameView.propTypes = {
  players: PropTypes.array,
  results: PropTypes.array,
  setResults: PropTypes.func,
  setSteps: PropTypes.func
}

GameView.defaultProps = {
  players: []
}

export default GameView
