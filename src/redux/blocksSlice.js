import { createSlice } from "@reduxjs/toolkit";

const blocksSlice = createSlice({
  name: "blocks",
  initialState: {
    currentBlock: null,
    blockData: {},
    transactions: [],
    triggerRequest: true,
    requestInProgress: true,
  },
  reducers: {
    setCurrentBlock: (state, action) => {
      state.currentBlock = action.payload;
    },
    setBlockData: (state, action) => {
      state.blockData = action.payload;
    },
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
    setTriggerRequest: (state, action) => {
      state.triggerRequest = action.payload;
    },
    setRequestInProgress: (state, action) => {
      state.requestInProgress = action.payload;
    },
  },
});

export const currentBlock = (state) => state.blocks.currentBlock;
export const blockData = (state) => state.blocks.blockData;
export const transactions = (state) => state.blocks.transactions;
export const triggerRequest = (state) => state.blocks.triggerRequest;
export const requestInProgress = (state) => state.blocks.requestInProgress;

export const {
  setCurrentBlock,
  setBlockData,
  setTransactions,
  setTriggerRequest,
  setRequestInProgress,
} = blocksSlice.actions;

export default blocksSlice.reducer;
