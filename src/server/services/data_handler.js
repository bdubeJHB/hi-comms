let data;

let retrieve_all_contacts = () => {
    data = require("../data/db_mock.json");

    // data = JSON.parse(data);
    console.log(`Successfully loaded ${data.length} contacts`);

    if(!data) {
        throw "Failed to load contacts";
    }

    return data;
};

module.exports = retrieve_all_contacts;