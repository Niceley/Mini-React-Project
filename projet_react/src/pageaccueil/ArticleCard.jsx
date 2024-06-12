import React from 'react';

function ArticleCard({ title, content, date }) {
    return (
            <div class="card">
                <div class="card-body">
                    <img class="card-img-top" src="..." alt="Image article card"></img>
                    <h6 class="card-subtitle mb-2 text-muted">{date}</h6>
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{content}</p>
                </div>
            </div>
    );
}

export default ArticleCard;