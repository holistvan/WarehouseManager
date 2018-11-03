-- USER tábla feltöltése
INSERT INTO USER (ID, USERNAME, PASSWORD, ROLE) values (1, 'holistvan', '$2a$10$pmd0a.vlhRWPIo3DJWTAse6L7FghFv3ieoZOekD6nVxX7dznccgTy', 'ROLE_ADMIN');
INSERT INTO USER (ID, USERNAME, PASSWORD, ROLE) values (2, 'dikomako', '$2a$10$pmd0a.vlhRWPIo3DJWTAse6L7FghFv3ieoZOekD6nVxX7dznccgTy', 'ROLE_ADMIN');
INSERT INTO USER (ID, USERNAME, PASSWORD, ROLE) values (3, 'testuser', '$2a$10$pmd0a.vlhRWPIo3DJWTAse6L7FghFv3ieoZOekD6nVxX7dznccgTy', 'ROLE_USER');

-- REQUEST tábla feltöltése
INSERT INTO REQUEST (ID, OWNER, PRODUCTNAME, QUANTITY) values (1, 2, 'productname1', 10);
INSERT INTO REQUEST (ID, OWNER, PRODUCTNAME, QUANTITY) values (2, 1, 'productname2', 10);
INSERT INTO REQUEST (ID, OWNER, PRODUCTNAME, QUANTITY) values (3, 2, 'productname3', 10);
INSERT INTO REQUEST (ID, OWNER, PRODUCTNAME, QUANTITY) values (4, 2, 'productname4', 10);
INSERT INTO REQUEST (ID, OWNER, PRODUCTNAME, QUANTITY) values (5, 1, 'productname5', 10);

-- PRODUCT tábla feltöltése
INSERT INTO PRODUCT (PRODUCTNAME, TYPE, GROUP_ID, QUANTITY) values ('productname1', 'type1', 1, 20);
INSERT INTO PRODUCT (PRODUCTNAME, TYPE, GROUP_ID, QUANTITY) values ('productname2', 'type2', 2, 20);
INSERT INTO PRODUCT (PRODUCTNAME, TYPE, GROUP_ID, QUANTITY) values ('productname3', 'type3', 3, 20);
INSERT INTO PRODUCT (PRODUCTNAME, TYPE, GROUP_ID, QUANTITY) values ('productname4', 'type4', 1, 20);
INSERT INTO PRODUCT (PRODUCTNAME, TYPE, GROUP_ID, QUANTITY) values ('productname5', 'type5', 2, 20);

-- PRODUCTGROUP tábla feltöltése
INSERT INTO PRODUCT_GROUP (ID, GROUPNAME) values (1, 'groupname1');
INSERT INTO PRODUCT_GROUP (ID, GROUPNAME) values (2, 'groupname2');
INSERT INTO PRODUCT_GROUP (ID, GROUPNAME) values (3, 'groupname3');
INSERT INTO PRODUCT_GROUP (ID, GROUPNAME) values (4, 'groupname4');
INSERT INTO PRODUCT_GROUP (ID, GROUPNAME) values (5, 'groupname5');

-- NEW_ITEM_REQUEST tábla feltöltése
INSERT INTO NEW_ITEM_REQUEST (ID, PRODUCTNAME, OWNER) values (1, 'productname1', 1);
INSERT INTO NEW_ITEM_REQUEST (ID, PRODUCTNAME, OWNER) values (2, 'productname2', 2);
INSERT INTO NEW_ITEM_REQUEST (ID, PRODUCTNAME, OWNER) values (3, 'productname3', 3);