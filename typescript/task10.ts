interface Users{
    name:String;
    age:number;
    occupation?:string;

}
let Users:Users[]=[
    {
        name:'max well',
        age:25,
        occupation:'allrounder'
    },
    {
        name:'sachin tendulkar',
        age:50,
        occupation:'batsman'
    }
]
function logUser(user:Users){
    console.log(user.name);
    console.log(user.age);
}
logUser(Users[0]);
console.log('***************');

function printUser(users:Users[])
{
users.forEach(x=> {
    console.log(x.name);
    console.log(x.age);
    console.log(x.occupation);
})
}
printUser(Users);
console.log('***************');



function findUser(users:Users[],data:string){
    const result=users.find(({name})=>name===data);
    if(result){
        console.log('true');
    }
    else{
        console.log('false');
    }
}

findUser(Users,'rakesh');
findUser(Users,'sachin tendulkar');