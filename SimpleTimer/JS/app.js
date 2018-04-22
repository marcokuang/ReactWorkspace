function timer(){
    const stringObject = (
      <div>
        <h1>Hello Marco!</h1>
        <h2>The Time now is {getTime()}</h2>
      </div>
    );
    
    function getTime() {
        return new Date().toLocaleTimeString();
    }

    ReactDOM.render(stringObject, document.getElementById('root'));
    
}

setInterval(timer, 1000);