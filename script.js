const button = document.querySelector('button');
const divContainer = document.getElementById('grid-container');
const divItem = document.createElement('div')

button.addEventListener('click', pitanje);


function pitanje(){    

    let data = "Type a number of squares per side"
    eraser();
    divContainer.textContent = "";
        let unos = prompt(data)
        
        if(unos != null && unos <= 100){
            divContainer.style.gridTemplateColumns = `repeat(${unos}, 1fr)`
            divContainer.style.gridTemplateRows = `repeat(${unos}, 1fr)`
        
            for(i = 0; i < Math.pow(parseInt(unos),2); i++){
                const divItem = document.createElement('div')
                    divItem.classList.add("grid-item");
                    divItem.addEventListener("mouseover", function(){
                    this.style.backgroundColor="red";
                })
                
                divContainer.appendChild(divItem)
            }       
      
    }

}

document.querySelector("#eraser").addEventListener("click", eraser);

function eraser(){

let gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(elem => {
    elem.style.backgroundColor = "pink";
    })

}       



