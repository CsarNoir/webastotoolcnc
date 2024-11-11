import './App.css';
import Table from './components/Table';
import { useState } from 'react';
function App() {
  

  const [tableData, setTableData] = useState([
    { fecha: '2024-11-10', cnc: 'CNC-01', numeroParte: 'P12345', noHerramienta: 'H001', noCiclos: 150, razonCambio: 'Desgaste de herramienta' },
    { fecha: '2024-11-11', cnc: 'CNC-02', numeroParte: 'P67890', noHerramienta: 'H002', noCiclos: 100, razonCambio: 'Ajuste de precisión' },
  ]);

  // Estado para capturar los datos del nuevo registro
  const [newEntry, setNewEntry] = useState({
    fecha: '',
    cnc: '',
    numeroParte: '',
    noHerramienta: '',
    noCiclos: '',
    razonCambio: ''
  });

  // Función para manejar el cambio en los campos de entrada
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Función para agregar un nuevo registro a la tabla
  const handleAddEntry = () => {
    setTableData(prevData => [...prevData, newEntry]);
    setNewEntry({
      fecha: '',
      cnc: '',
      numeroParte: '',
      noHerramienta: '',
      noCiclos: '',
      razonCambio: ''
    });
  };

        
  return (
    <div className="App">
      <div>
          <input
            type="text"
            name="fecha"
            placeholder="Fecha"
            value={newEntry.fecha}
            onChange={handleChange}
          />
          <input
            type="text"
            name="cnc"
            placeholder="CNC"
            value={newEntry.cnc}
            onChange={handleChange}
          />
          <input
            type="text"
            name="numeroParte"
            placeholder="Número de Parte"
            value={newEntry.numeroParte}
            onChange={handleChange}
          />
          <input
            type="text"
            name="noHerramienta"
            placeholder="No Herramienta"
            value={newEntry.noHerramienta}
            onChange={handleChange}
          />
          <input
            type="number"
            name="noCiclos"
            placeholder="No de Ciclos"
            value={newEntry.noCiclos}
            onChange={handleChange}
          />
          <input
            type="text"
            name="razonCambio"
            placeholder="Razón de Cambio"
            value={newEntry.razonCambio}
            onChange={handleChange}
          />
          <button onClick={handleAddEntry}>Agregar Registro</button>
        </div>
      <header className="App-header">
        <p>
        <Table data={tableData} />
        </p>
      </header>
    </div>
  );
}

export default App;
