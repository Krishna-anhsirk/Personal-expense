const btnAddExpense = document.getElementById("btn-add");
const inputAmount = document.querySelector("#input-amount");

let totalExpense = 0;
function addExpense() {
  const expense = Number(inputAmount.value);
  totalExpense = totalExpense + expense;
}

btnAddExpense.addEventListener("click", addExpense, false);
