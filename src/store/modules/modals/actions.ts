import { AnyAction } from 'redux'
import { IContact } from '../../../common/interfaces'
import types from './types'

abstract class modalsActionCreators {
    public static openModalC = (contact: IContact): AnyAction => ({
        type: types.OpenC,
        payload: {
            contact
        }
    })

    public static closeModals = (): AnyAction => ({
        type: types.Close
    })
}

export default modalsActionCreators