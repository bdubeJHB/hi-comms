const fs = require("fs");

let data;

let populate_data = (error, content) => {
    if(error) {
        console.error("Failed to load contacts.");
    } else if(data) {
        console.log(`Data had already been loaded with ${data.length()} contacts`);
        return;
    }

    data = JSON.parse(content);
    console.log(`Successfully loaded ${data.length} contacts`);
};

fs.readFile("../data/db_mock.json", populate_data);

let retrieve_contacts = () => {
    populate_data();

    if(!data) {
        throw "Failed to load contacts";
    }

    return data;
};

export default { retrieve_contacts };