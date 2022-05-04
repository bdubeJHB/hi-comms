import Card from "./components/card";
import contacts_fetcher from "./services/contacts";

const all_contacts = contacts_fetcher();

let App = () => {
    const contact_cards = all_contacts.map(
        contact => {
            return <Card key={contact.id} {...contact} />
        }
    );

    return (
        <main id="app">
            {contact_cards}
        </main>
    );
}

export default App;