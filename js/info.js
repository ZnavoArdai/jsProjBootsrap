const APIUSER="https://my-json-server.typicode.com/Jeck99/fake-server/users";


async function getUsers(){

    try {
        const result=await fetch(APIUSER)
        return result.json();
    } catch (error) {
        
    }
    finally{

    }
}

let counter=1;
onload=function printUsers(){
    try {
        getUsers().then((res)=>{
            
            res.forEach(user => {
               
                tbod.innerHTML+=`<tr><td><a href="#!" class="btn btn-dark btn-info-z">Delete</a></td><th scope="row">${user.age}</th><td>${user.email}</td><td>${user.index}</td><td>${user.name.first } ${user.name.last}</td><td>${user.phone}</td><td><img src="https://randomuser.me/api/portraits/men/${counter++}.jpg"></td><td>${user._id}</td></tr>`
            
            
            
            
            });

            let btns=document.getElementsByClassName("btn-info-z");
for (const i of btns) {
    i.addEventListener("click",async()=>{
        alert("user deleted")


    })
}
            })
    } catch (error) {
        
    }
    finally{

    }
}



async function deleteUser(user_id){
    try {
        const result=await fetch(APIUSER `/deleteById/${user_id}`,{method:"DELETE"})
        return result.json();
    }
     catch (error) {   
    }
}




// age: 35
// email: "dollie.hensley@undefined.org"
// index: 0
// name: {last: 'Hensley', first: 'Dollie'}
// phone: "+1 (904) 421-3160"
// picture: "http://placehold.it/32x32"
// _id: "605acace4ab389d8ed54c496"