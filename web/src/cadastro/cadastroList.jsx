import React from 'react';
import IconButton from '../template/iconButton';

export default props => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td>{todo.nome}</td>
        <td>{todo.data}</td>
        <td>
          <IconButton style="danger" icon="trash-o" hide={false}
            onClick={() => props.handleRemove(todo)} />
        </td>
      </tr>
    ));
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Lista de Cadastro</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}