const test = document.getElementById("container_login");
const test2 = document.getElementById("open");
const test3 = document.getElementById("close");

test2.addEventListener("click", () => {
  test.classList.add("show");
});

test3.addEventListener("click", () => {
  test.classList.remove("show");
});
