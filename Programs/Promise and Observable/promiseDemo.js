let prom = new Promise((resolve,reject)=> {
    resolve("successfully done"),
   reject("Error generated...")
})

prom.then(data=>console.log("In Then "+data)).catch(e=>console.log("In Catch "+e));
