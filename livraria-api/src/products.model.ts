import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table
export class Products extends Model<Products> {

    @Column({
        type: DataType.STRING(60),
        allowNull: false,
    })
    codigo: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;  

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    price: number;

}