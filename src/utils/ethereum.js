import Web3, { utils } from 'web3';
var web3 = new Web3(new Web3.providers.HttpProvider('https://nodeapi.energi.network/v1/jsonrpc'));

export const getCurrentBlockNumber = async () => {
    var currBlockNo = await web3.eth.getBlockNumber();
    return currBlockNo;
}

export const getBlockDetails = async (currBlockNo) => {
    var currBlockObj = await web3.eth.getBlock(currBlockNo);
    return currBlockObj;
}

export const getTransactionDetails = async (transactionHash) => {
    const txn = await web3.eth.getTransaction(transactionHash)
    return txn;
}

export const convertToDecimal = (hex, decimals) => {
    const balance = utils.toBN(hex).toString();
    return balance / 10 ** decimals;
};
