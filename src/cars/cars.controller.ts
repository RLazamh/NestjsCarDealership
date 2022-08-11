import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateCarDto } from './dtos/create-cars.dto';
import { CarsService } from './cars.service';

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
    return createCarDto;
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
