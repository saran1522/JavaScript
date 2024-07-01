const box = document.querySelector(".box");
const text = document.querySelector("input");
const body = document.querySelector("body");
text.addEventListener("keyup", (e) => {
  const bgColor = text.value;
  body.style.backgroundColor = bgColor;
  setTimeout(() => {
    body.style.backgroundColor = "white";
    text.value = "";
  }, 3000);
});
