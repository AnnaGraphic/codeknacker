export async function LoginUser({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "Harry" && password === "123") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
