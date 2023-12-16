export function calWinrate(trades) {
  const totalTrades = trades ? trades.length : 0;
  const winningTrades = trades
    ? trades.filter((trade) => trade.profit !== 0).length
    : 0;

  const winRate = ((winningTrades / totalTrades) * 100).toFixed(2);
  // const winRate =
  //   totalTrades === 0 ? 0 : ((winningTrades / totalTrades) * 100).toFixed(2);

  return winRate;
}

export function calTotalProfit(trades) {
  const profits = trades
    ? trades.map((trade) => Number(trade.profit) || 0)
    : [];
  const totalProfit = profits.reduce((sum, value) => sum + value, 0);
  return totalProfit;
}

export function calTotalLoss(trades) {
  const losses = trades ? trades.map((trade) => trade.loss || 0) : [];
  const totalLoss = losses.reduce((sum, value) => sum + value, 0);
  return totalLoss;
}

export function getRRR(trades) {
  const losses = trades ? trades.map((trade) => trade.loss || 0) : [];
  const profits = trades ? trades.map((trade) => trade.profit || 0) : [];
  const totalProfit = profits.reduce((sum, value) => sum + value, 0);

  const totalLoss = losses.reduce((sum, value) => sum + value, 0);

  const averageLoss = losses.length === 0 ? 0 : totalLoss / losses.length;
  const averageProfit = profits.length === 0 ? 0 : totalProfit / profits.length;

  // Handle division by zero or undefined averageLoss
  const rrr =
    averageLoss === 0 || isNaN(averageLoss)
      ? Infinity
      : averageProfit / averageLoss;

  return rrr;
}

export function getAverageProfit(trades) {
  if (!trades || trades.length === 0) {
    return 0; // Return 0 if there are no trades or an empty array
  }

  const profits = trades.map((trade) => trade.profit || 0); // Use 0 if profit is undefined
  const totalProfit = profits.reduce((sum, value) => sum + value, 0);
  const averageProfit = totalProfit / profits.length;

  return averageProfit;
}

export function getAverageLoss(trades) {
  if (!trades || trades.length === 0) {
    return 0; // Return 0 if there are no trades or an empty array
  }

  const losses = trades.map((trade) => trade.loss || 0); // Use 0 if loss is undefined
  const totalLoss = losses.reduce((sum, value) => sum + value, 0);
  const averageLoss = totalLoss / losses.length;

  return averageLoss;
}

export function getEquity(trades, balance = 0) {
  const losses = trades ?? [];
  const profits = trades ?? [];

  const totalProfit = profits.reduce(
    (sum, trade) => sum + (Number(trade.profit) || 0),
    0
  );
  const totalLoss = losses.reduce(
    (sum, trade) => sum + (Number(trade.loss) || 0),
    0
  );

  const equity = balance + totalProfit - totalLoss;

  return equity;
}

export function isDrawdownBelowOnePercent(trades, balance) {
  const losses = trades ? trades.map((trade) => trade.loss || 0) : [];
  const profits = trades ? trades.map((trade) => trade.profit || 0) : [];
  const totalProfit = profits.reduce((sum, value) => sum + value, 0);
  const totalLoss = losses.reduce((sum, value) => sum + value, 0);

  return totalLoss > totalProfit; // Check if total loss is higher than total profit
}

export function getLots(trades) {
  const totalLots = trades.reduce(
    (accumulator, trade) => accumulator + trade.lotSize,
    0
  );

  return totalLots;
}
