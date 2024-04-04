import { DataGrid } from "@mui/x-data-grid";
import styled from "@emotion/styled";

const TableStyles = styled.div`
  * {
    color: #fff;
  }
  .MuiDataGrid-columnHeaders * {
    color: black;
  }
`;

type RowType = {
  [key: string]: string | number;
};

type ColumnType = {
  field: string;
  headerName: string;
  width?: number;
};

type TablePropsType = {
  rows: RowType[];
  columns: ColumnType[];
};

export function DataTable(props: TablePropsType) {
  const { rows, columns } = props;
  return (
    <TableStyles style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </TableStyles>
  );
}
