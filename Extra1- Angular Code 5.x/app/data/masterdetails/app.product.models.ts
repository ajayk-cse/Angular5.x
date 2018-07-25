export class Product {
    constructor(
        public ProdId:number,
        public ProdName:string,
        public CatId:number
    ) {}
}

export const Products:Array<Product> = new Array<Product>();

Products.push(new Product(10001,"P1",101));
Products.push(new Product(10002,"P2",102));
Products.push(new Product(10003,"P3",103));
Products.push(new Product(10004,"P4",101));
Products.push(new Product(10005,"P5",102));
Products.push(new Product(10006,"P6",103));