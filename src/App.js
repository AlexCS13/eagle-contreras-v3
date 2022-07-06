import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-fluid" data-aos="fade-down">
          <div className="row ">
            <div className="col-12 col-md-12 col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                  {/* <img src="./assets/img/logo_eagle_claro.png" className="logo" alt="eagle"> */}
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    {/* <li className="nav-item active">
                      <a className="nav-link" href="#">Inicio<a>
                    </li> */}
                    <li className="nav-item">
                      <a className="nav-link" href="./pages/productos.html">Productos</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./pages/experiencias.html">Experiencias</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./pages/quienes_somos.html">Quienes somos</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="./pages/contacto.html">Contacto</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
