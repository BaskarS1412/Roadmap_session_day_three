
let obj1 = {name : "person1", age : 25};
let obj2 = {age : 25, name : "person1"};

let flag = true;
let objLength1 = Object.keys(obj1).length;
let objLength2 = Object.keys(obj2).length;

if(objLength1 === objLength2){
    for(let key in obj1){
        if(obj1[key] === obj2[key]){
            continue;
        }else{
            flag = false;
            break;
        }
    }

}else{
    flag = false;
}

console.log(flag);




