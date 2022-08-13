import { Brand } from "../../brands/entities";
import { v4 as  uuid } from "uuid";

 export const BRANDS_SEED : Brand[] = [
    {
        id : uuid(),
        name: '05Xpr',
        createAt : new Date().getTime(),
    },
    {
        id : uuid(),
        name: '05Xyz',
        createAt : new Date().getTime(),
    },
    {
        id : uuid(),
        name: '05Xab',
        createAt : new Date().getTime(),
    },
    {
        id : uuid(),
        name: '05Xmn',
        createAt : new Date().getTime(),
    }
 ] 