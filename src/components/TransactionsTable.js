import { Card, CardContent, CardHeader } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { transactions } from "../redux/blocksSlice";
import { formatAddress, formatAmount } from "../utils/formatter";
import { convertToDecimal } from "../utils/ethereum";

const columns = [
  {
    field: "hash",
    headerName: "Hash",
    flex: 1,
  },
  {
    field: "from",
    headerName: "From",
    width: 150,
    valueGetter: (params) => `${formatAddress(params.row.from || "")}`,
  },
  {
    field: "to",
    headerName: "To",
    width: 150,
    valueGetter: (params) => `${formatAddress(params.row.to || "")}`,
  },
  {
    field: "gasPrice",
    headerName: "Gas Price",
    type: "number",
    width: 150,
    valueGetter: (params) =>
      `${formatAmount(convertToDecimal(params.row.gasPrice || "0", 18))}`,
  },
  {
    field: "value",
    headerName: "Value",
    type: "number",
    width: 150,
    valueGetter: (params) =>
      `${formatAmount(convertToDecimal(params.row.value || "0", 18))}`,
  },
];

const TransactionTable = () => {
  const transactionList = useSelector(transactions);

  return (
    <Card color="success" variant="outlined">
      <CardHeader
        title={"Latest Transactions"}
        subheader={"Total Transaction: " + transactionList.length}
      />
      <CardContent>
        <div style={{ width: "100%" }}>
          <DataGrid
            rows={transactionList}
            columns={columns}
            autoHeight
            pageSize={10}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionTable;
