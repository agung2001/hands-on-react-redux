import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/** Setup Redux */
import { Provider } from 'react-redux'
import { combineReducers, createStore } from "redux";
import myFirstReducer from "./reducer";
const rootReducer = combineReducers({ myFirstReducer });
const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>
)
