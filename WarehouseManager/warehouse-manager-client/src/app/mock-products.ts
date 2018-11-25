import { Product } from './model/product';
import { PRODUCTTYPES } from './mock-producttypes';
import { PRODUCTGROUPS } from './mock-productgroups';

export const PRODUCTS: Product[] = [
    new Product(1, 'Sony MDRZX330BT vezeték nélküli fejhallgató', PRODUCTTYPES[1], PRODUCTGROUPS[1], 11),
    new Product(2, 'Sbox PLB-3422T dönthető fali konzol', PRODUCTTYPES[2], PRODUCTGROUPS[1], 2),
    new Product(3, 'Sony Xperia XZ3', PRODUCTTYPES[3], PRODUCTGROUPS[2], 33),
    new Product(4, 'Huawei MediaPad M5', PRODUCTTYPES[4], PRODUCTGROUPS[2], 0),
    new Product(5, 'Asus VivoBook', PRODUCTTYPES[5], PRODUCTGROUPS[3], 24),
    new Product(6, 'Zyxel Aurora 1080P felhő alapú IP kamera', PRODUCTTYPES[6], PRODUCTGROUPS[3], 1),
    new Product(7, 'Tefal Ceramic Control serpenyő', PRODUCTTYPES[7], PRODUCTGROUPS[4], 5),
    new Product(8, 'Jar Platinum mosogatógép tablett', PRODUCTTYPES[8], PRODUCTGROUPS[4], 3),
    new Product(9, 'BaByliss elektromos hajsimító', PRODUCTTYPES[9], PRODUCTGROUPS[5], 7),
    new Product(10, 'Oral-B D100 elektromos fogkefe', PRODUCTTYPES[10], PRODUCTGROUPS[5], 13),
    new Product(11, 'Bosch sövényvágó', PRODUCTTYPES[11], PRODUCTGROUPS[6], 22),
    new Product(12, 'Black&Decker csavarozó', PRODUCTTYPES[12], PRODUCTGROUPS[6], 100),
    new Product(13, 'Nicon Aculon távcső', PRODUCTTYPES[13], PRODUCTGROUPS[7], 0),
    new Product(14, 'Canon objektív', PRODUCTTYPES[14], PRODUCTGROUPS[7], 19),
    new Product(15, 'LEGO Friends Heartlake Pizzéria', PRODUCTTYPES[15], PRODUCTGROUPS[8], 0),
    new Product(16, 'Daniel Klein férfi karóra', PRODUCTTYPES[16], PRODUCTGROUPS[8], 5),
];