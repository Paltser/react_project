import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('No Filter');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        if (filteredYear === 'No Filter') {
            return true; // return all expenses
        }
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className='expenses'>
            <ExpensesFilter
                selected={filteredYear}
                onFilterChange={filterChangeHandler}/>
            <ExpensesList filteredExpenses={filteredExpenses}/>
        </Card>
    );
};

export default Expenses;
