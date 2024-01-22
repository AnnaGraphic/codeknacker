export async function LoginUser({}) {
  return new Promise(() => {
    setTimeout(() => {
      if (username === "harry" && password === "123") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
