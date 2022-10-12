let counter = -1;
const clickNumber = document.getElementById("click-number");
clickNumber.addEventListener("click", () => {
  counter++;
  console.log(counter);
});
