import React from 'react'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'
import { ModalType } from '../../common/enums'
import { IContactsData, IContact } from '../../common/interfaces'
import { modalsOperations } from '../../store/modules/modals'
// import { contactsOperations } from '../../store/modules/contacts'

interface IContactsOverviewStateProps {
    contactsData: IContactsData
    fetchingContacts: boolean
}
interface IContactsOverviewDispatchProps {
    openModal: (modalType: ModalType) => void
}
type IContactsOverviewProps = IContactsOverviewStateProps & IContactsOverviewDispatchProps

const ContactsOverview: React.FunctionComponent<IContactsOverviewProps> = ({ contactsData, fetchingContacts, openModal }) => {
    const handleContactClick = (event: React.MouseEvent, contact: IContact) => {
        console.log('HANDLE CONTACT CLICK')
        console.log(event)
        console.log(contact)
        openModal(ModalType.C)
    }
    
    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {contactsData.contacts_ids.map(id => {
                    return (
                        <tr key={id}>
                            <td>
                                <a 
                                    onClick={(e) => handleContactClick(e, contactsData.contacts[id])}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {`${contactsData.contacts[id].last_name} ${contactsData.contacts[id].first_name}`}
                                </a>
                            </td>
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
    )
}

const mapStateToProps = (state: any): IContactsOverviewStateProps => ({
    contactsData: state.contactsState.contacts.data,
    fetchingContacts: state.contactsState.contacts.fetching
})

const mapDispatchToProps = (dispatch: any): IContactsOverviewDispatchProps => {
    return {
        openModal: (modalType: ModalType) => dispatch(modalsOperations.openModal(modalType))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsOverview)