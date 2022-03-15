import { useState } from "react"
import Main from "../components/Main"
import StaticFront from "../components/StaticFront"

function Home() {

    const [isClicked, setIsClicked] = useState(false)

    const clickHandler = () => {
        setIsClicked(true)
    }

  return (
      <>
        {isClicked ? <Main /> : <StaticFront startGame={clickHandler}/>}
      </>
  )
}

export default Home