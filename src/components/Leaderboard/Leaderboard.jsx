import { useState, useEffect } from 'react';
import './leaderboard.css';
import { players } from '../../data/leaderboardDummyData';

export function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const data = players.sort(function(a, b){return b.points - a.points}).slice(0, 10);
    setLeaderboardData(data);
    console.log(data)
  }, []);

  return (
    <div className='leaderboardContainer'>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((player, index) => (
            <tr key={player.id}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
