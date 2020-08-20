import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import { ModalsHeader } from '../modals'

interface IModalBStateProps {
    isOpen: boolean
}
type IModalBProps = IModalBStateProps

const ModalB: React.FunctionComponent<IModalBProps> = ({ isOpen }) => {
    return (
        <Modal show={isOpen} size="lg">
            <ModalsHeader title="B" />
            <Modal.Body>
                
            </Modal.Body>
        </Modal>
    )
}

const mapStateToProps = (state: any) =>({
    isOpen: state.modalsState.modalB
})

export default connect(mapStateToProps)(ModalB)