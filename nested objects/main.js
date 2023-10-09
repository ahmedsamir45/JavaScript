let user = {
    name:"osama",
    age:38,
    skills: ["HTML","CSS","JS"],
    available:false,
    adresses:{
        ksa: "Riyadh",
        egypt:{
            one: "Cairo",
            two: "Giza",
        },
    },
    checkAv: function () {
        if(user.available===true){
            return `Free For Work`;
        } else {
            return `Not Free`;
        }
    }
};


console.log(user.name)
console.log(user.age)
console.log(user.skills)
console.log(user.skills[0])
console.log(user.adresses.ksa)
console.log(user.adresses.egypt.one)
console.log(user.checkAv())