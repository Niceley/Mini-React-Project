
import React from 'react';
import ArticleCard from './ArticleCard';
import articles from './ListeArticle/ListeArticle';
import listePosteReseaux from './ListeArticle/ListePosteReseaux';
import Reseau from './Reseau';
import Carrousel from './carrousel/Carrousel';

function Accueil() {

    return (
        <div className='accueil'>
            <Carrousel />
            <div className="center">
                <div className="contour">
                    <div className="actualité"> Actualités </div>
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

                <div className="contour network">
                    <div className="actualité network"> Sur les réseaux </div>
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