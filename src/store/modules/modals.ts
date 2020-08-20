import { AnyAction } from 'redux'
import { ModalType } from '../../common/enums'

// Actions
enum modalsActions {
    Open = 'pastors-line/modals/OPEN',
    Close = 'pastors-line/modals/CLOSE'
}

// Reducer
const initialState = {
    isOpenA: false,
    isOpenB: false
}

export function modalsReducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case modalsActions.Open:
            // console.log(modalsActions.Open)
            // console.log(action.payload)
            return {
                ...state,
                isOpenA: (action.payload === ModalType.A) ? true : false,
                isOpenB: (action.payload === ModalType.B) ? true : false
            }
        case modalsActions.Close:
            // console.log(modalsActions.Close)
            return {
                ...state,
                isOpenA: false,
                isOpenB: false
            }
        default:
            return {
                ...state
            }
    }
}

// Action Creators
export abstract class modalsActionCreators {
    public static openModal = (modalType: ModalType): AnyAction => ({
        payload: modalType,
        type: modalsActions.Open
    })

    public static closeModals = (): AnyAction => ({
        type: modalsActions.Close
    })
}