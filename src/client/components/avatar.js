let Avatar = ({ user, avatar_uri }) => {
    //TODO: Add handlers to allow viewing contact profile
    return (
        <img
            className="avatar"
            alt={`Profile picture for ${user}`}
            src={require(avatar_uri)}  />
    );
}

export default Avatar;