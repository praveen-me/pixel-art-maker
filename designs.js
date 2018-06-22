document.addEventListener('DOMContentLoaded', function() {

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//Selects Create Grid Button
const createGridBtn = $('#createGrid');





//Select Color Picker
const colorPicker = $('#colorPicker').val();

//Select Table
let pixelCanvas = $('#pixelCanvas');

//Rows and Coloums



//create Grid
const makeGrid = (e) => {
    //Selects inputHeight Text Field
    const inputHeight = $('#inputHeight').val();
    //Selects inputWidth Text Field
    const inputWidth = $('#inputWidth').val();
    e.preventDefault();
    pixelCanvas.children().remove();
    for(let i = 1; i <= inputHeight; i++){
        let row = document.createElement('tr');
        pixelCanvas.append(row);
        for(let j = 1; j <= inputWidth; j++){
            const column = document.createElement('td');
            row.append(column);
        }
        
    }
}

createGridBtn.click(makeGrid);


$('body').on('click','td', function (e) {
    //Color Value
    let colorValue = document.getElementById('colorPicker').value;
    if(e.target.style.backgroundColor == ''){
        e.target.style.backgroundColor = colorValue;
    } else {
        e.target.style.backgroundColor !== 'transparent' ? e.target.style.backgroundColor = 'transparent' : e.target.style.backgroundColor = colorValue;
    }

});

//Reset Grid Color
const reset = document.getElementById('reset');
reset.addEventListener('click', function(e) {
    e.preventDefault();
    const td = document.getElementsByTagName('td');
    $(td).removeAttr('style');
});


//Pure Js Code
// function makeGrid (e){
//     e.preventDefault();
//     //Table grid creation
//     //Height
//     var height = document.getElementById('inputHeight').value;
        
//     //Width
//     var width = document.getElementById('inputWidth').value;

//     //pixelCanvas
//     var table = document.getElementById('pixelCanvas');
//     table.innerHTML = '';


//     for(let i = 1; i <= height; i++){
//         var tr = document.createElement('tr');
//         for(let j = 1; j <= width; j++){
//             var td = document.createElement('td');
//             tr.appendChild(document.createTextNode(''));
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);    
//     }
    
// }
// //Make Grid
// const submitButton = document.getElementById('submitButton');

// submitButton.addEventListener('click', makeGrid);



});