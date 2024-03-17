export async function getTopTen() {
  try {
    const respone = await fetch('http://localhost:3000/api/leaderboard');
    const topTen = await respone.json();
    return topTen;
  } catch (error) {
    throw new Error('Something went wrong' + error.message);
  }
}