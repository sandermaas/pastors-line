import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import { ModalContent } from '../modals'

interface IModalAStateProps {
    isOpenA: boolean
}
type IModalAProps = IModalAStateProps

const ModalA: React.FunctionComponent<IModalAProps> = ({ isOpenA }) => {
    return (
        <Modal show={isOpenA}>
            <Modal.Header>
                <Modal.Title>A</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalContent />
            </Modal.Body>
        </Modal>
    )
}

const mapStateToProps = (state: any): IModalAStateProps => {
    return {
        ...state.modalsReducer
    }
}

export default connect(mapStateToProps)(ModalA)