export interface IContact {
    address: string
    app_contact_ids: Array<number>
    color: string
    comment: string
    contacts_ids: Array<number>
    country: {
        id: number
        phonecode: number
        iso: string
    }
    country_id: number
    email: string
    favorite: number
    first_name: string
    has_duplicate: number
    id: number
    last_name: string
    multiple_primary_contacts: number
    phone_number: string
    primary_contact_id: number
    status: number
}