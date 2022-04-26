import React from 'react';
import { capitalize } from 'lodash';


function DropList({currentCords, displayDropList, setDisplayDropList, foundChars, setFoundChars, gameData}) {

    //add Character to found list
    const addToFoundList = (character) => {
        setFoundChars((foundChars) => [...foundChars, character])
        console.log('You found ' + character + " and " + character + " is add to found List")
    }

    const isFound = (character) =>{
        return (currentCords[0] > gameData.Characters[character].cordsX - 25 
            && currentCords[0] < gameData.Characters[character].cordsX + 25) && 
            (currentCords[1] > gameData.Characters[character].cordsY - 25 
            && currentCords[1] < gameData.Characters[character].cordsY + 25)
    }
    //check if the chosen character matching with the chosen cords.
    const checkMatch = (e) => {  
        const chosenCharacter = e.target.dataset.name
        console.log('chosen Character: ', chosenCharacter)
        setDisplayDropList('none')
            if (isFound(chosenCharacter)) {
                addToFoundList(chosenCharacter)
            }
            return console.log('You did not find ' + chosenCharacter)
    }

  return (
    <div
    className='dropList'
    style={{
        display: `${displayDropList}`,
        left: `${currentCords[0]}px`,
        top: `${currentCords[1]}px`}}>
            {Object.entries(gameData.Characters)
            .map((item,index) => {
                return (
                <div key={index} data-name={item[0]} onClick={checkMatch} className="charPic">
                    <p data-name={item[0]}>{capitalize(item[0])}</p>
                    <img data-name={item[0]} src={item[1].image} alt={item[0]} />
                </div>
                )
            })}
    </div>
  );
}

export default DropList;