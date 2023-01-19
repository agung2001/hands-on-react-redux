import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {useSelector, useDispatch} from 'react-redux';
import {addTopping} from "./pizzaSlice.js";

function App() {
    const pizza = useSelector(state => state.pizza);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo"/>
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                {pizza.toppings.map(topping => (
                    <div key={topping}>{topping}</div>
                ))}

                <button onClick={() => dispatch(addTopping('cheese'))}>
                    Add Cheese
                </button>

                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
