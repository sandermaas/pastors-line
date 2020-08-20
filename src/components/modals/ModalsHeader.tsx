import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

interface IModalsHeaderProps {
    title: string
}

const ModalsHeader: React.FunctionComponent<IModalsHeaderProps> = ({ title }) => {
    return (
        <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
            <Nav justify>
                <Nav.Item>
                    <Button href="/A">All Contacts</Button>
                </Nav.Item>
                <Nav.Item>
                    <Button href="/B">US Contacts</Button>
                </Nav.Item>
                <Nav.Item>
                    <Button href="/">Close</Button>
                </Nav.Item>
            </Nav>
        </Modal.Header>
    )
}

export default ModalsHeader