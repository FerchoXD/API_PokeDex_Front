import { useState } from "react";
import {Link} from "react-router-dom"
import "../styles/cards.css"

export default function Cards() {
  const [cards] = useState([
    {
      title: "Card-1",
      text: `INFORMACION SOBRE CADA UNO DE LOS PERSONAJES DE POKEMON,
      drcnnmkdcmdkmckdmckldmcdkcmdkcmdkcmdkckdcmdkcmdc,
      dkncdkcnkdckdcmkdcmdkcmkdcokdcnkdmckdmcdklcdkcmkdmc`,
    },
    {
      title: "Card-2",
      text: `INFORMACION SOBRE CADA UNO DE LOS PERSONAJES DE POKEMON, 
            edcdcddcdcdcbhcbcbcjccnncjdnjcndjndjcdj`,
    },
    {
      title: "Card-3",
      text: `INFORMACION SOBRE CADA UNO DE LOS PERSONAJES DE POKEMON`,
    },
    {
      title: "Card-4",
      text: `INFORMACION SOBRE CADA UNO DE LOS PERSONAJES DE POKEMON`,
    },
    {
      title: "Card-5",
      text: `INFORMACION SOBRE CADA UNO DE LOS PERSONAJES DE POKEMON`,
    },
    {
      title: "Card-6",
      text: `INFORMACION SOBRE CADA UNO DE LOS PERSONAJES DE POKEMON`,
    },
    
    {
      title: "Card-4",
      text: `INFORMACION SOBRE CADA UNO DE LOS PERSONAJES DE POKEMON`,
    },
    {
      title: "Card-5",
      text: `INFORMACION SOBRE CADA UNO DE LOS PERSONAJES DE POKEMON`,
    },
    {
      title: "Card-6",
      text: `INFORMACION SOBRE CADA UNO DE LOS PERSONAJES DE POKEMON`,
    },
  ]);
  return (
      <div className="body_cards">
        
      <section className="section">
        <div className="container_card">
          <h1 className="h1">Comentarios</h1>
          <button type="button" class="btn2"><Link to="/comentarios">Comentar</Link></button>
          <div className="cards">
            
            {cards.map((card, i) => (
              <div key={i} className="card_comment">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
              
            ))}
          </div>
        </div>
      </section>
      </div>
  );
}
