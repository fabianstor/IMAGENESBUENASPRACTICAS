import React, { useState } from 'react'

const Form = ({ getUserListArray, createUser }) => {

  //Atributos de la persona
  const defaultValues = { id: '', userId: '', name: '', lastName: '', age: '', address: '' };
  const [values, setValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isAllComplete() || !isAllComplete() ||!isValidId(values.userId)|| !isValidAge(values.age)) {
      return;
    }
    createUser(values);
    setValues(defaultValues);
  }

  function isAllComplete() {

    if (!values.userId.trim()) {
      alert('Completa la Id')
      return false;
    }

    if (!values.name.trim()) {
      alert('Completa el nombre')
      return false;
    }
    if (!values.lastName.trim()) {
      alert('Completa el apellido')
      return false;
    }
    if (!values.age.trim()) {
      alert('Completa la edad')
      return false;
    }
    if (!values.address.trim()) {
      alert('Completa la dirección')
      return false;
    }
    return true;
  }

  function isValidId(id) {

    if (isNaN(id)) {
      alert('Id no valida')

      return false;
    }

    if (!Number.isInteger(Number(id))) {
      alert('La id debe ser un numero entero')
      return false;
    }

    if (id < 1) {
      alert('La id debe ser mayor a 0')
      return false;
    }

    let find = false;

    getUserListArray().map((element) => {
      if (element.userId == id) {
       
        find = true;
      }
    })
    if (find) {
      alert('Id en uso')
      return false;
    }

    return true

  }

  function isValidAge(age) {
    if (isNaN(age)) {
      alert('Edad no valida')
      return false;
    }

    if (!Number.isInteger(Number(age))) {
      alert('La edad debe ser un numero entero')
      return false;
    }

    return true;
  }

  return (
    <div className="form-container">

      <h1>Registrar Usuarios</h1>
      <img src={""} alt='userImgView' className='userRegisterImg'></img>

      <div className="input-container">
        <form className='information-f' onSubmit={handleSubmit}>

          <input type="text"
            className='form-control mb-3'
            name='userId'
            placeholder='Id'
            onChange={handleInputChange}
            value={values.userId}
          />

          <input type="text"
            className='form-control mb-3'
            name='name'
            placeholder='Nombre'
            onChange={handleInputChange}
            value={values.name}
          />
          <input type="text"
            className='form-control mb-3'
            name='lastName'
            placeholder='Apellido'
            onChange={handleInputChange}
            value={values.lastName}
          />

          <input type="text"
            className='form-control mb-3'
            name='age'
            placeholder='Edad'
            onChange={handleInputChange}
            value={values.age}
          />

          <input type="text"
            className='form-control mb-3'
            name='address'
            placeholder='Dirección'
            onChange={handleInputChange}
            value={values.address}
          />
          <button className='btn btn-primary' type='submit'>Agregar</button>
        </form>

      </div>

    </div>

  )
}

export default Form