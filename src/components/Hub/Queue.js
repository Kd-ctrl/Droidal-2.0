import React, { useState }  from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Button, Input, Chip  } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloseIcon from '@mui/icons-material/Close';
import QueueDrawer from './Drawers/QueueDrawerBar';

const queueColumns = [
  { field: 'slNo', headerName: 'S.No', width: 70 },
  { field: 'name', headerName: 'Name', width: 330 },
  { field: 'description', headerName: 'Description', width: 450 },
  { field: 'autoretry', headerName: 'Auto Retry', width: 100 },
  { field: 'noofretry', headerName: 'No of Retry', width: 120 },
  { field: 'actions', headerName: 'Actions', width: 150 },
];

const queueRows = [
  { id: 1, slNo: 1, name: 'File 1', description: 'Dummy descrption', autoretry: 'Yes', noofretry: 3 },
  { id: 2, slNo: 2, name: 'File 2', description: 'Dummy descrption', autoretry: 'No', noofretry: 2 },
  { id: 3, slNo: 3, name: 'File 3', description: 'Dummy descrption', autoretry: 'Yes', noofretry: 1 },
];

const paginationModel = { page: 0, pageSize: 5 };

const QueueTab = () => {
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
      <QueueDrawer
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)} // Pass a function to close the drawer
            />
            </div>

      <Paper style={{ height: 400, width: '100%', backgroundColor: '#F0F4FF' }}>
        <DataGrid
          rows={queueRows}
          columns={queueColumns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          hideFooterSelectedRowCount
          sx={{
            border: 0,
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: '#2C5282', // Set the header background color
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              color: '#FFF', // Set the text color to white
            },
          }}
        />
      </Paper>

    </div>
  );
};

export default QueueTab;