import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import appStore from './store/appStore'
import App from './App'
import './CustomTheme.scss'

ReactDOM.render(
    <Provider store={appStore}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)