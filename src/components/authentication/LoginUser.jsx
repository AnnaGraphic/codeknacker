export async function LoginUser({ username, password }) {
  console.log('login')
  return fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then((response) => {
      if (response.status === 200) {
        // yay!
      } else {
        this.setState({error: 'pwd or username incorrect'})
      }
    })
}