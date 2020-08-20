import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { ModalType } from '../../common/enums'
import { modalsActionCreators } from '../../store/modules/modals'

interface IModalContentDispatchProps {
    closeModals: () => void,
    openModal: (modalType: ModalType) => void
}
type IModalContentProps = IModalContentDispatchProps

const ModalContent: React.FunctionComponent<IModalContentProps> = ({ closeModals, openModal }) => {
    return (
        <div>
            <Button onClick={() => openModal(ModalType.A)}>All Contacts</Button>
            <Button onClick={() => openModal(ModalType.B)}>US Contacts</Button>
            <Button onClick={() => closeModals()}>Close</Button>
        </div>
    )
}

const mapDispatchToProps = (dispatch: any): IModalContentDispatchProps => {
    return {
        closeModals: () => dispatch(modalsActionCreators.closeModals()),
        openModal: (modalType: ModalType) => dispatch(modalsActionCreators.openModal(modalType))
    }
}

export default connect(undefined, mapDispatchToProps)(ModalContent)