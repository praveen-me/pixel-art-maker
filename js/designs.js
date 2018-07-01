const submitBtn = $('#submitBtn');

const canvas = $('#canvas');

var currentColor = '#fff';
var lastColor = '#fff';
var currentTool = 'pencil';
var mouseDown = false;

function initCurrentColorAndTool() {
	// Setting default value for current color box
	$('.current-color-box').css('background-color', currentColor);

	//Setting default value for current tool box
	$('.current-tool').append(`<i class="fa fa-${currentTool} fa-2x"></i>`);
}

function addingColorToPixels () {
	//Adding Color Functioning to Pixel	
	$('.pixel-box').click(function (){
		if(currentTool === 'eyedropper') {
			currentColor = $(this).css('background-color');
			$('.current-color-box').css('background-color', currentColor);
		} else if (currentTool === 'square') {
			$('.pixel-box').css('background-color', currentColor);
		} else {
			$(this).css('background-color', currentColor);
			console.log(`Current Tool is ${currentTool}.`);
		}
	});

	
	$('.pixel-box').hover(function() {
		if(mouseDown){
			$(this).css('background-color', currentColor);
		}
	});
}


function mousePress() {
	//For Mouse Press color effect
	$(document).mousedown(() => {
		mouseDown = true;
	});

	$(document).mouseup(() => {
		mouseDown = false;
	});
}


//Grid Information 
function gridInfo() {
	if($(window).width() >= 1184) {
		$('.grid-info').empty();
		$('.grid-info').append('The grid size should be 30 X 30.');
		
	} else if (($(window).width() >= 978) && ($(window).width() <= 1183)) {
		$('.grid-info').empty();
		$('.grid-info').append('The grid size should be 20 X 20.');
	} else if (($(window).width() >= 584) && ($(window).width() <= 977)) {
		$('.grid-info').empty();
		$('.grid-info').append('The grid size should be 15 X 15.');
	} else if ($(window).width() <= 583) {
		$('.grid-info').empty();
		$('.grid-info').append('The grid size should be 10 X 10.');
	}
}

function warning () {
	$('.warning').empty();
	$('.warning').append()
	$('.warning').css('display', 'block');
	$('.warning').addClass('animated fadeInLeftBig ');
}
function closeWarning () {
	$('.warning-close').click(function () {
		$('.warning').css('display', 'none');
	});
}

// Creating Dynamic Grid Function
const createGrid = (e) => {
	const height = $('#height').val();

	const width = $('#width').val();

	//Setting Alert for different width
	if($(window).width() >= 1184) {
		if((height > 30) || (width > 30) || (height > 30 && width > 30)) {
			warning();	
			
			$('.warning').append(`<p>The grid should be 30 X 30. Your values are ${height} X ${width}.</p> <button class="warning-close">X</button>`);
			
			closeWarning();
		}else {
			grid();
		}
	} else if (($(window).width() >= 978) && ($(window).width() <= 1183)) {
		if((height > 20) || (width > 20) || (height >20 && width > 20)) {
			warning();
			
			$('.warning').append(`<p>The grid should be 20 X 20. Your values are ${height} X ${width}.</p> <button class="warning-close">X</button>`);
			
			closeWarning();
		}else {
			grid();
		}
	} else if (($(window).width() >= 584) && ($(window).width() <= 977)) {
		if((height > 15) || (width > 15) || (height >15 && width > 15)) {
			warning();

			$('.warning').append(`<p>The grid should be 15 X 15. Your values are ${height} X ${width}.</p> <button class="warning-close">X</button>`);
			
			closeWarning();
		}else {
			grid();
		}
	} else if ($(window).width() <= 583) {
		if((height > 10) || (width > 10) || (height > 10 && width > 10)) {
			warning();

			$('.warning').append(`<p>The grid should be 10 X 10. Your values are ${height} X ${width}.</p> <button class="warning-close">X</button>`);
			
			closeWarning();
		}else {
			grid();
		}
	}

	// if((height > 20) || (width > 30) && ((height > 20) || (width > 30))){
	// 	$('.warning-text').empty();
	// 	$('.warning-text').append(`The Grid should be 20X30. But Your grid is ${height}X${width}.`).css('color', 'red');
	// 	$('.warning').css({'display': 'block', 'left' : '25%'}).addClass('animated bounceInLeft');

	// 	$('.close').click(function(){
	// 		$('.warning').css({'display': 'none'});
	// 	});
	// } else {
		
		// verticalLine.children().remove();

		//Rular Horizontal Problem 

		// horizontalLine.children().remove();

		// for (let k = 1; k <= width; k++){
		// 	let columnNumber = ` ${k}`;
		// 	horizontalLine.append(columnNumber);
		// }

		


		function grid () {
			canvas.children().remove();
			const docFrag = document.createDocumentFragment();
			for(let i = 1; i <= height; i++){

				// let verticalLineElement = `<p class="vertical-line-element">${i}</p>`;
				
				let row = document.createElement('div');
				// verticalLine.append(verticalLineElement);
				
				$(row).addClass('flex-box-0');
				// canvas.append(row);
				docFrag.appendChild(row);
				
				for(let j = 1; j <= width; j++){
					let column = document.createElement('div');
					
					$(column).addClass('pixel-box').css('background-color', '#dbdbdb');
					row.append(column);
				}
			// }
			console.log(docFrag);
			canvas.append(docFrag);
			}
	
		}

	mousePress();

	addingColorToPixels();
	
}

//Add color box functions like click on a particular color box and grab it's color and other functionalities
function takeColorFromColorBox() {
	$('.color-box').click(function () {
		var colorClicked = $(this).css('background-color');
		currentColor = colorClicked;
		lastColor = currentColor;

		$('.current-color-box').css('background-color', currentColor);

		console.log(`Color choosen was ${colorClicked}`);
	});
}

function toolFunctionalities() {
	//Add tools function
	$('.tool-box').click(function () {
		mouseDown = false;
		currentTool = $(this).get(0).id;

		console.log(`Tool choosen was : ${currentTool}`);

		$('.current-tool').empty();
		$('.current-tool').append(`<i class="fa fa-${currentTool} fa-2x" aria-hidden="true"></i>`);

		if(currentTool === 'eraser') {
			currentColor = '#dbdbdb';
			$('.current-color-box').css('backgrounc-color', currentColor);
			$('.tool-info').empty();
			$('.tool-info').append('<p class="margin-5">Click and continue to erase especific pixel box.</p>');
		} else if(currentTool === 'pencil') {
			currentTool = lastColor;
			$('.current-color--box').css('background-color',lastColor);
		} else if(currentTool === 'trash') {
			$('.pixel-box').css('background-color', '#d8d8d8');
		} else if(currentTool === 'paint-brush') {
			mouseDown = true;
		}
	});
}


$(document).ready(function () {

	initCurrentColorAndTool();

	gridInfo();

	submitBtn.click(createGrid);

	takeColorFromColorBox();

	toolFunctionalities();

});

function download() {
	var pixelBox = $('#canvas');
	
		html2canvas(pixelBox, {
			onrendered : (canvas) => {
				var dataURL = canvas.toDataURL('image/png');
				var button = document.getElementById('download');
				button.href = dataURL;
			} 
		});
	}
	
document.getElementById('download').addEventListener('click', download);



// //Pure Js Code
// // function makeGrid (e){
// //     e.preventDefault();
// //     //Table grid creation
// //     //Height
// //     var height = document.getElementById('inputHeight').value;
        
// //     //Width
// //     var width = document.getElementById('inputWidth').value;

// //     //pixelCanvas
// //     var table = document.getElementById('pixelCanvas');
// //     table.innerHTML = '';


// //     for(let i = 1; i <= height; i++){
// //         var tr = document.createElement('tr');
// //         for(let j = 1; j <= width; j++){
// //             var td = document.createElement('td');
// //             tr.appendChild(document.createTextNode(''));
// //             tr.appendChild(td);
// //         }
// //         table.appendChild(tr);    
// //     }
    
// // }




// });