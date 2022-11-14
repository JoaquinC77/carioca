import React from 'react'
import Button from './Form/Button'
import InputComponent from './Form/Input'
import { v4 as uuid } from 'uuid'
import ExitButton from './Form/ExitButton'
import { STEPS } from '../constant'
import PropTypes from 'prop-types'
import ContainerLayout from './Layouts/ContainerLayout'

function GamersSelect ({ setSteps, players, setPlayers }) {
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!players?.length) {
      return
    }

    if (players.some(player => !player.name)) {
      return
    }

    localStorage.setItem('players', JSON.stringify(players))
    e.target.reset()
    setSteps(STEPS.game_select)
  }

  const onClick = () => {
    setPlayers([
      ...players,
      {
        name: '',
        id: uuid()
      }
    ])
  }

  const handleChange = (e) => {
    setPlayers(players.map(player => player.id === e.target.name
      ? {
          ...player,
          name: e.target.value
        }
      : player))
  }

  const handleClickDeleteGamer = (playerClick) => {
    setPlayers(players.filter(player => player.id !== playerClick.id))
  }

  return (
    <>
      <ContainerLayout title={'Bienvenido a Carioca'}>
        <form className="w-full" onSubmit={handleSubmit}>
          {players.map((player, index) => (
            <div key={player.id} className="flex items-center space-x-2">
              <InputComponent
                type="text"
                name={player.id}
                id={player.id}
                value={player.name}
                labelText={`Jugador ${index + 1}`}
                onChange={handleChange}
              />
              <ExitButton height={'40'} onClick={() => handleClickDeleteGamer(player)} />
            </div>
          ))}

          <div className="flex columns-2 space-x-2">
            <Button type="button" text="Agregar Jugador" onClick={onClick} primary />
            <Button type="submit" text="Siguiente Paso" icon />
          </div>
        </form>
      </ContainerLayout>
    </>
  )
}

GamersSelect.propTypes = {
  setSteps: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
  setPlayers: PropTypes.func.isRequired
}

GamersSelect.defaultProps = {
  setSteps: undefined,
  players: [],
  setPlayers: undefined
}

export default GamersSelect
