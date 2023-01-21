import {useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import {useSelector, useDispatch} from 'react-redux'
import {getCatsFetch} from "./catSlice.js";

function App() {
    const cats = useSelector(state => state.cats.cats)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCatsFetch())
    }, [dispatch])

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
                <h3>CAT SPECIES GALLERY</h3>
                {cats.map (cat => <p key={cat.id}>{cat.name}</p>)}

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
