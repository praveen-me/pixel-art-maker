
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()




function makeGrid (e){
    e.preventDefault();
    //Table grid creation
    //Height
    var height = document.getElementById('inputHeight').value;
        
    //Width
    var width = document.getElementById('inputWidth').value;

    //pixelCanvas
    var table = document.getElementById('pixelCanvas');
    table.innerHTML = '';


    for(let i = 1; i <= height; i++){
        var tr = document.createElement('tr');
        for(let j = 1; j <= width; j++){
            var td = document.createElement('td');
            tr.appendChild(document.createTextNode(''));
            tr.appendChild(td);
        }
        table.appendChild(tr);    
    }
    
}

var submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', makeGrid);

//Using jQuery to set color
// $('body').on('click', 'td', function(e){
//     var colorValue = $('#colorPicker').val();
//     e.target.style.backgroundColor = colorValue;
// })

//

// var body = document.querySelector('body');
// var td = document.getElementsByTagName('td');

$('body').on('click', 'td', function(e){
	var colorValue = document.getElementById('colorPicker').value;
  	e.target.style.backgroundColor = colorValue;
});



