enum contactsFilters {
    ShowAll = 'SHOW_ALL',
    ShowEven = 'SHOW_EVEN'
}

const getFilteredContacts = (contacts: any, filter: any) => {
    switch (filter) {
        case contactsFilters.ShowAll:
            return contacts
        case contactsFilters.ShowEven:
            return contacts
        default: 
            throw new Error("Unknown filter: " + filter)
    }
}

export default {
    getFilteredContacts
}