

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


function cards(){

}
let counter=1;


onload=function printDevice(){
let printelm=document.getElementById("printhere")
loading.innerHTML=`<img src="https://freefrontend.com/assets/img/css-loaders/loading.gif" class="card-img-top img-fluid"/>
`

this.setTimeout(()=>{
try {
    getDevice().then((res)=>{

        res.forEach((dev) => {

printhere.innerHTML+=`<div class="col-lg-4">
<img src="/images/homepage/smg${counter++}.png" class="card-img-top img-fluid"/>
<div class="card-body">
  <h5 class="card-title mb-2">brand : ${dev.brand} </h5>
  <P class="card-text">
 color : ${dev.color}
  </P>
  <P class="card-text">
  createdAt:${dev.createdAt}
  </P>
  <P class="card-text">
  id : ${dev.id}
  </P> <P class="card-text">
  isAvailable:${dev.isAvailable}
  <P class="card-text">
  price : ${dev.price}
  </P>
  <P class="card-text">
  ram : ${dev.ram}
  </P>
  <a href="#!" class="btn btn-dark btn-z">Delete</a>
</div>
`     

if(counter==6){
    counter=1
}
        });
     
    })
} catch (error) {
    
}
finally{
    loading.innerHTML=""
}

},3000)   
}


let btns=document.getElementsByClassName("btn-z");

    for (const i of btns) {
        i.addEventListener("click",async()=>{
    try {
        const result=await fetch(APIDEVICE `/${i}`,{method:"DELETE"})
        return result.json();

    } catch (error) {
        
    }
        
    
        })
    
    }





