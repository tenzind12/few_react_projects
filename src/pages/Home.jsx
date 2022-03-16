import { useState } from "react"
import Highscore from "../components/Highscore"
import Main from "../components/Main"
import StaticFront from "../components/StaticFront"

function Home() {

    const [isClicked, setIsClicked] = useState(false)
    const [showHS, setShowHS] = useState(false)

    const clickHandler = () => setIsClicked(true)
    

    const showHighscore = () => setShowHS(true)

  return (
      <>
        {isClicked ? <Main/> : showHS ? <Highscore/> : <StaticFront showHighscore={showHighscore} clickHandler={clickHandler} />}
      </>
  )
}

export default Home