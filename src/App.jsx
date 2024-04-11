import React, { useEffect, useState } from 'react'
import AppLayout from './components/Layouts/AppLayout'
import GameSelect from './components/GameSelect'
import PlayerSelect from './components/PlayerSelect'
import { CARIOCA_GAMES, STEPS } from './constant'
import { v4 as uuid } from 'uuid'
import GameView from './components/GameView'
import DrawerCustom from './components/Menu/Drawer'
import DrawerBody from './components/Menu/DraweBody'
import GameFinish from './components/GameFinish'
import ItemList from './components/Menu/ItemList'
import { findStorageByItem } from './services/storage/storage'
import DefaultView from './components/DefaultView'

const playersStorage = findStorageByItem('players')
const roundStorage = findStorageByItem('rounds')
const resultsStorage = findStorageByItem('results')

function App () {
  const [step, setSteps] = useState(STEPS.player_select)
  const [rounds, setRounds] = useState(CARIOCA_GAMES)
  const [players, setPlayers] = useState(playersStorage ?? [
    {
      name: '',
      id: uuid()
    }
  ])
  const [results, setResults] = useState([])
  const [loanding, setLoandig] = useState(true)

  useEffect(() => {
    setLoandig(true)
    setResults(resultsStorage ?? [])
    setRounds(roundStorage ?? CARIOCA_GAMES)

    if (roundStorage) {
      setSteps(STEPS.game_view)
    }

    if (!roundStorage) {
      setSteps(STEPS.game_select)
    }

    if (!playersStorage) {
      setSteps(STEPS.player_select)
    }

    setLoandig(false)
  }, [])

  const renderSteps = (stepSelect) => {
    const stepRenderLiteral = {
      [STEPS.player_select]:
        <PlayerSelect
          setSteps={setSteps}
          setPlayers={setPlayers}
          players={players}
        />,
      [STEPS.game_select]:
        <GameSelect
          setSteps={setSteps}
          rounds={rounds}
          setRounds={setRounds}
          setResults={setResults}
          players={players}
        />,
      [STEPS.game_view]:
        <GameView
          players={players}
          results={results}
          setResults={setResults}
          setSteps={setSteps}
        />,
      [STEPS.game_finished]: <GameFinish results={results} />,
      default: <DefaultView />
    }

    return stepRenderLiteral[stepSelect] || stepRenderLiteral.default
  }

  const [isLeftOpen, setIsLeftOpen] = useState(false)

  const onClose = () => {
    setIsLeftOpen((prev) => !prev)
  }

  return (
      <AppLayout onClose={onClose}>
        <DrawerCustom
          open={isLeftOpen}
          onClose={onClose}
          direction='left'
          size={300}
        >
          <DrawerBody>
            <ItemList setStep={setSteps} onClose={onClose} />
          </DrawerBody>
        </DrawerCustom>
        {!loanding && renderSteps(step)}
      </AppLayout>
  )
}

export default App
