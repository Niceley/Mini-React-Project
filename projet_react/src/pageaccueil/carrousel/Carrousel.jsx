import React from "react";
import { Link } from "react-router-dom";
import articles from "../ListeArticle/ListeArticle";
import "./carrousel.css";

function Carrousel() {
  const [index, setIndex] = React.useState(1);

  const incrementIndex = () => {
    if(index === articles.length - 1){
      setIndex(0)
    }else{
      setIndex(index + 1);
    }
    
  }

  const decrementIndex = () => {
    if(index === 0){
      setIndex(articles.length - 1)
    }else{
      setIndex(index - 1);
    }
  }

  const changeIndex = (newIndex) => {
    setIndex(newIndex - 1)
  }

  React.useEffect(() => {
    console.log(index)
}, [index])


    return(<>
    <div className="carrousel">
      <div className="left-arrow">
        <button onClick={decrementIndex}>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
          </svg>
        </button>
      </div>
      <Link to={`/article/${index+1}`}>
      <div className="middle"><img src={articles[index].image} alt=''></img>  </div>
      </Link>
      <div className="right-arrow">
        <button onClick={incrementIndex}>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
    <div className="selector">
      {articles.map((article, key) => (
        <div key={key} className={index+1 === article.id ? 'selected' : 'not-selected'}><button onClick={() => changeIndex(article.id)}></button></div>
      ))}
    </div>
    </>)
    
}


export default Carrousel;