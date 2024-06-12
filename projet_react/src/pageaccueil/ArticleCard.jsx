import React from 'react';

function ArticleCard({ title, content }) {
    return (
            <div class="card">
                <div class="card-body">
                    <img class="card-img-top" src="..." alt="Image article card"></img>
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{content}</p>
                </div>
            </div>
    );
}

export default ArticleCard;