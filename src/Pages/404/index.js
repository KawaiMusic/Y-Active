import "./style.css";
import { Link } from "react-router-dom";
function Erro (){



  return(
   <div className='divSplash'>
    <h1>Opss. Parece que essa page n existe</h1>

    <Link to="/">
    Voltar para página inicial</Link>

   </div>

  )
}

export default Erro;