import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCita';
import ListaCitas from './componentes/ListaCitas';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      citas : []
    };
  }

  componentDidMount() {
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas:JSON.parse(citasLS)
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('citas',JSON.stringify(this.state.citas));
  }

  crearCita = (nuevaCita)=>{
    const citas = [...this.state.citas,nuevaCita];
    this.setState({
      citas:citas
    });
  }

  borrarCita = (id)=>{
    const citasActuales = [...this.state.citas];
    const citas = citasActuales.filter(cita => cita.id !== id);
    this.setState({
      citas:citas
    });
  }
  
  render() {
    return (
      <div className="container">
        <Header
          titulo="Administrador de Paciente Veterinaria"
        />
        <div className="row">
          <div className="col-md-6">
          <AgregarCita
            crearCita = {this.crearCita}
          />
          </div>
          <div className="col-md-6">
            <ListaCitas
              citas={this.state.citas}
              borrarCita={this.borrarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;