interface newPrice {
  code?: string;
  price?: number;
}

interface oldPrice {
  code?: string;
  start?: number;
  highest?: number;
  lowest?: number;
  current?: number;
}

export function dataFilter(newPriceStock: newPrice[], oldPriceObj: oldPrice[]) {
  if (!newPriceStock || !oldPriceObj) return;
  const updatedObj: oldPrice[] = [];

  // loop and update existing data
  oldPriceObj.forEach((oldStock) => {
    const newStock = newPriceStock.filter((newStock) => newStock.code === oldStock.code)[0];

    const { price: newPrice } = newStock;
    const { highest, lowest } = oldStock;

    if (!highest || !lowest || !newPrice) return;

    if (newPrice > highest) {
      return updatedObj.push({ ...oldStock, highest: newPrice, current: newPrice });
    } else if (newPrice < lowest) {
      return updatedObj.push({ ...oldStock, lowest: newPrice, current: newPrice });
    } else {
      return updatedObj.push({ ...oldStock, current: newPrice });
    }
  });

  return updatedObj;
}

export function initStock(newPriceArr: newPrice[]) {
  if (!newPriceArr) return;
  const formatData = [];

  newPriceArr.forEach((stock) => {
    formatData.push({
      code: stock.code,
      start: stock.price,
      lowest: stock.price,
      highest: stock.price,
      current: stock.price,
    });
  });

  return formatData;
}
