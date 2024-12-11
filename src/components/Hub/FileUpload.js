import React, { useState }  from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Button, Input, Chip  } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloseIcon from '@mui/icons-material/Close';

const filUploadColumn = [
  { field: 'slNo', headerName: 'S.No', width: 70 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'version', headerName: 'Version', width: 100 },
  { field: 'jobPriority', headerName: 'Job Priority', width: 120 },
  { field: 'executionType', headerName: 'Execution Type', width: 150 },
  { field: 'compatibility', headerName: 'Compatibility', width: 150 },
  { field: 'entryPoint', headerName: 'Entry Point', width: 150 },
  { field: 'description', headerName: 'Description', width: 200 },
  { field: 'labels', headerName: 'Labels', width: 130 },
];

const filUploadRows = [
  { id: 1, slNo: 1, name: 'File 1', version: '1.0.0', jobPriority: 'High', executionType: 'Executed', compatibility: '', entryPoint: 'File Upload', description: '', labels: 'Label 1' },
  { id: 2, slNo: 2, name: 'File 2', version: '1.0.0', jobPriority: 'Low', executionType: 'In-Progress', compatibility: '', entryPoint: 'File Upload', description: '', labels: 'Label 2' },
  { id: 3, slNo: 3, name: 'File 3', version: '1.0.0', jobPriority: 'Medium', executionType: 'Failed', compatibility: '', entryPoint: 'File Upload', description: '', labels: 'Label 3' },
];

const paginationModel = { page: 0, pageSize: 5 };

const FileUploadTab = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles.map((file) => ({ name: file.name, id: Date.now() }))]);
  };

  const handleFileDelete = (fileId) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== fileId));
  };

  return (
    <div>
      {/* File Upload Section */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <Input type="file" id="file-upload" style={{ display: 'none' }} onChange={handleFileChange} inputProps={{ multiple: true }} />
        <label htmlFor="file-upload">
          <Button variant="contained" color="primary" startIcon={<AttachFileIcon />} style={{ backgroundColor: '#2C5282' }} component="span">
            Choose File
          </Button>
        </label>
        <Button style={{ marginLeft: '16px', backgroundColor: 'transparent', border:'#0F2942 solid .5px', color: '#0F2942' }}>Upload</Button>
      </div>

      {/* Display uploaded files as badges */}
      <div style={{ marginBottom: '16px' }}>
        {files.map((file) => (
          <Chip key={file.id} label={file.name} onDelete={() => handleFileDelete(file.id)} deleteIcon={<CloseIcon />} style={{ marginRight: '8px', marginBottom: '8px' }} />
        ))}
      </div>

      <Paper style={{ height: 400, width: '100%', backgroundColor: '#F0F4FF' }}>
        <DataGrid
          rows={filUploadRows}
          columns={filUploadColumn}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          hideFooterSelectedRowCount
          sx={{
            border: 0,
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: '#2C5282', // Set the header background color
            },
           '& .MuiDataGrid-row--borderBottom': {
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

export default FileUploadTab;
