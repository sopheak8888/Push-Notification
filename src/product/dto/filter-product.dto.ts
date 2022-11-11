import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class FilterProductDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumberString()
  price: number;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsNumberString()
  userId: number;
}
