
import './App.css';

function App() {
  const clickHandler = () => {
    console.log('i am work')
  }
  return (
    <div className="App">
      <button onClick = {clickHandler}>push me</button>
    </div>
  );
}

export default App;
