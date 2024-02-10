export function calWinrate(trades) {
  const totalTrades = trades ? trades.length : 0;
  const winningTrades = trades
    ? trades.filter((trade) => trade.profit !== 0).length
    : 0;

  const winRate = ((winningTrades / totalTrades) * 100).toFixed(2);

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
  return totalLoss?.toFixed(2);
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
    averageLoss === 0 || isNaN(averageLoss) || !isFinite(averageLoss)
      ? Infinity
      : averageProfit / averageLoss;

  return rrr;
}

// export function getRRR(trades) {
//   if (!trades || trades.length === 0) {
//     return null; // Return null if there are no trades or an empty array
//   }

//   const losses = trades.map((trade) =>
//     trade.loss !== undefined && trade.loss !== null ? trade.loss : 0
//   );
//   const profits = trades.map((trade) =>
//     trade.profit !== undefined && trade.profit !== null ? trade.profit : 0
//   );

//   const totalProfit = profits.reduce((sum, value) => sum + value, 0);
//   const totalLoss = losses.reduce((sum, value) => sum + value, 0);

//   // Avoid division by zero
//   const rrr = totalLoss === 0 ? Infinity : totalProfit / totalLoss;

//   return rrr;
// }

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

export function getBuyType(trades) {
  const buy = trades ? trades.filter((trade) => trade.type === "BUY") : [];

  return buy;
}

export function getSellType(trades) {
  const sell = trades ? trades.filter((trade) => trade.type === "SELL") : [];

  return sell;
}

export function getLossNum(trades) {
  const loss = trades ? trades.filter((trade) => trade.loss !== 0) : [];

  return loss;
}

export function getProfitNum(trades) {
  const profit = trades ? trades.filter((trade) => trade.profit !== 0) : [];

  return profit;
}

export function getLargestProfit(trades) {
  if (!trades || trades.length === 0) {
    return 0; // Return 0 if there are no trades or an empty array
  }

  const profits = trades.map((trade) => trade.profit || 0); // Use 0 if profit is undefined
  const largestProfit = Math.max(...profits);

  return largestProfit;
}

export function getLargestLoss(trades) {
  if (!trades || trades.length === 0) {
    return 0; // Return 0 if there are no trades or an empty array
  }

  const Loss = trades.map((trade) => trade.loss || 0); // Use 0 if profit is undefined
  const largestLoss = Math.max(...Loss);

  return largestLoss;
}

export function getPairWithLargestProfit(trades) {
  if (!trades || trades.length === 0) {
    return null; // Return null if there are no trades or an empty array
  }

  let maxProfit = Number.NEGATIVE_INFINITY;
  let bestTrade = null;

  for (const trade of trades) {
    const profit = trade.profit || 0; // Use 0 if profit is undefined

    if (profit > maxProfit) {
      maxProfit = profit;
      bestTrade = trade;
    }
  }

  return bestTrade;
}

export function getPairWithLargestLoss(trades) {
  if (!trades || trades.length === 0) {
    return null; // Return null if there are no trades or an empty array
  }

  let maxProfit = Number.NEGATIVE_INFINITY;
  let bestTrade = null;

  for (const trade of trades) {
    const profit = trade.loss || 0; // Use 0 if profit is undefined

    if (profit > maxProfit) {
      maxProfit = profit;
      bestTrade = trade;
    }
  }

  return bestTrade;
}

export function getTotalTradesBySymbol(trades) {
  if (!trades || trades.length === 0) {
    return null; // Return null if there are no trades or an empty array
  }

  const totalTradesBySymbol = {};

  for (const trade of trades) {
    const { symbol } = trade;

    if (!totalTradesBySymbol[symbol]) {
      totalTradesBySymbol[symbol] = 1;
    } else {
      totalTradesBySymbol[symbol]++;
    }
  }

  return totalTradesBySymbol;
}
