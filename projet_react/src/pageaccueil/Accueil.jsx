
import React from 'react';
import ArticleCard from './ArticleCard';
import articles from './ListeArticle/ListeArticle';
import listePosteReseaux from './ListeArticle/ListePosteReseaux';
import Reseau from './Reseau';

function Accueil() {

    return (
        <div className='accueil'>
            <div class="center">
                <div class="contour">
                    <div class="actualité"> Actualités </div>
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