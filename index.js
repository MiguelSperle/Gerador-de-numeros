let submit = document.querySelector('#botão')
submit.addEventListener('click', function(){
    let background = document.querySelector('.div-background')
    let res = document.querySelector('#res')
    let gerador = (Math.floor(Math.random(0) * 1000)) //nesse código ele vai gerar um número inteiro, aleatorio, entre  0 e 1000 

     if(submit){
        res.innerHTML = `o número gerado foi ${gerador} `
        res.style.fontWeight = '600'
        res.style.font = 'arial'
        background.classList.add('NewBackground')
       
     }


     let clear = document.querySelector('#clear')
     clear.addEventListener('click', function(){
       res.innerHTML = ''
       background.classList.remove('NewBackground')
     })
    
      
})