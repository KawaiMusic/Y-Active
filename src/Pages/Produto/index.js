import { useParams } from "react-router-dom";



function Produto (){

    const {id} = useParams ();
    return(

        <div>
            <h1>Página Meus Produtos</h1>
            <h2>Meu produto é {id}</h2>
        </div>
    )

}
export default Produto;
