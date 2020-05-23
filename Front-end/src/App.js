import React from 'react';
import logo from './logo.svg';
import './App.css';
import imagen from './logoEsimbol.jpg'
class App extends React.Component {
  render () {
    var urlApp = 'http://localhost:8000/mensajes/'
    var r = null
    fetch(urlApp, {
      method:'GET'
    }).then( response => { 
      return response.json()
    }).then( response => {
      r = response[0].fields.contenido
      console.log(response[0].fields.contenido)
    })

    const titulo  = "Bienvenidos al Chat bot";

    


    return (
      <div> 
        <header>
        <img src = {imagen} className='app-chatBot' alt= "logo" />
        </header>
      </div>


    );
  }
}

export default App;
