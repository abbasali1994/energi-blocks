import { Box, Grid, ToggleButton } from "@mui/material";
import { useSelector } from "react-redux";
import "./App.css";

import TransactionTable from "./components/TransactionsTable";
import BlockTable from "./components/BlockTable";

import { setTriggerRequest, triggerRequest } from "./redux/blocksSlice";
import store from "./store";

const App = () => {
  const triggerFlag = useSelector(triggerRequest)
  return (
    <Box
      sx={{
        margin: "20px",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <h2>Block Explorer</h2>
        </Grid>
        <Grid item xs={3}>
          <ToggleButton
            value="check"
            selected={triggerFlag}
            onChange={() => {
              store.dispatch(setTriggerRequest(!triggerFlag))
            }}
          >
            {triggerFlag ? "Click to Stop Requesting New Data" : "Click to Start Requesting New Data"}
          </ToggleButton>
        </Grid>
      </Grid>
      <BlockTable />
      <br />
      <TransactionTable />
    </Box>
  );
};

export default App;
