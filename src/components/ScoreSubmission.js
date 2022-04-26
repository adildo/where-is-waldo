import React, {useEffect} from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../Firebase';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function ScoreSubmission({time, setTime, foundChars, setFoundChars}) {

    const navigate = useNavigate()

    const resetGame = () => {
        setTime(0)
        setFoundChars([])
    }

    const recordScore = async (e) => {
        console.log(e.target.name.value, time)
        e.preventDefault()
        const docRef = await addDoc(collection(db, "UsersScores"), {
            name: e.target.name.value,
            score: time
        });
        console.log("Document written with ID: ", docRef.id);
        e.target.reset()
        setTime(0)
        setFoundChars([])
        navigate("/scoreBoard");
    }

  useEffect(()=> {

  },[])

    
  return (
    <form onSubmit={recordScore} id='scoreSubmission'>
        <button onClick={resetGame}>X and try again</button>
        <input type="hidden" id="score" name="score" value={time}/>
        <p>You found all character in {time} Seconds</p>
        <label htmlFor="name">Enter name to record your result</label>
        <input id='name' name='name' required placeholder='Adildo'></input>
        <button type='submit'>Submit</button>
    </form>
  );
}

export default ScoreSubmission;