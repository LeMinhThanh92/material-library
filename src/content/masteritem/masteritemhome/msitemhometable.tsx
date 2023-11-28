import { Paper } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { useState } from 'react';

const rows: GridRowsProp = [
  {
    id: 1,
    masteritemid:'1',
    name: 'World',
    description: '123',
    masteritemgroup: '123',
  },
  {
    id: 2,
    masteritemid:'2',
    name: 'World',
    description: '123',
    masteritemgroup: '123',
  },
  {
    id: 3,
    masteritemid:'3',
    name: 'World',
    description: '123',
    masteritemgroup: '123',
  },
  {
    id: 4,
    masteritemid:'4',
    name: 'World',
    description: '123',
    masteritemgroup: '123',
  },
  {
    id: 5,
    masteritemid:'5',
    name: 'World',
    description: '123',
    masteritemgroup: '123',
  },

];

const columns: GridColDef[] = [
  { field: 'id' , headerClassName: 'col-header',hideable:true,flex:1},
  { field: 'masteritemid', headerName: 'masteritemid', headerClassName: 'col-header',flex:1 },
  { field: 'name', headerName: 'name', headerClassName: 'col-header',flex:1 },
  { field: 'description', headerName: 'description',headerClassName: 'col-header',flex:1 },
  { field: 'masteritemgroup', headerName: 'masteritemgroup', headerClassName: 'col-header',flex:1 },
];

export default function MSTable() {
  const [page, setPage] = useState<number>(0);
  const [pageSize, setRowsPerPage] = useState(5);
  const [paginationModel, setPaginationModel] = useState({
    page: page,
    pageSize: pageSize
  });
  return (
    <div>
      <Paper sx={{
        width: '100%',
        minHeight: 100,
        marginTop: 1,
        '& .MuiDataGrid-columnHeaderTitle': {
          fontWeight: 'bold'
        },
        '& .col-header': {
          backgroundColor: "#CDAF95",
        },
      }}>
        <DataGrid
          rows={rows}
          columns={columns.filter((column)=>!column.hideable)}
          pageSizeOptions={[5, 10, 20]}
          paginationMode={'client'}
          paginationModel={paginationModel}
          rowCount={rows.length}
          slots={{
            toolbar: GridToolbar,
          }}
          onPaginationModelChange={(model) => {
            console.log('Model change:', model);
            setPage(model.page);
            setRowsPerPage(model.pageSize);
            setPaginationModel(model);
          }}
        />
      </Paper>
    </div>
  );
}
