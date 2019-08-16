import React from 'react';
import ReactDOM from 'react-dom';
import My_order from'./Scripts/my_order';
import './App.css'
import incedo from './download.png'

function App() {
  return (
    <body>
      <div className="App">
        <header className="App-header">
          <center>
            <img src={incedo} class="cent" alt="Incedo Logo" width="50%"></img><br/>
            <button onClick = {()=>ReactDOM.render(<My_order/>, document.getElementById('root'))} class="appB">Place My order</button>
          </center>      
        </header>
      </div>
    </body>
  );
}

export default App;