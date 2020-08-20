import { AnyAction } from 'redux'
import types from './types'

abstract class modalsActionCreators {
    public static openModalA = (): AnyAction => ({
        type: types.OpenA
    })

    public static openModalB = (): AnyAction => ({
        type: types.OpenB
    })

    public static closeModals = (): AnyAction => ({
        type: types.Close
    })
}

export default modalsActionCreators