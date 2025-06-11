import girlpic from "./girlpic.jpg";
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={girlpic}className="App-pic img-fluid"alt="pic"/>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>Coded by Jacinta Musau</small>
      </footer>
    </div>
    </div> 
  );
}

export default App;
