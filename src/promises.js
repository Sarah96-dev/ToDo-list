/*
let str = "Sarra";

let iterator = str[Symbol.iterator]();

console.log(iterator.next());
*/

/*
let arr= [1,3,5,7,9];

for (let x in arr){
    console.log(arr[x])
}

for (let x of arr){
    console.log(x)
}

*/
/*
let arr = [{1:"h"},{2:"k"},{3:"j"}]

let obj = {1:'x', 5:'y',3:'z'}

for( let x in obj){
    console.log(x);
}
*/
/*
let map = new Map();

map.set('key1', 'val1');
map.set('key2', 'val2');
map.set('key3', 'val3');

for (let x of map){
    console.log(x);
}
*/

/*
function* myGenerator (){
    const f= yield  1;
    const s= yield 2;
    let t= yield 3;
    let h = yield 4;
    console.log(f,s,t);

}

let gen = myGenerator();
console.log(gen.next('ignored'));
console.log(gen.next(1));
console.log(gen.next(2));
console.log(gen.next(3));
console.log(gen.next())
*/

/*
function* genTask(){
  // console.log('Hi');
   let j = yield 123;
  // console.log('Bye');

}
let iter= genTask();
iter.next();
iter.next();
iter.next();
*/


/*
Sum=(x,y)=>{
    console.log(`${x} + ${y} = ${x+y}`);

}

Sum(1,2)
*/

/*
stars = (n) =>{
    for ( let x=1;x<= n ; x+=2){
        let line = '';
        line+= ' '.repeat((n-x)/2);
        line+='*'.repeat(x);
        console.log(line);
    }
}

stars(12);
*/

/*
let obj = {foo:111, bar:222, foobar:333};
let {foo,bar}= obj;
console.log(foo,bar);
*/

let arr= Array.of(1,2,3,4);
//console.log(arr);

let array = [1,2,3,4,5];
//array.copyWithin(4,0);
//console.log(array);

//array.fill('foo',5);
//console.log(array);

//console.log(array.find(x => x==5));
let rslt = array.fill(3,3).copyWithin(3,1)
//.copyWithin(3,1);
//console.log(...rslt);


//object literal
/*
let name = "sara";
let title="hello";
let hobby="bye";

let info = {
    name,title,hobby
}
console.log(info)

*/


let obj1= {
    name: "sarra"
}

let obj3={
    age:23
}
//merge

//let obj2= Object.assign({},obj1,obj3);
//obj2.name = "hela";
//console.log(obj2);

const myObj = {
    name:"sarra",
    hobby:"painting",
    job:"developper"
}

console.log(Object.values(myObj));
console.log(Object.keys(myObj));

// seal freeze  
//is 
//Object.seal(myObj);
Object.freeze(myObj);

myObj.age=23;
//Object.isSealed();
console.log(myObj);
//Object.isFrozen();