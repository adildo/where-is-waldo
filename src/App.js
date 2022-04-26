import './App.css';
import Level from './components/Level';
import React, { useEffect, useState } from 'react';
import { db, storage } from './Firebase';
import { collection, getDocs } from 'firebase/firestore'
import { ref, getDownloadURL } from 'firebase/storage'
import Nav from './components/Nav';
import { HashRouter , Route, Routes } from 'react-router-dom';
import ScoreBoard from './components/ScoreBoard';




function App() {
  const [gameData, setGameData] = useState(null)
  const [logo, setLogo] = useState(null)

  const colRef = collection(db, 'gameData')

  useEffect(() => {
    getDownloadURL(ref(storage, 'game-logo.jpeg')).then(img => {
      setLogo(img)
      console.log(img)
    })
    getDocs(colRef)
    .then((snapshot) => {
        setGameData(snapshot.docs[0].data().level1)
        console.log(snapshot.docs[0].data().level1)
    })
    .catch(error => console.log('nothing found there'))
},[])
  
  return (
    <HashRouter>
      <div id='app'>
        <div>{logo ? <Nav logo={logo}/> :  null }</div>
        <Routes>
            <Route path='/' exact element={<Level gameData={gameData} />} />
            <Route path='/scoreBoard' exact element={<ScoreBoard gameData={gameData} />} />
        </Routes>
        <footer>Footer</footer>
      </div>
    </HashRouter>
  );
}

export default App;
