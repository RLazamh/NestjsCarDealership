import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

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

}
