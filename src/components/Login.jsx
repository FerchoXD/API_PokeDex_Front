import '../styles/Form.css'
import { useNavigate } from "react-router-dom"

function Email(props) {
  return (  <div class="form-row">
  <input type="text" name="your_name" id="your_name" class="input-text" required placeholder="Nombre"/>
</div>);
}
function Password(props) {
  return (  <div class="form-row">
  <input type="password" name="password" id="password" class="input-text" required placeholder="Contraseña"/>
</div>);
}
function Confirmar(props) {
  return (<div class="form-row-last">
  <input type="submit" name="Login" class="register" value="Login"/>
</div>);
}

function Registro(props) {
  return (<div class="form-row-last">

</div>);
}
function Derecha(props) {
  return (				<div class="form-right">
  <h2>Detalles de contacto</h2>
  <Email email="email"/>
  <Password password="password"/>
  <Confirmar confirmar="confirmar"/>
  <Registro registro="registro"/>
</div>);
}

function Login() {
  const navigate = useNavigate()
  function HandlerGo(){
    navigate("/registro")
  }

  return (
    <div className="App">
      	<div class="page-content">
		<div class="form-v10-content">
			<form class="form-detail" id="myform">
      <Derecha derecha="derecha"/>
      <button onFocus={() => HandlerGo()}> ¿Aún no tiene cuenta? Cree una </button>
			</form>
		</div>
	</div>
    </div>
  )
}


// function Login2 () {

// const navigate = useNavigate()

// function HandlerGo(){
//   navigate("/re")
// }


//   return (
//     <>
//     <div className="cuerpo">
//       <h2>Inicio de sesión</h2>
//       <form>
//         <div className="control-formulario">
//           <label>Nombre</label>
//           <input type="text" ></input>
//         </div>

//         <div className="control-formulario">
//           <label>Contraseña</label>
//           <input type="password"/>
//         </div>
//         <div className="button">
//         <button type="submit" className="btn3">INICIAR SESION</button>
//         </div>
//         <button onFocus={() => HandlerGo()}> ir a registro </button>
//       </form>
//       </div>
//     </>
//   );
// }

export default Login;
