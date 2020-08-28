import { AnyAction } from 'redux'
import { IContactsData, IContactsParams } from '../../../common/interfaces'
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

    public static resetState = (): AnyAction => ({
        type: types.ResetState
    })

    public static updateParams = (params: IContactsParams): AnyAction => ({
        type: types.UpdateParams,
        payload: {
            params
        }
    })
}

export default contactsActionCreators