-- USER tábla feltöltése
INSERT INTO USER (ID, USERNAME, PASSWORD, ROLE) values (1, 'holistvan', '$2a$10$pmd0a.vlhRWPIo3DJWTAse6L7FghFv3ieoZOekD6nVxX7dznccgTy', 'ROLE_ADMIN');
INSERT INTO USER (ID, NAME, PASSWORD, USER_NAME, ROLE) values (2, 'dikomako', '$2a$10$pmd0a.vlhRWPIo3DJWTAse6L7FghFv3ieoZOekD6nVxX7dznccgTy', 'ROLE_ADMIN');
INSERT INTO USER (ID, NAME, PASSWORD, USER_NAME, ROLE) values (3, 'testuser', '$2a$10$pmd0a.vlhRWPIo3DJWTAse6L7FghFv3ieoZOekD6nVxX7dznccgTy', 'ROLE_USER');

-- REQUEST tábla feltöltése
INSERT INTO REQUEST (ID, OWNER, PRODUCTNAME, QUANTITY) values (1, 'owner1', 'productname1', 10);
INSERT INTO REQUEST (ID, OWNER, PRODUCTNAME, QUANTITY) values (2, 'owner2', 'productname2', 10);
INSERT INTO REQUEST (ID, OWNER, PRODUCTNAME, QUANTITY) values (3, 'owner3', 'productname3', 10);
INSERT INTO REQUEST (ID, OWNER, PRODUCTNAME, QUANTITY) values (4, 'owner4', 'productname4', 10);
INSERT INTO REQUEST (ID, OWNER, PRODUCTNAME, QUANTITY) values (5, 'owner5', 'productname5', 10);

-- PRODUCT tábla feltöltése
INSERT INTO PRODUCT (PRODUCTNAME, TYPE, GROUP, QUANTITY) values ('productname1', 'type1', 'groupname1', 20);
INSERT INTO PRODUCT (PRODUCTNAME, TYPE, GROUP, QUANTITY) values ('productname2', 'type2', 'groupname2', 20);
INSERT INTO PRODUCT (PRODUCTNAME, TYPE, GROUP, QUANTITY) values ('productname3', 'type3', 'groupname3', 20);
INSERT INTO PRODUCT (PRODUCTNAME, TYPE, GROUP, QUANTITY) values ('productname4', 'type4', 'groupname4', 20);
INSERT INTO PRODUCT (PRODUCTNAME, TYPE, GROUP, QUANTITY) values ('productname5', 'type5', 'groupname5', 20);

-- PRODUCTGROUP tábla feltöltése
INSERT INTO PRODUCTGROUP (ID, GROUPNAME) values (1, 'groupname1');
INSERT INTO PRODUCTGROUP (ID, GROUPNAME) values (2, 'groupname2');
INSERT INTO PRODUCTGROUP (ID, GROUPNAME) values (3, 'groupname3');
INSERT INTO PRODUCTGROUP (ID, GROUPNAME) values (4, 'groupname4');
INSERT INTO PRODUCTGROUP (ID, GROUPNAME) values (5, 'groupname5');

-- NEW_ITEM_REQUEST tábla feltöltése
INSERT INTO NEW_ITEM_REQUEST (ID, PRODUCTNAME, OWNER) values (1, 'productname1', 'owner1');
INSERT INTO NEW_ITEM_REQUEST (ID, PRODUCTNAME, OWNER) values (2, 'productname2', 'owner2');
INSERT INTO NEW_ITEM_REQUEST (ID, PRODUCTNAME, OWNER) values (3, 'productname3', 'owner3');