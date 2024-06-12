
import React from 'react';
import ArticleCard from './ArticleCard';
import articles from './ListeArticle/ListeArticle';
import listePosteReseaux from './ListeArticle/ListePosteReseaux';
import Reseau from './Reseau';

function Accueil() {

    return (
        <div>
            <h1 className="mb-3">Page d'Accueil</h1>
            <div class="center">
                <div class="contour">
                    <div class="actualité"> Actualités </div>
                    {articles.map((article, key) => (
                        <ArticleCard key={key}
                            title={article.title}
                            content={article.content}
                            date={article.date}
                            image={article.image}
                        />
                    ))}
                </div>

                <div class="contour network">
                    <div class="actualité network"> Sur les réseaux </div>
                    {listePosteReseaux.map((article, key) => (
                        <Reseau key={key}
                            content={article.content}
                            date={article.date}
                            image={article.image}
                        />
                    ))}
                </div>


            </div>
        </div>
    );
}

export default Accueil;