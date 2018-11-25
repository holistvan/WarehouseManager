import { Request } from './model/request';
import { USERS } from './mock-users';
import { PRODUCTS } from './mock-products';

export const REQUESTS: Request[] = [
    new Request(1, USERS[0], PRODUCTS[9], 7),
    new Request(2, USERS[0], PRODUCTS[0], 72),
    new Request(3, USERS[1], PRODUCTS[12], 1),
    new Request(4, USERS[1], PRODUCTS[15], 22),
    new Request(5, USERS[2], PRODUCTS[2], 3),
    new Request(6, USERS[2], PRODUCTS[4], 33),
];