import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import { ModalContent } from '../modals'

interface IModalBStateProps {
    isOpenB: boolean
}
type IModalBProps = IModalBStateProps

const ModalB: React.FunctionComponent<IModalBProps> = ({ isOpenB }) => {
    return (
        <Modal show={isOpenB}>
            <Modal.Header>
                <Modal.Title>B</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalContent />
            </Modal.Body>
        </Modal>
    )
}

const mapStateToProps = (state: any): IModalBStateProps => {
    return {
        ...state.modalsReducer
    }
}

export default connect(mapStateToProps)(ModalB)