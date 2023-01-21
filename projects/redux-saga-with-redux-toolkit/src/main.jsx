import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/** Setup Redux */
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit'
import catsReducer from './catSlice.js'
import catSaga from './catSaga.js'

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        cats: catsReducer
    },
    middleware: [sagaMiddleware]
})
sagaMiddleware.run(catSaga)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)
