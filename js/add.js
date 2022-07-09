

const APIDEVICE="https://my-json-server.typicode.com/Jeck99/fake-server/devices";

            

async function getDevice(){
    try {
        const result=await fetch(APIDEVICE)
        return result.json();
    } catch (error) {
        
    }
    finally{
    }
}

getDevice().then((res)=>{console.log(res)})



async function addDevice(e){
    e.preventDefault();
    const Data1={
        brand:`${brandd.value}`,
        color:`${color.value}`,
        createdAt:`${date.value}`,
        id:`${id_.value}`,
        isAvailable:`${isav.value}`,
        picture:0,
        price:`${price.value}`,
        ram:`${ram.value}`,
                }
    try {
        return await fetch(APIDEVICE,{
            
            method:"POST",
            body:JSON.stringify(Data),
            headers:'Content-Type-application/jason'
    
    })
    } catch (error) {
        
    }
    finally{

        for (const key in Data1) {
     tbod_add.innerHTML+=`<tr><td>${key}</td> <td>${Data1[key]}</td></tr>`
        }
        
    }
}








