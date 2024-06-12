
import React from 'react';
import ArticleCard from './ArticleCard';
import articles from './ListeArticle/ListeArticle';

function Accueil() {

    return (
        <div>
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