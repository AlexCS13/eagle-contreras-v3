import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import { Products } from './containers/Products';
import ItemDetailContainer from './containers/ItemDetailContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <hr />
      {/* <ItemListContainer greeting="Eagle Simulation & Training" /> */}
      <ItemDetailContainer />
      <hr />
    </>
  );
}

export default App;
