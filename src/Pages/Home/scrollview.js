import React from 'react';
import Barcode from "./barcode-64.png"
import Pix from './fa6-brands_pix.png';
import Dol from './us-dollar-128.png';


// Componente Minicard
const Minicard = ({ imgUrl, text }) => (
  <div className="Minicard">
    <img src={imgUrl} alt="Imagem" className="pix" />
    <br />
    <span className="Precisar">{text}</span>
  </div>
);

// Componente Lista Horizontal com Scroll
const HorizontalScrollList = () => {
  // Exemplo de dados para os Minicards (pode ser um array com mais elementos)
  const minicards = [
    { id: 1, imgUrl: Pix, text: 'Fazer um aporte' },
    { id: 2, imgUrl: Barcode , text: 'Ver o seu histórico' },
    { id: 3, imgUrl: Dol, text: 'Fazer um saque' },
    { id: 4, imgUrl: Dol, text: 'Fazer um saque' },
];

  return (
    <div className="HorizontalScrollList">
      {minicards.map((card) => (
        <Minicard key={card.id} imgUrl={card.imgUrl} text={card.text} />
      ))}
    </div>
  );
};

export default HorizontalScrollList;
