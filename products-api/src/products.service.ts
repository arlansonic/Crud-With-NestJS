import { Injectable } from "@nestjs/common";
import { Products } from "./products.model";

@Injectable()
export class ProductsService {
    products: Products[] = [
        new Products(1, 'Product 1', 'This is product 1', 100),
        new Products(2, 'Product 2', 'This is product 2', 200),
        new Products(3, 'Product 3', 'This is product 3', 300),
        new Products(4, 'Product 4', 'This is product 4', 400),
        new Products(5, 'Product 5', 'This is product 5', 500),
    ];

    getAll(): Products[] {
        return this.products;
    }

    getOne(id: number): Products {
        return this.products[0]
    }

    createProduct(product: Products) {
        this.products.push(product);
    }

    updateProduct(product: Products): Products {
        return product
    }

    deleteProduct(id: number) {
        this.products.pop();
    }
}