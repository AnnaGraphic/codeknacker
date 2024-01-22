export async function LoginUser({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "harry" && password === "123") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
