import React, { useEffect } from 'react'
import { connect } from 'react-redux'
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
}
type IModalAProps = IModalAStateProps & IModalADispatchProps

const ModalA: React.FunctionComponent<IModalAProps> = ({ contactsData, fetchingContacts, isOpen, fetchContacts }) => {
    console.log(fetchingContacts)
    console.log(contactsData)

    useEffect(() => {
        fetchContacts()
    }, [fetchContacts])

    return (
        <Modal show={isOpen} size="lg">
            <ModalsHeader title="A" />
            <Modal.Body>
                {fetchingContacts
                    ? <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    : <Table>
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
                                    <tr>
                                        <td>{contactsData.contacts[id].last_name}</td>
                                        <td>{contactsData.contacts[id].first_name}</td>
                                        <td>{contactsData.contacts[id].country_id}</td>
                                        <td>{contactsData.contacts[id].email}</td>
                                        <td>{contactsData.contacts[id].phone_number}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                }
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

const mapStateToProps = (state: any): IModalAStateProps =>({
    contactsData: state.contactsState.contacts.data,
    fetchingContacts: state.contactsState.contacts.fetching,
    isOpen: state.modalsState.modalA
})

const mapDispatchToProps = (dispatch: any): IModalADispatchProps => {
    return {
        fetchContacts: () => dispatch(contactsOperations.fetchContacts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalA)