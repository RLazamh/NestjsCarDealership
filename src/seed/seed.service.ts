import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRANDS_SEED } from './data/brands.seed';
import { CARS_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService : CarsService,    
    private readonly brandService : BrandsService,      
  ){}

  populateDB(){
    this.carsService.fillCarsWithSeed( CARS_SEED );
    this.brandService.fillBrandsWithSeed( BRANDS_SEED );
    return `La base de datos ha sido actualizada`;
  }

}
