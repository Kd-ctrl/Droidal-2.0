import React, { useState }  from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Button, Input, Chip  } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloseIcon from '@mui/icons-material/Close';
import AssetDrawer from './Drawers/AssetDrawer';


const transactionColumns = [
  { field: 'slNo', headerName: 'S.No', width: 70 },
  { field: 'status', headerName: 'Status', width: 100 },
  { field: 'reference', headerName: 'Reference', width: 100 },
  { field: 'revision', headerName: 'Revision', width: 80 },
  { field: 'priority', headerName: 'Priority', width: 100 },
  { field: 'deadline', headerName: 'Deadline', width: 100 },
  { field: 'postpone', headerName: 'Postpone', width: 150 },
  { field: 'started', headerName: 'Started', width: 100 },
  { field: 'ended', headerName: 'Ended', width: 170 },
  { field: 'exception', headerName: 'Exception', width: 250 },
];


const transactionRows = [
  {
    id: 1,
    slNo: 1,
    status: 'Deleted',
    reference: 'Ref-001',
    revision: 'None',
    priority: 'High',
    deadline: '',
    postpone: '',
    started: '23/01/2024 10:30 am',
    ended: '23/01/2024 10:40 am',
    exception: '',
  },
  {
    id: 2,
    slNo: 2,
    status: 'Deleted',
    reference: 'Ref-002',
    revision: 'None',
    priority: 'Normal',
    deadline: '',
    postpone: '',
    started: '22/01/2024 10:30 am',
    ended: '22/01/2024 10:40 am',
    exception: '',
  },
  {
    id: 3,
    slNo: 3,
    status: 'Deleted',
    reference: 'Ref-003',
    revision: 'None',
    priority: 'Low',
    deadline: '',
    postpone: '',
    started: '21/01/2024 10:30 am',
    ended: '21/01/2024 10:40 am',
    exception: '',
  },
  {
    id: 4,
    slNo: 4,
    status: 'Deleted',
    reference: '13529',
    revision: 'None',
    priority: 'High',
    deadline: '21/01/2024 10:30 am',
    postpone: '21/01/2024 10:40 am',
    started: '',
    ended: '',
    exception: '',
  },
];



const paginationModel = { page: 0, pageSize: 5 };

const TransactionTab = () => {
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

      <Paper style={{ height: 400, width: '100%', backgroundColor: '#F0F4FF' }}>
        <DataGrid
          rows={transactionRows}
          columns={transactionColumns}
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

export default TransactionTab;