import{ BrowserRouter, Routes , Route} from 'react-router-dom';

    import Home from "./Pages/Home";
    import Erro from "./Pages/404";
    import Splashart from "./Pages/Splashart";
    import Aportar from './Pages/Aportar';
    import Style from './index.css';
    import Login from './Pages/Login';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home/>}/>
            <Route path="/Splashart" element={ <Splashart/> }/>      
            <Route path="/Aportar" element={<Aportar/>}  /> 
            <Route path="/Login" element={<Login/>}  />    
            <Route path="*" element={ <Erro/> }/>            

        </Routes>
        
        </BrowserRouter>
    );
}
   export default RoutesApp;

