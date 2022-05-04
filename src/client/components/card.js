import Avatar from "./avatar";
import Text from "./text";

let Card = ({ first_name, last_name, profilePhoto, statusMessage }) => {
    //TODO: Add handlers to allow opening chat with contact
    return (
        <article id="card">
            <Avatar user={`${first_name} ${last_name}`} avatar_uri={profilePhoto} />
            <Text textType="name" text={statusMessage} />
            <Text textType="message" text={statusMessage} />
        </article>
    );
}

export default Card;