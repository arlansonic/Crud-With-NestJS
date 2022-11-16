import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Products } from "./products.model";

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Products)
        private productsModel: typeof Products
    ) { }

    async getAll(): Promise<Products[]> {
        return this.productsModel.findAll();
    }

    async getOne(id: number): Promise<Products> {
        return this.productsModel.findOne({ where: { id } })
    }

    async createProduct(products: Products) {
        this.productsModel.create(products)
    }

    updateProduct(products: Products): Products {
        this.productsModel.update(products,
            {
                where:
                    { id: products.id }
            })
        return products
    }

    async deleteProduct(id: number) {
        const product: Products = await this.getOne(id)
        product.destroy()
    }
}