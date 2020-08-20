import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { ModalType } from '../../common/enums'
import { modalsOperations } from '../../store/modules/modals'

interface IModalsHeaderDispatchProps {
    closeModals: () => void,
    openModal: (modalType: ModalType) => void
}
interface IModalsHeaderOwnProps {
    title: string
}
type IModalsHeaderProps = IModalsHeaderDispatchProps & IModalsHeaderOwnProps

const ModalsHeader: React.FunctionComponent<IModalsHeaderProps> = ({ closeModals, openModal, title }) => {
    return (
        <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
            <Nav justify>
                <Nav.Item>
                    <Button onClick={() => openModal(ModalType.A)}>All Contacts</Button>
                </Nav.Item>
                <Nav.Item>
                    <Button onClick={() => openModal(ModalType.B)}>US Contacts</Button>
                </Nav.Item>
                <Nav.Item>
                    <Button onClick={() => closeModals()}>Close</Button>
                </Nav.Item>
            </Nav>
        </Modal.Header>
    )
}

const mapDispatchToProps = (dispatch: any): IModalsHeaderDispatchProps => {
    return {
        closeModals: () => dispatch(modalsOperations.closeModals()),
        openModal: (modalType: ModalType) => dispatch(modalsOperations.openModal(modalType))
    }
}

export default connect(undefined, mapDispatchToProps)(ModalsHeader)