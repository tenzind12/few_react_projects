import React from 'react'

function Highscore() {

  const highscoreJson = localStorage.getItem('scores')
  const parseScore = JSON.parse(highscoreJson)
  console.log(parseScore || [])

  return (
    <>
      <h2 className='text-center mt-5'>Highscore</h2>
      <ul className='m-5'>
      {parseScore.map((score, i) => {
        return <li key={i} className='p-2'>{score.name +' :'}<span>{score.score}</span></li>
      })}
      </ul>
    </>
  )
}

export default Highscore