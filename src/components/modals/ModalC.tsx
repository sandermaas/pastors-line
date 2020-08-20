import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'

interface IModalCStateProps {
    isOpen: boolean
}
interface IModalCOwnProps {

}
type IModalCProps = IModalCStateProps & IModalCOwnProps

const ModalC: React.FunctionComponent<IModalCProps> = ({ isOpen }) => {
    return (
        <Modal show={isOpen} size="lg">
            <Modal.Header>
                <Modal.Title>C</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>BODY</p>
            </Modal.Body>
        </Modal>
    )
}

const mapStateToProps = (state: any): IModalCStateProps => ({
    isOpen: state.modalsState.modalC
})

export default connect(mapStateToProps)(ModalC)