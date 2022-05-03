import { retrieve_contacts } from "../services/data_handler";

let express = require("express");
let router = express.Router();

export default () => {
    router.get("/contacts", (request, response) => {
        let all_contacts;
        try {
            all_contacts = retrieve_contacts();
        } catch(error) {
            response.status(500).end();
        }

        response
            .status(200)
            .json(all_contacts);
    });
};

module.exports = router;