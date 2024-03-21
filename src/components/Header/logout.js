const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/';

export async function logout() {
    return fetch(`${baseUrl}logout/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
      })
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          throw new Error('something went wrong');
        }
      })
  }