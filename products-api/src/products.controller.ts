import { ProductsService } from './products.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Products } from "./products.model";

@Controller('/products')
export class ProductsController {
    constructor(private productsService: ProductsService) {

    }

    @Get()
    getAll(): Products[] {
        return this.productsService.getAll()
    }

    @Get(':id')
    getOne(@Param() params): Products {
        return this.productsService.getOne(params.id)
    }

    @Post()
    createProduct(@Body() product: Products) {
        this.productsService.createProduct(product);
    }

    @Put(':id')
    updateProduct(@Body() product: Products): Products {
        return this.productsService.updateProduct(product)
    }

    @Delete(':id')
    deleteProduct(@Param() params) {
        this.productsService.deleteProduct(params.id)
    }
}