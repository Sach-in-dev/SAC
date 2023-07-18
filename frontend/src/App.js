import 'react-data-grid/lib/styles.css';
import React from 'react';
import DataGrid from 'react-data-grid';

const TableExample = () => {
  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'name', name: 'Name' },
    { key: 'age', name: 'Age' },
  ];

  const rows = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Mike Johnson', age: 35 },
    // Add more rows as needed
  ];

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
};

export default TableExample;