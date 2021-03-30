export interface IProduct {
    _id: string,
    rating: number,
    numReviews: number,
    price: number,
    countInStock: number,
    name: string,
    description: string,
    brand: string,
    category: string,
    user: string,
    createdAt: string,
    updatedAt: string
}

export interface IGetProductResponse {
    page: string;
    pages: number;
    products: IProduct[];
}

export interface IGetProductAndCount {
    count: number;
    products: IProduct;
}
 
// export interface IProductReviews {
//     _id: string,
//     name: string,
//     rating: number,
//     comment: string,
//     user: string,
//     createdAt: string,
//     updatedAt: string,
//     product_id: string
//  }