interface BlackListedProduct {
    productId: number;
    productName: string;
    companyName: string;
    unitPrice: number;
    quantity: number;
    blackListed?: boolean;
    reason?: string;
}
class SynechronProduct implements BlackListedProduct {
    productId: number;
    productName: string;
    companyName: string;
    unitPrice: number;
    quantity: number;
    shipperId: number;

}

let prod: BlackListedProduct = new SynechronProduct();
prod.productId = 10;
prod.productName = "Canvas 5";
prod.companyName = "Micromax";

function printProductInformation(product: BlackListedProduct): string {
    return `Product Name is ${prod.productName} and company name is ${prod.companyName}`;
}
console.log(printProductInformation(prod));