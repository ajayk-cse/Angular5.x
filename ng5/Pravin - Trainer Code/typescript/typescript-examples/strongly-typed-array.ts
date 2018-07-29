const metroCities: string[] = ["Bangalore", "Chennai", "Delhi", "Mumbai"];

class Product {
    constructor(pid: number, pname: string, companyName: string, stock: number, private area?: string) {
        this.productId = pid;
        this.productName = pname;
        this.companyName = companyName;
        this.availableStock = stock;
    }
    productId: number;
    productName: string;
    companyName: string;
    availableStock: number;
    printProductInformation?(): string {
        return `Product Name is ${this.productName} available stock is ${this.availableStock} Company Area is ${this.area}`;
    }
}

let p1 = new Product(1, "Samsung Mobile", "Samsung", 120, "Pune");
console.log(p1.printProductInformation());


const products: Product[] = [
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

for (const prod of products) {
    console.log(`Product Name is ${prod.productName} from company ${prod.companyName}`);
}

function getProducts(companyName: string): string[];
function getProducts(stock: number): string[];
function getProducts(propertyName): string[] {
    const allProducts = products;
    const availableProducts: string[] = [];

    if (typeof propertyName === 'string') {
        for (const prod of allProducts) {
            if (prod.companyName == propertyName) {
                availableProducts.push(prod.productName);
            }
        }
    }
    else if (typeof propertyName === 'number') {
        for (const prod of allProducts) {
            if (prod.availableStock >= propertyName) {
                availableProducts.push(prod.productName);
            }
        }
    }
    return availableProducts;
}

for (const availProducts of getProducts("Micromax")) {
    console.log(availProducts);
}
console.log("");
for (const availProducts of getProducts(100)) {
    console.log(availProducts);
}