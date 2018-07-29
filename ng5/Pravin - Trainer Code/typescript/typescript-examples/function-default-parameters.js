var itGst = 18;
function salesNetProfit1(cogs, expense, actualSales, gstPercentage) {
    if (gstPercentage === void 0) { gstPercentage = itGst; }
    var gstAmount = actualSales * gstPercentage / 100;
    return actualSales - (cogs + expense + gstAmount);
}
console.log(salesNetProfit1(12000, 13000, 150000));
console.log(salesNetProfit1(12000, 13000, 150000, 5));
