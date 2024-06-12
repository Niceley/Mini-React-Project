import logo from './logo.svg';
import './App.css';
import Accueil from './pageaccueil/Accueil/Accueil';
import { ArticleDetails } from './articleDetail/ArticleDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../src/navbar/Navbar';




function App() {
  return (<>
    <div className="header">
      <div className="left">
        <a>
          <img alt="Logo myEfrei"
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Languages/French/LOGO_EFREI-WEB_blanc.png"></img>
        </a>
      </div>
    </div>
    <Navbar />
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Accueil />} />
            <Route path="article/:id" element={<ArticleDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div className="footer">
        <p className="sc-bczRLJ eOTaif MuiTypography-root MuiTypography-body2">©2024 Efrei</p>|<a className="sc-wAnfg eCghVz" href="/portal/student/donnees-personnelles"><p className="sc-bczRLJ eOTaif MuiTypography-root MuiTypography-body2" underline="none">Données personnelles</p></a>|<a className="sc-bczRLJ gJtBLE MuiTypography-root MuiTypography-inherit sc-iBkjds bmqjhd MuiLink-root MuiLink-underlineHover" href="https://www.efrei.fr/" target="_blank" rel="noopener noreferrer"><p className="sc-bczRLJ eOTaif MuiTypography-root MuiTypography-body2">Efrei.fr</p></a>
      </div>
    </div>
  </>
  );
}

export default App;
