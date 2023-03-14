document.getElementsByClassName("toggle")[0].addEventListener("click",()=>{         
    items=document.getElementsByClassName("item");
    for(let item of items){
        item.classList.toggle("active");
    };
});
