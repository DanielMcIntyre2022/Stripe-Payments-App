import './App.css';

const buttonClick = () => {
  fetch('/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      items: [
        { id: 1, quanity: 3 },
        { id: 2, quanity: 1 }
      ]
    })
  }).then(res => {
    if (res.ok) return res.json()
    return res.json().then(json => Promise.reject(json))
  }).then(({ url }) => {
    window.location = url
  }).catch(e => {
    console.log(e);
  })
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
