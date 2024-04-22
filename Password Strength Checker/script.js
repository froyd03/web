const textContent = document.querySelector('.txt');

var strong = [
    {
        value: "abcdefghijklmnopqrstuvwxyz",
        isStrong: false
    },
    {
        value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        isStrong: false},
    {
        numbers: "0987654321",
        isStrong: false
    }, 
    {
        symbol: "-_*/#$!@",
        isStrong: false
    }
];

let width = 150;
textContent.addEventListener('input', function(){
    let pass = textContent.value;

    for(let i in pass){
        for(let j in strong[0].value){
            if(pass[i] == strong[0].value[j]){
                strong[0].isStrong = true;
                break;     
            }else{
                strong[0].isStrong = false;
            }
        }
        if(strong[0].isStrong) break;
    } 
     
    for(let i in pass){
        for(let j in strong[1].value){
            if(pass[i] == strong[1].value[j]){
                strong[1].isStrong = true;
                break;     
            }else{
                strong[1].isStrong = false;
            }    
        }
        if(strong[1].isStrong) break;
    } 

    for(let i in pass){
        for(let j in strong[2].numbers){
            if(strong[2].numbers[j] == pass[i]){
                strong[2].isStrong = true;
                break;     
            }else{
                strong[2].isStrong = false;
            } 
        }
        if(strong[2].isStrong) break;
    } 

    for(let i in pass){
        for(let j in strong[3].symbol){
            if(strong[3].symbol[j] == pass[i]){
                strong[3].isStrong = true;
                break;     
            }else{
                strong[3].isStrong = false;
            } 
        }
        if(strong[3].isStrong) break;
    } 

    if(textContent.value.length == 0 || textContent.value == " "){
        for(let i in strong){
            strong[i].isStrong = false;
        }
    }     

    let sum = 0;
    const progress = document.querySelector('.progress');
    const label = document.querySelector('.lbl');

    for(let i in strong){
        sum += strong[i].isStrong;
    }

    if(pass.length > 11)sum++;
    if(sum <= 0) progress.style.width = "0px";
    else if(sum <= 1){
        label.style.color = "#FF0000";
        label.innerHTML = "Very Weak";
        progress.style.background = "#FF0000";
        progress.style.boxShadow = "0px 0px 10px 2px #ad2727"
        progress.style.width = "150px";
    }
    else if(sum <= 2) {
        label.style.color = "rgb(233, 118, 72)";
        label.innerHTML = "Weak";
        progress.style.background = "rgb(233, 118, 72)";
        progress.style.boxShadow = "0px 0px 10px 2px #ad5127";
        progress.style.width = "200px";
    }    
    else if(sum <= 3){
        label.innerHTML = "Moderate";
        label.style.color = "rgb(233, 209, 72)";
        progress.style.background = "rgb(233, 209, 72)";
        progress.style.boxShadow = "0px 0px 10px 2px #ada427";
        progress.style.width = "250px";
    }
    else if(sum <= 4){
        label.innerHTML = "Strong";
        label.style.color = "#9ACD32";
        progress.style.background = "#9ACD32";
        progress.style.boxShadow = "0px 0px 10px 2px #63ad27";
        progress.style.width = "300px";
    }
    else{
        label.innerHTML = "Very Strong";
        label.style.color = "rgb(94, 255, 0)";
        progress.style.background = "rgb(94, 255, 0)";
        progress.style.boxShadow = "0px 0px 10px 2px rgb(0, 255, 34)";
        progress.style.width = "350px";
    }
});

const btn = document.querySelector('.btn');
let isHide = true;

function hide(){
    
    if(isHide){
        textContent.type = "text";
        btn.textContent = "HIDE";
        isHide = false;
    }else{
        textContent.type = "password";
        btn.textContent = "SHOW";
        isHide = true;
    }
}