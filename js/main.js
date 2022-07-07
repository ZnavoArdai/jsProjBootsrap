
function slaide(){

    const burger=document.querySelector('.burger-z');
    const navbar=document.querySelector('.navbar-z');
const li=document.querySelectorAll('.navbar-z li')
    burger.addEventListener("click",()=>{
        navbar.classList.toggle('navbar-active-z');
        li.forEach((list,index)=>{
            list.style.animation=`slid_li 3s ease forwards ${index/4}s `

        })

    }) 
}
slaide();