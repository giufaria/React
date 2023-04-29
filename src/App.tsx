import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import ListaTema from "./components/temas/listaTema/ListaTema";
import ListaPostagem from "./components/postagens/listaPostagem/ListaPostagem";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import DeletarPostagem from "./components/postagens/deletarPostagem/deletarPostagem";
import DeletarTema from "./components/temas/deletarTema/DeletarTema";
import "./App.css";
import CadastroPostagem from "./components/postagens/cadastroPostagem/CadastroPostagem";
import {Provider} from 'react-redux';
import store from "./store/Store";


function App() {
  return (
    
    <>
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
        <Route path="/listaTema" element={<ListaTema />} />
        <Route path="/listaPostagem" element={<ListaPostagem />} />
        <Route path="/cadastroTema" element={<CadastroTema />} />
        <Route path="/deletarPostagem" element={<DeletarPostagem />} />
        <Route path="/deletarTema" element={<DeletarTema />} />
        <Route path="/cadastroPostagem" element={<CadastroPostagem />} />
      </Routes>
      <Footer />
      <BrowserRouter>
        <Navbar />
        <Footer />
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

