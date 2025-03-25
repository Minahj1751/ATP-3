console.log("Start")
const prom= new Promise((resolve,reject)=>{

    let success=true
    if(success)
    {
        resolve("Done")
    }
    else
    {
        reject("Not Done")
    }

})
prom
.then((mess)=>console.log(mess))
.catch((error)=>console.log(error))

console.log("End")