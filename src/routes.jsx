//react
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Erro from "./pages/Erro";
//components
import Header from "./components/Header";
import Favorites from "./pages/Favorites";

export default function RoutesApp(){
  return(
    <Router>
        <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/filme/:id" element={<Movies/>}/>
        <Route path="/favoritos" element={<Favorites/>}/>
        <Route path="*" element={<Erro/>}/>
    </Routes>
</Router>
  )
}