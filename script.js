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

function showButtons() {
    let buttonsSlide = document.getElementById("buttons-nav-slide")
    document.getElementById('buttons-nav-slide').style.opacity = 0.5;
}
function hiddenButtons(){
    let buttonsSlide = document.getElementById("buttons-nav-slide")
    document.getElementById('buttons-nav-slide').style.opacity = 0;
}
