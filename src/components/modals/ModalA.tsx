import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import Modal from 'react-bootstrap/Modal'
import Spinner from 'react-bootstrap/Spinner'
import Table from 'react-bootstrap/Table'
import { IContactsData } from '../../common/interfaces'
import { contactsOperations } from '../../store/modules/contacts'
import { ModalsHeader } from '../modals'

interface IModalAStateProps {
    contactsData: IContactsData
    fetchingContacts: boolean
    isOpen: boolean
}
interface IModalADispatchProps {
    fetchContacts: () => void
    fetchNextContacts: () => void
}
type IModalAProps = IModalAStateProps & IModalADispatchProps

const ModalA: React.FunctionComponent<IModalAProps> = ({ contactsData, fetchingContacts, isOpen, fetchContacts, fetchNextContacts }) => {
    useEffect(() => {
        isOpen && fetchContacts()
    }, [isOpen, fetchContacts])

    const handleScroll = (event: React.UIEvent) => {
        const target = event.target as Element
        if (target.scrollTop >= target.scrollHeight - target.clientHeight) {
            fetchNextContacts()
        }
    }

    return (
        <Modal show={isOpen} size="lg">
            <ModalsHeader title="A" />
            <Modal.Body>
                <Scrollbars onScroll={handleScroll} style={{ height: '25em' }}>
                    <Table>
                        <thead>
                            <tr>
                                <th>Last Name</th>
                                <th>First Name</th>
                                <th>Country</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contactsData.contacts_ids.map(id => {
                                return (
                                    <tr key={id}>
                                        <td>{contactsData.contacts[id].last_name}</td>
                                        <td>{contactsData.contacts[id].first_name}</td>
                                        <td>{contactsData.contacts[id].country_id}</td>
                                        <td>{contactsData.contacts[id].email}</td>
                                        <td>{contactsData.contacts[id].phone_number}</td>
                                    </tr>
                                )
                            })}
                            {fetchingContacts
                                ? <tr>
                                    <td colSpan={5}>
                                        <Spinner animation="border" role="status" style={{ display: 'flex', margin: 'auto' }}>
                                            <span className="sr-only">Loading...</span>
                                        </Spinner>
                                    </td>
                                </tr>
                                : null
                            }
                        </tbody>
                    </Table>
                </Scrollbars>
            </Modal.Body>
        </Modal>
    )
}

const mapStateToProps = (state: any): IModalAStateProps =>({
    contactsData: state.contactsState.contacts.data,
    fetchingContacts: state.contactsState.contacts.fetching,
    isOpen: state.modalsState.modalA
})

const mapDispatchToProps = (dispatch: any): IModalADispatchProps => {
    return {
        fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
        fetchNextContacts: () => dispatch(contactsOperations.fetchNextContacts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalA)