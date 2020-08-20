import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import { ModalContent } from '../modals'

interface IModalAStateProps {
    isOpen: boolean
}
type IModalAProps = IModalAStateProps

const ModalA: React.FunctionComponent<IModalAProps> = ({ isOpen }) => {
    return (
        <Modal show={isOpen}>
            <Modal.Header>
                <Modal.Title>A</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalContent />
            </Modal.Body>
        </Modal>
    )
}

// const mapStateToProps = (state: any): IModalAStateProps => {
//     console.log('MODAL A STATE')
//     console.log(state)
//     return {
//         ...state.modalsReducer
//     }
// }

const mapStateToProps = (state: any) =>({
    isOpen: state.modalsState.modalA
})

export default connect(mapStateToProps)(ModalA)