import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dtos';

import { Car } from './interfaces/car.interface';
@Injectable() //este decorador permite que la clase sea inyectable 
export class CarsService {

    private cars : Car[] = [
        {
            id    : uuid(),
            brand :'ferrari',
            model : 'Corolla'
        }, 
        {
            id    : uuid(),
            brand :'Honda',
            model : 'Civic'
        }, 
        {
            id    : uuid(),
            brand :'Jeep',
            model : 'Cheroken'
        },
    ]; 

    findAll(){
        return this.cars;
    }

    findById( id : string ) {
        const car =  this.cars.find(car => car.id === id );

        if(!car)  throw new NotFoundException(` Car with id ${id} not found`);
        
        return car;
    }

    create( createCarDto : CreateCarDto ) {
        const car : Car = {
            id : uuid(),
            ...createCarDto,
        }
        this.cars.push(car);
        return car;
    }

    update(
        id : string ,
        updateCarDto : UpdateCarDto
    ) {
        let carDB = this.findById( id )

        if( updateCarDto.id && updateCarDto.id !== id )
            throw new BadRequestException('Car id inside body invalid')

        this.cars = this.cars.map( car => {
            if(car.id == id ) {
                carDB = {
                    ...carDB,
                    ...updateCarDto, 
                    id
                }
                return carDB
            }
            return car
        })
        return carDB;

    }

    delete(  id : string ) {
        
        const carDB = this.findById( id );
        this.cars = this.cars.filter(car => car !== carDB );
        return `car with id ${id} was deleted` ;
    }

}
