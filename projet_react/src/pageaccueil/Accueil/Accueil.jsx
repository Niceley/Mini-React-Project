
import React, { useState, useEffect } from 'react';
import ArticleCard from '../ListeArticle/ArticleCard';
import articles from '../ListeArticle/ListeArticle';
import listePosteReseaux from '../ListeArticle/ListePosteReseaux';
import Reseau from '../reseau/Reseau';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Accueil.css';
import Carrousel from '../carrousel/Carrousel';
import Navbar from '../../navbar/Navbar';

function Accueil() {

    const [open, setOpen] = useState(false);
    const [newArticle, setNewArticle] = useState({ title: '', content: '', date: '', image: '' });

    const togglePopup = () => {
        setOpen(true);
    };

    const handleChange = (e) => {
        setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        articles.push({ ...newArticle, id: articles.length + 1 });
        setNewArticle({ title: '', content: '', date: '', image: '' });
        setOpen(false);
    };

    useEffect(() => {
        console.log('Liste article mise à jour : ', articles);
      }, [articles]);

    return (<>
        <Navbar />
        <div className='accueil'>
            <Carrousel />
            <div className="center">
                <div className="contour">
                    <div className="actualité"> Actualités
                        <button type="button" className="btn btn-primary addArticle" onClick={togglePopup}>Ajouter un article</button>
                            <Popup open={open} closeOnDocumentClick>
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
        </>
    );
}

export default Accueil;