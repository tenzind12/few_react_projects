import { useEffect } from 'react';
import { useState} from 'react';
import {data} from '../data';

const arrlist = data.split(' ');

const randomWord = (arr) => {
    const index = Math.floor(Math.random() * arr.length)
    const word = arr[index]
    return word;
}

let currentWord = randomWord(arrlist)
let submitted = false

// l O C A L  S T O R A G E 
const json_highscores = localStorage.getItem('scores')
const highscores = JSON.parse(json_highscores) || [];


// render ( )
const Main = () => {
    const [input, setInput] =  useState('');
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(5)
    const [userscores, setUserscores] = useState(highscores)

    const changeHandler = (e) => {
        setInput(e.target.value)
        submitted= false
    }
    
    const submitHandler = (e) => {
        e.preventDefault()
        setInput('')
        submitted = true
        input === currentWord ? setScore(score+5) : setScore(score - 2)
        if(submitted) currentWord = randomWord(arrlist)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            if(time === 0) {
                clearInterval(timer)
                const name = prompt('enter your name')
                const curScore = [...userscores]
                curScore.push({name: name, score: score})
                setUserscores(curScore)
            }
            else setTime(time-1)
        }, 1000);
        return () => clearInterval(timer)
    }, [time])

    useEffect(() => {
        localStorage.setItem('scores', JSON.stringify(userscores))
    }, [userscores])

  return (
    <div className='text-center mt-5'>
        <p>Time: <span className='text-primary'>{time}</span></p>
        <p >Score : <span className='text-primary'> {score}</span></p>
        <div className="">
           <h3>{currentWord}</h3> 
        </div>
        <form onSubmit={submitHandler}>
            <input type="text" value={input} onChange={changeHandler}/>
        </form>
    </div>
  )
}

export default Main