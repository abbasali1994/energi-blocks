import { Backdrop, Card, CardContent, CardHeader, CircularProgress, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { blockData, currentBlock, requestInProgress } from "../redux/blocksSlice";
import { useEffect, useState } from "react";

const BlockTable = () => {
  const currentBlockNumber = useSelector(currentBlock);
  const block = useSelector(blockData);
  const loading = useSelector(requestInProgress);
  const [loadingMsg, setLoadingMsg] = useState("Fetching new Block Details")

  useEffect(() => {
    setLoadingMsg("Fetching new Block Details")
  }, [currentBlockNumber])

  useEffect(() => {
    setLoadingMsg("Fetching new block All Transactions")
  }, [block])


  return (
    <> <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      {loadingMsg} &nbsp;&nbsp; <CircularProgress color="inherit" />
    </Backdrop>
      <Card variant="outlined">
        <CardHeader title={"Latest Block: " + currentBlockNumber} />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <b>Miner</b>
            </Grid>
            <Grid item xs={6}>
              {block?.miner}
            </Grid>
            <Grid item xs={6}>
              <b>Difficulty</b>
            </Grid>
            <Grid item xs={6}>
              {block?.difficulty}
            </Grid>
            <Grid item xs={6}>
              <b> Number of Transactions</b>
            </Grid>
            <Grid item xs={6}>
              {block?.transactions?.length}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>

  );
};

export default BlockTable;
