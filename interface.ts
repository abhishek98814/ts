interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    // startTrail: () => string;  
    startTrail(): string;  
    startTrailv: () => void;
    getCoupon(couponName: string): number
}


const avi: User = {
    dbId: 22,
    email: "aj7156@example.com",  // Updated to a valid email format
    userId: 87435,
    startTrail: () => {
        return "Hello world";
    },
    startTrailv: () =>{
        console.log("Hello v")
    },
    getCoupon : (name:"Abhisheks")=>{
        return 1000
    }
};

export {}