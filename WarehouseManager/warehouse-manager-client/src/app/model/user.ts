export class User {

    // fields
    userID: number;
    userName: string;
    password: string;
    role: string;

    // constructor
    constructor(
        userID:number,
        userName:string,
        password:string,
        role:string) { 

            this.userID = userID; 
            this.userName = userName;
            this.password = password;
            this.role = role;
     }
}