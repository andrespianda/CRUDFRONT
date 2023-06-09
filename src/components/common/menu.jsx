import React, { Component } from "react";
import axios from 'axios'

export default class Menu extends Component {

  state = {
    nombre: '',
    apellido: '',
    cedula:''
   // funBoton:''
}


// onChagedatos = (e) => {  //para extraer el nombre del archivo sin la ruta 
//     this.setState({ datos: e.target.files[0], nombre: e.target.files[0].name });
// }

onChangeCtrlnom = (e) => { // Metodo para calcular el ultimo dia del mes 


    this.setState({ nombre: e.target.value })
    //console.log(e, 'revisar', this.state) //solo pruebas
}
onChangeCtrlape = (e) => { // Metodo para calcular el ultimo dia del mes 


  this.setState({ apellido: e.target.value })
  //console.log(e, 'revisar', this.state) //solo pruebas
}
onChangeCtrlnum = (e) => { // Metodo para calcular el ultimo dia del mes 


  this.setState({ cedula: e.target.value})
 // console.log(e, 'revisar', this.state) //solo pruebas
}
guardarDatos =  async e => { //Metodo para validar el nombre del archivo que se va a cargar
    e.preventDefault();
    console.log( 'revisar', this.state)
    const datosVal = {
        nombre: this.state.nombre,
        apellido: this.state.apellido,
        cedula: this.state.cedula
    }

    console.log(datosVal.nombre) //solo para pruebas

     const respuesta =  await axios.post('http://localhost:4000/datos', datosVal)

    // this.setState( {
    //     estado2: respuesta.data.estados, 
    //     mensaje : respuesta.data.mensaje,
    //     botonModal: respuesta.data.botonModal,
    //     btnClaseModal: respuesta.data.btnClaseModal,
    //     //funBoton: respuesta.data.funBoton
    // })
    //console.log( this.state.estado2, this.state.mensaje, respuesta.data)
}

// onSubmit = async (e) => {  // llama metodo del Backend para cargar el archivo al servidor
//     console.log(this.state.botonModal)
//     e.preventDefault();
    
//     if (this.state.botonModal === "Validar") {
    
//     console.log(this.state.fechaCorte, this.state.datos)

//     const formData = new FormData();
//     formData.append('file', this.state.datos)
//     console.log(formData)

//     const res = await axios.post('http://localhost:4000/cargas', formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data'
//         }
//     })

//     console.log(res)
// }
// }

  render() {
    return (
      <div className="container p-4">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputnombre" className="form-label">
              Nombre
            </label>
            <input type="text" className="form-control" id="nombre" onChange={this.onChangeCtrlnom} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputapellido" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="apellido"
              onChange={this.onChangeCtrlape}
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputcedula" className="form-label">
              cedula
            </label>
            <input
              type="text"
              className="form-control"
              id="inputcedula"
              onChange={this.onChangeCtrlnum}
              
            />
          </div>
          

          <div className="col-12">
            <button type="submit" className="btn btn-primary" onClick={this.guardarDatos}>
              Crear
            </button>
          </div>
        </form>
      </div>
    );
  }
}
