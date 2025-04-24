import './App.css';

function App() {
  const handleStartClick = () => {
    window.location.href = "mailto:k.mixios@gmail.com";
  };

  return (
    <div className="app-container">
      <div className="box">
        <p>
        This space is under creative construction...
          <br />
          <br />
          Soon with You! 
          <br/>
          Konstantinos.
        </p>
        <button onClick={handleStartClick}>Contact me!</button>
      </div>
    </div>
  );
}

export default App;
