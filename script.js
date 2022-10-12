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
  allExpenses.push({ desc: textDesc, amount: textAmount, moment: new Date() });

  renderExpenses(allExpenses);
}

//Controller functions

//To get date as string

function getDateString(momento) {
  return momento.toLocaleDateString("en-US", {
    year: "numeric",
    day: "numeric",
    month: "long",
  });
}

//To delete item

function deleteItem(dateValue) {
  for (let i = 0; i < allExpenses.length; i++) {
    if (dateValue === allExpenses[i].moment.valueOf()) {
      allExpenses.splice(i, 1);
    }
  }

  // Commenting out becuase it is not deleting more than one Element. It is only deleting single element and the original reference is to original array and we are not removing from that array
  //   const filteredArray = allExpenses.filter((expense) => {
  //     expense.moment.valueOf() !== dateValue;
  //   });

  renderExpenses(allExpenses);
}

//To render the expense list

function renderExpenses(arrOfList) {
  const allExpensesHTML = arrOfList.map((expense) => listItemHTML(expense));
  const joinedAllExpensesHTML = allExpensesHTML.join(" ");
  expenseTable.innerHTML = joinedAllExpensesHTML;
}

//To get listItem HTML

function listItemHTML({ desc, amount, moment }) {
  return `
    <li class="list-group-item d-flex justify-content-between">
              <div class="d-flex flex-column">
                ${desc}
                <small class="text-muted">${getDateString(moment)}</small>
              </div>
              <div>
                <span class="px-5"> ${amount} </span>
                <button type="button" class="btn btn-outline-danger btn-sm" 
                 onclick = "deleteItem(${moment.valueOf()})">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            </li>
            `;
}

btnAddExpense.addEventListener("click", addExpense, false);
