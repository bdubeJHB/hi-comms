let retrieve_contacts_data = require("../services/data_handler");

let all_contacts;
let error_present = false;

let populate_contacts = () => {
    try {
        all_contacts = retrieve_contacts_data();
    } catch(error) {
        error_present = true;
    }
};

let get_contact_by_id = (queried_id) => {
    if(!all_contacts) {
        populate_contacts();
    }
    if(error_present) {
        console.log(`Could not fetch specific contact`)
        return null;
    }

    let result = all_contacts.find(contact => {
        //TODO:  Make deep comparison work
        return contact.id == queried_id;
    });

    return result ? result : {};
};

let get_contacts_by_first_name = (queried_first_name) => {
    if(!all_contacts) {
        populate_contacts();
    }
    if(error_present) {
        console.log(`Could not fetch specific contact`)
        return null;
    }

    return all_contacts.filter(contact => {
        return contact.firstName === queried_first_name;
    });
}

module.exports = { get_contact_by_id, get_contacts_by_first_name };