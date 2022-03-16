
function StaticFront({clickHandler, showHighscore}) {
  return (
    <div className="w-50 m-auto">
      <img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2NfH7-_GA5HKMt6-ZbufSwH21d53ibvtf3zysJfdxRVFV-S0L7Hw6uHZZBnisE45-0Q&usqp=CAU" alt="dsfd" />
      <button onClick={clickHandler} className="btn-sm w-100 btn-success">Start</button>
      <button onClick={showHighscore} className="bg-dark text-light w-100 m-auto">Show Highscores</button>
    </div>
  )
}

export default StaticFront