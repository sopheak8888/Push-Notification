import {
  Body,
  Controller,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Query,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { FilterProductDto } from './dto/filter-product.dto';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  @UseGuards(AuthGuard())
  @UsePipes(new ValidationPipe({ groups: ['create'] }))
  async create(@Body() productDto: ProductDto, @GetUser() user: User) {
    productDto = { ...productDto, userId: user.id };
    return this.productService.createProduct(productDto);
  }

  @Get()
  @UseGuards(AuthGuard())
  async getProducts(
    @Query() filterProductDto: FilterProductDto,
    @GetUser() user: User,
  ) {
    filterProductDto = { ...filterProductDto, userId: user.id };
    return this.productService.getProducts(filterProductDto);
  }

  @Patch('/:id')
  @UseGuards(AuthGuard())
  @UsePipes(new ValidationPipe({ groups: ['update'] }))
  async update(
    @Param('id') id: number,
    @Body() productDto: ProductDto,
    @GetUser() user: User,
  ) {
    productDto = { id, ...productDto, userId: user.id };
    return this.productService.updateProduct(productDto);
  }

  @Delete('/:id')
  @UseGuards(AuthGuard())
  async delete(@Param('id') id: number) {
    return this.productService.deleteProduct(id);
  }
}
