import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Products } from "./products.model";

@Controller('/products')
export class ProductsController {

    products: Products[] = [
        new Products(1, 'Product 1', 'This is product 1', 100),
        new Products(2, 'Product 2', 'This is product 2', 200),
        new Products(3, 'Product 3', 'This is product 3', 300),
        new Products(4, 'Product 4', 'This is product 4', 400),
        new Products(5, 'Product 5', 'This is product 5', 500),
    ];

    @Get()
    getAll(): Products[] {
        return this.products;
    }

    @Get(':id')
    getOne(@Param() params): Products {
        return this.products[0]
    }

    @Post()
    createProduct(@Body() product: Products) {
        product.id = 100
        this.products.push(product);
    }

    @Put(':id')
    updateProduct(@Body() product: Products): Products {
        return product;
    }

    @Delete(':id')
    deleteProduct(@Param() params) {
        this.products.pop();
    }
}