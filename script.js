const pedra     = document.getElementById('pedra');
const papel     = document.getElementById('papel');
const tesoura   = document.getElementById('tesoura');
const resultado = document.getElementById('resultado');
const pedra1   = 1;
const papel2   = 2;
const tesoura3 = 3;
pedra.addEventListener("click", function(){
    let pc = Math.floor(Math.random() * (tesoura3)) + pedra1;
    if (pc === pedra1){
        resultado.innerText = ' O computador tirou pedra, empatou!';
    }
    if (pc === papel2){
        resultado.innerText = ' O computador tirou papel, você perdeu!';
    }
    if (pc === tesoura3){
        resultado.innerText = ' O computador tirou tesoura, você ganhou!';
    }
    console.log(pc);
})
papel.addEventListener("click", function(){
    let pc = Math.floor(Math.random() * (tesoura3)) + pedra1;
    if (pc === pedra1){
        resultado.innerText = ' O computador tirou pedra, você ganhou!';
    }
    if (pc === papel2){
        resultado.innerText = ' O computador tirou papel, empatou!';
    }
    if (pc === tesoura3){
        resultado.innerText = ' O computador tirou tesoura, você perdeu!';
    } 
    
})
tesoura.addEventListener("click", function(){
    let pc = Math.floor(Math.random() * (tesoura3)) + pedra1;
    if (pc === pedra1){
        resultado.innerText = ' O computador tirou pedra, você perdeu!';
    }
    if (pc === papel2){
        resultado.innerText = ' O computador tirou papel, você ganhou!';
    }
    if (pc === tesoura3){
        resultado.innerText = ' O computador tirou tesoura, empatou!';
    } 
})