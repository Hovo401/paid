export interface email{
    in:{
        id:number,
        email:string,
        name:string
    }
    to:{
        id:number,
        email:string,
        name:string
    }
    subject:string
    message:string
}