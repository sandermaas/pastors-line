import React from 'react'
import Button from 'react-bootstrap/Button'

const MainButtons: React.FunctionComponent = () => {
    return (
        <main className="d-flex align-items-center justify-content-sm-center" style={{ height: '80vh' }}>
            <div className="d-flex justify-content-sm-between" style={{ width: '30%' }}>
                <Button 
                    href="/A"
                    variant="primary"
                >A</Button>
                 <Button 
                    href="/B"
                    variant="secondary"
                >B</Button>
            </div>
        </main>
    )
}


export default MainButtons