let score: number | string  = 33

score = 44

score = "55"

type User  ={
name: string
id: number
}
type Admin  ={
username: string
id: number
}

let abhishek: User | Admin = {name: "Abhi", id: 3}

abhishek = {username: 'abhihske', id:8}


function getDbId(id: number | string){
if(typeof id === 'string'){
id.toLowerCase()
}else{
    id+2
}
    
}
// function getDbId(id: number | string){
//     console.log(`DB id is: ${id}`);
// }

console.log(getDbId(55))


const data: number[] = [1 ,2,3,5,6]
const data2: string[] = [ "1", "2", "3"]
const data3: (string | number)[] = ["1", 2]
const data4: any[] = ["1", 2]


export {}