import {  Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

  private brands : Brand[] = [
    // {
    //   id : uuid(),
    //   name : 'Chevrolet',
    //   createAt : new Date().getTime()
    // }
  ]

  create(createBrandDto: CreateBrandDto) {
    const brand : Brand ={
      id : uuid(),
      name: createBrandDto.name.toLowerCase(),
      createAt : new Date().getTime()
    }

    this.brands.push(brand) 
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand  = this.brands.find( brand => brand.id === id )

    if( !brand ) throw new NotFoundException(`Brand with id ${id} no exists`)

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne( id );

    this.brands = this.brands.map( brand => {
      if( brand.id === id ){
        return {
          ...brandDB,
          ...updateBrandDto,
          id,
          updateAt : new Date().getTime()
        }

      }
      return brand;
    })


    return `Update a #${id} brand`;
  }

  remove( id: string ) {
    this.findOne( id )
    this.brands = this.brands.filter( brand => brand.id !== id )
    return `The brand with #${id} was removed`;
  }

  fillBrandsWithSeed( brands : Brand []){
    return this.brands = brands;
  }
}
