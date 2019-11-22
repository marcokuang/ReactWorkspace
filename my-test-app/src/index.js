import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const buttonName = 'Click Me!';
  return <div>
    <p style={{backgroundColor: 'yellow', color: 'red'}}>This is an app</p>
<button> {buttonName} </button>
  </div>;
}

ReactDOM.render(<App />, document.querySelector('#root'));
