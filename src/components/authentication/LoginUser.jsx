const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/';

export async function LoginUser({ username, password }) {
  const response = await fetch(`${baseUrl}login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password }),
    credentials: 'include',
  })
  .then((response) => {
    if (!response.ok) {
      return response.json()
      .then(data => {
        throw new Error(data.error?.message || data?.message || 'pwd or username incorrect');
      });
    }
  });
}