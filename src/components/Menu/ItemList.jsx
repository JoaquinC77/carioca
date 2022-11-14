import React from 'react'
import { STEPS } from '../../constant'
import { resetAllStorage, resetStorageWithoutPlayers } from '../../services/storage/storage'
import ButtonItem from './ItemButton'
import PropTypes from 'prop-types'

function ItemList ({ setStep, onClose }) {
  const handleClickNewGame = () => {
    resetAllStorage()
    setStep(STEPS.player_select)
    onClose()
  }

  const handleClickNewGamePlayerPersist = () => {
    resetStorageWithoutPlayers()
    setStep(STEPS.game_select)
    onClose()
  }
  return (
    <ul className='w-full'>
      <ButtonItem text='Nueva Partida' onClick={handleClickNewGame}/>
      <ButtonItem text='Nueva Partida con los mismos Jugadores' onClick={handleClickNewGamePlayerPersist}/>
    </ul>
  )
}

ItemList.propTypes = {
  setStep: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}

export default ItemList
