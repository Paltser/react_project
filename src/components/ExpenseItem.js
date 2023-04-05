import './ExpenseItem.css';

function ExpenseItem(props) {
    console.log(props);

    return (
        <div className={'expense-item'}>
            <div>{props.expeseData.date.toString()}</div>
            <div className={'expense-item__description'}>
                <h2>{props.expeseData.title}</h2>
                <div className={'expense-item__price'}>{props.expeseData.price}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;