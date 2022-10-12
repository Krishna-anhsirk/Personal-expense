const btnAddExpense = document.getElementById("btn-add");
const inputAmount = document.querySelector("#expense-amount");
const headingElement = document.querySelector(".total-expense");
const expenseName = document.querySelector("#expense-name");
const expenseTable = document.querySelector("#expense-table");

let totalExpense = 0;
headingElement.textContent = totalExpense;

const allExpenses = [];

function addExpense() {
  const textAmount = Number(inputAmount.value);
  const textDesc = expenseName.value;
  totalExpense = totalExpense + textAmount;
  headingElement.textContent = totalExpense;
  allExpenses.push({ expenseAmount: textAmount, expenseName: textDesc });

  const allExpensesHTML = allExpenses.map((expense) => {
    return `<div>${textDesc}::${textAmount}</div>`;
  });

  const joinedAllExpensesHTML = allExpensesHTML.join(" ");
  expenseTable.innerHTML = joinedAllExpensesHTML;
}

btnAddExpense.addEventListener("click", addExpense, false);
