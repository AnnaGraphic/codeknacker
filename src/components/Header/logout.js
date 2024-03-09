export async function logout() {
    return fetch('http://localhost:3000/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then((response) => {
        if (response.status === 200) {
          // yay!
          // TODO: handle success
        } else {
          throw new Error('something went wrong');
        }
      })
  }