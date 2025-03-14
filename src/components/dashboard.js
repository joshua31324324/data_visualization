import React, { useState } from 'react';
import { parseCSV } from '../utils/parseCSV';
import DataTable from './dataTable';
import './dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    parseCSV(file, setData);
  };

  return (
    <div className="dashboard-container">
      <div className="background-gif">
        <h1>CSV Data Viewer</h1>
        <p>Click on the button below to upload a CSV file. Make sure the file is properly formatted so you can view its data.</p>
        <p>Only CSV files are allowed</p>
        <input type="file" accept=".csv" onChange={handleFileUpload} />
        <DataTable data={data} />
        </div>
    </div>
  );
};

export default Dashboard;