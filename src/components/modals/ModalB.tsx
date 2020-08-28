import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import Modal from 'react-bootstrap/Modal'
import { IContactsParams } from '../../common/interfaces'
import { contactsOperations } from '../../store/modules/contacts'
import { ModalsHeader } from '../modals'
import { ContactsOverview } from '../contacts'

interface IModalBDispatchProps {
    fetchContacts: (params?: IContactsParams) => void
    fetchNextContacts: (params?: IContactsParams) => void
}
type IModalBProps = IModalBDispatchProps

const ModalB: React.FunctionComponent<IModalBProps> = ({ fetchContacts, fetchNextContacts }) => {
    const params: IContactsParams = {
        countryId: 226
    }

    useEffect(() => {
        fetchContacts(params)
    }, [fetchContacts, params])

    const handleScroll = (event: React.UIEvent) => {
        const target = event.target as Element
        if (target.scrollTop >= target.scrollHeight - target.clientHeight) {
            fetchNextContacts(params)
        }
    }

    return (
        <Modal show size="lg">
            <ModalsHeader title="B" />
            <Modal.Body>
                <Scrollbars onScroll={handleScroll} style={{ height: '25em' }}>
                    <ContactsOverview />
                </Scrollbars>
            </Modal.Body>
        </Modal>
    )
}

const mapDispatchToProps = (dispatch: any): IModalBDispatchProps => {
    return {
        fetchContacts: (params?: IContactsParams) => dispatch(contactsOperations.fetchContacts(params)),
        fetchNextContacts: (params?: IContactsParams) => dispatch(contactsOperations.fetchNextContacts(params))
    }
}

export default connect(undefined, mapDispatchToProps)(ModalB)