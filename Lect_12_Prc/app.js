// console.log("one");
// console.log("two");

// setTimeout( () => {
//     console.log("five");
// }, 4000);
// console.log("three");
// console.log("four"); 



function getData(dataId, getNextData){
    setTimeout(() =>{
        console.log("Data",dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}
getData(1, () =>{
    getData(2, () =>{
        getData(3, () => {
             getData(4);
        })
    })
})