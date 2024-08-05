const User = {
    name: "Abhishek",
    email: "avi@gmail.com",
    isActive: true
}

function createUser({name: String, isPaid: boolean}){

}
createUser({name:'Abhishekl', isPaid:false})

type Course = {
    name: string,
    price: number
};

function createCourse(course: Course): Course {
    return {
        name: course.name,
        price: course.price
    };
}

console.log(createCourse({ name: 'Abhishek', price: 79 }));


export {}