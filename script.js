const pedra     = document.getElementById('pedra');
const papel     = document.getElementById('papel');
const tesoura   = document.getElementById('tesoura');
const resultado = document.getElementById('resultado');

pedra.addEventListener("click", function(){
    const pedra1   = 1;
    const papel2   = 2;
    const tesoura3 = 3;
    let pc = Math.floor(Math.random() * (tesoura3 - pedra1)) + pedra1;
    
    if (pc === pedra1){
        const span = document.createElement('span');
        span.innerText = ' O computador tirou pedra, empatou!';
        resultado.appendChild(span);
    }
    if (pc === papel2){
        const span = document.createElement('span');
        span.innerText = ' O computador tirou papel, você perdeu!';
        resultado.appendChild(span);
    }
    if (pc === tesoura3){
        const span = document.createElement('span');
        span.innerText = ' O computador tirou tesoura, você ganhou!';
        resultado.appendChild(span);
    }
})

papel.addEventListener("click", function(){
    const pedra1   = 1;
    const papel2   = 2;
    const tesoura3 = 3;
    let pc = Math.floor(Math.random() * (tesoura3 - pedra1)) + pedra1;
    
    if (pc === pedra1){
        const span = document.createElement('span');
        span.innerText = ' O computador tirou pedra, você ganhou!';
        resultado.appendChild(span);
    }
    if (pc === papel2){
        const span = document.createElement('span');
        span.innerText = ' O computador tirou papel, empatou!';
        resultado.appendChild(span);
    }
    if (pc === tesoura3){
        const span = document.createElement('span');
        span.innerText = ' O computador tirou tesoura, você perdeu!';
        resultado.appendChild(span);
    } 
    
})

tesoura.addEventListener("click", function(){
    const pedra1   = 1;
    const papel2   = 2;
    const tesoura3 = 3;
    let pc = Math.floor(Math.random() * (tesoura3 - pedra1)) + pedra1;
    
    if (pc === pedra1){
        const span = document.createElement('span');
        span.innerText = ' O computador tirou pedra, você perdeu!';
        resultado.appendChild(span);
    }
    if (pc === papel2){
        const span = document.createElement('span');
        span.innerText = ' O computador tirou papel, você ganhou!';
        resultado.appendChild(span);
    }
    if (pc === tesoura3){
        const span = document.createElement('span');
        span.innerText = ' O computador tirou tesoura, empatou!';
        resultado.appendChild(span);
    } 
    
})