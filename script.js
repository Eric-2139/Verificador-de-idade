function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Os dados estão errados mula, tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebeMsemfundo.png')
            }else if (idade < 21){
                //Adolescente
                img.setAttribute('src', 'adolescenteMsemfundo.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adultoMsemfundo.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idosoMsemfundo.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebeFsemfundo.png')
            }else if (idade < 21){
                //Adolescente
                img.setAttribute('src', 'adolescenteFsemfundo.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adultaFsemfundo.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idosaFsemfundo.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}