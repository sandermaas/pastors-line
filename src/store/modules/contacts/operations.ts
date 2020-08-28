import { Endpoints } from '../../../common/enums/Endpoints'
import { IContactsParams } from '../../../common/interfaces'
import { api } from '../../../common/services'
import actions from './actions'

abstract class contactsOperations {
    public static fetchContacts = (params?: IContactsParams) => (dispatch: any, getState: any) => {
        dispatch(actions.resetState())
        dispatch(actions.updateParams({ 
            ...params,
            page: 1
        }))
        dispatch(actions.fetchContacts())
        api.get(Endpoints.Contacts, getState().contactsState.params).then(data => {
            dispatch(actions.fetchContactsSuccess(data))
        }).catch(error => {
            dispatch(actions.fetchContactsFailed())
        })
    }

    public static fetchNextContacts = (params?: IContactsParams) => (dispatch: any, getState: any) => {
        dispatch(actions.updateParams({
            ...params,
            page: getState().contactsState.params.page + 1
        }))
        dispatch(actions.fetchContacts())
        api.get(Endpoints.Contacts, getState().contactsState.params).then(data => {
            dispatch(actions.fetchContactsSuccess(data))
        }).catch(error => {
            dispatch(actions.fetchContactsFailed())
        })
    }
}

export default contactsOperations