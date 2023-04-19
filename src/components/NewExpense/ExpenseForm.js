import "./ExpenseForm.css";
import React, {useState} from "react";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [editFrom, setFormEdit] = useState(false);

    const titlechangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountchangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const datechangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const newExpenseHandler = (event) => {
        event.preventDefault()
        setFormEdit(true)
    }
    const cancelHandler = (event) => {
        event.preventDefault()
        setFormEdit(false)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        setFormEdit(false)
    }

    if (editFrom) {
        return (
            <form onSubmit={submitHandler}>
                <div className={'new-expense__controls'}>
                    <div className={'new-expense__control'}>
                        <label>Title</label>
                        <input type={'text'} onChange={titlechangeHandler} value={enteredTitle}/>
                    </div>
                    <div className={'new-expense__control'}>
                        <label>Amount</label>
                        <input type={'number'} min={'0'} step={'0.01'} onChange={amountchangeHandler}
                               value={enteredAmount}/>
                    </div>
                    <div className={'new-expense__control'}>
                        <label>Date</label>
                        <input type={'date'} min={'2020-01-01'} max={'2025-12-31'} onChange={datechangeHandler}
                               value={enteredDate}/>
                    </div>
                </div>
                <div className={'new-expense__actions'}>
                    <button type={'button'} onClick={cancelHandler}>Cancel</button>
                    <button type={'submit'}>Add Expense</button>
                </div>
            </form>
        )
    } else {
        return (
            <form >
                <button type={"button"} onClick={newExpenseHandler}>Add New Expense</button>
            </form>
        )
    }
}

export default ExpenseForm;