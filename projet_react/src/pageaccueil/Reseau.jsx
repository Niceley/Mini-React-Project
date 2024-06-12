import React from 'react';

function Reseau({content, date, image }) {
    return (
            <div className="reseau-container">
                <div className="">
                    <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
                    <p className="card-text">{content}</p>
                    <img className="card-img-top" src={image} alt=""></img>
                    <hr/>
                </div>
            </div>
    );
}

export default Reseau;