function Card( { card, onCardClick, cardData, onCardLike, onCardDelete} ) {

    const isOwn = card.owner._id === cardData._id;

    const cardDeleteButtonClassName = (
        `${isOwn ? 'element__delete-btn' : 'element__delete-button_hidden'}`
    ); 

    const isLiked = card.likes.some(i => i._id === cardData._id);
    const cardLikeButtonClassName = (
        `element__button-like ${isLiked ? 'element__button-like_active' : '`element__button-like'}`
    );
    

    function handleLikeClick () {
        onCardLike(card)
    };

    function handleDeleteClick () {
        onCardDelete(card)
    }

    function handleClick() {
        onCardClick(card);
    }
    return (
        <article className="element">
        <div className="element__image-container">
            <img className="element__main-image" src={card.link} alt={card.name} onClick={handleClick}></img>
            <button className={cardDeleteButtonClassName} type="button" aria-label="delete-button" onClick={handleDeleteClick}></button>
        </div>
        <div className="element__container">
            <h3 className="element__text">{card.name}</h3>
            <div className="element__like-container">
                <button className={cardLikeButtonClassName} type="button" aria-label="like-button" onClick={handleLikeClick}></button>
                <p className="element__like-counter">{card.likes.length}</p>
            </div>
        </div>
        </article>
    )
}

export default Card