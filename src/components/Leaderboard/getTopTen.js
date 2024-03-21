const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/';
export async function getTopTen() {
  try {
    const respone = await fetch(`${baseUrl}leaderboard`);
    const topTen = await respone.json();
    const topTenSorted = [...topTen].sort((a, b) => b.points - a.points).slice(0, 10);
    return topTenSorted;
  } catch (error) {
    throw new Error('Something went wrong' + error.message);
  }
}