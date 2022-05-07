import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import { useState } from 'react';

const FAKE_EXPENSES = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: "e2",
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 2, 12),
    },
    {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

function App() {
    const [expenses, setExpenses] = useState(FAKE_EXPENSES);

    const addExpenseHandler = expense => {
        /**** "Easy way" to update state */
        // setExpenses([expense, ...expenses]); 

        /**** Better way when updating state with previous state snapshot */
        setExpenses(prevExpenses => [expense, ...prevExpenses]);
    }

    /***** JXS under the hood mechanism *****/ 
        // import React from 'react';

        // return React.createElement(
        //     'div',
        //     {},
        //     React.createElement('h2', {}, "Let's get started!"),
        //     React.createElement(Expenses, { item: expenses })
        // );

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    ); 
}

export default App;
