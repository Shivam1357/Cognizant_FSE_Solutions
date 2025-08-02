import React from 'react';

const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];

// Destructuring
const [odd1, odd2, odd3] = T20Players;
const [even1, even2, even3] = RanjiTrophyPlayers;

// Merge arrays using Spread Operator
const allPlayers = [...T20Players, ...RanjiTrophyPlayers];

const IndianPlayers = () => {
  return (
    <div>
        <h2>Odd Players</h2>
        <OddPlayers players={allPlayers}/>

        <hr/>
        <h2>Even Players</h2>
        <EvenPlayers players={allPlayers}/>

        <hr/>
        <h2>List of Indian Players Merged:</h2>
        <ul>
            {allPlayers.map((name, idx) => (
            <li key={idx}>{name}</li>
            ))}
        </ul>
    </div>
  );
};


function OddPlayers({ players: [first, , third, , fifth] }){
    return (
        <ul>
            <li> First: {first}</li>
            <li> Third: {third}</li>
            <li> Fifth: {fifth}</li>
        </ul>
    );
}

function EvenPlayers({ players: [, second, , fourth, , sixth] }){
    return (
        <ul>
            <li> Second: {second}</li>
            <li> Fourth: {fourth}</li>
            <li> Sixth: {sixth}</li>
        </ul>
    );
}



export default IndianPlayers;
