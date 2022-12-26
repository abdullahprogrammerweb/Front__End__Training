// let arr =[1,3,546,76,76]
// arr.map((values)=>
// {
//     console.log(values)
// })
// // console.log(arr)


// let arr =[1,3,546,76,76]
// let a =arr.map((values)=>
// {
//     console.log(values)
//     return values+1
// })
// console.log(arr)
// console.log(a)


// let arr =[1,3,546,76,76]
// let a =arr.map((values,index,ar)=>
// {
//     console.log(values,index,ar)
//     return values+1
// })
// console.log(arr)
// console.log(a)

// let arr =[1,3,546,76,76]
// let a =arr.map((values,index,ar)=>
// {
//     console.log(values,index,ar)
//     return values + index
// })
// console.log(arr)
// console.log(a)
let arr1 =[1,3,546,76,763,4]
let a1 = arr1.filter((a)=>
{
     return a<10
    
})
console.log(a1)

let arr3 = [12,23,4,4,12,54,21]
let x =arr3.reduce((h1,h2)=>
{
    return h1+h2

})
console.log(x)