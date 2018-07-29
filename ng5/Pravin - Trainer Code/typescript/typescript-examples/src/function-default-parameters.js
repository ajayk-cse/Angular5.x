var itGst = 18;
var GstObject = {
    IT: 18,
    Food: 5,
    Export: 3
};
function getGovtGstObject() {
    //REST Service call
    return 12;
}
function salesNetProfit1(cogs, expense, actualSales, gstPercentage) {
    if (cogs === void 0) { cogs = 10000; }
    if (gstPercentage === void 0) { gstPercentage = cogs * .002; }
    var gstAmount = actualSales * gstPercentage / 100;
    return actualSales - (cogs + expense + gstAmount);
}
console.log(salesNetProfit1(undefined, 13000, 150000));
console.log(salesNetProfit1(12000, 13000, 150000, 5));
