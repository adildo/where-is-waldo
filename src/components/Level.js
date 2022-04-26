import React, { useState } from 'react';
import { capitalize } from 'lodash';
import DropList from './DropList';
import Timer from './Timer';
import ScoreSubmission from './ScoreSubmission';

function Level({gameData}) {

    const [currentCords, setCurrentCords] = useState([100, 100])
    const [displayDropList, setDisplayDropList] = useState('none')
    const [foundChars, setFoundChars] = useState([])
    const [time, setTime] = useState(0)
    
    //Choose the cords in the image, open the dropList, 
    const chooseCords = (e) => {
        const xCords = e.pageX - e.target.parentNode.offsetLeft
        const yCords = e.pageY - e.target.parentNode.offsetTop
        console.log('X cord: ',  xCords, 'Y cord: ', yCords)
        setCurrentCords([xCords, yCords])
        setDisplayDropList('flex')
    }

  return (
    <div id='level'>{gameData ? 
        <div>
            <Timer time={time} setTime={setTime} foundChars={foundChars}/>
            <p>Find the following:</p>
            <div>{gameData &&
                <div className='chars'>{ Object.keys(gameData.Characters).map((item,index) => {
                    return (
                    <div
                    key={index}
                    style={(foundChars.includes(item)) ? {backgroundColor: 'green', opacity: 0.50} : {backgroundColor: 'red'}}
                    className="charPic"
                    data-name={item}>
                        <p>{capitalize(item)}</p>
                        <img src={gameData.Characters[item].image} alt={item} />
                    </div>
                )})}
                </div>
                }
            </div>
            <div style={{position: 'relative'}}>
                <img src={gameData.image} onClick={chooseCords} alt='level1'/>
                < DropList
                        currentCords={currentCords}
                        setDisplayDropList={setDisplayDropList}
                        displayDropList={displayDropList}
                        setFoundChars={setFoundChars}
                        foundChars={foundChars}
                        setTime={setTime}
                        gameData={gameData}
                />
            </div>
            <div>{foundChars.length > (Object.keys(gameData.Characters).length - 1) ?
                <ScoreSubmission
                    foundChars={foundChars}
                    setFoundChars={setFoundChars}
                    time={time}
                    setTime={setTime}
                />
                : null }
            </div>
        </div> : <p style={{fontSize: '4em'}}>loading...</p>}
    </div>
  );
}

export default Level;