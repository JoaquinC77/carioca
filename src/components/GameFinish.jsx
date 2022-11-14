import React from 'react'
import ContainerLayout from './Layouts/ContainerLayout'
import PropTypes from 'prop-types'
import { calculateScores } from '../utils/calculateScores'

function GameFinish ({ results }) {
  const playerScoreList = results.map(item => item.result)
  const finalResultCalculated = calculateScores(playerScoreList)

  const renderPosition = (index) => {
    const renderLiteralPosition = {
      0: <img src='/medal_winner.png' className='w-full' />,
      1: <img src='/medal_second.png' className='w-full' />,
      2: <img src='/medal_three.png' className='w-full' />,
      default: <img src='/popo.png' className='w-full' />
    }

    return renderLiteralPosition[index] || renderLiteralPosition.default
  }

  return (
    <ContainerLayout title='Resultados!!! '>
      {finalResultCalculated.map(({ id, name, score }, index) => (
        <div
          key={id}
          className='
            my-3 p-3
            w-full
            bg-gray-50
            rounded-xl
            shadow-lg
            flex justify-between
            items-center'
          >
            <div>
                <h4>{name}</h4>
                <p>{score}</p>
            </div>
            <div className='w-2/12'>
              {renderPosition(index)}
            </div>
        </div>
      ))}
    </ContainerLayout>
  )
}

GameFinish.propTypes = {
  results: PropTypes.array
}

export default GameFinish
