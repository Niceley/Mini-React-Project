
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
                        <ArticleCard key={article.id} 
                        id={article.id}
                        title={article.title} 
                        content={article.content}
                        date={article.date}
                        image = {article.image}
                         />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Accueil;