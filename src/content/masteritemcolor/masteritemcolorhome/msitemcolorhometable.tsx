import { Paper } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { useState } from 'react';

const rows: GridRowsProp = [
  {
    id: 1,
    vendoraccount: 'Hello',
    name: 'World',
    address: '123',
    group: '123',
    contactperson: '123',
    contactnumber: '123',
    taxid: '123',
    email: '123',
    payment: '123',
    currency: '123',
    internalname: '123'
  },
  {
    id: 1,
    vendoraccount: 'Hello',
    name: 'World',
    address: '123',
    group: '123',
    contactperson: '123',
    contactnumber: '123',
    taxid: '123',
    email: '123',
    payment: '123',
    currency: '123',
    internalname: '123'
  },
  {
    id: 1,
    vendoraccount: 'Hello',
    name: 'World',
    address: '123',
    group: '123',
    contactperson: '123',
    contactnumber: '123',
    taxid: '123',
    email: '123',
    payment: '123',
    currency: '123',
    internalname: '123'
  },
  {
    id: 1,
    vendoraccount: 'Hello',
    name: 'World',
    address: '123',
    group: '123',
    contactperson: '123',
    contactnumber: '123',
    taxid: '123',
    email: '123',
    payment: '123',
    currency: '123',
    internalname: '123'
  }
];

const columns: GridColDef[] = [
  { field: 'id' , headerClassName: 'col-header'},
  { field: 'vendoraccount', headerName: 'vendoraccount', headerClassName: 'col-header',flex:1 },
  { field: 'name', headerName: 'name',headerClassName: 'col-header',flex:1 },
  { field: 'address', headerName: 'address',headerClassName: 'col-header',flex:1 },
  { field: 'group', headerName: 'group', headerClassName: 'col-header',flex:1 },
  { field: 'contactperson', headerName: 'contactperson',headerClassName: 'col-header',flex:1 },
  { field: 'contactnumber', headerName: 'contactnumber',headerClassName: 'col-header',flex:1 },
  { field: 'taxid', headerName: 'taxid',headerClassName: 'col-header',flex:1 },
  { field: 'email', headerName: 'email', headerClassName: 'col-header',flex:1 },
  { field: 'payment', headerName: 'payment',headerClassName: 'col-header',flex:1 },
  { field: 'currency', headerName: 'currency', headerClassName: 'col-header',flex:1 },
  { field: 'internalname', headerName: 'internalname', headerClassName: 'col-header',flex:1},
];

export default function MSColorTable() {
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
          columns={columns}
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
