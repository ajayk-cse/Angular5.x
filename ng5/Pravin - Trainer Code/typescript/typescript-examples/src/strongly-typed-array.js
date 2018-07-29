var metroCities = ["Bangalore", "Chennai", "Delhi", "Mumbai"];
var Product = /** @class */ (function () {
    function Product(pid, pname, companyName, stock, area) {
        this.area = area;
        this.productId = pid;
        this.productName = pname;
        this.companyName = companyName;
        this.availableStock = stock;
    }
    Product.prototype.printProductInformation = function () {
        return "Product Name is " + this.productName + " available stock is " + this.availableStock + " Company Area is " + this.area;
    };
    return Product;
}());
var p1 = new Product(1, "Samsung Mobile", "Samsung", 120, "Pune");
console.log(p1.printProductInformation());
var products = [
    {
        productId: 1000,
        productName: "Galaxy J8",
        companyName: "Samsung",
        availableStock: 190
    },
    {
        productId: 1001,
        productName: "Galaxy S8",
        companyName: "Samsung",
        availableStock: 17
    },
    {
        productId: 1002,
        productName: "Canvas 5",
        companyName: "Micromax",
        availableStock: 490
    },
    {
        productId: 3000,
        productName: "Micromax LED",
        companyName: "Micromax",
        availableStock: 100
    }
];
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var prod_1 = products_1[_i];
    console.log("Product Name is " + prod_1.productName + " from company " + prod_1.companyName);
}
function getProducts(propertyName) {
    var allProducts = products;
    var availableProducts = [];
    if (typeof propertyName === 'string') {
        for (var _i = 0, allProducts_1 = allProducts; _i < allProducts_1.length; _i++) {
            var prod_2 = allProducts_1[_i];
            if (prod_2.companyName == propertyName) {
                availableProducts.push(prod_2.productName);
            }
        }
    }
    else if (typeof propertyName === 'number') {
        for (var _a = 0, allProducts_2 = allProducts; _a < allProducts_2.length; _a++) {
            var prod_3 = allProducts_2[_a];
            if (prod_3.availableStock >= propertyName) {
                availableProducts.push(prod_3.productName);
            }
        }
    }
    return availableProducts;
}
for (var _a = 0, _b = getProducts("Micromax"); _a < _b.length; _a++) {
    var availProducts = _b[_a];
    console.log(availProducts);
}
console.log("");
for (var _c = 0, _d = getProducts(100); _c < _d.length; _c++) {
    var availProducts = _d[_c];
    console.log(availProducts);
}
