import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  
  // al intyectar la dependencia estoy creando algo similar a esto 
  // cars = new Cars(carsService )
  constructor(
    private readonly _carsService : CarsService,
  ){}

  @Get()
  getAllCars() {
    return this._carsService.findAll();
  }

  @Get(':id')
  getCarById(
    @Param('id' , ParseIntPipe) id : number  
  ){
    return this._carsService.findById( id );
  }

  @Post()
  createCar( @Body() body : any ){
    return body;
  }

  @Patch(':id')
  updateCar( 
    @Param( 'id' , ParseIntPipe ) id : number,
    @Body() body : any 
    ){
    return body;
  }

  @Delete(':id')
  deleteCar( 
    @Param( 'id' , ParseIntPipe ) id : number 
    ){
    return {
      method: 'Delete',
      id : id
    };
  }
}
