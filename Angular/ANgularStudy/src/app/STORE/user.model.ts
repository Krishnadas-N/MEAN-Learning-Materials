export interface User{
    name:string,
    age:number,
    zip:number
}

export interface Users{
    users:User[],
    loading:boolean,
    error:any
}