function salesNetProfit(cogs, expense, actualSales, gstPercentage) {
    if (!gstPercentage) {
        gstPercentage = 12;
    }
    var gstAmount = actualSales * gstPercentage / 100;
    return actualSales - (cogs + expense + gstAmount);
}
console.log(salesNetProfit(12000, 13000, 150000));
console.log(salesNetProfit(12000, 13000, 150000, 18));
