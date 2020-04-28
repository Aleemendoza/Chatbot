import React from 'react';
import logo from './logo.svg';
import './App.css';

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

    var a = 'asdf'

    return (
      <div> {r}</div>


    );
  }
}

export default App;
