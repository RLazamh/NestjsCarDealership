import { Car } from "../../cars/interfaces";
import { v4 as  uuid } from "uuid";

 export const CARS_SEED : Car[] = [
    {
        id : uuid(),
        model: 'Toyota',
        brand: 'CO2022'
    },
    {
        id : uuid(),
        model: 'Chevrolet',
        brand: 'CHe2022'
    },
    {
        id : uuid(),
        model: 'Ferrari',
        brand: 'Fe2022'
    },
    {
        id : uuid(),
        model: 'Elon',
        brand: 'musk2022'
    }
 ] 