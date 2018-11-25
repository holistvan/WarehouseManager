import { User } from './model/user';

export const USERS: User[] = [
    new User(1, 'holistvan', '$2a$10$pmd0a.vlhRWPIo3DJWTAse6L7FghFv3ieoZOekD6nVxX7dznccgTy', 'ROLE_ADMIN'),
    new User(2, 'dikomako', '$2a$10$pmd0a.vlhRWPIo3DJWTAse6L7FghFv3ieoZOekD6nVxX7dznccgTy', 'ROLE_ADMIN'),
    new User(3, 'testuser', '$2a$10$pmd0a.vlhRWPIo3DJWTAse6L7FghFv3ieoZOekD6nVxX7dznccgTy', 'ROLE_USER'),
];