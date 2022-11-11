import { Injectable, Inject } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ClientProxy } from '@nestjs/microservices';
import { FilterProductDto } from './dto/filter-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy,
  ) {}

  createProduct = (productDto: ProductDto) =>
    this.client.send('createProduct', productDto);

  getProducts = (filterProductDto: FilterProductDto) =>
    this.client.send('getProducts', filterProductDto);

  updateProduct = (productDto: ProductDto) =>
    this.client.send('updateProduct', productDto);

  deleteProduct = (id: number) => this.client.send('deleteProduct', id);
}
