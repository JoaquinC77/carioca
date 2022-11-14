import React from 'react'
import ContainerLayout from './Layouts/ContainerLayout'
import PropTypes from 'prop-types'
import Button from '../components/Form/Button'
import { STEPS } from '../constant'

function GameSelect ({ setSteps, rounds, setRounds, setResults, players }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('rounds', JSON.stringify(rounds))
    const initialResults = rounds.filter(round => round.state).map(round => ({
      round,
      results: players.map((player) => ({
        player: player.id,
        score: 0
      })),
      played: false
    }))

    setResults(initialResults)
    localStorage.setItem('results', JSON.stringify(initialResults))
    e.target.reset()
    setSteps(STEPS.game_view)
  }

  const handleChangeCheck = (e, game) => {
    setRounds(rounds.map(round => round.code === game.code
      ? {
          ...game,
          state: e.target.checked
        }
      : round
    ))
  }

  return (
    <>
      <ContainerLayout title={'Elige tus rondas!'}>
        <form onSubmit={handleSubmit} className='w-10/12'>
          {rounds.map((game) => (
            <div key={game.code} className='w-full flex justify-center flex-row'>
              <div className='w-10/12'>
                <div className='flex flex-row justify-between'>
                  <p className='font-semibold'>{game.name}</p>
                  <div>
                    <label htmlFor={game.code} className="inline-flex relative items-center mb-4 cursor-pointer">
                      <input type="checkbox" value="" id={game.code} className="sr-only peer" defaultChecked={game.state} onChange={(e) => handleChangeCheck(e, game)} />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className='w-full flex justify-center flex-row m-0'>
            <Button type='submit' text='Siguiente paso' primary icon/>
          </div>
        </form>
      </ContainerLayout>
    </>
  )
}

GameSelect.propTypes = {
  setSteps: PropTypes.func.isRequired,
  setRounds: PropTypes.func.isRequired,
  setResults: PropTypes.func.isRequired,
  rounds: PropTypes.array,
  players: PropTypes.array
}

GameSelect.defaultProps = {
  setSteps: undefined,
  rounds: [],
  players: [],
  setRounds: undefined
}

export default GameSelect
