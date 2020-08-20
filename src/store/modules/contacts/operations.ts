import { Endpoints } from '../../../common/enums/Endpoints'
import { IContactsParams } from '../../../common/interfaces'
import { api } from '../../../common/services'
import actions from './actions'

abstract class contactsOperations {
    public static fetchContacts = (params?: IContactsParams) => (dispatch: any, getState: any) => {
        dispatch(actions.resetPage())
        dispatch(actions.fetchContacts())
        let parameters = {
            ...params,
            page: getState().contactsState.page
        }
        api.get(Endpoints.Contacts, parameters).then(data => {
            dispatch(actions.fetchContactsSuccess(data))
        }).catch(error => {
            dispatch(actions.fetchContactsFailed())
        })
    }

    public static fetchNextContacts = (params?: IContactsParams) => (dispatch: any, getState: any) => {
        dispatch(actions.increasePage())
        dispatch(actions.fetchContacts())
        let parameters = {
            ...params,
            page: getState().contactsState.page
        }
        api.get(Endpoints.Contacts, parameters).then(data => {
            dispatch(actions.fetchContactsSuccess(data))
        }).catch(error => {
            dispatch(actions.fetchContactsFailed())
        })
    }
}

export default contactsOperations