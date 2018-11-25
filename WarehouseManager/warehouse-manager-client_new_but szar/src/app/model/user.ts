export class User {
    
    // fields
    user_id: number;
    user_name: string;
    user_password: string;
    user_role: string;

    // constructor
    constructor(
        user_id:number,
        user_name:string,
        user_password:string,
        user_role:string) { 

            this.user_id = user_id; 
            this.user_name = user_name;
            this.user_password = user_password;
            this.user_role = user_role;
    }
}