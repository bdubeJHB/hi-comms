let Avatar = (props) => {
    let { user, avatar_uri } = props;

    return (
        <img
            className="avatar"
            alt={`Profile picture for ${user}`}
            src={require(avatar_uri)}  />
    );
}

export default Avatar;