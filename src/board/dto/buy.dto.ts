import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class BuyDto {
  @IsString()
  @IsNotEmpty()
  path: string

  @IsNotEmpty()
  @IsNumber()
  room: number
}

export class BuyPropertyDto {
  @IsString()
  @IsNotEmpty()
  @IsArray()
  path: string[]

  @IsNotEmpty()
  @IsNumber()
  room: number
}
