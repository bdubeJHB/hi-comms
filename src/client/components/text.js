let CardText = ({ textType, text }) => {
    return (
        <p className={textType}>
            {text}
        </p>
    );
}

export default CardText;