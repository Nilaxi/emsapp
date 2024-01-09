import React from 'react'
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';

export default function EmployeeGrid() {
  const columns = [
    { key: 'id', name: 'ID', sortDescendingFirst: true },
    { key: 'title', name: 'Title' }
  ];

  const rows = [
    { id: 0, title: 'Example' },
    { id: 1, title: 'Demo' }
  ];
  return (
    <DataGrid columns={columns} rows={rows} sortColumn="name" />
  )
}
