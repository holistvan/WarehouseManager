# Alkalmazások fejlesztése nagybeadandó (2018/19 I. félév):
### WarehouseManager - Raktárkészlet kezelő alkalmazás (Dittrich Dia és Holczmann István)

#### 1. Feladat szöveges leírása:
> Egy online elérhető raktárkészlet kezelő alkalmazás. A programban lehetőség van alapanyagok és kész termékek mennyiségének nyomonkövetésére, azok megrendelésére, előállítására, feltüöltésére.

#### A raktárkészlet kezelő működése:
> Bejelentkezés után a a megadott jogkörök alapján a raktárkészlet elérhető, és szintén jogosultág alapján azon műveletek végezhetők. A megrendelőnek lehetősége van a raktárkészletet csökkenteni, vagy igényt leadni, hogy mire van szüksége. A beszerző feltölti a raktárkészletet, új terméket vezethet fel. Az adminisztrátor mindenhez hozzáfér.

#### 2. Funkcionális követelmények:
	- Regisztráció:
		Teljes név, felhasználói név, e-mail és születési dátum megadásával.
	- Bejelentkezés:
		Felhasználói név és jelszó megadásával.
	- Termékek keresése:
		A termékek szűrése azok attribútumjai alapján.
	- Megrendelés:
		Terméket kiválasztva lehetséges azok megrendelése.
	- Beszerzés:
		A készletek feltöltése
	- Termékkészítés:
		Meglévő alapanyagok esetén a termék előállítása.
#### 3. Felhasználói történetek:

	- Megrendelés:
		A felhasználó terméket (termékeket) kiválasztva jelzi a foglalási kérelmét. Ezt a raktárkezelő(/beszerző) jóváhagyja, igény esetén beszerzi.
	- Beszerzés:
		Egy alap szintig, vagy fogyasztási statisztikák alapján a megfelelő helyről a termékek beszerzése.
	- Termékkészítés:
		A raktárkezelő(/beszerző) a kész terméket a meglévő alapanyagok alapján elkészíti

#### 4. Jogosultsági körök (lentről felfelé tartalmazás - superuser tudja amit az alatta lévő kettő):
	- Superuser:
		- Felhasználók kezelése
	- Beszerző(/raktárkezelő):
		- Termékek kezelése (CRUD műveletekkel)
		- Késztermékek előállítása
	- Felhasználó:
		- Termék keresése
		- Termékek összehasonlítása
		- Megrendelés
		- Kívánságlista

#### 5. Adatbázis-terv:


