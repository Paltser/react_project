import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/ExpenseItem";

function App() {
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
    return (
        <div className="App">
            <ExpenseItem expeseData={expenses[0]}></ExpenseItem>
            <ExpenseItem expeseData={expenses[1]}></ExpenseItem>

        </div>
    );
}

export default App;
