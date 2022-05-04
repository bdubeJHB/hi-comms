//TODO: Make methods for fetching specific contacts and such
let contacts_fetcher = async () => {
    //TODO: Use env vars for URIs
    const response = await fetch("https://localhost:5000/contacts");
    return  await response.json();
}

export default contacts_fetcher;