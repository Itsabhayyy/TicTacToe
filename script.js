// let obj={
//   a:1,
//   b:2,
//   c:3,
//   d:4
// }
// obj=JSON.stringify(obj)
// obj=obj.toString()
// console.log(typeof obj)
// call using function borrowing
// apply 
// bind 

// function useme(chal){
//     console.log(this.name)
//     console.log(chal)
// }
// const x={
//     name:"the name is x"
// }

// const y={
//     name:"the name is y"
// }

// useme.call(x,"nothing")
// useme.call(y,"something")

// function brief(city,state){
//     console.log(this.name,city,state)
// }

// const obj={
//     name:"random"
// }

// const obj1={
//     name:"anything"
// }

// brief.call(obj1,"fatehpur","UttarPradesh")


// function briefme(city,state){
//     console.log(this.name,city,state)
// }

// const obj={
//     name:"Abhay"

// }

// const obj1={
//     name:"mahesh"
// }

// let x=briefme.bind(obj,"Shimla","Himachal Pradesh")

// x()



function useme(...args){
    console.log(args)
}

useme(1,2,3,4,5,6)