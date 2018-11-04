-- USERS tábla létrehozása
CREATE TABLE USERS
(
    USER_ID int PRIMARY KEY,
    USERNAME VARCHAR(10),
    PASSWORD VARCHAR2(64),
    ROLE VARCHAR(10)
);
CREATE UNIQUE INDEX USERS_USER_ID_uindex ON USERS (USER_ID);

-- PRODUCT_GROUPS tábla létrehozása
CREATE TABLE PRODUCT_GROUPS
(
    GROUP_ID int PRIMARY KEY,
    NAME varchar(20)
);
CREATE UNIQUE INDEX PRODUCT_GROUPS_GROUP_ID_uindex ON PRODUCT_GROUPS (GROUP_ID);

-- PRODUCTS tábla létrehozása
CREATE TABLE PRODUCTS
(
    NAME varchar(30) PRIMARY KEY,
    TYPE varchar(20),
    GROUP_ID int,
    QUANTITY_IN_STOCK int,
    CONSTRAINT PRODUCTS_PRODUCT_GROUPS_GROUP_ID_fk FOREIGN KEY (GROUP_ID) REFERENCES PRODUCT_GROUPS (GROUP_ID) ON DELETE CASCADE ON UPDATE CASCADE
);

-- REQUESTS tábla létrehozása
CREATE TABLE REQUESTS
(
    REQUEST_ID int PRIMARY KEY,
    OWNER_ID int,
    PRODUCT_NAME varchar(30),
    ORDERED_AMOUNT int,
    CONSTRAINT REQUESTS_USERS_USER_ID_fk FOREIGN KEY (OWNER_ID) REFERENCES USERS (USER_ID) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT REQUESTS_PRODUCTS_NAME_fk FOREIGN KEY (PRODUCT_NAME) REFERENCES PRODUCTS (NAME) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE UNIQUE INDEX REQUESTS_REQUEST_ID_uindex ON REQUESTS (REQUEST_ID);

-- NEW_ITEM_REQUESTS tábla létrehozása
CREATE TABLE NEW_ITEM_REQUESTS
(
    NEWITEM_ID int PRIMARY KEY,
    PRODUCT_NAME VARCHAR(30),
    OWNER_ID int,
    CONSTRAINT NEW_ITEM_REQUESTS_USERS_USER_ID_fk FOREIGN KEY (OWNER_ID) REFERENCES USERS (USER_ID) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE UNIQUE INDEX NEW_ITEM_REQUESTS_NEWITEM_ID_uindex ON NEW_ITEM_REQUESTS (NEWITEM_ID);