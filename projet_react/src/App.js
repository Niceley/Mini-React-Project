import logo from './logo.svg';
import './App.css';
import Accueil from './pageaccueil/Accueil';
import {
  createBrowserRouter, RouterProvider 
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    component: Accueil
  }
]);


function App() {
  return (
    <div className="App">
      <Accueil />
    </div>
  );
}

export default App;
