import { useState, useEffect } from 'react';
import './leaderboard.css';
import { getTopTen } from './getTopTen.js';
 
export function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    async function fetchData() {
     try {
      const data = await getTopTen();
      //console.log(data);
      const sortedData = data.sort((a, b) => b.points - a.points).slice(0, 10);
      setLeaderboardData(sortedData);
     } catch (error) {
        console.error(error?.message);
      }
    }
    fetchData();
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
              <td>{player?.username}</td>
              <td>{player?.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
