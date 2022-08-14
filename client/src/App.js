import './App.css';

const buttonClick = (e) => {
  console.log('Checkout')
}

function App() {
  return (
    <div className="App-Container">
      <div className="payment-container">
          <button onClick={buttonClick}>Checkout</button>
      </div>
    </div>
  );
}

export default App;
