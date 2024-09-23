let paragrafi = document.querySelectorAll('.paragrafi');
console.dir(paragrafi);

let changeColor = document.querySelector('#randomcolor');

let redbull = document.querySelector('#redbull');

let johncena = document.querySelector('#johncena');

changeColor.addEventListener('click', ()=>{
    paragrafi.forEach( (paragrafo)=>{
        
        let red = Math.floor(Math.random() * (255 - 0 + 1)  );
        let green = Math.floor(Math.random() * (255 - 0 + 1)  );
        let blue = Math.floor(Math.random() * (255 - 0 + 1)  );
        
        paragrafo.style.backgroundColor='grey';
        paragrafo.style.color = `rgb(${red}, ${green}, ${blue})`    ;
    } );
    
})

redbull.addEventListener('click', ()=>{
    paragrafi.forEach( (paragrafo)=>{
        paragrafo.classList.add('grassetto')
    } );
    
})

johncena.addEventListener('click', ()=>{
    paragrafi.forEach( (paragrafo)=>{
        paragrafo.classList.toggle('spariscimi')
    } );
    
})