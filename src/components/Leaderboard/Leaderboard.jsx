import './leaderboard.css';
import { useLoaderData } from 'react-router-dom';
 
export function Leaderboard() {
  // load data from loader before rendering:
  const leaderboardData = useLoaderData();

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
