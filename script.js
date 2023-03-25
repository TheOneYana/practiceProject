const btn = document.getElementById("btn");
const loginBtn = document.getElementById("loginBtn");

btn.addEventListener("click", function () {
  btn.style.backgroundColor === "bisque"
    ? (btn.style.backgroundColor = "rgb(12, 113, 186)")
    : (btn.style.backgroundColor = "bisque");
  btn.style.backgroundColor === "bisque"
    ? (btn.style.color = "green")
    : (btn.style.color = "bisque");
});
loginBtn.addEventListener("click", function () {
  loginBtn.style.backgroundColor === "rgb(245, 237, 4)"
    ? (loginBtn.style.backgroundColor = "crimson")
    : (loginBtn.style.backgroundColor = "rgb(245, 237, 4)");
  loginBtn.style.color === "green"
    ? (loginBtn.style.color = "white")
    : (loginBtn.style.color = "green");
});
