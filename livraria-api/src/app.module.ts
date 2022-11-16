import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsController } from './products.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsService } from './products.service';
import { Products } from './products.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'develop',
      password: ']QKbDN8PZE2_G)NG',
      database: 'products',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Products])
  ],
controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule { }
