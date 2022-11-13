import '../styles/Form.css' 
function Email(props) {
  return (  <div class="form-row">
  <input type="text" name="your_email" id="your_email" class="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="Correo electrónico"/>
</div>);
}
function Confirmar(props) {
  return (<div class="form-row-last">
  <input type="submit" name="Registrarse" class="register" value="Registrarse"/>
</div>);
}
function Derecha(props) {
  return (				<div class="form-right">
  <h2>Detalles de contacto</h2>
  <Email email="email"/>
  <Confirmar confirmar="confirmar"/>
</div>);
}

function App() {

  return (
    <div className="App">
      	<div class="page-content">
		<div class="form-v10-content">
			<form class="form-detail" action="#" method="post" id="myform">
      <Derecha derecha="derecha"/>
			</form>
		</div>
	</div>
    </div>
  )
}

export default App
