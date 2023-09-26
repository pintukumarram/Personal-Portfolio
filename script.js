console.log("Script running....")
document.querySelector('.close').style.display='none';
document.querySelector('.hemburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if( document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector(".hem").style.display="inline";
        document.querySelector(".close").style.display="none";

    }
    else{
        document.querySelector(".hem").style.display="none";
        setTimeout(()=>{

            document.querySelector(".close").style.display="inline";
        },250)
    }
})