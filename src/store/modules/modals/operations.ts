import { ModalType } from '../../../common/enums'
import actions from './actions'

abstract class modalsOperations {
    public static openModal = (modalType: ModalType) => (dispatch: any) => {
        if (modalType === ModalType.A) {
            dispatch(actions.openModalA())
        }
        if (modalType === ModalType.B) {
            dispatch(actions.openModalB())
        }
    } 

    public static closeModals = actions.closeModals
}

export default modalsOperations