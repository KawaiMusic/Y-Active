import{ BrowserRouter, Routes , Route} from 'react-router-dom';

    import Home from "./Pages/Home";
    import Erro from "./Pages/404";
    import Splashart from "./Pages/Splashart";
    import Produto from './Pages/Produto';
    import Style from './index.css';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home/>}/>
            <Route path="/Splashart" element={ <Splashart/> }/>      
            <Route path="/Produto/:id" element={<Produto/>}  />    
            <Route path="*" element={ <Erro/> }/>            

        </Routes>
        
        </BrowserRouter>
    );
}
   export default RoutesApp;

