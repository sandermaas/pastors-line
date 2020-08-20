import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import Modal from 'react-bootstrap/Modal'
import { contactsOperations } from '../../store/modules/contacts'
import { ModalsHeader } from '../modals'
import { ContactsOverview } from '../contacts'

interface IModalADispatchProps {
    fetchContacts: () => void
    fetchNextContacts: () => void
}
type IModalAProps = IModalADispatchProps

const ModalA: React.FunctionComponent<IModalAProps> = ({ fetchContacts, fetchNextContacts }) => {
    useEffect(() => {
        fetchContacts()
    }, [fetchContacts])

    const handleScroll = (event: React.UIEvent) => {
        const target = event.target as Element
        if (target.scrollTop >= target.scrollHeight - target.clientHeight) {
            fetchNextContacts()
        }
    }

    return (
        <Modal show size="lg">
            <ModalsHeader title="A" />
            <Modal.Body>
                <Scrollbars onScroll={handleScroll} style={{ height: '25em' }}>
                    <ContactsOverview />
                </Scrollbars>
            </Modal.Body>
        </Modal>
    )
}

const mapDispatchToProps = (dispatch: any): IModalADispatchProps => {
    return {
        fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
        fetchNextContacts: () => dispatch(contactsOperations.fetchNextContacts())
    }
}

export default connect(undefined, mapDispatchToProps)(ModalA)