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

    public static increasePage = ():AnyAction => ({
        type: types.IncreasePage
    })

    public static resetPage = (): AnyAction => ({
        type: types.ResetPage
    })
}

export default contactsActionCreators