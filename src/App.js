
import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemDetailContainer />
      {/*<ItemListContainer />*/}
    </div>
  );
}

export default App;
