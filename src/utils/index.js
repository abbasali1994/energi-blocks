import store from "../store";
import { getBlockDetails, getCurrentBlockNumber, getTransactionDetails } from "./ethereum";

import { setBlockData, setCurrentBlock, setRequestInProgress, setTransactions } from "../redux/blocksSlice"
export const triggerBlockRequest = async () => {
    const {
        blocks: { currentBlock, triggerRequest },
    } = store.getState();
    if (triggerRequest) {
        const newBlockNumber = await getCurrentBlockNumber();
        if (newBlockNumber !== currentBlock) {
            store.dispatch(setRequestInProgress(true));
            store.dispatch(setCurrentBlock(newBlockNumber));
            const blockDetails = await getBlockDetails(newBlockNumber);
            store.dispatch(setBlockData(blockDetails));
            const transactions = await getTransactions(
                blockDetails.transactions
            );
            store.dispatch(setTransactions(transactions));
            store.dispatch(setRequestInProgress(false));
        }
    }
};

export const getTransactions = async (transactions) => {
    let txns = [];
    for (let i = 0; i < transactions.length; i++) {
        const txn = await getTransactionDetails(transactions[i]);
        txns.push({ ...txn, id: i });
    }
    return txns;
};

setInterval(() => triggerBlockRequest(), 10000);