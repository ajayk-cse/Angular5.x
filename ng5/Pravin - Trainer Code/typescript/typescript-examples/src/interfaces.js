var SynechronProduct = /** @class */ (function () {
    function SynechronProduct() {
    }
    return SynechronProduct;
}());
var prod = new SynechronProduct();
prod.productId = 10;
prod.productName = "Canvas 5";
prod.companyName = "Micromax";
function printProductInformation(product) {
    return "Product Name is " + prod.productName + " and company name is " + prod.companyName;
}
console.log(printProductInformation(prod));
