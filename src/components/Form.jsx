import React, { useState } from 'react'

const Form = ({ getUserListArray, createUser,updateUser}) => {

  //Atributos de la persona
  const defaultValues = { id: '', userId: '', name: '', lastName: '', age: '', address: '', nick: '', dni: '' };
  const [values, setValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidId(values.userId) || !isValidAge(values.age)) {
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
    if (!values.nick.trim()) {
      alert('Completa el apodo')
      return false;
    }
    if (!values.dni.trim()) {
      alert('Completa el DNI')
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
    if (id > 1084) {
      alert('No existe esa imagen, escriba un número menor a 1085')
      return false;
    }

    let find = false;

    let principalElement;
    getUserListArray().map((element) => {
      if (element.userId == id) {
        principalElement =element ;
        find = true;
      }
    })

    if (find) {
      updateUser(principalElement.id,values);
      alert('Id actualizada');
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

      {values.userId && values.userId<1085 ? <img src={`https://picsum.photos/id/${values.userId}/200/300`} alt='userImgView' className='userRegisterImg'></img> : null}
      <div className="input-container">
        <form className='information-f' onSubmit={handleSubmit}>

          <input type="number"
            className='form-control mb-3'
            name='userId'
            placeholder='Id'
            onChange={handleInputChange}
            value={values.userId}
            required
          />

          <input type="text"
            className='form-control mb-3'
            name='name' te saliste de dis
            placeholder='Nombre'
            onChange={handleInputChange}
            value={values.name}
            required
          />
          <input type="text"
            className='form-control mb-3'
            name='lastName'
            placeholder='Apellido'
            onChange={handleInputChange}
            value={values.lastName}
            required
          />
          <input type="text"
            className='form-control mb-3'
            name='dni'
            placeholder='DNI'
            onChange={handleInputChange}
            value={values.dni}
            required
          />
          <input type="text"
            className='form-control mb-3'
            name='nick'
            placeholder='Apodo'
            onChange={handleInputChange}
            value={values.nick}
            required
          />

          <input type="number"
            className='form-control mb-3'
            name='age'
            placeholder='Edad'
            onChange={handleInputChange}
            value={values.age}
            required
          />

          <input type="text"
            className='form-control mb-3'
            name='address'
            placeholder='Dirección'
            onChange={handleInputChange}
            value={values.address}
            required
          />

          <button className='btn btn-primary' type='submit'>Agregar</button>
        </form>

      </div>

    </div>

  )
}

export default Form