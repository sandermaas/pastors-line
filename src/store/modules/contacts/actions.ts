import { AnyAction } from 'redux'
import types from './types'

abstract class contactsActionCreators {
    public static fetchContacts = (): AnyAction => ({
        type: types.Fetch
    })

    public static fetchContactsSuccess = (contacts: any): AnyAction => ({
        type: types.FetchSuccess,
        payload: {
            contacts
        }
    })

    public static fetchContactsFailed = (): AnyAction => ({
        type: types.FetchFailed
    })
}

export default contactsActionCreators