import React from 'react';

function Reseau({content, date, image }) {
    return (
            <div class="reseau-container">
                <div class="">
                    <h6 class="card-subtitle mb-2 text-muted">{date}</h6>
                    <p class="card-text">{content}</p>
                    <img class="card-img-top" src={image} alt=""></img>
                    <hr/>
                </div>
            </div>
    );
}

export default Reseau;