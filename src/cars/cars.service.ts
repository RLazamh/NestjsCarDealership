import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable() //este decorador permite que la clase sea inyectable 
export class CarsService {

    private cars = [
        {
            id    : 1,
            brand :'ferrari',
            model : 'Corolla'
        }, 
        {
            id    : 2,
            brand :'Honda',
            model : 'Civic'
        }, 
        {
            id    : 3,
            brand :'Jeep',
            model : 'Cheroken'
        },
    ]; 

    findAll(){
        return this.cars;
    }

    findById( id : number ) {
        const car =  this.cars.find(car => car.id === id );

        if(!car)  throw new NotFoundException(` Car with id ${id} not found`);
        
        return car;
    }

}
