import React from 'react';
import "./GenreCard.css"

const GenreCard = ({member}) => {
    return (
        <div>
            <div className="GenreContainer">
                <h3 className="GenreTittle" id={member.id}> {member.name}</h3>
                <img className="GenreImg" src={require(`../../media/GenreImg/${member.photo}`)} alt=""/>
                <p className="GenreDescription"> {member.description}</p>
            </div>
        </div>
    );
}

export default GenreCard;