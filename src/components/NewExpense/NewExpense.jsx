import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = expenseDataInput => {
        const expenseData = {
            ...expenseDataInput,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);

        // console.log(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
};

export default NewExpense;