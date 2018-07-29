function salesNetProfit(cogs: number, expense: number, actualSales: number, gstPercentage?: number): number {
    if (!gstPercentage) {
        gstPercentage = 12;
    }
    let gstAmount = actualSales * gstPercentage / 100;
    return actualSales - (cogs + expense + gstAmount);
}

console.log(salesNetProfit(12000, 13000, 150000));
console.log(salesNetProfit(12000, 13000, 150000,18));