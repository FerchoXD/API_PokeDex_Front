import {Link} from "react-router-dom"
import "../styles/cards.css"

export default function Cards({autor, title, description}) {
  
  return (
    
      <div className="body_cards">
        
      <section className="section">
        <div className="container_card">  
        
          <div className="cards">
    
              <div className="card_comment">
                <h2>{autor}</h2>
                <h3>{title}</h3>
                <label>{description}</label>
              </div>

          </div>
        </div>
      </section>
      </div>
  );
}
