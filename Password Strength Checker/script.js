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
        value: "0987654321",
        isStrong: false
    }, 
    {
        value:"-_*/#$!@",
        isStrong: false
    }
];

function colorDesign(lblColor, lbltext, bxShadow, width){
    const progress = document.querySelector('.progress');
    const label = document.querySelector('.lbl');

    label.style.color = lblColor;
    label.innerHTML = lbltext;
    progress.style.background = lblColor;
    progress.style.boxShadow = bxShadow
    progress.style.width = width;
}

function isCheck(k){
    const pass = textContent.value;

    for(let i in pass){
        for(let j in strong[k].value){
            if(pass[i] == strong[k].value[j]){
                strong[k].isStrong = true;
                break;     
            }else{
                strong[k].isStrong = false;
            }
        }
        if(strong[k].isStrong) break;
    } 
}

let width = 150;
textContent.addEventListener('input', function(){
    const pass = textContent.value;

    isCheck(0);
    isCheck(1);
    isCheck(2);
    isCheck(3);

    if(textContent.value.length == 0 || textContent.value == " "){
        for(let i in strong){
            strong[i].isStrong = false;
        }
    }     

    let sum = 0;

    for(let i in strong){
        sum += strong[i].isStrong;
    }

    if(pass.length > 11)sum++; 
    switch(sum){
        case 0: colorDesign("", "", "", "", "0px");break;
        case 1: colorDesign("#FF0000", "Very Weak", "0px 0px 10px 2px #ad2727", "70px"); break;         
        case 2: colorDesign("rgb(233, 118, 72)", "Weak", "0px 0px 10px 2px #ad5127", "140px"); break;           
        case 3: colorDesign("rgb(233, 209, 72)", "Moderate", "0px 0px 10px 2px #ada427", "210px"); break;             
        case 4: colorDesign("#9ACD32", "Strong",  "#9ACD32", "0px 0px 10px 2px #63ad27", "280px"); break;
        case 5: colorDesign("rgb(94, 255, 0)", "Very Strong", "0px 0px 10px 2px rgb(0, 255, 34)", "350px"); break;         
    } 
});
let isHide = true;

function hide(){
    const btn = document.querySelector('.btn');
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
