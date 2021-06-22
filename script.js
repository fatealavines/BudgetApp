// Create references to HTML elements
let monthlyBudget = document.getElementById ("monthly_budget");
let incomeInput = document.getElementById ("income_input");
let updateBudgetButton = document.getElementById ("update_budget");

//Create variables for storing data
let monthlyIncome = 0;
let expenses = []; // An array of objects
let expensesTotal=0;
let balance = 0;

//Build a function that saves the monthly budget
// then displays that value in the UI
function updateBudget(event) {
    console.log ("Update budget function fired.");
    event.preventDefault();
    monthlyIncome = parseFloat (incomeInput.value); // Parse the string value to a number
    monthlyBudget.innerText = "$" + monthlyIncome;
    updateBalance ()
}
// Get the remaining balance paragraph from the HTML
let remainingBalance = document.getElementById("remaining_balance");
// Add the update budget function to the update button
//as an onclick handler
updateBudgetButton.onclick = updateBudget;

// Write a function that compares the current value of the 
// monthly budget and the total expenses, then shows the 
//difference in the UI
//The difference should be red if negative; otherwise green
function updateBalance() {
    console.log ("Update balance function fired!");
    balance = monthlyIncome - expensesTotal;
    remainingBalance.innerText = "$" + balance;
    if (balance < 0) {
     console.log ("Balance is negative");
     remainingBalance.classList.remove("green");
     remainingBalance.classList.add ("red");
    } else {
     console.log ( "Balance is not negative");
     remainingBalance.classList.remove ("red");
     remainingBalance.classList.add ("green");
    }
}

// Create referneces to add expense form elements
let nameInput = document.getElementById ("name_input");
let amountInput = document.getElementById ("amount_input");
let addExpenseButton = document.getElementById ("add_expense");

//Create references to expense list  and expense total
let expenseList = document.getElementById("expense_list"); //The is a DIV
let totalExpenses = document.getElementById ("total_expenses");

//Write a function that adds expense items to our expense list
// This should also update the UI appropriately
function addExpense(event) {
    console.log("Add Expense function fired.");
    event.preventDefault();
    //Build an object from the input values
    let expense = {
        name:nameInput.value,  //String
        amount: parseFloat(amountInput.value) //Need to convert the string to a number
    };
    //Add the expense to the UI
    let newExpense = document.createElement("p");
    newExpense.innerText = expense.name + ": $"+ expense.amount;
    expenseList.appendChild(newExpense);
    // Add the new expense object to the expenses array
    expenses.push(expense);
    updateExpenseTotal();
}

//Add the above function to the add expense button
addExpenseButton.onclick = addExpense;

//Write a function that loops through the expenses
//determines the total and reports it to the UI
function updateExpenseTotal() {
    console.log ("Update expense total function fired.");
    console.log ("Here are  my expenses:", expenses);
    expensesTotal = 0;
    //Loop through all of the objects  in the expenses array 
    //Add the amounts together
    for (let i =0; i < expenses.length; i++){
        expensesTotal = expensesTotal + expenses[i].amount;
    }
    totalExpenses.innerText = "$"+ expensesTotal;
    updateBalance();

}
