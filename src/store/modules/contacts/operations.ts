import { Endpoints } from '../../../common/enums/Endpoints'
import { api } from '../../../common/services'
import actions from './actions'

abstract class contactsOperations {
    public static fetchContacts = () => (dispatch: any, getState: any) => {
        dispatch(actions.resetPage())
        dispatch(actions.fetchContacts())
        const page = getState().contactsState.page
        api.get(Endpoints.Contacts, { page }).then(data => {
            dispatch(actions.fetchContactsSuccess(data))
        }).catch(error => {
            dispatch(actions.fetchContactsFailed())
        })
    }

    public static fetchNextContacts = () => (dispatch: any, getState: any) => {
        dispatch(actions.increasePage())
        dispatch(actions.fetchContacts())
        const page = getState().contactsState.page
        api.get(Endpoints.Contacts, { page }).then(data => {
            dispatch(actions.fetchContactsSuccess(data))
        }).catch(error => {
            dispatch(actions.fetchContactsFailed())
        })
    }
}

export default contactsOperations