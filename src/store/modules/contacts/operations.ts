import { Endpoints } from '../../../common/enums/Endpoints'
import { api } from '../../../common/services'
import actions from './actions'

abstract class contactsOperations {
    public static fetchContacts = () => (dispatch: any, getState: any) => {
        dispatch(actions.fetchContacts())
        api.get(Endpoints.Contacts).then(contacts => {
            dispatch(actions.fetchContactsSuccess(contacts))
        }).catch(error => {
            dispatch(actions.fetchContactsFailed())
        })
    }
}

export default contactsOperations