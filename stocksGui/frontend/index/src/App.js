import stocks from './stocks.png';
import './App.css';


import Login from './Components/login';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={stocks} className="App-logo" alt="logo" />
        <div>
            <Login />
        </div>

        
      </header>
    </div>
  );
}

export default App;
