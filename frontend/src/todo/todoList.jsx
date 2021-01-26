import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
const renderRouws = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id} className={todo.done ? 'markedAsDone' : ''}>
          <td>
              {todo._id}
          </td>
          <td>
              {todo.description}
          </td>
          <td>
              <IconButton hide={todo.done} style="info" icon="fas fa-check" onClick={() => props.handleMakeAsDone(todo)}/>
              <IconButton hide={!todo.done} style="warning" icon="fas fa-undo" onClick={() => props.handleMakeAsPending(todo)}/>
              <IconButton hide={!todo.done} style="danger" icon="fas fa-trash-alt" onClick={() => props.handleRemove(todo)}/>
          </td>
      </tr> 
    ))
}

    return(
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Descrição</th>
                        <th scope="col" className="tableActions">Ações</th>
                        {/* <th scope="col">Handle</th> */}
                    </tr>
                </thead>
                <tbody>
                   {renderRouws()}
                </tbody>
            </table>
    )
}