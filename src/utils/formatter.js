export const formatAddress = (ethAddress) => {
    if (ethAddress)
        return (
            ethAddress.substring(0, 4).toUpperCase() +
            "...." +
            ethAddress.substring(38, 42).toUpperCase()
        );
    else return "Cant process";
};

export function formatAmount(amount, decimals = 4) {
    if (amount === undefined) return "";

    if (typeof amount !== "number") amount = parseFloat(amount.replace(",", ""));
    if (amount > 10 ** 9) {
        amount = amount / 10 ** 9;
        return amount.toLocaleString("en-US", { maximumFractionDigits: 3 }) + " B";
    }
    if (amount > 10)
        return amount.toLocaleString("en-US", { maximumFractionDigits: 2 });
    if (amount > 10 ** (-1 * decimals))
        return amount.toLocaleString("en-US", { maximumFractionDigits: decimals });
    if (amount === 0)
        return amount.toLocaleString("en-US", { maximumFractionDigits: decimals });

    return amount.toExponential(decimals);
}