import { useState } from "react"
import AppLayout from "./components/AppLayout";
import GamersSelect from "./components/GamersSelect";

function App() {
  const [step, setSteps] = useState(0);

  return (
    <>
      <AppLayout>
        <GamersSelect />
      </AppLayout>
    </>
  )
}

export default App
