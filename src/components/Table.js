import React from 'react';

function Table({ data }) {
  return (
    <div className="table-container">
      <h1>Historial de Cambios CNC</h1>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>CNC</th>
            <th>Número de Parte</th>
            <th>No Herramienta</th>
            <th>No de Ciclos</th>
            <th>Razón de Cambio</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.fecha}</td>
              <td>{row.cnc}</td>
              <td>{row.numeroParte}</td>
              <td>{row.noHerramienta}</td>
              <td>{row.noCiclos}</td>
              <td>{row.razonCambio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
