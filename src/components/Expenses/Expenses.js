import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {

    props.expenses.map(expense => console.log(expense.date));


    const ExpenseFilterHandler = (selectedYear) => {
        console.log(selectedYear)
    }
    return (
        <Card className={'expenses'}>
            <ExpensesFilter onExpenseFilter={ExpenseFilterHandler}/>
            <ExpenseItem expenseData={props.expenses[0]}/>
            <ExpenseItem expenseData={props.expenses[1]}/>
        </Card>
    );
}

export default Expenses;
