import React from 'react';
import "./FilmCard.css"

const FilmCard = ({member}) => {
    return (
        <div>
            <div className="filmContainer">
                <img className="cardImg" src={require(`../../media/FilmPoster/${member.photo}`)} alt=""/>
                <div className="cardText">
                    <p className="cardName"> {member.name}</p>
                    <p className="cardGenre">{member.genre.join(' / ')}</p>
                    <p className="cardYear"></p>
                </div>
            </div>
        </div>
    )
}
export default FilmCard;