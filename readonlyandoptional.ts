type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean,
    creditCardDetail?: number
 }
 
 let myUser: User = {
     _id: '123',
     name: 'abhih',
     email: 'aj7154264@gmail.com',
     isActive: true,
 }
 
 function createUser(U: User){ 
     // Your function implementation here
 }
 

 type cardNumber = {
    cardnumber: string
 }
 type cardDate = {
    carddate: string
 }


 type cardDetails = cardNumber & cardDate & {
    cvv: number
 }


 export {}
 