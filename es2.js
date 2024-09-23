
let contArticolo = document.querySelector('.articolo')
let wrapper = document.querySelector('#wrapper')
let wrapper2 = document.querySelector('#wrapper2')
let titolo = document.querySelector('#inputTitolo')
let txtArea = document.querySelector('#txtarea')
let btnCrea = document.querySelector('#btn')


btnCrea.addEventListener('click', ()=>{
    let date = new Date()
    let formatDate = date.toLocaleDateString()
    let nuovoDiv = document.createElement('div')

    if(titolo.value == '' || txtArea.value == ''){
        alert('complia tutti i campi')
    }else {
        nuovoDiv.innerHTML= `
        <h1 class="titolo">${titolo.value}</h1> 
        <p class="par">${txtArea.value}</p>
        <p class="data">${formatDate}</p>
        ` 
        titolo.value = "", txtArea.value = ""

        
    }
    wrapper2.appendChild(nuovoDiv)
})
