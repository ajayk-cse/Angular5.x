export class Product {
    constructor(public ProdId:number,
        public ProdName:string,public CatId:number) {}
}

export const Products:Array<Product>=[
    {ProdId:10001,ProdName:"P1",CatId:101},
    {ProdId:10002,ProdName:"P2",CatId:102},
    {ProdId:10003,ProdName:"P3",CatId:103},
    {ProdId:10004,ProdName:"P4",CatId:101},
    {ProdId:10005,ProdName:"P5",CatId:102},
    {ProdId:10006,ProdName:"P6",CatId:103}
];