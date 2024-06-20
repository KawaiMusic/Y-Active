import { useParams } from "react-router-dom";
import style from "./style.css";
import Lapis from './pen.png';


function Aportar (){

    const valorAporte = 1000.00;
    return(

        <div className = "background">
        <div className="floatingElement">
<div className="botãoDeArrastar"></div>

<img src={Lapis} alt="lapis" className="Lapis"/>
 
<h1 className="textHeaderAportar">Digite o valor do seu novo aporte</h1>

        </div>
        </div>
    )

}
export default Aportar;
