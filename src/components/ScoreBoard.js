import React, {useEffect, useState} from 'react';
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore"; 
import { db } from '../Firebase';


function ScoreBoard({time}) {

  const [scores, setScores] = useState(null)
  const scoreRef = collection(db, 'UsersScores')
  
  const q = query(scoreRef, orderBy("score"), limit(25));

  useEffect(()=> {
    getDocs(q)
    .then((snapshot) => {
        setScores(snapshot.docs)
        console.log(snapshot.docs)

        snapshot.docs.map(item => console.log(item.data()))
    })
    .catch('nothing found there')
  },[])

    
  return (
    <div id='scoreBoard'>{scores ? 
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Time in Seconds</th>
                </tr>
            </thead>
            <tbody>{scores.map((input, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{input.data().name}</td>
                        <td>{input.data().score}</td>
                    </tr>
                )
            })}

            </tbody>
        </table>
        : <p>No One submitted their score yet</p>}
    </div>
  );
}

export default ScoreBoard;