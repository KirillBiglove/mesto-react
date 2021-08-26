function Card( {card, onCardClick} ) {

    function handleClick() {
        onCardClick(card);
        console.log(card)
    }
    return (
        <article className="element" key={card._id}>
        <div className="element__image-container">
            <img className="element__main-image" src={card.link} alt={card.name} onClick={handleClick}></img>
            <button className="element__delete-btn" type="button" aria-label="delete-button"></button>
        </div>
        <div className="element__container">
            <h3 className="element__text">{card.name}</h3>
            <div className="element__like-container">
                <button className="element__button-like" type="button" aria-label="like-button"></button>
                <p className="element__like-counter">{card.likes.length}</p>
            </div>
        </div>
        </article>
    )
}

export default Card