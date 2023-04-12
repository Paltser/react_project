import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    return (
        <Card className={'expenses'}>
            <ExpenseItem expenseData={props.expenses[0]} />
            <ExpenseItem expenseData={props.expenses[1]} />
            <ExpenseItem expenseData={props.expenses[2]} />
        </Card>
    );
}

export default Expenses;
