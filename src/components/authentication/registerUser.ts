const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/';

export async function registerUser({email, password, username}) {
  const response = await fetch(`${baseUrl}signup/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password, username}),
  }).then((res) => {
    if (res.ok) {
      return res.json()
    .then((data) => {
      throw new Error(data.error?.message || data?.message || 'Something went wrong');
    });
    }
  });
}