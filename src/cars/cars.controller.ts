import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateCarDto } from './dtos/create-cars.dto';
import { CarsService } from './cars.service';
import { UpdateCarDto } from './dtos/update-cars.dto';

@Controller('cars')
// @UsePipes(ValidationPipe)
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
    @Param('id' , ParseUUIDPipe) id : string  
  ){
    return this._carsService.findById( id );
  }

  @Post()
  createCar( @Body() createCarDto : CreateCarDto ){
    return this._carsService.create( createCarDto );
  }

  @Patch(':id')
  updateCar( 
    @Param( 'id' , ParseUUIDPipe ) id : string,
    @Body() updateCarDto : UpdateCarDto 
    ){
    return this._carsService.update( id , updateCarDto );
  }

  @Delete(':id')
  deleteCar( 
    @Param( 'id' , ParseUUIDPipe ) id : string 
    ){
    return  this._carsService.delete( id );
  }
}
