import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('/products')
export class ProductsController {

    @Get()
    getAll(): string {
        return "All products";
    }

    @Get(':id')
    getOne(@Param() params): string {
        return `Return one Product: ${params.id}`;
    }

    @Post()
    createProduct(@Body() product): string {
        console.log(product);
        return "Product created";        
    }

    @Put(':id')
    updateProduct(@Body() product): string {
        console.log(product);
        return "Product updated";
    }

    @Delete(':id')
    deleteProduct(@Param() params): string {        
        return `Product deleted: ${params.id}`;
    }
}