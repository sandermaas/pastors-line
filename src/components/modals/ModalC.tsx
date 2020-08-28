import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { IContact } from '../../common/interfaces'

interface IModalCStateProps {
    contact?: IContact
    isOpen: boolean
}
type IModalCProps = IModalCStateProps

const ModalC: React.FunctionComponent<IModalCProps> = ({ contact, isOpen }) => {
    return (
        <Modal show={isOpen} size="lg">
            <Modal.Header>
                <Modal.Title>C</Modal.Title>
            </Modal.Header>
            <Modal.Body as={Container}>
                <Row>
                    <Col>Last Name</Col>
                    <Col>First Name</Col>
                </Row>
                <Row>
                    <Col>{contact?.last_name}</Col>
                    <Col>{contact?.first_name}</Col>
                </Row>
                <Row>
                    <Col>Address</Col>
                    <Col>Country</Col>
                </Row>
                <Row>
                    <Col>{contact?.address}</Col>
                    <Col>{contact?.country.iso}</Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}

const mapStateToProps = (state: any): IModalCStateProps => ({
    contact: state.modalsState.modalC.contact,
    isOpen: state.modalsState.modalC.open
})

export default connect(mapStateToProps)(ModalC)