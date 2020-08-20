import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { ModalType } from '../../common/enums'
import { modalsOperations } from '../../store/modules/modals'

interface IMainButtonsDispatchProps {
    openModal: (modalType: ModalType) => void
}
type IMainButtonsProps = IMainButtonsDispatchProps

const MainButtons: React.FunctionComponent<IMainButtonsProps> = ({ openModal }) => {
    return (
        <main className="d-flex flex-column">
            <Button 
                href="/A"
                variant="primary"
                // onClick={() => openModal(ModalType.A)}
            >A</Button>
            <Button 
                href="/B"
                variant="secondary"
                // onClick={() => openModal(ModalType.B)}
            >B</Button>
        </main>
    )
}

const mapDispatchToProps = (dispatch: any): IMainButtonsDispatchProps => {
    return {
        openModal: (modalType: ModalType) => dispatch(modalsOperations.openModal(modalType))
    }
}

export default connect(undefined, mapDispatchToProps)(MainButtons)