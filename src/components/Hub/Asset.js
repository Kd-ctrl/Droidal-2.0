import React, { useState }  from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Button, Input, Chip  } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloseIcon from '@mui/icons-material/Close';
import AssetDrawer from './Drawers/AssetDrawer';


const assetColumns = [
  { field: 'slNo', headerName: 'S.No', width: 70 },
  { field: 'name', headerName: 'Name', width: 330 },
  { field: 'label', headerName: 'Label', width: 120 },
  { field: 'type', headerName: 'Type', width: 100 },
  { field: 'value', headerName: 'Value', width: 450 },
  { field: 'actions', headerName: 'Actions', width: 150 },
];

const assetRows = [
  {
    id: 1,
    slNo: 1,
    name: 'Asset 1',
    label: 'File',
    type: 'Text',
    value: 'File content goes here',
    actions: 'Edit/Delete',
  },
  {
    id: 2,
    slNo: 2,
    name: 'Asset 2',
    label: 'Document',
    type: 'Boolean',
    value: 'True',
    actions: 'Edit/Delete',
  },
  {
    id: 3,
    slNo: 3,
    name: 'Asset 3',
    label: 'Credentials',
    type: 'Encrypted',
    value: '••••••',
    actions: 'Edit/Delete',
  },
];


const paginationModel = { page: 0, pageSize: 5 };

const AssetTab = () => {
  const [files, setFiles] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles.map((file) => ({ name: file.name, id: Date.now() }))]);
  };

  const handleFileDelete = (fileId) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== fileId));
  };

  return (
    <div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
      <AssetDrawer
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)} // Pass a function to close the drawer
            />
            </div>

      <Paper style={{ height: 400, width: '100%', backgroundColor: '#F0F4FF' }}>
        <DataGrid
          rows={assetRows}
          columns={assetColumns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          hideFooterSelectedRowCount
          sx={{
            border: 0,
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: '#2C5282', // Set the header background color
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              color: '#FFFFFF', // Set the text color to white
            },
          }}
        />
      </Paper>

    </div>
  );
};

export default AssetTab;
