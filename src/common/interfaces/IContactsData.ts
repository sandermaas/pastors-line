import { IContact } from '../interfaces'

export interface IContactsData {
    contacts: {
        [key: number]: IContact
    }
    contacts_ids: Array<number>
    total: number
}