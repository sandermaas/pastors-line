import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { TopNavigation } from './components/navigation'
import { MainButtons } from './components/main'
import { ModalA, ModalB, ModalC } from './components/modals'

const App: React.FunctionComponent = () => {
    return (
        <Router>
            <TopNavigation />
            <MainButtons />
        
            <Switch>
                <Route path="/A">
                    <ModalA />
                    <ModalC />
                </Route>
                <Route path="/B">
                    <ModalB />
                    <ModalC />
                </Route>
            </Switch>
        </Router>
    )
}

export default App