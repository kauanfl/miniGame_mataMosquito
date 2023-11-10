var altura = 0
var largura = 0
var vida = 1
var tempo = 30
var MosquitoTime = 1500
var nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel === 'Easy'){
    MosquitoTime = 1500
}else if(nivel === 'Hard'){
    MosquitoTime = 1000
}else if(nivel === 'Extreme'){
    MosquitoTime = 750
}

function ajustarTamanhoPalcoDoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    //console.log(altura,largura)
}
ajustarTamanhoPalcoDoJogo()

var cronometro = setInterval(function(){
    tempo -= 1
    if( tempo < 0 ){
        window.location.href = 'vitoria.html'
    }else{
    document.getElementById('cronometro').innerHTML = tempo
}
}, 1000)

function posicaoRandomica(){
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if( vida > 3){        
                window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('v' + vida).src = "imgs/coracao_vazio.png"
            vida++
        }

   }
    var x = Math.floor(Math.random() * largura) -100
    var y = Math.floor(Math.random() * altura)  -100

    x = x < 0 ? 0 : x
    y = y < 0 ? 0 : y
   // console.log(x,y)

    var mosquito = document.createElement('img')
    mosquito.src = 'imgs/mosquito.png'
    mosquito.className = tamanhoMosquito() +' '+ mosquitoSide()
    mosquito.style.left = x + 'px'
    mosquito.style.top  = y + 'px'    
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }
    document.body.appendChild(mosquito)
    //console.log(tamanhoMosquito())
}



function tamanhoMosquito(){
    var tamanho =  Math.floor(Math.random() * 2)
    switch(tamanho){
        case 0 :return 'mosquito1'
        case 1 :return 'mosquito2'
        case 2 :return 'mosquito3'
    }
}
function mosquitoSide(){
    var ladoMosquito =  Math.floor(Math.random() * 2)
        switch(ladoMosquito){
            case 0 :return 'ladoA'
            case 1 :return 'ladoB'
        }
}