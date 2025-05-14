// function asyncFunc1() {
//     return new Promise ((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log("Data1");
//             resolve("success");
//         }, 4000);
//     });
// } 

// function asyncFunc2() {
//     return new Promise ((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log(" Data2");
//             resolve("success");
//         }, 4000);
//     });
// } 

// console.log("fetching data1");
// let p1 = asyncFunc1();
// p1.then((res) =>{
//     // console.log(res);
//     console.log("fetching data2");
//     let p2 = asyncFunc2()
//     p2.then((res)=> {
//         // console.log(res);
// });
// });
// console.log("one");
// console.log("two");

// setTimeout( () => {
//     console.log("five");
// }, 4000);
// console.log("three");
// console.log("four"); 

//callback hell

function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("Data",dataId);
        // if(getNextData){
        //     getNextData();
        // }
        resolve("success");
    }, 2000);
});
}
//promise chain
getData(1)
.then(()=> {
    return getData(2);
})
.then(()=> {
    return getData(3);
}).then((res)=> {
console.log(res);
})
// getData(1, () =>{
//     getData(2, () =>{
//         getData(3, () => {
//              getData(4);
//         })
//     })
// })

// Promises

// let promise = new Promise(( resolove, reject) => {
//     console.log("I'm a promise")
//     reject("error");
// });

// promise practice
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I'm a promise");

//         // resolve("success");
//         reject("error");
// })
// }

// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fullfilled")
// });
// promise.catch(()=> {
//     console.log("promise rejected")
// })
// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//         // console.log("Data",dataId);
//         // resolve("success");
//         reject("error");
//         if(getNextData){
//             getNextData();
//         }
//     }, 5000);
//     });
    
// };