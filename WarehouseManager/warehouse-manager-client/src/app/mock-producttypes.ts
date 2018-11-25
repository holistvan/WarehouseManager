import { ProductType } from './model/producttype';
import { PRODUCTGROUPS } from './mock-productgroups';

export const PRODUCTTYPES: ProductType[] = [
    new ProductType(1, 'TV, média lejátszó', PRODUCTGROUPS[1]),
    new ProductType(2, 'Televízió konzol', PRODUCTGROUPS[1]),
    new ProductType(3, 'Mobil', PRODUCTGROUPS[2]),
    new ProductType(4, 'Tablet', PRODUCTGROUPS[2]),
    new ProductType(5, 'Laptop', PRODUCTGROUPS[3]),
    new ProductType(6, 'Hálózati eszköz', PRODUCTGROUPS[3]),
    new ProductType(7, 'Edényzet', PRODUCTGROUPS[4]),
    new ProductType(8, 'Mosószer, öblítő', PRODUCTGROUPS[4]),
    new ProductType(9, 'Hajformázók', PRODUCTGROUPS[5]),
    new ProductType(10, 'Elektromos fogkefe', PRODUCTGROUPS[5]),
    new ProductType(11, 'Sövényvágó', PRODUCTGROUPS[6]),
    new ProductType(12, 'Fúró-csavarozó', PRODUCTGROUPS[6]),
    new ProductType(13, 'Távcső', PRODUCTGROUPS[7]),
    new ProductType(14, 'Objektív', PRODUCTGROUPS[7]),
    new ProductType(15, 'LEGO', PRODUCTGROUPS[8]),
    new ProductType(16, 'Karóra', PRODUCTGROUPS[8]),
];