// primitive data types

// string
let a=23543;
function outer(){
    let a=23;
    function inner(){
        console.log(a)
    }
    return inner
}
a=7889;
console.log(a)
let x=outer()
x()