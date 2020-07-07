import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cita extends Component {
    
    eliminarCita = ()=>{
        this.props.borrarCita(this.props.cita.id);
    }
    
    render() {
        const {id,fecha,hora,mascota,duenio,sintomas} = this.props.cita;
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{mascota}</h3>
                    <p className="card-text"><span>Nombre del Dueño:</span> {duenio} </p>
                    <p className="card-text"><span>Fecha:</span> {fecha} </p>
                    <p className="card-text"><span>Hora:</span> {hora} </p>
                    <p className="card-text"><span>Síntomas:</span> </p>
                    <p className="card-text">{sintomas}</p>

                    <button onClick={this.eliminarCita} className="btn btn-danger">Eliminar &times;</button>
                </div>
            </div>
        );
    }
}

Cita.propTypes = {
    cita : PropTypes.shape({
        fecha : PropTypes.string.isRequired,
        hora : PropTypes.string.isRequired,
        mascota: PropTypes.string.isRequired,
        duenio: PropTypes.string.isRequired,
        sintomas: PropTypes.string.isRequired,
        id:PropTypes.string.isRequired
    }),
    borrarCita: PropTypes.func.isRequired
}

export default Cita;