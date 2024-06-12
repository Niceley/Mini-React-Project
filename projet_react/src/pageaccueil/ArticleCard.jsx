import React from 'react';
import { Link } from 'react-router-dom';

function ArticleCard({ id, title, content, date, image }) {
    return (
        <Link className='no-decoration'to={`/article/${id}`} >
            <div className="card">
                <div className="card-body">
                    <img className="card-img-top" src={image} alt="Image article card"></img>
                    <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">{content}</p>
                </div>
            </div>
        </Link>
    );
}

export default ArticleCard;