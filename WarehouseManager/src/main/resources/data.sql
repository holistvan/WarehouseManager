-- USERS tábla feltöltése
INSERT INTO USERS (USER_ID, USER_NAME, USER_PASSWORD, USER_ROLE) values (1, 'holistvan', '$2a$10$pmd0a.vlhRWPIo3DJWTAse6L7FghFv3ieoZOekD6nVxX7dznccgTy', 'ROLE_ADMIN');
INSERT INTO USERS (USER_ID, USER_NAME, USER_PASSWORD, USER_ROLE) values (2, 'dikomako', '$2a$10$pmd0a.vlhRWPIo3DJWTAse6L7FghFv3ieoZOekD6nVxX7dznccgTy', 'ROLE_ADMIN');
INSERT INTO USERS (USER_ID, USER_NAME, USER_PASSWORD, USER_ROLE) values (3, 'testuser', '$2a$10$pmd0a.vlhRWPIo3DJWTAse6L7FghFv3ieoZOekD6nVxX7dznccgTy', 'ROLE_USER');

-- PRODUCT_GROUPS tábla feltöltése
INSERT INTO PRODUCT_GROUPS (PRODUCT_GROUP_ID, PRODUCT_GROUP_NAME) values (1, 'groupname1');
INSERT INTO PRODUCT_GROUPS (PRODUCT_GROUP_ID, PRODUCT_GROUP_NAME) values (2, 'groupname2');
INSERT INTO PRODUCT_GROUPS (PRODUCT_GROUP_ID, PRODUCT_GROUP_NAME) values (3, 'groupname3');
INSERT INTO PRODUCT_GROUPS (PRODUCT_GROUP_ID, PRODUCT_GROUP_NAME) values (4, 'groupname4');
INSERT INTO PRODUCT_GROUPS (PRODUCT_GROUP_ID, PRODUCT_GROUP_NAME) values (5, 'groupname5');

-- PRODUCTS tábla feltöltése
INSERT INTO PRODUCTS (PRODUCT_NAME, PRODUCT_TYPE, PRODUCT_GROUP_ID, QUANTITY_IN_STOCK) values ('productname1', 'type1', 1, 202);
INSERT INTO PRODUCTS (PRODUCT_NAME, PRODUCT_TYPE, PRODUCT_GROUP_ID, QUANTITY_IN_STOCK) values ('productname2', 'type2', 2, 30);
INSERT INTO PRODUCTS (PRODUCT_NAME, PRODUCT_TYPE, PRODUCT_GROUP_ID, QUANTITY_IN_STOCK) values ('productname3', 'type3', 3, 66);
INSERT INTO PRODUCTS (PRODUCT_NAME, PRODUCT_TYPE, PRODUCT_GROUP_ID, QUANTITY_IN_STOCK) values ('productname4', 'type4', 1, 0);
INSERT INTO PRODUCTS (PRODUCT_NAME, PRODUCT_TYPE, PRODUCT_GROUP_ID, QUANTITY_IN_STOCK) values ('productname5', 'type5', 2, 100);

-- REQUESTS tábla feltöltése
INSERT INTO REQUESTS (REQUEST_ID, USER_ID, PRODUCT_NAME, ORDERED_AMOUNT) values (1, 2, 'productname1', 17);
INSERT INTO REQUESTS (REQUEST_ID, USER_ID, PRODUCT_NAME, ORDERED_AMOUNT) values (2, 1, 'productname1', 1011);
INSERT INTO REQUESTS (REQUEST_ID, USER_ID, PRODUCT_NAME, ORDERED_AMOUNT) values (3, 2, 'productname3', 12);
INSERT INTO REQUESTS (REQUEST_ID, USER_ID, PRODUCT_NAME, ORDERED_AMOUNT) values (4, 2, 'productname2', 6);
INSERT INTO REQUESTS (REQUEST_ID, USER_ID, PRODUCT_NAME, ORDERED_AMOUNT) values (5, 1, 'productname5', 41);

-- NEW_ITEM_REQUESTS tábla feltöltése
INSERT INTO NEW_ITEM_REQUESTS (NEW_ITEM_ID, PRODUCT_NAME, USER_ID) values (1, 'productname1', 1);
INSERT INTO NEW_ITEM_REQUESTS (NEW_ITEM_ID, PRODUCT_NAME, USER_ID) values (2, 'productname2', 2);
INSERT INTO NEW_ITEM_REQUESTS (NEW_ITEM_ID, PRODUCT_NAME, USER_ID) values (3, 'productname3', 3);