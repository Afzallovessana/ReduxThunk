import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import IcecreamContainer from './components/IcecreamContainer';
import User from './components/User';


function App() {
  return (
    <div className="App">
      <CakeContainer />
      <IcecreamContainer />
      <User/>
    

    </div>
  );
}

export default App;
