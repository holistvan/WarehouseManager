# Alkalmazások fejlesztése nagybeadandó (2018/19 I. félév):
### WarehouseManager - Raktárkészlet kezelő alkalmazás (Dittrich Dia és Holczmann István)

#### 1. Feladat szöveges leírása:
> Egy online elérhető raktárkészlet kezelő alkalmazás. A programban lehetőség van termékek mennyiségének nyomonkövetésére, azok megrendelésére, feltöltésére.

#### A raktárkészlet kezelő működése:
> Bejelentkezés után a a megadott jogkörök alapján a raktárkészlet elérhető, és szintén jogosultág alapján azon műveletek végezhetők. A megrendelőnek lehetősége van a raktárkészletet csökkenteni, vagy igényt leadni, hogy mire van szüksége. A beszerző feltölti a raktárkészletet, új terméket vezethet fel. Az adminisztrátor mindenhez hozzáfér.

#### 2. Funkcionális követelmények:
	- Bejelentkezés:
		Felhasználói név és jelszó megadásával.
	- Saját kérések listázása:
		A felhasználó listázhatja a saját kéréseit
	- Termékek keresése:
		A termékek szűrése azok attribútumjai alapján.
	- Rendelés:
		Új kérés felvezetése
	- Beszerzés:
		A készletek feltöltése
#### 3. Felhasználói történetek:
	- Saját kérések listázása:
		A felhasználó a My request gombra kattintva nézheti meg a saját rendeléseit, azokon szűtást végezhet.
	- Termékek listázása
		A felhasználó megnézheti milyen termékek vannak a raktárban,azokon szűtást végezhet..
	- Rendelés:
		A felhasználó adhat le új kérést.
	- Beszerzés:
		A felhasználó tölthet fel termékeket.

#### 4. Jogosultsági körök (lentről felfelé tartalmazás - superuser tudja amit az alatta lévő kettő):
	- Superuser:
		- Felhasználók kezelése
	- Raktárkezelő:
		- Termékek kezelése (CRUD műveletekkel)
	- Felhasználó:
		- Termék keresése
		- Megrendelés
		- Kívánságlista

#### 5. Adatbázis-terv:

![alt text](https://github.com/holistvan/WarehouseManager/blob/master/DatabasePlan.jpg)

#### 6. UseCase diagram:

![alt text](https://github.com/holistvan/WarehouseManager/blob/master/UseCase.JPG)
