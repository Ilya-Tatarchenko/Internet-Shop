export interface IProduct {
    _id: string,
    rating: number,
    numReviews: number,
    price: number,
    countInStock: number,
    name: string,
    // "image": "/images/hp_zbook.jpg",
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