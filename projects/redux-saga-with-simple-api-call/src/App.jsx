import reactLogo from './assets/react.svg'
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {getUserFetch} from "./actions.js";

function App() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.myFirstReducer.users);

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
                <button onClick={() => dispatch(getUserFetch())}>Get Users</button>
                <div> Users: {users.map((user) => (<div key={user.id}>{user.name}</div>) )} </div>

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
