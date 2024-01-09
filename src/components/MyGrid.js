import React, { useEffect, useState } from 'react'
import authfetch from '../axioshandler/interceptor';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

export default function MyGrid() {
  const [data, setData] = useState([]);
  const [colums, setcolums] = useState([
    { field: 'id', headerName: 'id' },
    { field: 'title', headerName: 'title' },
    { field: 'firstName', headerName: 'firstName' },
    { field: 'lastName', headerName: 'lastName' },
    { field: 'email', headerName: 'email' },
    { field: 'role', headerName: 'role' },

  ]);
  useEffect(() => {
    authfetch.get("/accounts").then(y => {

      setData(y.data);
      console.log(data);
    });
  }, [])
  
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div
        style={{ width: '100%', height: '100%' }}
        className={
          "ag-theme-quartz"
        }
      >
        <AgGridReact
          rowData={data}
          columnDefs={colums}
        />
      </div>

    </div>
  )
}
