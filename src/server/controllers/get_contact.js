let express = require("express");
let router = express.Router();

let retrieve_contacts_data = require("../services/data_handler");
let { get_contact_by_id, get_contacts_by_first_name } = require("../services/filter_contacts");

let all_contacts;
let error_message;

try {
    all_contacts = retrieve_contacts_data();
} catch(error) {
    error_message = error;
}

router.get("/", (request, response) => {
    if(!all_contacts) {
        response.status(500).send({"Error": error_message});
    }

    if(!request.query.id) {
        response.status(200).json(all_contacts);
    } else {
        response.status(200).json(get_contact_by_id(request.query.id));
    }
});

module.exports = router;