import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

import { useState } from 'react';

function Expenses(props) {
    const [year, setYear] = useState('2021');

    const changeYear = (year) => setYear(year);

    const filteredExpenses = props.items.filter((expense) => {
        const expenseYear = expense.date.getFullYear().toString();
        return expenseYear === year;
    });

    return (
        <>
            <Card className="expenses">
                <ExpensesFilter year={year} onYearChange={changeYear} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} year={year} />

                {/* {filteredExpenses.length === 0 && <p>No expenses in {year}.</p>}
                {filteredExpenses.length > 0 &&
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))} */}

                {/* {filteredExpenses.length === 0 ? (
                    <p>No expenses in {year}.</p>
                ) : (
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))
                )} */}
            </Card>
        </>
    );
}

export default Expenses;
