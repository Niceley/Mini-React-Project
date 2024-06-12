
import React, { useState } from 'react';
import ArticleCard from '../ArticleCard';
import articles from '../ListeArticle/ListeArticle';
import listePosteReseaux from '../ListeArticle/ListePosteReseaux';
import Reseau from '../Reseau';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Accueil.css';

function Accueil() {

    const [open, setOpen] = useState(false);
    const [newArticle, setNewArticle] = useState({ title: '', content: '', date: '', image: '' });
    const [allArticles, setAllArticles] = useState(articles);

    const togglePopup = () => {
        setOpen(!open);
    };

    const handleChange = (e) => {
        setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedArticles = [...allArticles, { ...newArticle, id: allArticles.length + 1 }];
        setAllArticles(updatedArticles);
        // Réinitialiser le formulaire
        setNewArticle({ title: '', content: '', date: '', image: '' });
    };

    return (
        <div className='accueil'>
            <div className="center">
                <div className="contour">
                    <div className="actualité"> Actualités
                    <button type="button" class="btn btn-primary addArticle" onClick={togglePopup}> Ajouter un article </button>
                        <Popup open={open} closeOnDocumentClick onClose={togglePopup}>
                            <div className="popup">
                                <span> Ajouter un nouvel article </span>
                                <form onSubmit={handleSubmit}>
                                    <input type="text" name="title" placeholder="Titre" value={newArticle.title} onChange={handleChange} />
                                    <textarea name="content" placeholder="Contenu" value={newArticle.content} onChange={handleChange}></textarea>
                                    <input type="date" name="date" value={newArticle.date} onChange={handleChange} />
                                    <input type="text" name="image" placeholder="URL de l'image" value={newArticle.image} onChange={handleChange} />
                                    <button type="submit" onClick={handleSubmit}>Ajouter l'article</button>
                                </form>
                            </div>
                        </Popup>
                    </div>

                    {articles.map((article, key) => (
                        <ArticleCard key={article.id}
                            id={article.id}
                            title={article.title}
                            content={article.content}
                            date={article.date}
                            image={article.image}
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