import React from 'react'
import PropTypes from 'prop-types'

function PlayerCardScoreInput ({ player, round, roundResults, setRoundResults }) {
  const onChange = (e) => {
    setRoundResults({
      ...roundResults,
      result: roundResults.result.map(result => result.player === player.id
        ? {
            ...result,
            score: e.target.value
          }
        : result)
    })
  }

  const renderValue = roundResults.result.find(play => play.player === player.id).score

  return (
    <div className='my-1 p-3 w-full bg-gray-50 rounded-xl shadow-lg' key={player.id}>
      <div className='w-full flex justify-start pt-1 pb-3'>
        <p>{player.name}</p>
      </div>
      <div>
        <input
          type="number"
          id={`${player.id}_${round.code}`}
          onChange={onChange}
          value={renderValue}
          className="
            bg-gray-50 border
            border-gray-300
            text-gray-900
            text-sm
            rounded-lg
            focus:ring-blue-500
            focus:border-blue-500
            block w-full p-2.5"
        />
      </div>
    </div>

  )
}

PlayerCardScoreInput.propTypes = {
  player: PropTypes.object,
  round: PropTypes.object,
  roundResults: PropTypes.object,
  setRoundResults: PropTypes.func
}

export default PlayerCardScoreInput
