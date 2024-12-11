import React, { useState }  from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Button, Input, Chip  } from '@mui/material';
import { PlayArrow as PlayArrowIcon } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import TriggerDrawer from './Drawers/TriggerDrawerBar';

const triggerColumn = [
  { field: 'slNo', headerName: 'S.No', width: 100 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'description', headerName: 'Description', width: 420 },
  { field: 'machine', headerName: 'Machine', width: 170 },
  { field: 'cronquery', headerName: 'Cron Query', width: 120 },
  { field: 'dummy', headerName: 'Dummy', width: 120 },
  { field: 'action', headerName: 'Action', width: 140 },
];

const triggerRows = [
  { id: 1, slNo: 1, name: 'Backup Trigger', description: 'Triggers daily backups', machine: 'Machine 1', cronquery: '0 2 * * *', dummy: '-', action: 'Edit/Delete' },
  { id: 2, slNo: 2, name: 'Data Sync', description: 'Syncs data every 6 hours', machine: 'Machine 2', cronquery: '0 */6 * * *', dummy: '-', action: 'Edit/Delete' },
  { id: 3, slNo: 3, name: 'Log Rotation', description: 'Rotates logs weekly', machine: 'Machine 3', cronquery: '0 0 * * 0', dummy: '-', action: 'Edit/Delete' },
  { id: 4, slNo: 4, name: 'Cache Clear', description: 'Clears cache every hour', machine: 'Machine 4', cronquery: '0 * * * *', dummy: '-', action: 'Edit/Delete' },
  { id: 5, slNo: 5, name: 'Health Check', description: 'Checks server health', machine: 'Machine 5', cronquery: '*/5 * * * *', dummy: '-', action: 'Edit/Delete' },
];


const paginationModel = { page: 0, pageSize: 5 };


const TriggerTab = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleTriggerClick = () => {
    setDrawerOpen(true);
  };
  return (
    <div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
      <TriggerDrawer
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)} // Pass a function to close the drawer
            />
            </div>

      


      <Paper style={{ height: 400, width: '100%', backgroundColor: '#F0F4FF' }}>
        <DataGrid
          rows={triggerRows}
          columns={triggerColumn}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          hideFooterSelectedRowCount
          disableColumnResize
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

export default TriggerTab;
