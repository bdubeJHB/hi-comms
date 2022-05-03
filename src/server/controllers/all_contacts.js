let express = require("express");
let router = express.Router();

let retrieve_contacts = require("../services/data_handler");


router.get("/", (request, response) => {
    let all_contacts;
    try {
        all_contacts = retrieve_contacts();
    } catch(error) {
        response.status(500)
            .send({"Error":error});
    }

    if(all_contacts) {
        response.status(200).json(all_contacts);
    }
});

module.exports = router;