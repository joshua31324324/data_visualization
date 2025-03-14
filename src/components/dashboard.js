import React, { useState } from 'react';
import { parseCSV } from '../utils/parseCSV';
import DataTable from './dataTable';

const Dashboard = () => {
  const [data, setData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    parseCSV(file, setData);
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <DataTable data={data} />
    </div>
  );
};

export default Dashboard;