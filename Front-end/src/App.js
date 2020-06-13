import React from 'react';
import logo from './logo.svg';
import './index.css';
import imagen from './fondoceleste.jpg'
class App extends React.Component {
  render () {
    var urlApp = 'http://localhost:3001/messages/156'
    var r = null
    fetch(urlApp, {
      method:'GET'
    }).then( response => { 
      return response.json()
    }).then( response => {
      r = response[0].fields.contenido
      console.log(response[0].fields.contenido)
    })
    
    
    
    
    return (
      <div> 
       
        <header>
        <img src = {imagen} id= "imagen" className='app-chatBot' alt= "logo"  />
        <h1></h1>
        </header>
      </div>


    );
  }
}

export default App;
