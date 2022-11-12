function receptionMensage(){
    const date = new Date();
    let hour = date.getHours();
    let mensage = document.getElementById('reception-mensage');
    
    if(hour < 12){
        mensage.innerHTML = `Bom dia!`
    }else if(hour <= 18){
        mensage.innerHTML = `Boa tarde!`
    }else{
        mensage.innerHTML = `Boa noite!`
    }
}

function changePosition(){
    if(document.getElementById("slide1").checked){
        document.getElementsByClassName("s1").style.marginLeft = "0px"
    }else if(document.getElementById("slide2").checked){
        document.getElementsByClassName("s1").style.marginLeft = "-25%"
    }else if(document.getElementById("slide3").checked){
        document.getElementsByClassName("s1").style.marginLeft = "-50%"
    }else{
        document.getElementsByClassName("s1").style.marginLeft = "-75%"
    }
}
document.getElementsByClassName("slide-input").addEventListner("click", changePosition())