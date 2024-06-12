// Mini-React-Project/projet_react/src/Home.js
import React from 'react';
import Article from './Article';
import articles from './ListeArticle/ListeArticle';

function Accueil() {

  return (
    <div className="container mt-5">
    <div class="header"> 
        <div class="left">
            <a>
                <img alt="Logo myEfrei" 
                src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Languages/French/LOGO_EFREI-WEB_blanc.png"></img>
            </a>
        </div>
    </div>
      <h1 className="mb-3">Page d'Accueil</h1>
      {articles.map((article, key) => (
        <Article key={key} title={article.title} content={article.content} />
      ))}
    </div>
  );
}

export default Accueil;