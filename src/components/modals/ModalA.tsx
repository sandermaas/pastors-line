import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import Modal from 'react-bootstrap/Modal'
import { IContactsParams } from '../../common/interfaces'
import { contactsOperations } from '../../store/modules/contacts'
import { ModalsHeader, ModalsSearch, ModalFooter } from '../modals'
import { ContactsOverview } from '../contacts'

interface IModalADispatchProps {
    fetchContacts: (params?: IContactsParams) => void
    fetchNextContacts: (params?: IContactsParams) => void
}
type IModalAProps = IModalADispatchProps

const ModalA: React.FunctionComponent<IModalAProps> = ({ fetchContacts, fetchNextContacts }) => {
    useEffect(() => {
        fetchContacts()
    }, [fetchContacts])

    const handleSearch = (query: string) => {
        fetchContacts({
            query
        })
    }

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
                <ModalsSearch onSearch={handleSearch} />
                <Scrollbars onScroll={handleScroll} style={{ height: '18em', marginTop: '1em' }}>
                    <ContactsOverview />
                </Scrollbars>
            </Modal.Body>
            <ModalFooter />
        </Modal>
    )
}

const mapDispatchToProps = (dispatch: any): IModalADispatchProps => {
    return {
        fetchContacts: (params?: IContactsParams) => dispatch(contactsOperations.fetchContacts(params)),
        fetchNextContacts: (params?: IContactsParams) => dispatch(contactsOperations.fetchNextContacts(params))
    }
}

export default connect(undefined, mapDispatchToProps)(ModalA)