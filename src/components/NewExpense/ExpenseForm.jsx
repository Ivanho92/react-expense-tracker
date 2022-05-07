import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
    /**** Managing states ****/
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = (e) => setTitle(e.target.value);
    const amountChangeHandler = (e) => setAmount(e.target.value);
    const dateChangeHandler = (e) => setDate(e.target.value);

    const [expanded, setExpanded] = useState(false);
    const expandToggle = () => setExpanded(!expanded);

    /**** Alternative approach to manage multiple states ****/

    // const [userInput, setUserInput] = useState({
    //   title: '',
    //   amount: '',
    //   date: ''
    // });

    //  const titleChangeHandler = e => {
    //   setUserInput(prevState => {
    //     return { ...prevState, title: e.target.value }
    //   })
    // };

    // const amountChangeHandler = e => {
    //   setUserInput(prevState => {
    //     return { ...prevState, amount: e.target.value }
    //   })
    // };

    // const dateChangeHandler = e => {
    //   setUserInput(prevState => {
    //     return { ...prevState, date: e.target.value }
    //   })
    // };

    /**** Submitting the form ****/
    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title,
            amount: +amount,
            date: new Date(date),
        };

        props.onSaveExpenseData(expenseData);

        setTitle('');
        setAmount('');
        setDate('');

        expandToggle();
    };

    if (!expanded) {
        return <button class="btn-primary" onClick={expandToggle}>Add New Expense</button>;
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={amount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={date}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button class="btn-danger" onClick={expandToggle}>Cancel</button>
                <button type="submit" class="btn-success">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
