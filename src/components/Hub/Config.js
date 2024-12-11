import React, { useState }  from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Button, Input, Chip  } from '@mui/material';
import { PlayArrow as PlayArrowIcon } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import ConfigDrawer from './Drawers/ConfigDrawer';


const ConfigColumn = [
  { field: 'slNo', headerName: 'S.No', width: 70 },
  { field: 'name', headerName: 'Name', width: 500 },
  { field: 'type', headerName: 'Type', width: 330 },
  { field: 'value', headerName: 'Value', width: 320 },
];


const ConfigRows = [
  { id: 1, slNo: 1, name: 'Config 1', type: 'Integer', value: '10' },
  { id: 2, slNo: 2, name: 'Config 2', type: 'Boolean', value: 'True' },
  { id: 3, slNo: 3, name: 'Config 3', type: 'Text', value: 'Test' },
];



const paginationModel = { page: 0, pageSize: 5 };


const ConfigTab = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleTriggerClick = () => {
    setDrawerOpen(true);
  };


  return (
    <div>

      {/* <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
      <ConfigDrawer
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)} // Pass a function to close the drawer
            />
            </div> */}

      


      <Paper style={{ height: 400, width: '100%', backgroundColor: '#F0F4FF' }}>
        <DataGrid
          rows={ConfigRows}
          columns={ConfigColumn}
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

export default ConfigTab;
