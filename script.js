const btnAddExpense = document.getElementById("btn-add");
const inputAmount = document.querySelector("#input-amount");
const headingElement = document.querySelector(".total-expense");

let totalExpense = 0;
headingElement.textContent = totalExpense;

function addExpense() {
  const expense = Number(inputAmount.value);
  totalExpense = totalExpense + expense;
  headingElement.textContent = totalExpense;
}

btnAddExpense.addEventListener("click", addExpense, false);
