import React from 'react'
import { TopNavigation } from './components/navigation'
import { MainButtons } from './components/main'
import { ModalA, ModalB } from './components/modals'

const App: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <TopNavigation />

            <MainButtons />

            <ModalA />
            <ModalB />
        </React.Fragment>
    )
}

export default App