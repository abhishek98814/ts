
function addTwo(num: number):number{
    // either we retun like this,
    // return "Hello" 
    // it not complain when we dont declare value after function after declare function it ensure that there must bee number 
    
    return num + 2;

}

console.log(addTwo(5));

const sanu: string = "Abhishek"

console.log(sanu)


function getUpper(val: string){
    return val.toUpperCase()
}

console.log(getUpper("Abhishek"))


function signUp(name:string, email:string, password:string, age:number, char) {
    return { name, email, password, age, char };
}

console.log(signUp("abhi","haeloi", "jkasd", 89, "hjsgd"))

const loginUser = (name: string, ph: number, isActive: boolean = false) =>{
    return {name, ph, isActive}
}

console.log(loginUser("SANU", 786))


// the case where we face problem 

// const getValue = (val:number):string =>{
//     if(val >5){
//         return "Hey value is fine"
//     }
//     return "404 ntfound"
// }

// when we use arry it autromatoca;;y detate 


const hero =[1,23,3,4, "hello"]
hero.map((heroes)=>{
    console.log(heroes)
})


function consoleError(errMsg: string): void{
    console.log(errMsg)
}

function handleError(errMsg: string): never{
    console.log(errMsg)
}

export {}