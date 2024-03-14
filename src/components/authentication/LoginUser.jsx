export async function LoginUser({ username, password }) {
  return fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
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