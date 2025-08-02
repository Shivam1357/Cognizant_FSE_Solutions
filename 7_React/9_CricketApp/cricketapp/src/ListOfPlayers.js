import React from 'react';

const players = [
  { name: 'Virat', score: 85 },
  { name: 'Rohit', score: 95 },
  { name: 'Gill', score: 45 },
  { name: 'Rahul', score: 67 },
  { name: 'Pant', score: 50 },
  { name: 'Hardik', score: 60 },
  { name: 'Jadeja', score: 72 },
  { name: 'Ashwin', score: 55 },
  { name: 'Shami', score: 68 },
  { name: 'Bumrah', score: 92 },
  { name: 'Surya', score: 99 },
];

const ListofPlayers = () => {
  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players:</h2>
      <ul>
        {players.map((item, index) => (
          <li key={index}>
            Mr. {item.name} : <span>{item.score}</span>
          </li>
        ))}
      </ul>
      <hr/>

      <h3>List of Players having scores Less than 70:</h3>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};




export default ListofPlayers;
