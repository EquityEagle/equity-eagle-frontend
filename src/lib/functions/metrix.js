export function calWinrate(trades) {
  const totalTrades = trades.length;
  const winningTrades = trades.filter((trade) => trade.profit !== 0).length;

  const winRate =
    totalTrades === 0 ? 0 : ((winningTrades / totalTrades) * 100).toFixed(2);

  return winRate;
}

export function calTotalProfit(trades) {
  const profits = trades.map((trade) => trade.profit);
  const totalProfit =
    profits.length === 0
      ? 0
      : profits.reduce((max, value) => Math.max(max, value), 0);

  return totalProfit;
}

export function calTotalLoss(trades) {
  const Loss = trades.map((trade) => trade.loss);
  const totalLoss =
    Loss.length === 0
      ? 0
      : Loss.reduce((max, value) => Math.max(max, value), 0);

  return totalLoss;
}
