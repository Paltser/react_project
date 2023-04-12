import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
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
        },
        {
            date: new Date(2023, 0, 10),
            title: 'Flip flops',
            price: 10.99,
        }
    ]
    return (
        <div className="App">
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
