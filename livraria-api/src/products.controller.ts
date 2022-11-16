import { ProductsService } from './products.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Products } from "./products.model";

@Controller('/products')
export class ProductsController {
    constructor(private productsService: ProductsService) {

    }

    @Get()
    getAll(): Promise<Products[]> {
        return this.productsService.getAll()
    }

    @Get(':id')
    async getOne(@Param() params): Promise<Products> {
        return this.productsService.getOne(params.id)
    }

    @Post()
    async createProduct(@Body() product: Products) {
        this.productsService.createProduct(product);
    }

    @Put(':id')
    async updateProduct(@Body() product: Products): Promise<Products> {
        return this.productsService.updateProduct(product)
    }


    @Delete(':id')
    async deleteProduct(@Param() params) {
        this.productsService.deleteProduct(params.id)
    }
}