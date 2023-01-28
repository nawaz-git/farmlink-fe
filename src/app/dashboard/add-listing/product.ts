export interface Product {
    name: string;
    images: string[];
    description: string;
    category: string;
    farmerId: string;
    productList: ProductListItem[];
}


export interface ProductListItem {
    price: number;
    quantity: number;
    weight: number;
    unit: string;
}

