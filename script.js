async function randomShow() {
  let p = document.querySelector(".main").querySelectorAll("p");
  for (let index = 0; index < p.length; index++) {
    const element = await p[index];
    await new Promise((resolve) => {
      setTimeout(() => {
        element.style.display = "block";
        resolve();
      }, Math.floor(Math.random() * 7000));
    });
  }
}

randomShow();
