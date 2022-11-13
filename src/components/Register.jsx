import { useNavigate } from "react-router-dom";


function Nombre(props) {
  return (  <div class="form-row">
  <input type="text" name="your_name" id="your_name" class="input-text" required placeholder="Nombre"/>
</div>);
}
function Edad(props) {
  return (  <div class="form-row">
  <input type="text" name="your_name" id="your_name" class="input-text" required placeholder="Edad"/>
</div>);
}
function Password(props) {
  return (  <div class="form-row">
  <input type="password" name="password" id="password" class="input-text" required placeholder="Contraseña"/>
</div>);
}
function Confirmar(props) {
  return (<div class="form-row-last">
  <input type="submit" name="Registrarse" class="register" value="Registrarse"/>
</div>);
}

function Registro(props) {
  return (<div class="form-row-last">

</div>);
}
function Derecha(props) {
  return (				<div class="form-right">
  <h2>Detalles de contacto</h2>
  <Nombre nombre="nombre"/>
  <Edad edad="edad"/>
  <Password password="password"/>
  <Confirmar confirmar="confirmar"/>
  <Registro registro="registro"/>
</div>);
}

function Register() {
  const navigate = useNavigate()

  function HandlerGo(){
    navigate("/")
  }

  return (
    <div className="App">
      	<div class="page-content">
		<div class="form-v10-content">
			<form class="form-detail" action="#" method="post" id="myform">
      <Derecha derecha="derecha"/>
      <button onFocus={() => HandlerGo()}> ¿Ya tiene cuenta? iniciar sesión </button>
			</form>
		</div>
	</div>
    </div>
  )
}

// function Register2() {
//     const navigate = useNavigate()

//     function HandlerGo(){
//       navigate("/")
//     }
//       return (
//         <>
//           <h2>Registro</h2>
//           <form className="form-react">
//             <div className="control-formulario">
//               <label>Nombre</label>
//               <input type="text" />
//             </div>
    
//             <div className="control-formulario">
//               <label>Edad</label>
//               <input type="number"/>
//             </div>
    
//             <div className="control-formulario">
//               <label>Foto de Perfil</label>
//               <input type="file"></input>
//             </div>
    
//             <div className="control-formulario">
//               <label>Contraseña</label>
//               <input type="password"/>
//             </div>
    
//             <button onFocus={()=> HandlerGo()}>REGISTRARSE</button>
//           </form>
//         </>
//       );
// }

export default Register;