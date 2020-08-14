import React from 'react'

export default (props) =>{
    const {id,name,description,handleDelete} = props
    return(
        <tr>
            <td>{name}</td>
            <td>{description}</td>
            <td><a href="#" id={id}  className="btn-success-table" onClick={handleDelete}>Eliminar Post</a></td>
        </tr>
    )
}