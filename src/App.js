import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
    const expenses = [
        {
            date: new Date(2023, 0, 10),
            title: 'New book',
            price: 30.99,
        },
        {
            date: new Date(2023, 0, 10),
            title: 'New jeans',
            price: 90.99,
        }
    ]

    const addExpenseHandler = (expense) => {
        console.log('In App.js')
        console.log(expense)
    }
    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses expenses={expenses}></Expenses>
        </div>
    );
}

export default App;
