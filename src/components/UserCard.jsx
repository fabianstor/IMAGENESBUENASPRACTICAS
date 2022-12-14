import React from 'react'

export const UserCard = ({ getUserListArray, deleteUser }) => {

  let userList = getUserListArray();

  return (
    <div>
      {
        <div className='principal-card-container'>
          <h2 className='registered-user-title'>Usuarios Registrados</h2>
          {
            userList.map((element, index) =>
              <div className='user-card-container' key={index}>
                <img src={`https://picsum.photos/id/${element.userId}/200/300`} className='userImg'></img>

                <table className='table table-hover'>
                  <tbody>

                    <tr>
                      <th className='informationType'>Id</th>
                      <td>{element.userId}</td>
                    </tr>
                    <tr>
                      <th className='informationType'>FireBase</th>
                      <td>{element.id}</td>
                    </tr>

                    <tr>
                      <th className='informationType'>Nombre</th>
                      <td>{element.name}</td>
                    </tr>
                    <tr>
                      <th className='informationType'>Apellido</th>
                      <td>{element.lastName}</td>
                    </tr>
                    <tr>
                      <th className='informationType'>Edad</th>
                      <td>{element.age}</td>
                    </tr>
                    <tr>
                      <th className='informationType'>Dirección</th>
                      <td>{element.address}</td>
                    </tr>
                    <tr>
                      <th className='informationType'>Nick</th>
                      <td>{element.nick}</td>
                    </tr>
                    <tr>
                      <th className='informationType'>DNI</th>
                      <td>{element.dni}</td>
                    </tr>
                  </tbody>
                </table>

                <button type='button' className='btn btn-danger' onClick={() => deleteUser(element.id)}>Borrar</button>
              </div>)
          }

        </div>
      }
    </div>
  )
}