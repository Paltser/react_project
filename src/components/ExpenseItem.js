import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';

function ExpenseItem(props) {
    return (
        <div className={'expense-item'}>
            <ExpenseDate date={props.expeseData.date}></ExpenseDate>
            <div className={'expense-item__description'}>
                <h2>{props.expeseData.title}</h2>
                <div className={'expense-item__price'}>{props.expeseData.price}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;