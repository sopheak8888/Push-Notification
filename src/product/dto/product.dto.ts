import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
} from 'class-validator';

export class ProductDto {
  id: number;

  @IsNotEmpty({ groups: ['create'] })
  @IsString()
  name: string;

  @IsNotEmpty({ groups: ['create'] })
  @IsNumberString()
  price: number;

  @IsNotEmpty({ groups: ['create'] })
  @IsString()
  description: string;

  @IsNotEmpty({ groups: ['create'] })
  @IsNumber()
  userId: number;
}
