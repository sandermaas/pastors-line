import { AnyAction } from 'redux'
import { IContactsData } from '../../../common/interfaces'
import types from './types'

abstract class contactsActionCreators {
    public static fetchContacts = (): AnyAction => ({
        type: types.Fetch
    })

    public static fetchContactsSuccess = (data: IContactsData): AnyAction => ({
        type: types.FetchSuccess,
        payload: {
            data
        }
    })

    public static fetchContactsFailed = (): AnyAction => ({
        type: types.FetchFailed
    })
}

export default contactsActionCreators