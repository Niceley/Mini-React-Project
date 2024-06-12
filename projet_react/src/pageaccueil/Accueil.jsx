
import React from 'react';
import ArticleCard from './ArticleCard';
import articles from './ListeArticle/ListeArticle';

function Accueil() {

    return (
        <div>
            <div class="header">
                <div class="left">
                    <a>
                        <img alt="Logo myEfrei"
                            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Languages/French/LOGO_EFREI-WEB_blanc.png"></img>
                    </a>
                </div>
            </div>
            <h1 className="mb-3">Page d'Accueil</h1>
            <div class="center">
                <div class="contour">
                <div class="actualité"> Actualités </div>
                <br/>
                    {articles.map((article, key) => (
                        <ArticleCard key={key} title={article.title} content={article.content} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Accueil;