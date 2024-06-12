import logo from './logo.svg';
import './App.css';
import Accueil from './pageaccueil/Accueil';
import { ArticleDetails } from './articleDetail/ArticleDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (<>
    <div class="header">
                <div class="left">
                    <a>
                        <img alt="Logo myEfrei"
                            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Languages/French/LOGO_EFREI-WEB_blanc.png"></img>
                    </a>
                </div>
            </div>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Accueil />} />
          <Route path="article/:id" element={<ArticleDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
