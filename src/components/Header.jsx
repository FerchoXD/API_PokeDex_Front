import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <div className="col-md-9">
                <div className="full">
                    <div className="right_header_info">
                        <ul>
                            <li>
                                <button type="button" id="sidebarCollapse">
                                    <a href="#"><Link to="/pokemons">Pokemons    </Link></a>
                                    <a href="#"><Link to="/crear">Crear pokemon    </Link></a>
                                    <a href="#"><Link to="/comentarios">Comentarios    </Link></a>
                                    <a href="#"><Link to="/forum">Foro</Link></a>
                                </button>
                            </li>
                            <li class="dinone">ㅤㅤㅤㅤㅤㅤ</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;